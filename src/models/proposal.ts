import mongoose, { Schema, Types, model, Model } from "mongoose";
import { IProposal } from "../interfaces/proposal.interfaces";


const ProposalSchema  = new Schema(
    {
        price: {
            type: Number,
            required: true,
          },
        description: {
            type: String,
            required: true,
          },
        deliveryTime:{
            type: Date,
            default: Date.now
        },
        item: {
          type:mongoose.Types.ObjectId,
          ref: 'item',
          require: true,
        },
        job: {
          type:mongoose.Types.ObjectId,
          ref: 'job',
          require: true,
        }
    },
  );

const ProposalModel = model("proposal", ProposalSchema);
export default ProposalModel;