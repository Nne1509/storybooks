const mongoose = require("mongoose");

const storybookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please your story a title"],
    },
    author: {
      type: String,
      required: [true, "Please state the name of the author"],
    },
    genre: {
      type: String,
      required: [true, "Please state the genre of the story"],
    },
    synopsis: {
      type: String,
      required: [true, "Please summarise your story"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("storybook", storybookSchema);
