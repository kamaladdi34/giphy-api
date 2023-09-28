const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const targetImage = document.querySelector('.gif');
const API_KEY = 'Ggvp9pfr7ZGxlLz6LdHZ5Ju5gr3K11g7';
const getUserInput = ()=> searchInput.value;
const fetchGIF = (keyword)=>{
    return fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${keyword}', {mode: 'cors'}`)
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
        return response.data.images.original.url
    })
}
const getGifImage = (keyword)=>{
    let promise = fetchGIF(keyword);
    promise.then(response =>{
        return response;
    })
    return promise;
}
const setImageUrl =(url)=>{
    targetImage.src = url;
}
searchButton.addEventListener('click',(event)=>{
    getGifImage(getUserInput()).then((response)=>{
        setImageUrl(response);
    })
})