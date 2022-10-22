import { cert, getApps, initializeApp } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"

import  serviceAccount  from "../secrets.js"

export function dbConnect() {
    if(!getApps().length) {
        initializeApp({
            credentials: cert(serviceAccount)
        })
    }
    return getFirestore()
}