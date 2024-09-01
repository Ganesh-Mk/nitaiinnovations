const { MongoClient, ObjectId } = require("mongodb");

// Replace with your MongoDB Atlas URI
const uri =
  "mongodb+srv://nitaiInnovations:nitaiInnovations@nitaiinnovationscluster.387zbcy.mongodb.net/";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    // Connect to the MongoDB client
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    try {
      // Specify the database
      const dbName = "test";
      const db = client.db(dbName);
      console.log(`Database "${dbName}" selected`);

      try {
        // Specify the collection
        const collectionName = "users";
        const collection = db.collection(collectionName);
        console.log(`Collection "${collectionName}" selected`);

        // Define the new blog document to be added
        const newBlog = {
          username: "anotherrrr",
          email: "anotherr@example.com",
          title: "Understanding Node.js",
          desc: "A deep dive into the Node.js runtime environment and its features.",
          profileImageUrl:
            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          imageUrl: "https://example.com/nodejs.jpg",
          createdAt: new Date("2024-08-29T02:00:00.000Z"),
        };

        try {
          // Insert the new document into the collection
          await collection.insertOne(newBlog);
          console.log("New blog document inserted");

          // Retrieve all documents from the collection
          const documents = await collection.find({}).toArray();
          console.log(`Retrieved ${documents.length} documents`);

          // Print all documents
          console.log(documents);
        } catch (findError) {
          console.error("Error retrieving documents:", findError);
        }
      } catch (collectionError) {
        console.error("Error selecting collection:", collectionError);
      }
    } catch (dbError) {
      console.error("Error selecting database:", dbError);
    }
  } catch (connectError) {
    console.error("Error connecting to MongoDB Atlas:", connectError);
  } finally {
    // Ensure the client is closed even if an error occurs
    try {
      await client.close();
      console.log("Connection closed");
    } catch (closeError) {
      console.error("Error closing the connection:", closeError);
    }
  }
}

// Run the async function
run();
