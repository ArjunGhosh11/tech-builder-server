const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.25llh.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        console.log("DATABASE IS CONNECTED");
        const partCollection = client.db('tech-builder').collection('parts');
    }
    finally {

    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send("TECH BUILDER'S SERVER!")
})

app.listen(port, () => {
    console.log(`Tech Builder App listening on port ${port}`)
})
