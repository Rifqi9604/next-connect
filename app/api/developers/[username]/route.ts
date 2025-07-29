import { developers } from "@/app/data";
import { NextRequest, NextResponse } from "next/server";

interface UrlUsernameParams {
  params: {
    username: string;
  };
}

export async function GET(req: NextRequest, { params }: UrlUsernameParams) {
  try {
    const developer = developers.find(
      (dev) => dev.username === params.username // rifqi === rifqi => {id:.., username: rifqi, ..., projects: []} => username: 'rifqi'
    ); // 1 data khusus

    if (!developer) {
      return NextResponse.json(
        {
          success: false,
          message: "Developer Not Found!",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: developer,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: `Error: ${error.message}`,
      },
      { status: 500 }
    );
  }
}
