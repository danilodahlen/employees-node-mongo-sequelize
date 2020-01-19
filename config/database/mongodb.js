const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db_employees', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);
mongoose.set('autoReconnect', true);

module.exports = mongoose;