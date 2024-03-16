import { Schema, model } from "mongoose";


const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    fisrtName: {
        type: String,
        default: ""
    },
    lastName: {
        type: String,
        default: ""
    },
    about: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["user", "admin", "superadmin"],
        default: "user"
    },
    following: [{
        type: String,
        ref: "User",
        default: []
    }],
    followers: [{
        type: String,
        ref: "User",
        default: []
    }],
    followRequests: [{
        type: String,
        ref: "User",
        default: []
    }],
    visibility: {
        type: String,
        enum: ["public", "private"],
        default: "public"
    },
    savedPosts: [{
        type: String,
        ref: "Post",
        default: []
    }],
    repostedPosts: [{
        type: String,
        ref: "Post",
        default: []
    }],
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

const User = model("User", UserSchema)

export default User