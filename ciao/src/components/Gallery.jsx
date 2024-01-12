import { Row, Col } from 'react-bootstrap';
import SingleMovie from './SingleMovie';
import { useState, useEffect } from 'react';

const Gallery = ({ saga }) => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const res = await fetch('http://www.omdbapi.com/?s='+ saga + '&apikey=1a73cf6e');
      if (res.ok) {
        let data = await res.json();
        setMovies(data.Search);
        console.log(data.Search);
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div className='saga-section p-0 h-50'>
        <Row> {movies.map((movie) => (
            <Col key={movie.imdbID} className='px-1'>
              <SingleMovie movie={movie}></SingleMovie>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Gallery;