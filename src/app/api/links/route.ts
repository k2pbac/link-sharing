// app/api/links/route.ts

import { connect } from "@/lib/dbConfig";
import Link from "@/models/linksModel";
import User from "@/models/usermodel";
import { NextRequest, NextResponse } from "next/server";

connect();
// Calls the connect function to establish a connection to the database.

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { links, id } = reqBody;

    for (let i = 0; i < links.length; i++) {
      const link = new Link({
        platform: links[i].platform,
        url: links[i].url,
        user_id: localStorage.getItem("id"),
      });
      await link.save();
    }

    // Saves the link to the database.

    return NextResponse.json({
      message: "Links added to user",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const URLSearchParams = request.nextUrl.searchParams;
    const email = URLSearchParams.get("email");

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      data: user.links,
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
