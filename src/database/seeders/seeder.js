import { userSeeder, fakeUserSeeder } from "./user.seeder.js";
import { fakePostSeeder } from "./post.seeder.js";

async function runSeeders(numberOfUsers) {
    console.log('Running seeders...');

    await userSeeder();
    await fakeUserSeeder(numberOfUsers);
    await fakePostSeeder(numberOfUsers)

    console.log('Seeders completed.');
}

runSeeders(7);