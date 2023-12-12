import axios from 'axios'

axios.get('https://cataas.com/cat/says/hello')
    .then((response) => {
        const {config} = response
        const url = config.url
        console.log(url);
    })