const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const targetImage = document.querySelector('.gif');
const loadingIndicator = document.querySelector('.loading');
const API_KEY = 'Ggvp9pfr7ZGxlLz6LdHZ5Ju5gr3K11g7'; // LMAO he left the api key
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
const fetchGIF = async(keyword)=>{
    let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${keyword}`, {mode: 'cors'})
    response = await response.json();
    return response.data.images.original.url
}
const getGifImage = async(keyword)=>{
    toggleLoading(true);
    let response = await fetchGIF(keyword);
    toggleLoading(false);
    return response;
}
const setImageUrl =(url)=>{
    targetImage.src = url;
}
const showRandomGIF = async(keyword)=>{
    setImageUrl(await getGifImage(keyword));
}
searchButton.addEventListener('click',(event)=>{
    showRandomGIF(getUserInput());
})
showRandomGIF('spongebob') // Fetch Initial GIF
