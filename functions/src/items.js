import { dbConnect } from "./dbConnect.js"

export async function createItem(req,res) {
    const db = dbConnect()
    const doc = await db.collection('items').add(req.body)
        .catch(err => res.status(500).send({ success: false, message: err}))
    res.status(201).send({ success: true, message: 'item created:' + doc.id})
}

export async function getAllItems(req,res) {
    const db = dbConnect()
    const collection = await db.collection('items').get()
    .catch(err => res.status(500).send({ success: false, message: err }))
    const items = collection.docs.map(doc => {
        let item = doc.data()
        items.uid = doc.id
        return item
    }) 
    res.send(items)
}

export async function updateItem(req,res) {
    const { uid } = req.params
    const db = dbConnect()
    const doc = await db.collection('items').doc(uid).update(req.body)
    .catch(err => res.status(500).send({ success: false, message: err }))
    res.status(202).send({ success: true, message: 'item updated' + doc.id })
}


