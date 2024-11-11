import { Schema, model, models } from "mongoose";

const WhatsAppSchema = new Schema(
  {
    whatsappNumber: {
      type: String,
      required: true,
      unique: [true, "username already exists"],
    },
  },
  { timestamps: true }
);

const WhatsApp = models.WhatsApp || model("WhatsApp", WhatsAppSchema);

export default WhatsApp;
