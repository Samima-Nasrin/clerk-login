import { Router } from "express";
import { authCallback } from "../controller/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { clerkClient } from "@clerk/express";

const router = Router();

router.post("/callback", protectRoute, authCallback);


router.get("/google-token", protectRoute, async (req, res) => {
	try {
		const { userId } = req.auth;
		const tokens = await clerkClient.users.getUserOauthAccessToken(userId, "oauth_google");
		res.json(tokens);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: err.message });
	}
});


export default router;
