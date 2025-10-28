import { clerkClient } from "@clerk/express";
import { User } from "../models/user.model.js";

export const authCallback = async (req, res, next) => {
	try {
		const { userId } = req.auth;

		if (!userId) {
			return res.status(401).json({ message: "Unauthorized - no user found" });
		}

		// fetch user from Clerk
		const clerkUser = await clerkClient.users.getUser(userId);
		const { id, firstName, lastName, imageUrl } = clerkUser;

		let user = await User.findOne({ clerkId: id });

		if (!user) {
			user = await User.create({
				clerkId: id,
				fullName: `${firstName || ""} ${lastName || ""}`.trim(),
				imageUrl,
			});
		}

		res.status(200).json({ success: true, user });
	} catch (error) {
		console.error("Error in auth callback:", error);
		next(error);
	}
};
