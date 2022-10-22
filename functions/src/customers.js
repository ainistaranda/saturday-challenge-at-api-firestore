import { dbConnect } from "./dbConnect.js"

export async function createCustomer(req,res) {
    const db = dbConnect()
    const doc = await db.collection('customers').add(req.body)
        .catch(err => res.status(500).send({ success: false, message: err}))
    res.status(201).send({ success: true, message: 'customer created:' + doc.id})
}

export async function getAllCustomers(req,res) {
    const db = dbConnect()
    const collection = await db.collection('customers').get()
    .catch(err => res.status(500).send({ success: false, message: err }))
    const customers = collection.docs.map(doc => {
        let customer = doc.data()
        customer.uid = doc.id
        return customer
    })
    res.send(customers)
}

export async function updateCustomer(req,res) {
    const { uid } = req.params
    const db = dbConnect()
    const doc = await db.collection('customers').doc(uid).update(req.body)
    .catch(err => res.status(500).send({ success: false, message: err }))
    res.status(202).send({ success: true, message: 'customer updated' + doc.id })
}















