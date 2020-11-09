import React, { Component } from 'react';
import UserItem from './userItem';

class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'kevwil',
        avatar_url: 'https://avatars2.githubusercontent.com/u/35?v=4',
        html_url: 'https://github.com/kevwil',
      },
      {
        id: '2',
        login: 'atmos',
        avatar_url: 'https://avatars3.githubusercontent.com/u/38?v=4',
        html_url: 'https://github.com/atmos',
      },
      {
        id: '3',
        login: 'errfree',
        avatar_url: 'https://avatars2.githubusercontent.com/u/44?v=4',
        url: 'https://api.github.com/users/errfree',
      },
    ],
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
