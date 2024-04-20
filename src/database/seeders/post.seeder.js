import Post from "../../entities/posts/Post.model.js";
import mongoose from "mongoose";
import { dbConnection } from "../db.js";
import { faker } from "@faker-js/faker";


const fakePosts = []
export const fakePostSeeder = async (numberOfUsers) => {
    try {
        await dbConnection();
        await Post.deleteMany({});
        let fakePost;
        let numId
        for (let i = 0; i < (numberOfUsers); i++) {
            numId = (`${i + 4}`).padStart(24, '0')
            fakePost = new Post({
                text: faker.lorem.text(),
                authorId: new mongoose.Types.ObjectId(numId),
                authorName: "NormalUser"
            });
            fakePosts.push(fakePost);
        }
        // Insert the generated users into the database
        await Post.insertMany(fakePosts);
        console.log(`Successfully seeded a post for each user.`);
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Disconnect from the database
        mongoose.disconnect();
    }
};