import axios from "axios";

const apiKey = '5qyw6HxuS8H2wFPo7zHbwdD7QpA1L3cc'

export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

//export default giphyApi // Otra manara de como hacer export

// giphyApi.get('/random')
// .then(resp => {
//     const {data} = resp.data
//     const {url} = data.images.original

//     const img = document.createElement('img')
//     img.src = url

//     document.body.append(img)
// })