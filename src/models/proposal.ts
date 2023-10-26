import { Schema, Types, model, Model } from "mongoose";
import { IProposal } from "../interfaces/proposal.interfaces";


const ProposalSchema  = new Schema<IProposal>(
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
        },
        { timestamps: true,
            versionKey: false,
        });

const ProposalModel = model("proposals", ProposalSchema);
export default ProposalModel;