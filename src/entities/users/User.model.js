import { Schema, model } from "mongoose";


const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    fisrtName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    about: {
        type: String,
        required: false,
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
        type: Schema.Types.ObjectId,
        ref: "User",
        default: []
    }],
    followers: [{
        type: Schema.Types.ObjectId,
        ref: "User",
        default: []
    }],
    visibility: {
        type: String,
        enum: ["public", "private"],
        default: "public"
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

const User = model("User", UserSchema)

export default User