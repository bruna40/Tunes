<<<<<<< HEAD
import React, { Component } from 'react';
import Header from '../components/Header';

export default class ProfileEdit extends Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header />
        ProfileEdit
      </div>
    );
  }
}
=======
import React from 'react';
import Header from '../components/Header';

const ProfileEdit = () => (
  <>
    <Header />
    <div data-testid="page-profile-edit" />
  </>
);

export default ProfileEdit;
>>>>>>> lucas-ferreira-pinto-a-project-trybetunes
