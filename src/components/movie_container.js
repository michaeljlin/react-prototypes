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
        return(
            <div>
                <h2>Movie Container</h2>
                <Movie />
            </div>
        )
    }
}

export default MoviesContainer;