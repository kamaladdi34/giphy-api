const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const targetImage = document.querySelector('.gif');
const loadingIndicator = document.querySelector('.loading');
const API_KEY = 'Ggvp9pfr7ZGxlLz6LdHZ5Ju5gr3K11g7';
const getUserInput = ()=> searchInput.value;
const toggleLoading = (isLoading)=>{
    if (isLoading) {
        loadingIndicator.classList.remove('hidden');
        targetImage.classList.add('hidden');
      } else {
        loadingIndicator.classList.add('hidden');
        targetImage.classList.remove('hidden');
      }
}
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
    toggleLoading(true);
    let promise = fetchGIF(keyword);
    promise.then(response =>{
        toggleLoading(false);
        return response;
    })
    return promise;
}
const setImageUrl =(url)=>{
    targetImage.src = url;
}
const showRandomGIF = (keyword)=>{
    getGifImage(keyword).then((response)=>{
        setImageUrl(response);
    })
}
searchButton.addEventListener('click',(event)=>{
    showRandomGIF(getUserInput());
})
showRandomGIF('cat, kitten, meow, paw') // Fetch Initial GIF
