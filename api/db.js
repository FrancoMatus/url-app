const mongoose = require('mongoose');
const db = mongoose.connection;
const uri = "mongodb://localhost/urlapp"
function connectDB() {
    mongoose.connect(uri, {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    db.on('open', _ => {
        console.log('Database connected')
    });
    db.on('error', err => {
        console.log(err)
    }) 
}
connectDB();