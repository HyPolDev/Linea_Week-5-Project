import { Schema, model } from "mongoose";

const PostSchema = new Schema(
    {
        text: {
            type: String,
            required: true,
        },
        authorId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        likes: [{
            type: Schema.Types.ObjectId,
            ref: "User",
            default: []
        }],
        comments: [{
            text: String,
            required: true,
        }]
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Post = model("Post", PostSchema)
export default Post 