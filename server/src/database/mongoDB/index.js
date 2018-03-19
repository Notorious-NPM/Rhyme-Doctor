import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/RhymeDoctor');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', () => console.log('db connection complete'));

const personalRhymeSchema = mongoose.Schema({
  userID: Number,
  rhymes: Object,
});

const lyricsSchema = mongoose.Schema({
  userID: Number,
  userName: String,
  lyrics: String,
});

// example = {
//   userID: 3,
//   rhymes: {
//     'eva': ['sucks', 'lame'],
// }

const PersonalRhyme = mongoose.model('PersonalRhyme', personalRhymeSchema);
const Lyrics = mongoose.model('Lyrics', lyricsSchema);

export { db, PersonalRhyme, Lyrics };
