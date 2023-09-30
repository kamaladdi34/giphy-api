const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const targetImage = document.querySelector('.gif');
const loadingIndicator = document.querySelector('.loading');
const API_KEY = 'Ggvp9pfr7ZGxlLz6LdHZ5Ju5gr3K11g7';
const toggleLoading = (isLoading)=>{
    if (isLoading) {
        loadingIndicator.classList.remove('hidden');
        targetImage.classList.add('hidden');
      } else {
        loadingIndicator.classList.add('hidden');
        targetImage.classList.remove('hidden');
      }
}
const getUserInput = ()=> searchInput.value;
const fetchGIF = async(keyword)=>{
    try{
        let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${keyword}`, {mode: 'cors'})
        response = await response.json();
        return response.data.images.original.url
    }
    catch(error){
        throw error;
    }
}
const getGifImage = async(keyword)=>{
    toggleLoading(true);
    try{
        let response = await fetchGIF(keyword);
        return response;
    }
    catch(error){
        throw error;
    } finally {
        toggleLoading(false);
    }
}
const setImageUrl =(url)=>{
    targetImage.src = url;
}
const showRandomGIF = async(keyword)=>{
    try{
        setImageUrl(await getGifImage(keyword));
    }
    catch(error){
        throw error;
    }
}
searchButton.addEventListener('click',(event)=>{
    showRandomGIF(getUserInput());
})
searchInput.addEventListener('input',(event)=>{
    searchButton.disabled = (searchInput.value == '');
})
showRandomGIF('spongebob');
document.addEventListener("keydown", async (event) => {
    if(event.target == searchInput && searchInput.value != '' && event.key == "Enter"){
        try{
            await showRandomGIF(getUserInput());
        }
        catch(error){
            throw error;
        }
    }
  });
  
