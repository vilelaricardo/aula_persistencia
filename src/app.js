const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Conectando ao banco de dados MongoDB
mongoose.connect('mongodb+srv://<username>:<password>@<clusterName>.uyyor32.mongodb.net', {
    retryWrites: true,
    w: 'majority',
    appName: 'AulaWeb'
});


app.use('/api', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
