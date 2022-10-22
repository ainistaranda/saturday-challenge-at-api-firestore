import express from 'express'
import functions from "firebase-functions"

const app = express()
app.use(express.json()) 








app.get('/test', (req,res) => res.send('Our cloud API works'))
export const api = functions.https.onRequest(app)
