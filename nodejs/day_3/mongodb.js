db.practice.find({ company: { $type: "null" } }).project({ company: 1 });

db.practice
  .find(
    {
      gender: "Female",
      age: { $nin: [18, 20, 22, 24, 26, 28, 30] },
      interests: { $in: ["Cooking", "Gaming"] },
    },

    { age: 1, gender: 1, interests: 1 }
  )
  .sort({ age: 1 });

db.getCollection("practice").find({}).projection({}).sort({}).limit(0);
