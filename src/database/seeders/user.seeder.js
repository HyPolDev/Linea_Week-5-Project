import User from "../../entities/users/User.model.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { dbConnection } from "../db.js";
import { faker } from "@faker-js/faker";


const users = []
export const userSeeder = async () => {
    try {
        await dbConnection();
        // Clear existing data
        await User.deleteMany({});

        // Generate and insert fake data
        const superadmin = {
            _id: new mongoose.Types.ObjectId('000000000000000000000001'),
            userName: "superadmin",
            email: "superadmin@superadmin.com",
            password: bcrypt.hashSync('123456', 8),
            role: "superadmin"
        }
        const admin = {
            _id: new mongoose.Types.ObjectId('000000000000000000000002'),
            userName: "AdminUser",
            email: "admin@admin.com",
            password: bcrypt.hashSync('123456', 8),
            role: "admin"
        }
        const user = {
            _id: new mongoose.Types.ObjectId('000000000000000000000003'),
            userName: "NormalUser",
            email: "user@user.com",
            password: bcrypt.hashSync('123456', 8),
            role: "user"
        }

        users.push(superadmin, admin, user);
        // Insert the generated users into the database
        await User.insertMany(users);
        console.log(`Successfully seeded 3 type-users.`);
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Disconnect from the database
        mongoose.disconnect();
    }
};

const fakeUsers = []
export const fakeUserSeeder = async (numberOfUsers) => {
    try {
        await dbConnection();
        let first;
        let last;
        let fakeUser;
        for (let i = 0; i < (numberOfUsers); i++) {
            let numId = (`${i + 4}`).padStart(24, '0')
            first = faker.person.firstName()
            last = faker.person.lastName()
            fakeUser = new User({
                _id: numId,
                userName: `${first}_${last}`,
                email: `${first}.${last}@mail.com`,
                password: bcrypt.hashSync("123456", 8),
                role: "user"
            });
            fakeUsers.push(fakeUser);
        }

        // Insert the generated users into the database
        await User.insertMany(fakeUsers);
        console.log(`Successfully seeded ${numberOfUsers} users.`);
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Disconnect from the database
        mongoose.disconnect();
    }
};

export default fakeUsers

