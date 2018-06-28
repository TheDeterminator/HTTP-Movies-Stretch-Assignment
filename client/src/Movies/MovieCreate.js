import React from 'react';

const MovieCreate = props => {
  return (
    <div>
      <form>
        Title: <input type="text" placeholder="Title" value={props.title}
        onChange={props.handleChange} name="title" /><br/>
        Director: <input type="text" placeholder="Director"
        value={props.director} onChange={props.handleChange}
        name="director" /><br/>
        Metascore: <input type="number" placeholder="Metascore"
        value={props.metascore} onChange={props.handleChange}
        name="metascore" /><br/>
        Stars: <input type="text" placeholder="Stars" value={props.stars}
        onChange={props.handleChange} name="stars" />
        <button onClick={props.handleSubmitMovie}>Create</button>
      </form>
    </div>
  )
}

export default MovieCreate;
