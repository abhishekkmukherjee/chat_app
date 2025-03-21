import jwt from "jsonwebtoken";

export const generateToken = (res, userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });

  // ✅ Fix: Ensure res.cookie is available
  if (!res || typeof res.cookie !== "function") {
    console.error("Error: Response object (res) is missing or incorrect.");
    return token; // Return token even if cookie setting fails
  }

  res.cookie("jwt", token, {  
    httpOnly: true,  // Prevents XSS attacks
    secure: process.env.NODE_ENV === "production", // Only secure in production
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
  });

  return token;
};
