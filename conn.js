let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/DynamicWebsite', { useNewUrlPArser: false, useUnifiedTopology: false })
    .then(function () {
        console.log('Connected Succesfully');
    }).catch(function (err) {
        console.log(err);
    });