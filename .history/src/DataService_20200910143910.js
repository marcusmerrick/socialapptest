import axios from 'axios';

class DataService {

  constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()){
    this.url = url;
    this.client = client;
}

registerUser(userData) {
  return this.client.post(this.url + "/users", userData);
}

// getMessages(){
//   return this.client.get(this.url + "/messages");
// }

postMessage(message){
  let authData = localStorage.getItem("login");
  return this.client.post(this.url + "/users", )
}
}

export default DataService;