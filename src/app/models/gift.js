import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const GiftSchema = new Schema(
  {
    quantity: {
      type: String,
      required: [true, "quantity is required"],
    },
    weight: {
      type: String,
      required: [true, "weight is required"],
    },
    service: {
      type: String,
      required: [true, "service type is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    recieverName: {
      type: String,
      required: [true, "reciever's name is required"],
    },
    recieverEmail: {
      type: String,
      required: [true, "reciever's Email is required"],
    },
    recieveraddress: {
      type: String,
      required: [true, "reciever's address  is required"],
    },
    deliverydate: {
      type: String,
      required: [true, "delivery date's is required"],
    },
    senderName: {
      type: String,
      required: [true, "sender Name is required"],
    },
    location: {
      type: String,
      required: [true, "location is required"],
      // required: [true, 'image is required'],
    },
    senderaddress: {
      type: String,
      required: [true, "sender address is required"],
      // required: [true, 'image is required'],
    },
    shipmentDate: {
      type: String,
      required: [true, "shipment Date is required"],
      // required: [true, 'image is required'],
    },
    trackingId: {
      type: String,
      required: [true, "tracking id is required"],
      // required: [true, 'image is required'],
    },
    currentLocation: {
      type: String,
      required: [true, "current location is required"],
    },
    status: {
      type: String,
      required: [true, "status is required"],
    },
    timeinsec: {
      type: String,
      required: [true, "time is required"],
    },
    maploc: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Gift = models.Gift || model("Gift", GiftSchema);

export default Gift;
