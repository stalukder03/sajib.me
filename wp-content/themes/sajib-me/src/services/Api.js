import Axios from 'axios';

let path = 'sajib.local'
if(location.hostname == 'sajib.me'){
    path = 'sajib.me';
}

const Api = Axios.create({
    baseURL: `http://${path}/wp-json/sajib/me/v1`,
    headers: {
        Accept: 'application/json'
    }
});

export default Api;