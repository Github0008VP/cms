const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    techStack: {
      type: [String],
      required: true,
    },

    githubLink: {
      type: String,
    },

    link: {
      type: String,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  { timestamps: true },
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
