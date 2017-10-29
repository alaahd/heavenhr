import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';
import Pager from './Pager';

class FriendList extends Component {
  render () {
    //let _friends = this.props.friends.slice(0,2);
      const {offset, size} = this.props.pconfig;
      let friends = this.props.friends.slice(offset, offset + size);
    return (
      <div>
        <ul className={styles.friendList}>
          {
              friends.map((friend, index) => {
              return (
                <FriendListItem
                  key={index}
                  id={friend.index}
                  name={friend.name}
                  starred={friend.starred}
                  {...this.props.actions} />
              );
            })
          }
        </ul>
        <Pager {...this.props} />
      </div>
    );
  }

}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
