const express = require('express');
const router = express.Router();
const db = require('../database/mysql');


let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
];

router.get('/', (req, res) => {
    res.json(users);
});

router.post('/', async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    try {
        const [result] = await db.query(
            'INSERT INTO users (name, email) VALUES (?, ?)',
            [name, email]
        );

        res.status(201).json({
            id: result.insertId,
            name,
            email
        });
    } catch (error) {
        console.error('Error inserting user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
});

module.exports = router;