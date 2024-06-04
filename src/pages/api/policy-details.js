import { ALL_USERS } from "@/constants";

export default function handler(req, res) {
  const { userId } = req.query;

  // Find the user with the provided userId
  const user = ALL_USERS.find((u) => u.userId === userId);

  if (user) {
    // Return the insurance object for the found user
    res.status(200).json(user.insurance);
  } else {
    res.status(404).json({ error: "User not found" });
  }
}
