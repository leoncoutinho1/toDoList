const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose.connect(
    process.env.MONGO_URL,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('mongodb connected'))
    .catch(err => console.log(err));