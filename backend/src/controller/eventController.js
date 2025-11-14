// src/controllers/eventController.js
const mongoose = require("mongoose");
const Event = require("../models/EventSchema");

/**
 * List events.
 * Optional query params:
 *  - from (ISO string)
 *  - to   (ISO string)
 */
async function listEvents(req, res) {
  try {
    const { from, to } = req.query;

    if (from || to) {
      const q = [];
      if (from) {
        const fromDate = new Date(from);
        if (isNaN(fromDate)) return res.status(400).json({ error: "Invalid 'from' date" });
        q.push({ $or: [{ end: { $gte: fromDate } }, { end: null, start: { $gte: fromDate } }] });
      }
      if (to) {
        const toDate = new Date(to);
        if (isNaN(toDate)) return res.status(400).json({ error: "Invalid 'to' date" });
        q.push({ start: { $lte: toDate } });
      }

      const filter = q.length ? { $and: q } : {};
      const events = await Event.find(filter).sort({ start: 1 }).lean();
      return res.json(events);
    }

    const events = await Event.find({}).sort({ start: 1 }).lean();
    return res.json(events);
  } catch (err) {
    console.error("listEvents error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}

/**
 * Get single event by id
 */
async function getEvent(req, res) {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ error: "Invalid event id" });

    const event = await Event.findById(id).lean();
    if (!event) return res.status(404).json({ error: "Event not found" });
    return res.json(event);
  } catch (err) {
    console.error("getEvent error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}

/**
 * Create a new event
 * Body: { title, description?, start, end?, allDay?, remindAt?, label?, color?, recurringRule?, parentEventId? }
 */
async function createEvent(req, res) {
  try {
    const { title, description, start, end, allDay, remindAt, label, color, recurringRule, parentEventId } = req.body;

    if (!title || !start) return res.status(400).json({ error: "title and start are required" });

    const startDate = new Date(start);
    if (isNaN(startDate)) return res.status(400).json({ error: "Invalid start date" });

    let endDate = null;
    if (end) {
      endDate = new Date(end);
      if (isNaN(endDate)) return res.status(400).json({ error: "Invalid end date" });
    }

    const doc = new Event({
      title: title.trim(),
      description: description || "",
      start: startDate,
      end: endDate,
      allDay: !!allDay,
      remindAt: remindAt ? new Date(remindAt) : null,
      label: label || "",
      color: color || "",
      recurringRule: recurringRule || null,
      parentEventId: parentEventId || null,
    });

    const saved = await doc.save();
    return res.status(201).json(saved);
  } catch (err) {
    console.error("createEvent error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}

/**
 * Update an existing event (PUT)
 * Accepts the same fields as create; partial updates allowed.
 */
async function updateEvent(req, res) {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ error: "Invalid event id" });

    const update = {};
    const fields = ["title", "description", "start", "end", "allDay", "remindAt", "label", "color", "recurringRule", "parentEventId"];
    for (const f of fields) {
      if (Object.prototype.hasOwnProperty.call(req.body, f)) {
        if ((f === "start" || f === "end" || f === "remindAt") && req.body[f]) {
          const d = new Date(req.body[f]);
          if (isNaN(d)) return res.status(400).json({ error: `Invalid date for ${f}` });
          update[f] = d;
        } else {
          update[f] = req.body[f];
        }
      }
    }

    const updated = await Event.findByIdAndUpdate(id, update, { new: true, runValidators: true }).lean();
    if (!updated) return res.status(404).json({ error: "Event not found" });
    return res.json(updated);
  } catch (err) {
    console.error("updateEvent error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}

/**
 * Delete an event
 */
async function deleteEvent(req, res) {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ error: "Invalid event id" });

    const deleted = await Event.findByIdAndDelete(id).lean();
    if (!deleted) return res.status(404).json({ error: "Event not found" });
    return res.json({ ok: true });
  } catch (err) {
    console.error("deleteEvent error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}

module.exports = {
  listEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
};
