// app/api/test-db/route.ts
import { connectToDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDatabase();
    return NextResponse.json({ message: 'MongoDB connected successfully!' });
  } catch (error) {
    console.error('Connection error:', error);
    return NextResponse.json({ message: 'MongoDB connection failed' }, { status: 500 });
  }
}
