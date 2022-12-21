const express = require("express");
const { MongoClient, ObjectId, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const PORT = 4000;

const uri = process.env.MONGO_DB_URL;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const connect = async () => {
  await client.connect();
};
const _db = client.db("tourist");
const Services = _db.collection("services");
const Reviews = _db.collection("reviews");

function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "unauthorized access" });
  }
  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET_TOKEN, function (err, decoded) {
    if (err) {
      return res.status(403).json({ message: "Forbidden access" });
    }
    req.decoded = decoded;
    next();
  });
}

app.get("/", (req, res) => {
  console.log(`request received at ${new Date()}`);
  console.dir(req.ip);
  //console.dir(res);
  res.send(`request received at ${new Date()} `);
});

app.get("/services", async (req, res) => {
  const limit = 3;
  try {
    const query = {};
    const count = await Services.estimatedDocumentCount();
    const results = await Services.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .toArray();
    res.status(200).json({
      status: true,
      count,
      data: results,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "something went wrong in services get route",
    });
  }
});

app.get("/all-services", async (req, res) => {
  try {
    const { search } = req.query;
    console.log(search);
    let query = {};
    if (search.length) {
      query = { $text: { $search: search } };
    }
    const count = await Services.estimatedDocumentCount();
    const results = await Services.find(query)
      .sort({ createdAt: -1 })
      .toArray();
    res.status(200).json({
      status: true,
      count,
      data: results,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "something went wrong in services get route",
    });
  }
});

app.get("/services/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleProduct = await Services.findOne({ _id: ObjectId(id) });

    res.status(200).json({ status: true, data: singleProduct });
  } catch (error) {
    res.json({ status: false, message: error.message });
  }
});

app.post("/services", async (req, res) => {
  try {
    const newService = req.body;
    await Services.insertOne(newService);
    res.status(201).json({
      status: true,
      message: "Service Added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "something went wrong in services post route",
    });
  }
});

app.get("/reviews", verifyJWT, async (req, res) => {
  try {
    const decoded = req.decoded;
    console.log(decoded);
    if (decoded.email !== req.query.email) {
      return res
        .status(403)
        .json({ status: false, message: "unauthorized access" });
    }

    let query = {};
    if (req.query.email) {
      query = {
        email: req.query.email,
      };
    }

    const cursor = Reviews.find(query);
    const results = await cursor.sort({ createdAt: -1 }).toArray();
    res.status(200).json({
      status: "success",
      data: results,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "something went wrong in reviews get route",
    });
  }
});

app.get("/all-reviews", async (req, res) => {
  try {
    const results = await Reviews.find({}).sort({ createdAt: -1 }).toArray();
    const count = await Reviews.estimatedDocumentCount();
    res.status(200).json({ status: true, count, data: results });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
});

app.get("/reviews/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const singleReview = await Reviews.findOne({ _id: ObjectId(id) });

    res.status(200).json({ status: true, data: singleReview });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
});

app.post("/reviews", verifyJWT, async (req, res) => {
  try {
    const newReview = req.body;
    await Reviews.insertOne(newReview);
    res.status(201).json({
      status: true,
      message: "Reviews Added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "something went wrong in reviews post route",
    });
  }
});

app.patch("/reviews/:id", verifyJWT, async (req, res) => {
  try {
    const { id } = req.params;
    const document = req.body;
    await Reviews.updateOne(
      { _id: ObjectId(id) },
      { $set: { ...document } },
      { upsert: true }
    );

    res
      .status(202)
      .json({ status: true, message: "Review updated successfully  " });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/reviews/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Reviews.deleteOne({ _id: ObjectId(id) });

    res
      .status(202)
      .json({ status: true, message: "Review delete successfully " });
  } catch (error) {
    res.status(401).json({ status: false, message: error.message });
  }
});

app.post("/auth/jwt", async (req, res) => {
  try {
    const user = req.body;
    const token = await jwt.sign(user, process.env.JWT_SECRET_TOKEN, {
      expiresIn: "7d",
    });
    res.status(200).json({
      status: true,
      token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.use("/*", async (req, res) => {
  res.status(400).send({ message: "The Route doesn't exist" });
});

app.listen(PORT, async () => {
  await connect();

  console.log("database connection established");
  console.log(`Server is running on port : ${PORT}`);
});
