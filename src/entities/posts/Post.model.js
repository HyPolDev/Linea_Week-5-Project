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
        authorName: {
            type: String,
            ref: "User",
            default: ""
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
        commentOf: {
            type: Schema.Types.ObjectId,
            ref: "Post"
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Post = model("Post", PostSchema)
export default Post 