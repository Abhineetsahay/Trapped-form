import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

const cached: {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
} = ((global as unknown) as { mongoose?: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } }).mongoose || { conn: null, promise: null };

export async function dbConnect() {
  if (cached.conn) {
    return cached.conn; // 🚀 instant return (no delay)
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "your-db-name",
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  (global).mongoose = cached;

  return cached.conn;
}