import React, { Component } from 'react';
import User from './User'

export default class Post extends Component {
  render() {
    return(
      <div className="post">
        <User
          src="https://cdn.trinixy.ru/pics5/20180508/uncommon_01.jpg"
          alt="smbd"
          name="Arkadiy"
          min
        />
        <img
          src={this.props.src}
          alt={this.props.alt}></img>
        <div className="post__name">
          some account
        </div>
        <div className="post__descr">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis erat, vulputate id ante sed, dignissim viverra magna. Suspendisse tincidunt orci sit amet justo euismod, elementum vestibulum dolor sagittis. Nulla facilisi. Proin laoreet nunc ut metus vulputate, at interdum ipsum consequat. Sed tincidunt sodales massa sit amet rutrum. Cras sed dolor quis nibh posuere aliquam. Ut sed neque tempor lectus egestas cursus et et lacus. Ut eu urna sollicitudin, posuere metus ut, mattis odio. Praesent eu dictum metus. Quisque eget suscipit dolor.
        </div>
      </div>
    )
  }
}
