/////////// get => /comments

/**
 * @swagger
 * /comments:
 *   get:
 *     tags:
 *       - Comment
 *     summary: Retrieve all comments from DB
 *     description: Retrieve all comments from database. Used to populate a post in the blog. The JWT token is sent in the authorization header to ensure that he is logged in.
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: String JWT token used to authenticate and authorize user's operations.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of comments.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 comments:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The ID of the comment.
 *                         example: 60ac38f897cd472f38590eee
 *                       content:
 *                         type: string
 *                         description: The content of the comment.
 *                         example: Take notes by hand.
 *                       post:
 *                         type: string
 *                         description: The ID of the post that comment belongs to.
 *                         example: 60ac38f897cd472f38590eee.
 *                       creator:
 *                         type: string
 *                         description: The Id of the user created the comment.
 *                         example: 60ac38ce49cd472f385909d2.
 *                       createdAt:
 *                         type: string
 *                         description: The date of the comment created at.
 *                         example: 2021-05-24T23:38:28.922Z.
 *                       updatedAt:
 *                         type: string
 *                         description: The date of the comment updated at.
 *                         example: 2021-05-24T23:38:28.922Z.
*/


//////////// get => /comment/:commentId

/**
* @swagger
* /comment/{commentId}:
 *   get:
 *     tags:
 *       - Comment
 *     summary: Retrieve a single comment from DB
 *     description: Retrieve a comment from database. Used to view a single comment on a post that user wants to open. The JWT token is sent in the authorization header to ensure that he is logged in.
 *     parameters:
 *       - in: path
 *         name: commentId
 *         required: true
 *         description: Numeric ID of the comment to retrieve.
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
 *         description: A single comment.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 comment:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The ID of the comment.
 *                         example: 60ac38f897cd472f38590eee
 *                       content:
 *                         type: string
 *                         description: The content of the comment.
 *                         example: Take notes by hand.
 *                       post:
 *                         type: string
 *                         description: The ID of the post that comment belongs to.
 *                         example: 60ac38f897cd472f38590eee.
 *                       creator:
 *                         type: string
 *                         description: The Id of the user created the comment.
 *                         example: 60ac38ce49cd472f385909d2.
 *                       createdAt:
 *                         type: string
 *                         description: The date of the comment created at.
 *                         example: 2021-05-24T23:38:28.922Z.
 *                       updatedAt:
 *                         type: string
 *                         description: The date of the comment updated at.
 *                         example: 2021-05-24T23:38:28.922Z.
 */
////////// post => /comment

/**
* @swagger
* /comment:
 *   post:
 *     tags:
 *       - Comment
 *     summary: Creates a comment
 *     description: Creates post related to a post and commented user.
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
 *               content:
 *                 type: string
 *                 description: The comment's content.
 *                 example: That's awesome.
 *               postId:
 *                 type: string
 *                 description: The ID of the post will be commented on.
 *                 example: 60ac38f449cd472f385909d3
 *     responses:
 *       201:
 *         description: A single comment.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 comment:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The ID of the comment.
 *                         example: 60ac38f897cd472f38590eee
 *                       content:
 *                         type: string
 *                         description: The content of the comment.
 *                         example: Take notes by hand.
 *                       post:
 *                         type: string
 *                         description: The ID of the post that comment belongs to.
 *                         example: 60ac38f897cd472f38590eee.
 *                       creator:
 *                         type: string
 *                         description: The Id of the user created the comment.
 *                         example: 60ac38ce49cd472f385909d2.
 *                       createdAt:
 *                         type: string
 *                         description: The date of the comment created at.
 *                         example: 2021-05-24T23:38:28.922Z.
 *                       updatedAt:
 *                         type: string
 *                         description: The date of the comment updated at.
 *                         example: 2021-05-24T23:38:28.922Z.
 */

/////////////put =>/comment/:commentId

/**
* @swagger
* /comment/{commentId}:
 *   put:
 *     tags:
 *       - Comment
 *     summary: Used to update a comment
 *     description: Used to update a comment. The JWT is sent in the authorization header to ensure that the user is logged in and he owns that post.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: The content's content.
 *                 example: That's awesome.
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: String JWT token used to authenticate and authorize user's operations.
 *         schema:
 *           type: string
 *       - in: path
 *         name: commentId
 *         required: true
 *         description: Numeric ID of the comment to update.
 *         schema:
 *           type: mongoose.ObjectId
 *     responses:
 *       200:
 *         description: A single comment.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 comment:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The ID of the comment.
 *                         example: 60ac38f897cd472f38590eee
 *                       content:
 *                         type: string
 *                         description: The content of the comment.
 *                         example: It's not cool.
 *                       post:
 *                         type: string
 *                         description: The ID of the post that comment belongs to.
 *                         example: 60ac38f897cd472f38590eee.
 *                       creator:
 *                         type: string
 *                         description: The Id of the user created the comment.
 *                         example: 60ac38ce49cd472f385909d2.
 *                       createdAt:
 *                         type: string
 *                         description: The date of the comment created at.
 *                         example: 2021-05-24T23:38:28.922Z.
 *                       updatedAt:
 *                         type: string
 *                         description: The date of the comment updated at.
 *                         example: 2021-05-24T23:38:28.922Z.
 */

////////delete => /comment/:commentId

/**
* @swagger
* /comment/{commentId}:
 *   delete:
 *     tags:
 *       - Comment
 *     summary: Used to delete a comment
 *     description: Used to delete a comment related to a user. The JWT is sent in the authorization header to ensure that the user is logged in and he owns that post. This action deletes the comments related to the post and posts array in the user model.
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: String JWT token used to authenticate and authorize user's operations.
 *         schema:
 *           type: string
 *       - in: path
 *         name: commentId
 *         required: true
 *         description: Numeric ID of the comment to delete.
 *         schema:
 *           type: mongoose.ObjectId
 *     responses:
 *       200:
 *         description: A single comment.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: JSON response with success message.
 *                   example: Comment deleted.
 *
 */
//////////// Comment Model




