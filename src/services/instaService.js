export default class instaService {
  constructor() {
    this._apiBase = 'http://localhost:3000'
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Something went wrong. Could not fetch ${url}; received ${res.status}`);
    }

    return await res.json();
  }

  getAllPosts = async () => {
    const res = await this.getResource('/posts/');
    return res;
  }

  getAllPhotos = async () => {
    const res = await this.getResource('/posts/');
    return res.map(this._transformPosts);
  }

  getAllUsers = async () => {
    const res = await this.getResource('/posts/');
    return res.map(this._transformUsers);
  }

  _transformPosts = (post) => {
    return {
      src: post.src,
      alt: post.alt
    }
  }

  _transformUsers = (user) => {
    return {
      src: user.src,
      alt: user.alt,
      name: user.name,
      id: user.id
    }
  }

}
