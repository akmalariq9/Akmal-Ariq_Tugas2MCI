const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const userRoute = require('../app/routes/userRoute');
const paymentRoute = require('../app/routes/paymentRoute');
const speakerRoute = require('../app/routes/speakerRoute');
const seminarRoute = require('../app/routes/seminarRoute');
const seatRoute = require('../app/routes/seatRoute');
const registrationRoute = require('../app/routes/registrationRoute');

app.use('/user', userRoute);
app.use('/payment', paymentRoute);
app.use('/speaker', speakerRoute);
app.use('/seminar', seminarRoute);
app.use('/seat', seatRoute);
app.use('/registration', registrationRoute);
app.use("/", (req, res) => {
    res.send("Welcome to Tugas 2 MCI by Akmal Ariq :D")
})

app.listen(port, () => console.log(`Port ${port} Started Successfully...`));