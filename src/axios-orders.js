import axios from 'axios'

 const instance = axios.create({
    baseURL: 'https://react-burger-project-1627f.firebaseio.com/'
});
export default instance;