import { db } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';

export default async function handler(req, res) {
    if (req.method === 'PUT') {
        const { id, ...data } = req.body;
        try {
            const docRef = doc(db, 'items', id);
            await updateDoc(docRef, data);
            res.status(200).json({ id, ...data });
        } catch (e) {
            res.status(500).json({ message: 'Error updating document', error: e });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
