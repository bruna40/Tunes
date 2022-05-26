<<<<<<< HEAD
import React, { Component } from 'react';
import Header from '../components/Header';

export default class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        Profile
      </div>
    );
  }
}
=======
import React from 'react';
import Header from '../components/Header';

const Profile = () => (
  <>
    <Header />
    <div data-testid="page-profile" />
  </>
);

export default Profile;
>>>>>>> lucas-ferreira-pinto-a-project-trybetunes
