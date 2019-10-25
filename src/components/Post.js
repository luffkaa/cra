import React, { Component } from 'react';
import User from './User'

export default class Post extends Component {

  render() {
    const { name, altname, photo, src, alt, descr } = this.props.item;
    return(
      <div className="post">
        <User
          src={photo}
          alt={altname}
          name={name}
          min
        />
        <img
          src={src}
          alt={alt}></img>
        <div className="post__name">
          {name}
        </div>
        <div className="post__descr">
          {descr}
        </div>
      </div>
    )
  }
}
