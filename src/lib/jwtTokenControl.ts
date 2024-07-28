import * as jose from "jose";
import { NextRequest } from "next/server";

const jwtConfig = {
  secret: new TextEncoder().encode(process.env.TOKEN_SECRET),
};

export const isAuthenticated = async (req: NextRequest) => {
  const currentUser = req.cookies.get("token")?.value;
  if (currentUser) {
    return true;
  } else {
    return false;
  }
};
