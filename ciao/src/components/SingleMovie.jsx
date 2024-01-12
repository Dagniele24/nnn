import { Card } from 'react-bootstrap';

const SingleMovie = ({ movie }) => {
  return (
    <div>
      <Card style={{ width: '180px'}} href='#' className='px-0 mx-0'>
        <Card.Img src={movie.Poster} alt={movie.Title} style={{height: '250px'}}></Card.Img>
      </Card>
    </div>
  );
};

export default SingleMovie;