import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

export const loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Basic ')) {
            res.status(401).json({ message: 'Fehlende Authentifizierung' });
            return;
        }

        const base64Credentials = authHeader.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString(
            'ascii',
        );
        const [email, password] = credentials.split(':');

        const user = await findUserByEmail(email);

        res.status(200).json({ message: 'Erfolgreich angemeldet' });
    } catch (error) {
        console.error('Fehler beim Anmelden:', error);
        res.status(500).json({ message: 'Interner Serverfehler' });
    }
};

// Hilfsfunktion zum Finden eines Benutzers (Implementierung erforderlich)
const findUserByEmail = async (email: string) => {
    // Implementieren Sie hier die Logik zum Abrufen des Benutzers aus der Datenbank
    throw new Error('Nicht implementiert');
};
