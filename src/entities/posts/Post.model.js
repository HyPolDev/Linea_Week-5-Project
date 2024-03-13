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
            type: String,
            ref: "User",
            default: []
        }],
        comments: [{
            type: String,
            ref: "Post",
            default: []
        }],
        comentOf: {
            type: String,
            ref: "Post"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Post = model("Post", PostSchema)
export default Post 