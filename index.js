import express from 'express';
import cors from 'cors';
import getBook from './controllers/getBook.js';

const PORT = 3000;

const app = express();

app.use(cors());

app.get('/', getBook);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
    }
);

