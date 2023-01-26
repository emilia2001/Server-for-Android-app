import dataStore from 'nedb-promise';

export class NoteStore {
  constructor({ filename, autoload }) {
    this.store = dataStore({ filename, autoload });
  }
  
  async find(props) {
    return this.store.find(props);
  }
  
  async findOne(props) {
    return this.store.findOne(props);
  }
  
  async insert(note) {
    let firstName = note.firstName;
    let lastName = note.lastName;
    let birthDate = note.birthDate;
    let yearOfStudy = note.yearOfStudy;
    let scholarship = note.scholarship;
    console.log(lastName)
    note._id = this.randomString(16, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
    if (!firstName || !lastName || !birthDate || !yearOfStudy) { // validation
      throw new Error('Missing text property')
    }
    return this.store.insert(note);
  };
  
  async update(props, note) {
    return this.store.update(props, note);
  }
  
  async remove(props) {
    return this.store.remove(props);
  }

  randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }
}

export default new NoteStore({ filename: './db/students.json', autoload: true });