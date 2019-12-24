import axios from "axios";

const url = "http://localhost:3000/api/notes";

class NoteService {
  static getNoteList() {
    return axios.get(url);
  }

  static getNote(id) {
    return axios.get(`${url}/${id}`);
  }

  static postCreateNote(note) {
    return axios.post(url, { description: note });
  }
}

export default NoteService;
