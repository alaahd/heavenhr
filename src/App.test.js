import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as reducers from './reducers/index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('expect reducer to add a friend to array', () => {
  //const state = [];
    const stateBefore = {
        pageSize: 2,
        pageOffset: 0,
        friendsById: [
            {
                index: 0,
                name: 'Theodore Roosevelt',
                starred: true,
                gender: 'male'
            }
        ]
    };

    const stateAfter = {
        pageSize: 2,
        pageOffset: 0,
        friendsById: [
            {
                index: 0,
                name: 'Theodore Roosevelt',
                starred: true,
                gender: 'male'
            },
            {
                index: 1,
                name: 'Alaa Haddad',
                starred: false,
                gender: 'male'
            }
        ]
    }

  const action = {type:'ADD_FRIEND', name:'Alaa Haddad', gender: 'male'};

  expect(reducers.friendlist(stateBefore, action)).toEqual(stateAfter);
})
