import { ALL_USERS } from "@/constants";

export default function handler(req, res) {
  const { phone } = req.query;

  // Find the user with the provided contact number
  const user = ALL_USERS.find((u) => u.phone === phone);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
}
