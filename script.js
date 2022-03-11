const API_KEY = 'api_key=fc2dd97d0a7fbb2b71e3bd5fd791698b';
const BASE_URL='https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;

getMovies(API_URL)

function getMovies(url){
  fetch(url).then(res => res.json()).then(data=>{
    console.log(data);
  })
}

