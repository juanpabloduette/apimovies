import { useEffect, useState } from 'react'
import './Series.css'
import ArticleMovie from '../ArticleMovie/ArticleMovie';
import Spinner from 'react-bootstrap/Spinner';

const getFetch = (setData) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTBjMzc4YTc1OWEwOWY1ODg2ODZmMmEyYTk3ZGIzZSIsInN1YiI6IjY2NTI2NjFiODgzOGQxNzk3ZDk5YWFlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3QJ0wHf0lRd8pb7FyxZUD6nxVkEavQ62zB_nuW5ZDhQ'
    }
  };
  fetch('https://api.themoviedb.org/3/discover/tv',options)
  .then(response => response.json())
  .then(response => setData(response.results))
  .catch(err => console.error(err));
}

const Series = () => {
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
      <div>Componente Series</div>
      <div className="showproducts">
          {data.map((movie,index) => 
            <ArticleMovie movie={movie} key={index} />
          )}
      </div>
    </>
  )
}

export default Series