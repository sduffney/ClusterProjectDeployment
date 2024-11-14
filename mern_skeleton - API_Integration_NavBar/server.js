import mongoose from 'mongoose'
import config from './config/config.js'
import app from './server/express.js'
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { 
    //useNewUrlParser: true,
//useCreateIndex: true, 
//useUnifiedTopology: true
 } )
.then(() => {
    console.log("Connected to the database!");
    })
    
mongoose.connection.on('error', () => {
throw new Error(`unable to connect to database: ${config.mongoUri}`) 
})
app.get("/", (req, res) => {
res.json({ message: "Welcome to User application." });
});
// app.listen(config.port, (err) => { 
// if (err) {
// console.log(err) 
// }
// console.info('Server started on http://localhost:',config.port) 
// })

const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

