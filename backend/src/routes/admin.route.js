import { Router } from "express";
import { checkAdmin, createAlbum, createSong, deleteAlbum, deleteSong } from "../controller/admin.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

//slightly optimized for cleaner code, this will be prioritized for all routers on this file before any other function attached function is ran.
router.use(protectRoute, requireAdmin)

router.get("/check", checkAdmin)

router.post("/songs", createSong);
router.delete("/songs/:id", deleteSong)

router.post("/albums", createAlbum);
router.delete("/albums/:id", deleteAlbum);

export default router;
