import Axios from 'axios';

let path = 'sajib.local';

if( location.hostname != 'sajib.local'){
    path = 'sajib.me'
}

const Api = Axios.create({
    baseURL: `http://${path}/wp-json/sajib/me/v1`,
    headers: {
        Accept: 'application/json'
    }
});

export default Api;