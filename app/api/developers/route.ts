import { NextResponse } from "next/server";
import { developers } from "@/app/data";

export async function GET() {
  try {
    return NextResponse.json(
      {
        success: true,
        data: developers,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error: ", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to Fetch Developers Data",
      },
      { status: 500 }
    );
  }
}
