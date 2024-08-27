const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const PORT  = process.env.PORT || 5000;

dotenv.config();

const app = express();
app.use(express.json());

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then().catch();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(port, () => console.log(`Server running on port ${PORT}`));