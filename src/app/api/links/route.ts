// app/api/links/route.ts

import { connect } from "@/dbConfig/dbConfig";
import Link from "@/models/linksModel";
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
