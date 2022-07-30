import Axios from 'axios';

const Api = Axios.create({
    baseURL: "http://sajib.local/wp-json/sajib/me/v1",
    headers: {
        Accept: 'application/json'
    }
});

export default Api;