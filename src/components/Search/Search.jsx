
import ArticleMovie from '../ArticleMovie/ArticleMovie';
import { useLocation } from 'react-router-dom';

const Search = () => {
    const location = useLocation();
    const data = location.state?.results || [];
    console.log(data)
    return (
      (data.length <= 0) 
      ? 
      <div>No hay resultados</div>
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
  
  export default Search