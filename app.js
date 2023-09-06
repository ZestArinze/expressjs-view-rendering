import express from 'express';
import { db } from './db';

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => res.render('index', { cities: db.cities }));

app.listen(3000, () => console.log('@localhost:3😎😎😎'));
