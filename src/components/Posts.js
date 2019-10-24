import React, { Component } from 'react';
import InstaService from '../services/instaService';
import Post from './Post';
import ErrorMessage from './Error';
import MDSpinner from 'react-md-spinner';

export default class Posts extends Component {
  InstaService = new InstaService();
  state = {
    posts: [],
    error: false,
    loading: true,
  }

  componentDidMount() {
    this.updatePosts();
  }

  updatePosts() {
    this.InstaService.getAllPosts()
      .then(this.onPostsLoaded)
      .catch(this.onError);
  }

  onPostsLoaded = (posts) => {
    this.setState({
      posts,
      error: false,
      loading: false,
    });
    console.log(posts)
  }

  onError = () => {
    this.setState({
      error: true
    });
  }

  renderItems(arr) {
    return arr.map(item => {
      return(
          <Post key={item.id} className="post" item={item} />
      )
    });
  }

  render() {
    const { posts, error, loading } = this.state;

    if (error) {
      return <ErrorMessage />;
    }

    const items = this.renderItems(posts);

    if (loading) {
      return <MDSpinner />;
    }

    return(
      <div className="left">
        {items}
      </div>
    )
  }
}
