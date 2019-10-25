import React, { Component } from 'react';
import InstaService from '../services/instaService';
import ErrorMessage from './Error';
import MDSpinner from 'react-md-spinner';

export default class Palette extends Component {
  InstaService = new InstaService();
  state = {
    photos: [],
    error: false,
    loading: true,
  }

  componentDidMount() {
    this.updatePhotos();
  }

  updatePhotos() {
    this.InstaService.getAllPhotos()
      .then(this.onPhotosLoaded)
      .catch(this.onError)
  }

  onError = () => {
    this.setState({
      error: true,
    });
  }

  onPhotosLoaded = (photos) => {
    this.setState({
      photos,
      error: false,
      loading: false
    });
  }

  renderItems(arr) {
    return arr.map(item => {
      const {src, alt} = item;
      return (
        <img src={src} alt={alt}></img>
      )
    })
  }

  render() {
    const { photos, error, loading } = this.state;

    if (error) {
      return <ErrorMessage />
    }

    const items = this.renderItems(photos);

    if (loading) {
      return <MDSpinner />;
    }

    return (
      <div className="palette">
        {items}
      </div>
    )
  }
}
