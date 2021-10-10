import React,{useEffect , useState} from 'react';
import axios from "axios";
import { useSelector } from 'react-redux';



function SearchMovies() {
   const keyword = useSelector(state =>  state.keyword);

   const[ searchUrl, setSearchUrl] = useState({});
  
   console.log("search url is ",searchUrl)
    
  const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/find',
    params: {q: keyword ? keyword : 'the dark knight'},
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': 'e497470d92msh184116dd7f558c4p19f4a6jsn1d39b63a73c0'
    }
  } 
  

const  fetchMovie  = () => {
axios.request(options).then(function (response) {
	setSearchUrl(response.data.results[0].image)
  console.log("checking is :",response.data)
}).catch(function (error) {
	console.error(error);
});
}

 useEffect(() =>{
    fetchMovie();
 },[])

  
    return (
        <div>
          <h1>Searched movies</h1>
          <h1>search keyword is : {keyword}</h1>
          <div>
          <h2>{searchUrl.url ? '' : 'Loading please wait....'}</h2>
            <img src={searchUrl.url} ></img>
          </div>
        </div>
    )
}

export default SearchMovies
