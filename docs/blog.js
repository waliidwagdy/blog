/////////// get => /blog/posts

/**
 * @swagger
 * /blog/posts:
 *   get:
 *     tags:
 *       - Blog
 *     summary: Retrieve all posts from DB
 *     description: Retrieve all posts from database. Used to populate the blog of a user. The JWT token is sent in the authorization header to ensure that he is logged in.
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: String JWT token used to authenticate and authorize user's operations.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of posts.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 posts:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       comments:
 *                         type: array
 *                         description: The comment ID on the post.
 *                         example: 60ac38f449cd472f385909d3
 *                       _id:
 *                         type: string
 *                         description: The ID of the post.
 *                         example: 60ac38f897cd472f38590eee
 *                       title:
 *                         type: string
 *                         description: The title of the post.
 *                         example: How to learn fast.
 *                       content:
 *                         type: string
 *                         description: The content of the post.
 *                         example: Take notes by hand.
 *                       imageUrl:
 *                         type: string
 *                         description: The image of the post.
 *                         example: Lion.jpg.
 *                       creator:
 *                         type: string
 *                         description: The Id of the user created the post.
 *                         example: 60ac38ce49cd472f385909d2.
 *                       createdAt:
 *                         type: string
 *                         description: The date of the post created at.
 *                         example: 2021-05-24T23:38:28.922Z.
 *                       updatedAt:
 *                         type: string
 *                         description: The date of the post updated at.
 *                         example: 2021-05-24T23:38:28.922Z.
*/

//////////// get => /blog/post/:postId

/**
* @swagger
* /blog/{postId}:
 *   get:
 *     tags:
 *       - Blog
 *     summary: Retrieve a single post from DB
 *     description: Retrieve a post from database. Used to view a single post that user wants to open. The JWT token is sent in the authorization header to ensure that he is logged in.
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         description: Numeric ID of the post to retrieve.
 *         schema:
 *           type: mongoose.ObjectId
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: String JWT token used to authenticate and authorize user's operations.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single post.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 post:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       comments:
 *                         type: array
 *                         description: The comment ID on the post.
 *                         example: 60ac38f449cd472f385909d3
 *                       _id:
 *                         type: string
 *                         description: The ID of the post.
 *                         example: 60ac38f897cd472f38590eee
 *                       title:
 *                         type: string
 *                         description: The title of the post.
 *                         example: How to learn fast.
 *                       content:
 *                         type: string
 *                         description: The content of the post.
 *                         example: Take notes by hand.
 *                       imageUrl:
 *                         type: string
 *                         description: The image of the post.
 *                         example: Lion.jpg.
 *                       creator:
 *                         type: string
 *                         description: The Id of the user created the post.
 *                         example: 60ac38ce49cd472f385909d2.
 *                       createdAt:
 *                         type: string
 *                         description: The date of the post created at.
 *                         example: 2021-05-24T23:38:28.922Z.
 *                       updatedAt:
 *                         type: string
 *                         description: The date of the post updated at.
 *                         example: 2021-05-24T23:38:28.922Z.
 */

////////// post => /blog/post

