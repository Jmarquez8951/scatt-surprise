import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './App.scss';

import MyNavbar from '../components/shared/MyNavbar/MyNavbar';

import Auth from '../components/pages/Auth/Auth';
import Home from '../components/pages/Home/Home';
import EditScat from '../components/pages/EditScat/EditScat';
import SingleScat from '../components/pages/SingleScat/SingleScat';
import NewScat from '../components/pages/NewScat/NewScat';


import fbConnection from '../helpers/data/connection';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <div className="App">
        <MyNavbar/>
        <h1>Scat Surprise</h1>
        <Home/>
        <Auth/>
        <EditScat/>
        <NewScat/>
        <SingleScat/>
      </div>
    );
  }
}

export default App;
