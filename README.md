<summary>
#### Register User
- **Endpoint**: `/register`
- **Body**: 
  - `userName` (string): Username of the user
  - `email` (string): Email of the user
  - `password` (string): Password of the user
- **Description**: Registers a new user. Both username and email must be unique.
</summary>

<summary>
#### User Login
- **Endpoint**: `/login`
- **Body**: 
  - `email` (string): Email of the user
  - `password` (string): Password of the user
- **Description**: Logs in the user using email. Note: Should also support login via username (currently not implemented).
</summary>

<summary>
#### Get Active Users
- **Endpoint**: `/users/`
- **Query Parameters**: 
  - `page` (optional): Page number (default: 0)
  - `pageSize` (optional): Number of users per page (default: 5)
- **Description**: Retrieves active user profiles. If the requester is an admin, retrieves all users. Supports pagination.
</summary>

<summary>
#### Get User Profile
- **Endpoint**: `/users/:userName`
- **Description**: Retrieves user profile by username. Public information is available to all, private information includes username, real name, followers, and following.
</summary>

<summary>
#### Delete User
- **Endpoint**: `DELETE /users/:userName`
- **Description**: Deletes user account. Only accessible by admin or the user themselves.
</summary>

<summary>
#### Update User Profile
- **Endpoint**: `PUT /users/:userName`
- **Description**: Updates user profile. Accessible by admin or the user themselves.
</summary>

<summary>
#### Follow/Unfollow User
- **Endpoint**: `PUT /users/follow/:userName`
- **Description**: Follows or unfollows the specified user.
</summary>

<summary>
#### Get User's Posts
- **Endpoint**: `GET /users/posts/:userName`
- **Description**: Retrieves active posts from the specified user's profile.
</summary>

<summary>
#### Get Active Posts
- **Endpoint**: `/posts/`
- **Query Parameters**: 
  - `page` (optional): Page number (default: 0)
  - `pageSize` (optional): Number of posts per page (default: 5)
- **Description**: Retrieves active posts. If the requester is an admin, retrieves all posts. Supports pagination.
</summary>

<summary>
#### Get Post by ID
- **Endpoint**: `/posts/:postId`
- **Description**: Retrieves post by its ID.
</summary>

<summary>
#### Update Post
- **Endpoint**: `PUT /posts/`
- **Body**: 
  - `id` (string): ID of the post
  - `text` (string): Updated text of the post
- **Description**: Updates post text.
</summary>

<summary>
#### Delete Post
- **Endpoint**: `DELETE /posts/:postId`
- **Description**: Deletes post. Only accessible by admin or the user who created the post.
</summary>

<summary>
#### Create Post
- **Endpoint**: `POST /posts/`
- **Body**: 
  - `text` (string, required): Content of the post
- **Description**: Creates a new post.
</summary>

<summary>
#### Like/Unlike Post
- **Endpoint**: `PUT /posts/like/:postId`
- **Description**: Likes or unlikes the specified post.
</summary>
