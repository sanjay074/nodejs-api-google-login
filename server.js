require('dotenv').config();
const mongoose = require('mongoose');
const passport = require('passport');
const express = require('express');
const userRoute = require('./router/auth');

require('./controllers/passport')(passport);
const app = express();
app.use(express.json()); 
mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true },
 () => console.log('Mongodb is connected'));
 const hospitalRoutes = require('./hospital/routes/hospital');
app.use('/login', userRoute);
app.use('/api', hospitalRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is running on: ' + PORT));