import React, { Component } from 'react';
import Movie from './movies';
import Axios from 'axios';

class MoviesContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            movies: []
        };
    }

    componentWillMount(){
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';

        Axios.get(url)
            .then( (resp)=>{
                console.log("Resp: ",resp);
                this.setState({
                    movies: resp.data.feed.entry
                });
            })
            .catch( (error) =>{

            });
    }

    render(){
        console.log("State is: ",this.state.movies);

        const movieList = this.state.movies.map((movieInfo, index)=>{
            return <Movie info={movieInfo} key={index}/>;
        });

        return(
            <div className="container row">
                {movieList}
            </div>
        )
    }
}

export default MoviesContainer;