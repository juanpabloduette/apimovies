import { useEffect, useState } from 'react'
import './Content.css'
import ArticleMovie from '../ArticleMovie/ArticleMovie';
import Spinner from 'react-bootstrap/Spinner';

const getFetch = (setData) => {
  const API_KEY = import.meta.env.VITE_API_KEY
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  };
  fetch('https://api.themoviedb.org/3/discover/movie',options)
  .then(response => response.json())
  .then(response => setData(response.results))
  .catch(err => console.error(err));
}

const Content = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect( () => {
    getFetch(setData)
    setIsLoading(false)
  },[])
  console.log(data)
  return (
    (isLoading) 
    ? 
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    :
    <> 
      <div className='tendencias'>
      <h2>Tendencias de esta semana</h2>
      </div>
      
      <div className="showproducts">
          {data.map((movie,index) => 
            <ArticleMovie movie={movie} key={index} />
          )}
      </div>
    </>
  )
}

export default Content