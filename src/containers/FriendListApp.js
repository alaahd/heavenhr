import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import {addFriend, deleteFriend, starFriend, setPageOffset} from '../actions/FriendsActions';
import { FriendList, AddFriendInput } from '../components';

class FriendListApp extends Component {

  render () {
    const { friendlist: { friendsById }} = this.props;
    const { pageSize, pageOffset } = this.props.friendlist;
    const pconfig = {
        size: pageSize,
        offset: pageOffset
    };

    const actions = {
      addFriend: this.props.addFriend,
      deleteFriend: this.props.deleteFriend,
      starFriend: this.props.starFriend,
      setPageOffset: this.props.setPageOffset
    };

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList friends={friendsById} actions={actions} pconfig={pconfig} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend,
  setPageOffset
})(FriendListApp)
