import express from "express"
import { get_events } from "../controllers/controller"

const router = express.Router()

router.get('/events', get_events)

export default router