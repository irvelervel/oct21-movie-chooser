// also MovieDetails is going to be a Class Component

import { Component } from "react";
import { Card, Spinner } from 'react-bootstrap'

class MovieDetails extends Component {

    state = {
        movieInfo: null
    }

    componentDidMount() {
        // this will happen AFTER the initial render() invokation
        // here I can grab the movie details!
        this.fetchMovieDetails()
    }

    fetchMovieDetails = async () => {
        try {
            let response = await fetch('http://www.omdbapi.com/?apikey=24ad60e9&s=' + this.props.title)
            // this.props.title initially is "Batman Begins" because that's the initial value of the
            // movieTitle state property in App
            console.log('response', response)
            let data = await response.json()
            console.log(data.Search[0])
            // set the state of this component with the search result
            // so I can show it in the interface
            // chances are, if you're performing a fetch into your component
            // you also want to store its result into the state
            this.setState({
                movieInfo: data.Search[0]
            })
        } catch (error) {
            console.log('error', error)
        }
    }

    render() {
        // render() is not a good place for data fetching! :(
        // render() fires again when the state changes!
        console.log('render! movieInfo is', this.state.movieInfo)
        return (
            <div>
                <h2>MOVIE DETAILS</h2>
                {
                    this.state.movieInfo ? (
                        <Card>
                            <Card.Img variant="top" src={this.state.movieInfo.Poster} />
                            <Card.Body className="text-dark">
                                <Card.Title>{this.state.movieInfo.Title}</Card.Title>
                                <Card.Text>
                                    {this.state.movieInfo.Year} - {this.state.movieInfo.imdbID}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ) : (
                        <Spinner animation="border" variant="success" />
                    )
                }
                {/* this is the short circuit && variant */}
                {/* {
                    this.state.movieInfo && (
                        <Card>
                            <Card.Img variant="top" src={this.state.movieInfo.Poster} />
                            <Card.Body className="text-dark">
                                <Card.Title>{this.state.movieInfo.Title}</Card.Title>
                                <Card.Text>
                                    {this.state.movieInfo.Year} - {this.state.movieInfo.imdbID}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                } */}
            </div>
        )
    }
}

export default MovieDetails