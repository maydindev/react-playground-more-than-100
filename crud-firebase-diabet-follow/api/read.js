import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const querySnapshot = await getDocs(collection(db, 'items'));
            const data = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            res.status(200).json(data);
        } catch (e) {
            res.status(500).json({ message: 'Error fetching documents', error: e });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
