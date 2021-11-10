import axios from "axios";

const getUrl = async function (url, params) {
    return new Promise((resolve, reject) => {
        const config = {
            params: params
        }
        axios.get(url, config).then(response => {
            resolve(response.data);
        }).catch(error => reject(error));
    })
}

export default {
    getUrl
}