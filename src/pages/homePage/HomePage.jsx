import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import Loading from '../../components/loading/Loading';
import MovieCard from '../../components/movieCard/MovieCard';
import { fetchTrending } from '../../redux/features/moviesSlice';
import './HomePage.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const { movieList, status } = useSelector((store) => store.movies);

  console.log(movieList);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTrending());
    }
  }, [status, dispatch])
  
  if ( status === 'loading') {
    return <Loading />
  }

  return (
    <div>
      <Navbar />
      <section className="trending-container">
        {movieList.map((movie) => {
          return <MovieCard key={movie.id} {...movie} />
        })}
      </section>
    </div>
  )
}

export default HomePage;
