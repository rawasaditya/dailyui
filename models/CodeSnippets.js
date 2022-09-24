import { Schema, model, models } from "mongoose";

const codeSnippets = new Schema(
  {
    title: String,
    tags: {
      type: [String],
      required: [true, "Please provide atleast one tag"],
    },
    hash: {
      type: String,
      required: [true, "hash is required"],
    },
    codepenuser: {
      type: String,
      required: [true, "Codepen user is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    thumbnail: {
      type: String,
      required: [true, "thumbnail is required"],
    },
    type: {
      type: String,
      required: [true, "type is required"],
    },
    draft: {
      type: Boolean,
      enum: {
        values: [true, false],
        message: "{VALUE} is not supported for draft",
      },
    },
  },
  { timestamps: true }
);

const CodeSnippets = models.CodeSnippets || model("CodeSnippets", codeSnippets);

export default CodeSnippets;
