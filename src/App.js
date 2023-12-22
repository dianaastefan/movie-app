import React , {useState, useEffect} from 'react';
import MovieBox from './components/MovieBox';
import Pagination from './components/Pagination';
import './App.css';


const API_SEARCH='https://api.themoviedb.org/3/search/movie?api_key=64569705d85560116922c8b37f5316fa&query'
const APi_URL="https://api.themoviedb.org/3/movie/popular?api_key=64569705d85560116922c8b37f5316fa";

function App() {
  
  const [movies, setMovies]=useState([]);
  const [query, setQuery]=useState('');
  const [currentPage, setCurrentPage]=useState(1);
  const [postsPerPage]=useState(8);

    const lastPostIndex= currentPage *postsPerPage;
    const firstPostIndex= lastPostIndex -postsPerPage;
   const currentPosts= movies.slice(firstPostIndex,lastPostIndex);

   useEffect (()=>{
    const fetchMovies =async()=>{
     const res= await fetch(APi_URL);
     const data = await res.json();
       setMovies(data.results);
    }
    fetchMovies();
 },[]);
    
  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("searching");
    try{
        const url=`https://api.themoviedb.org/3/search/movie?api_key=64569705d85560116922c8b37f5316fa&query=${query}`;
        const res= await fetch(url);
        const data=await res.json();
        console.log(data);
        setMovies(data.results);
    }
    catch(e){
        console.log(e);
    }
  }


  return (
    <div className="App">
      
      <div className='NavBar'>
        <a href='/home'>Movie Project</a>
        <div>DropDown Trending</div>
        <div>DropDown Series</div>
        <div>
          <input 
              type='search' 
              value={query}
              placeholder='Movie Search'
              onChange={(e)=>setQuery(e.target.value)}
         /> 
          <button onClick={searchMovie}>Search</button>

        </div>
      </div>
      
      <div>
        {movies.length > 0 ?(
          <div>
            <MovieBox movies={currentPosts}/>
          </div>
    
        ):(
          <h2>Sorry, no movie found</h2>
        )}  
        
      </div>
      <Pagination 
      totalPosts = {movies.length}  
      postsPerPage ={postsPerPage} 
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}/>

    </div>
  );
}

export default App;
