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
          },
        budged: {
            type: Number,
            required: true
        }, 
        plublicationDate:{
            type: Date,
            default: Date.now
        },
        state:{
            type: Boolean,
            default: true
        }
        },
        { timestamps: true,
            versionKey: false,
        });

const JobModel = model("jobs", JobSchema);
export default JobModel;