import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Registration from "@/models/Registration";

export async function POST(request: Request) {
  try {
    const { deviceId } = await request.json();

    
    if (!deviceId) {
      return NextResponse.json({ registered: false });
    }
    await dbConnect();
    const record = await Registration.findOne({ deviceId });
    
    return NextResponse.json({ registered: Boolean(record) });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { success: false, message: "Server Error", error },
      { status: 500 }
    );
  }
}
