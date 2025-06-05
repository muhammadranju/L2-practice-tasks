const { MongoClient } = require("mongodb");

async () => {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017");
    const db = client.db("test");
    const collection = db.collection("users");

    const result = await collection.aggregate([
      {
        $group: {
          _id: "$age",
          total: { $sum: 1 },
        },
      },
    ]);

    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
