import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { db } from "@/drizzle/drizzle";
import { todo } from "@/drizzle/schema";

export async function GET(request:NextRequest){
    const rows = await db.select().from(todo);
    return NextResponse.json({message: rows})
}

export async function POST(request:NextRequest) {
    const req = await request.json();
    const title = req.todoItem;
    const rows = await db.insert((todo)).values({title});
    // const { rows } = await sql`INSERT INTO todo (title) (${title})`;
    return NextResponse.json({message:"Todo created successfully"});  
}