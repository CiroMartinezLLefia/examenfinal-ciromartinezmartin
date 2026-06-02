import express from "express"
import { get_events } from "../controllers/controller.js"

const router = express.Router()

router.get('/events', get_events)

export default router