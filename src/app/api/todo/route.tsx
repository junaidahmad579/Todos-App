import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const res = await request.json();
    return NextResponse.json({message:"Todo created successfully"});  
}