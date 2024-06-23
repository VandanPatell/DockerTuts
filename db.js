const { MongoClient, ObjectId } = require('mongodb')

const connectionUrl = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_IP || "mongo"}:27017`
const dbName = 'MERN_TEST'

let db

const init = () =>
  MongoClient.connect(connectionUrl,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((client) => {
      db = client.db(dbName)
    })

const insertItem = (item) => {
  const collection = db.collection('items')
  return collection.insertOne(item)
}

const getItems = () => {
  const collection = db.collection('items')
  return collection.find({}).toArray()
}

const updateQuantity = (id, quantity) => {
  const collection = db.collection('items')
  return collection.updateOne({ _id: ObjectId(id) }, { $inc: { quantity } })
}

module.exports = { init, insertItem, getItems, updateQuantity }
