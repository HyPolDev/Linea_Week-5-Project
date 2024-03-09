import { Schema, model } from "mongoose";

const PostSchema = new Schema({
    text: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)