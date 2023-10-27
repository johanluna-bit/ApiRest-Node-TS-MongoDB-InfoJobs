import mongoose, { Schema, Types, model, Model } from "mongoose";
import { IUser } from "../interfaces/user.interfaces";

const ItemSchema  = new Schema<IUser>(
{
    name: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      typeUser: {
        type: String,
        enum: ['freelancer', 'client'],
        default: 'client',
      },
      // job: [{
      //   type:mongoose.Types.ObjectId,
      //   ref: 'jobs',
      //   require: true,
      // }]
    },
    { timestamps: true,
        versionKey: false,
    });

const ItemModel = model("item", ItemSchema);
export default ItemModel;

