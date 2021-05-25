/////////Comment model

/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         content:
 *           type: string
 *         post:
 *           type: string
 *         creator:
 *           type: string
 *         createdAt:
 *           type: string
 *         UpdatedAt:
 *           type: string
 */

/////////Post model

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         title:
 *           type: string
 *         content:
 *           type: string
 *         imageUrl:
 *           type: string
 *         creator:
 *           type: string
 *         comments:
 *           type: array
 *         createdAt:
 *           type: string
 *         UpdatedAt:
 *           type: string
 */

/////////User model

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         name:
 *           type: string
 *         posts:
 *           type: array
 *         comments:
 *           type: array
 *         createdAt:
 *           type: string
 *         UpdatedAt:
 *           type: string
 */