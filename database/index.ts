import mongoose from "mongoose";

export async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("mongodb connected successfully");
    });

    connection.on("error", (error) => {
      console.log(error);
    });
  } catch (error) {
    console.log(error);
  }
}

// const MONGODB_URI = process.env.MONGODB_URI;
// let cached = (global as any).mongoose || { conn: null, promise: null };

// export const connectToDatabase = async () => {
//   if (cached.conn) return cached.conn;

//   if (!MONGODB_URI) throw new Error("MONGODB_URI is missing...");

//   cached.promise =
//     cached.promise ||
//     mongoose.connect(MONGODB_URI, {
//       dbName: "next14-portfolio",
//       bufferCommands: false,
//     });

//   cached.conn = await cached.promise;

//   return cached.conn;
// };
