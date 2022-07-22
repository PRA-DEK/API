/**
 * @swagger
 * components:
 *  schemas:
 *      Meetings:
 *          type: object
 *          required:
 *              - user_id
 *              - bird_id
 *              - date
 *          properties:
 *              id: 
 *                  type: integer
 *                  description: The auto-generated id of the book
 *              user_id:
 *                  type: integer
 *                  description: The id of the user who take the picture
 *              bird_id:
 *                  type: integer
 *                  description: The id of the bird who is on the picture
 *              date:
 *                  type: string
 *                  description: The date when the picture was taken
 *              place:
 *                  type: string
 *                  description: Where the picture was taken
 *              weather:
 *                  type: string
 *                  description: What the weather was when the picture was taken
 *              quantity:
 *                  type: integer
 *                  description: How many bird there is in the picture
 *              created_at:
 *                  type: string
 *                  description: When the picture was taken
 *              updated_at:
 *                  type: string
 *                  description: When the meeting was updated
 */

/**
 * @swagger
 * tags:
 *  name: Meetings
 *  description: API to manage meetings
 */

var express = require('express');
var router = express.Router();
const meetings = require("../controllers/meetings.controller.js");


/**
 * @swagger
 * /meetings:
 *   post:
 *     summary: Create a meeting
 *     tags: [Meetings]
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *         schema:
 *          $ref: '#/components/schemas/Meetings'
 *     responses:
 *       200:
 *         description: The created meeting.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Meetings'
 */
router.post("/", meetings.create);

module.exports = router;
