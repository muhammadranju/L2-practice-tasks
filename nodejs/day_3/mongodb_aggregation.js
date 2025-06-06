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

db.practice.aggregate([
  {
    $match: {
      gender: "Male",
      age: { $lt: 30 },
    },
  },
  {
    $project: {
      name: 1,
      age: 1,
      gender: 1,
    },
  },
]);

db.practice.aggregate([
  {
    $match: {
      gender: "Male",
      age: { $lt: 30 },
    },
  },
  {
    $addFields: {
      course: "Level-2",
    },
  },
  {
    $project: {
      name: 1,
      age: 1,
      gender: 1,
      course: 1,
    },
  },
]);

db.practice.aggregate([
  {
    $group: {
      _id: "$address.country",
      count: { $sum: 1 },
      users: { $push: "$$ROOT" },
    },
  },
  {
    $project: {
      "users.name": 1,
      "users.email": 1,
      "users.phone": 1,
    },
  },
]);
