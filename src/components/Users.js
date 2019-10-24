import React, { Component } from 'react';
import User from './User';
import InstaService from '../services/instaService'
import ErrorMessage from './Error';
import MDSpinner from 'react-md-spinner';

export default class Users extends Component {
  InstaService = new InstaService();
  state = {
    users: [],
    error: false,
    loading: true,
  }

  componentDidMount() {
    this.updateUsers();
  }

  updateUsers() {
    this.InstaService.getAllUsers()
      .then(this.onUsersLoaded)
      .catch(this.onError);
  }

  onUsersLoaded = (users) => {
    this.setState({
      users,
      error: false,
      loading: false,
    });
  }

  onError = () => {
    this.setState({
      error: true
    });
  }

  renderUsers(arr) {
    return arr.map(item => {
      const {src, alt, name, id } = item;
      return (
        <User key={id} src={src} alt={alt} name={name} min />
      )
    })
  }

  render() {
    const { users, error, loading } = this.state;

    if (error) {
      return <ErrorMessage />;
    }

    const items = this.renderUsers(users);

    if (loading) {
      return <MDSpinner />;
    }

    return(
      <div className="right">
        <User
          src="https://cdn.trinixy.ru/pics5/20180508/uncommon_01.jpg"
          alt="smbd"
          name="Arkadiy"
        />
        <div className="users__block">
          {items}
        </div>
      </div>
    )
  }
}