/**
* @swagger
* /blog/post:
 *   post:
 *     tags:
 *       - Blog
 *     summary: Creates a post
 *     description: Creates post related to a user.
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: String JWT token used to authenticate and authorize user's operations.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The post's title.
 *                 example: How to learn fast
 *               content:
 *                 type: string
 *                 description: The post's content.
 *                 example: Take notes by hand.
 *               image:
 *                 type: string
 *                 description: The post's image.
 *                 example: Lion.png
 *     responses:
 *       201:
 *         description: A single post.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 posts:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       comments:
 *                         type: array
 *                         description: The comment ID on the post.
 *                         example: 60ac38f449cd472f385909d3
 *                       _id:
 *                         type: string
 *                         description: The ID of the post.
 *                         example: 60ac38f897cd472f38590eee
 *                       title:
 *                         type: string
 *                         description: The title of the post.
 *                         example: How to learn fast.
 *                       content:
 *                         type: string
 *                         description: The content of the post.
 *                         example: Take notes by hand.
 *                       imageUrl:
 *                         type: string
 *                         description: The image of the post.
 *                         example: Lion.jpg.
 *                       creator:
 *                         type: string
 *                         description: The Id of the user created the post.
 *                         example: 60ac38ce49cd472f385909d2.
 *                       createdAt:
 *                         type: string
 *                         description: The date of the post created at.
 *                         example: 2021-05-24T23:38:28.922Z.
 *                       updatedAt:
 *                         type: string
 *                         description: The date of the post updated at.
 *                         example: 2021-05-24T23:38:28.922Z.
 *                 creator:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The post's creator ID.
 *                         example: 60ac38f449cd472f385909d3
 *                       name:
 *                         type: string
 *                         description: The post's creator name.
 *                         example: Walid Wagdy.
 */
/////////////put =>/blog/post/:postId

/**
* @swagger
* /blog/post/{postId}:
 *   put:
 *     tags:
 *       - Blog
 *     summary: Used to update a post
 *     description: Used to update a post related to a user. The JWT is sent in the authorization header to ensure that the user is logged in and he owns that post.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The post's title.
 *                 example: How to learn fast
 *               content:
 *                 type: string
 *                 description: The post's content.
 *                 example: Take notes by hand.
 *               image:
 *                 type: string
 *                 description: The post's image.
 *                 example: Lion.png
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: String JWT token used to authenticate and authorize user's operations.
 *         schema:
 *           type: string
 *       - in: path
 *         name: postId
 *         required: true
 *         description: Numeric ID of the post to update.
 *         schema:
 *           type: mongoose.ObjectId
 *     responses:
 *       200:
 *         description: A single post.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 posts:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       comments:
 *                         type: array
 *                         description: The comment ID on the post.
 *                         example: 60ac38f449cd472f385909d3
 *                       _id:
 *                         type: string
 *                         description: The ID of the post.
 *                         example: 60ac38f897cd472f38590eee
 *                       title:
 *                         type: string
 *                         description: The title of the post.
 *                         example: How to learn fast.
 *                       content:
 *                         type: string
 *                         description: The content of the post.
 *                         example: Take notes by hand.
 *                       imageUrl:
 *                         type: string
 *                         description: The image of the post.
 *                         example: Lion.jpg.
 *                       creator:
 *                         type: string
 *                         description: The Id of the user created the post.
 *                         example: 60ac38ce49cd472f385909d2.
 *                       createdAt:
 *                         type: string
 *                         description: The date of the post created at.
 *                         example: 2021-05-24T23:38:28.922Z.
 *                       updatedAt:
 *                         type: string
 *                         description: The date of the post updated at.
 *                         example: 2021-05-24T23:38:28.922Z.
 *                 creator:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The post's creator ID.
 *                         example: 60ac38f449cd472f385909d3
 *                       name:
 *                         type: string
 *                         description: The post's creator name.
 *                         example: Walid Wagdy.
 */

////////delete => /blog/post/:postId

/**
* @swagger
* /blog/post/{postId}:
 *   delete:
 *     tags:
 *       - Blog
 *     summary: Used to delete a post
 *     description: Used to delete a post related to a user. The JWT is sent in the authorization header to ensure that the user is logged in and he owns that post. This action deletes the comments related to the post and posts array in the user model.
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: String JWT token used to authenticate and authorize user's operations.
 *         schema:
 *           type: string
 *       - in: path
 *         name: postId
 *         required: true
 *         description: Numeric ID of the post to delete.
 *         schema:
 *           type: mongoose.ObjectId
 *     responses:
 *       200:
 *         description: A single post.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: JSON response with success message.
 *                   example: Post deleted.
 *
 */

