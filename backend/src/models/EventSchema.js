// src/models/EventSchema.js
const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Event title is required"],
      trim: true,
      maxlength: 200,
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    // scheduled start (store as Date; using local timezone values is fine for demo)
    start: {
      type: Date,
      required: [true, "Start date/time is required"],
    },
    // optional end time
    end: {
      type: Date,
    },
    // all-day event flag
    allDay: {
      type: Boolean,
      default: false,
    },
    // optional reminder timestamp (null if not set)
    remindAt: {
      type: Date,
      default: null,
    },
    // label/category (e.g. "Work", "Personal")
    label: {
      type: String,
      trim: true,
      default: "",
    },
    // optional color for UI
    color: {
      type: String,
      trim: true,
      default: "",
    },
    // optional field for recurrence rule (store as JSON/string if needed later)
    recurringRule: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },
    // an optional parent event id for exceptions (if you later implement recurrence exceptions)
    parentEventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      default: null,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

// index to quickly query events in a date range
EventSchema.index({ start: 1, end: 1 });

module.exports = mongoose.model("Event", EventSchema);
