import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Hero = ({movies}) => {

  return (
    <div className='movie-carousel-container'>
        <Carousel>
            {
                movies?.map((movie) => {
                    return (
                        <Paper key={movie}>
                            <div className='movie-card-container'>
                                <div className='movie-card' style={{'--img': `url(${movie.backdrops[0]})`}}>
                                    <div className='movie-detail'>
                                        <div className='movie-poster'>
                                            <img src={movie.poster} alt=""/>
                                        </div>
                                        <div className='movie-title'>
                                            <h1>{movie.title}</h1>
                                        </div>
                                        <div className='movie-button-container'>
                                            <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                            <div className='play-button-container'>
                                                <FontAwesomeIcon className="play-button-icon"
                                                    icon = {faCirclePlay}
                                                />
                                            </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
} 

export default Hero