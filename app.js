require('dotenv').config();
const mongoose = require('mongoose');
const passport = require('passport');
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileRoutes = require('./imageupload/routes/file-upload-routes');
const faciles = require('./facilies/routes/facilies');
const departmentRouter = require('./department/routes/doctor');
const servicesRouter = require('./hospitalServices/routes/services');
const userRoute = require('./router/auth');
require('./controllers/passport')(passport);
const app = express();

app.use(cors());
app.use(express.json()); 
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true },
 () => console.log('Mongodb is connected'));
 const hospitalRoutes = require('./hospital/routes/hospital');
app.use('/login', userRoute);
app.use('/api', hospitalRoutes);
app.use('/api', fileRoutes);
app.use('/api',departmentRouter);
app.use('/api',servicesRouter);
app.use('/api',faciles)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is running on: ' + PORT));