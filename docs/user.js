////////// post => /auth/login

/**
* @swagger
* /auth/login:
 *   post:
 *     tags:
 *       - User
 *     summary: Logins a user
 *     description: Logins a user and sign a JWT token with the user.
 *     parameters:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: test@test.com.
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: 1234567891
 *     responses:
 *       200:
 *         description: A single user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       token:
 *                         type: string
 *                         description: The JWT API generated which signed to the user in the JSON response (expires in 1h).
 *                         example: eyJhbGciOiJIUzI1NiIsasdfcCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ1c2VySWQiOiI2MGFjMzhjZTQ5Y2Q0NzJmMzg1OTA5ZDIiLCJpYXQiOjE2MjE5MDk4NjQsImV4cCI6MTYyMTkxMzQ2NH0.FzJFnW9HM0Q_IlBxXRIJAkz4Bg-Eo-b4jqy5y5YRzdU
 *                       userId:
 *                         type: string
 *                         description: The Id of the user logged in.
 *                         example: 60ac38ce49cd472f385909d2.
 */

/////////////put =>/auth/signup

/**
* @swagger
* /auth/signup:
 *   put:
 *     tags:
 *       - User
 *     summary: Used to create a user.
 *     description: Used to create a user. The JWT is sent in the authorization header to ensure that the user is logged in and he owns that post.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: test@test.com.
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: Walid Wagdy.
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: 1234567891.
 *     responses:
 *       201:
 *         description: A single user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       message:
 *                         type: string
 *                         description: A success message that user is created.
 *                         example: User created.
 *                       userId:
 *                         type: string
 *                         description: The Id of the user logged in.
 *                         example: 60ac38ce49cd472f385909d2.
 */



