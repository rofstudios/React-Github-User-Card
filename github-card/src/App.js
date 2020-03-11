import React from 'react';
import axios from 'axios';
import MyCard from './components/MyCard';
import UserCard from './components/UserCard';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    //setting state similar to let [state] = useState([])
    //this (myCard) will hold my information received through axios called into GitHub API
    //this (followersCard) will hold information received through axios for my followers
    this.state = {
      myCard: [],
      followersCard: []
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/rofstudios')
    .then(res => {
      // console.log(res)
      this.setState({
        myCard: res.data
      })
      return axios.get('https://api.github.com/users/rofstudios/followers')
    })
    .then(res => {
      // console.log(res)
      res.data.map( a => {
        // console.log('inside follower res', a)
        this.setState({
          followersCard: [...this.state.followersCard, a]
        })
      })
    })
    .catch(err => console.log(err.message));
  }


  render() {
    return (
      <div className="App">
        <h1>My GitHub Card</h1>
        <MyCard myCard={this.state.myCard} />
        <h2>My Followers Card</h2>
        <UserCard followersCard={this.state.followersCard} />
      </div>
    );
  }

  }

export default App;
