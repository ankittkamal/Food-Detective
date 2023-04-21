import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "as",
        location: "addAbortSignal",
        twitter_username: "asdd",
        public_repos: "wef",
      },
    };
  }

  async componentDidMount() {
    //API Calls
    const data = await fetch("https://api.github.com/users/ankittkamal");

    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    return (
      <div>
        <h1> This is my profile page</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>location: {this.state.userInfo.location}</h2>
        <h2>twitter_username: {this.state.userInfo.twitter_username}</h2>
        <h2>public_repos: {this.state.userInfo.public_repos}</h2>
      </div>
    );
  }
}

export default Profile;
