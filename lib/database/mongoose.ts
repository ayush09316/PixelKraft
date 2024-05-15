import mongoose , {Mongoose} from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseConnection {
    conn: Mongoose  | null;
    promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
    if (cached.conn)  return cached.conn;
    if(!MONGODB_URI) throw new Error('Please define the MONGODB_URI environment variable inside .env.local');

    if (!cached.promise) {
        const opts = {
            dbName:'PixelKraft',
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            bufferCommands: false,
            // bufferMaxEntries: 0,
            // useFindAndModify: false,
            // useCreateIndex: true,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts);
    }

    cached.conn = await cached.promise;
    return cached.conn;
};