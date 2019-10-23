import React, { Component } from 'react';
import Post from './Post';

export default class Posts  extends Component {
  render() {
    return(
      <div className="left">
        <Post
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/11A0A/production/_109220227_body_yongqing-bao.jpg"
          alt="alt 1" />
        <Post
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/F2FA/production/_109220226_audun-rikardsen.jpg"
          alt="alt 2" />
      </div>
    )
  }
}
