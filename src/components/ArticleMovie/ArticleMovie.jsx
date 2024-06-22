import './ArticleMovie.css'
import ModalTrailer from '../Modal/ModalTrailer';

const ArticleMovie = ({movie}) => {
    const { name, title, poster_path, vote_average, release_date, id } = movie
    const vote = vote_average.toString().slice(0,3);
    const date = release_date?.substring(0,4);
    const imageUrl = import.meta.env.VITE_API_IMG;
    const notPoster = '../src/assets/images/imagedefault.jpg'
    // console.log(id)
    const articleCard = (
                         <>
                          <article className='article__movie'>
                            <div className='imagebox'>
                              <img src={(poster_path)?(`${imageUrl + poster_path}`):(`${notPoster}`)}
                              alt={title || name}
                              />
                              <p className="vote mb-0">{vote}</p>
                            </div>
                            <div className='article__title'>
                              <h3 className='mt-3'>{title || name}</h3>
                              <div className='article__trailer'>
                                <p className='fs-6 mb-0'>{date}</p>
                                <ModalTrailer movieid={id}/>
                              </div>
                            </div>
                          </article>
                         </>
                         )
    return (
    <>
      {articleCard}
    </>
  )
}

export default ArticleMovie