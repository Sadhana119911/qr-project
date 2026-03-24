const express = require('express');
const QRCode = require('qrcode');

const app = express();

// serve frontend
app.use(express.static('public'));
app.use(express.json());

// API
app.post("/generate", async (req, res) => {
    const { text } = req.body;

    try {
        const qrCodeDataURL = await QRCode.toDataURL(text);
        res.json({ qr: qrCodeDataURL });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to generate QR code' });
    }
});

// PORT
const PORT = 7000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});