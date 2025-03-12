import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const docRef = await addDoc(collection(db, 'items'), {
                ...req.body,
                createdAt: new Date()
            });
            res.status(201).json({ id: docRef.id, ...req.body });
        } catch (e) {
            res.status(500).json({ message: 'Error adding document', error: e });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
