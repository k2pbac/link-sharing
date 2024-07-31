import { NextRequest } from "next/server";

export const isAuthenticated = async (req: NextRequest) => {
  const currentUser = req.cookies.get("token")?.value;
  if (currentUser) {
    return true;
  } else {
    return false;
  }
};
