import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import MovieCreate from './Movies/MovieCreate';
import axios from 'axios';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      savedList: [],
      movies: [],
      title: '',
      director: '',
      metascore: '',
      stars: []
    }
  }

  addToSavedList = (movie) => {
    console.log(this.state.savedList)
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({savedList});
  }

  setData = data => {
    this.setState({movies: data})
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmitMovie = e => {
    e.preventDefault();
    let arrayedStars = this.state.stars.split(',');
    const newMovie = {title: this.state.title, director: this.state.director,
    metascore: Number(this.state.metascore), stars: arrayedStars}
    axios
      .post('http://localhost:5000/api/movies', newMovie)
      .then(response => {
        console.log(response.data);
      })
  }

  render(){
    return (
      <div>
        <NavLink to="/movies/add"><button>Create Movie</button></NavLink>
        <NavLink to="/"><button>Go Home</button></NavLink>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" render={ (props) => {
          return(<MovieList {...props} setData={this.setData}
            movies={this.state.movies}/>)
        }} />
        <Route path="/movies/:id" render={ (props) => {
          return(<Movie {...props} addToSavedList={this.addToSavedList}/>)
        }} />
        <Route path="/movies/add" render={ (props) => {
          return(<MovieCreate {...props} title={this.state.title}
          director={this.state.director} metascore={this.state.metascore}
      stars={this.state.stars} handleChange={this.handleChange}
      handleSubmitMovie={this.handleSubmitMovie}/>)
        }} />
      </div>
    )
  }
}
