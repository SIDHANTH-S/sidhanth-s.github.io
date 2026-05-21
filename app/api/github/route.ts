import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://github-contributions-api.jogruber.de/v4/SIDHANTH-S",
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch GitHub contributions");
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to load contributions" },
      { status: 500 }
    );
  }
}