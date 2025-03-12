import { db } from '../../firebase';
import { doc, deleteDoc } from 'firebase/firestore';

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        const { id } = req.body;
        try {
            const docRef = doc(db, 'items', id);
            await deleteDoc(docRef);
            res.status(200).json({ message: 'Item deleted successfully' });
        } catch (e) {
            res.status(500).json({ message: 'Error deleting document', error: e });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
