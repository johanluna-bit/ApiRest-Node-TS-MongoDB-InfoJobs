import { Schema, Types, model, Model } from "mongoose";
import { IJob } from "../interfaces/job.interfaces";


const JobSchema  = new Schema<IJob>(
    {
        title: {
            type: String,
            required: true,
          },
        description: {
            type: String,
            required: true,
            default: null,
          },
        budged: {
            type: Number,
            required: true
        }, 
        publicationDate:{
            type: Date,
            default: Date.now
        },
        state:{
            type: Boolean,
            default: true
        }
    },
);

const JobModel = model("job", JobSchema);
export default JobModel;