import express from 'express';
import axios from 'axios';
import CryptoJS from 'crypto-js';

import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());

const SERVICE_ID = '';
const ACCESS_KEY = '';
const SECRET_KEY = '';

const url = `https://sens.apigw.ntruss.com/sms/v2/services/${SERVICE_ID}/messages`;

function makeSignature(method, url) {
    const space = ' ';
    const newLine = '\n';
    const timestamp = new Date().getTime().toString();
    const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, SECRET_KEY);
    hmac.update(method);
    hmac.update(space);
    hmac.update(url);
    hmac.update(newLine);
    hmac.update(timestamp);
    hmac.update(newLine);
    hmac.update(ACCESS_KEY);

    const hash = hmac.finalize();
    return {
        signature: hash.toString(CryptoJS.enc.Base64),
        timestamp,
    };
}

app.post('/send', async (req, res) => {
    console.log("start!!");
    const { to, content } = req.body;

    const payload = {
        type: 'SMS',
        contentType: 'COMM',
        countryCode: '82',
        from: '',
        content: 'me-rong',
        messages: [
            {
                to,
                content,
            },
        ],
    };

    const { signature, timestamp } = makeSignature('POST', `/sms/v2/services/${SERVICE_ID}/messages`);

    try {
        const response = await axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'x-ncp-apigw-timestamp': timestamp,
                'x-ncp-iam-access-key': ACCESS_KEY,
                'x-ncp-apigw-signature-v2': signature,
            },
        });

        res.status(200).json({ message: 'SMS sent successfully', data: response.data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error sending SMS', error: error.response.data });
    }
});

app.get('/ping', (req, res) => {
    console.log("Pong!")
    res.status(200).json({ message: 'Pong!' });
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
