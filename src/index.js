const express = require("express");
const Reverso = require("reverso-api");
require("dotenv").config();

const { PORT } = process.env;

const app = express();

app.get("/translate", async (req, res) => {
    try {
        const reverso = new Reverso();
        const translations = await reverso.getContext('circumstance', 'English', 'Russian');

        res.json({
            translations,
            ok: true
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
            ok: false
        });
    }
});

app.listen(PORT);