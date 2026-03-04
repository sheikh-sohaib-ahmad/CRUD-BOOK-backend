import mongoose from "mongoose";

let mongod = null;

export const connectDB = async () => {
  try {
    let mongoUri = process.env.MONGO_URI && process.env.MONGO_URI.trim() !== "" ? process.env.MONGO_URI : null;

    if (!mongoUri) {
      // Try connecting to local MongoDB first
      const localUri = "mongodb://127.0.0.1:27017/book";
      try {
        await mongoose.connect(localUri);
        console.log("MongoDB connected to local MongoDB at", localUri);
        return;
      } catch (err) {
        console.warn("Local MongoDB not available, spinning up in-memory MongoDB for development...");
      }

      // Start an in-memory MongoDB instance
      const { MongoMemoryServer } = await import('mongodb-memory-server');
      mongod = await MongoMemoryServer.create();
      mongoUri = mongod.getUri();
      console.log("Started in-memory MongoDB for development");
    }

    await mongoose.connect(mongoUri);
    console.log("MongoDB connected to", mongoUri);
  } catch (error) {
    console.error("MongoDB connection error:", error.message || error);
    process.exit(1);
  }
};

// Gracefully stop in-memory server on exit (only if we started it)
process.on('SIGINT', async () => {
  if (mongod) {
    await mongod.stop();
    console.log('In-memory MongoDB stopped');
  }
  process.exit(0);
});

process.on('SIGTERM', async () => {
  if (mongod) {
    await mongod.stop();
    console.log('In-memory MongoDB stopped');
  }
  process.exit(0);
});