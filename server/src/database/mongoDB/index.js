import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/RhymeDoctor');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', () => console.log('db connection complete'));

const personalRhymeSchema = mongoose.Schema({
  userID: Number,
  word1: String,
  word2: String,
});

export default db;
