import * as types from '../constants/ActionTypes';

const initialState = {
  pageSize: 2,
  pageOffset: 0,
  friendsById: [
    {
      index: 0,
      name: 'Theodore Roosevelt',
      starred: true
    },
    {
      index: 1,
      name: 'Abraham Lincoln',
      starred: false
    },
    {
      index: 2,
      name: 'George Washington',
      starred: false
    }
  ]
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.SET_PAGE_OFFSET:
      return {
          ...state,
          pageOffset: action.offset
      };
    case types.ADD_FRIEND:
      console.log('offset', state['friendsById'].length % state.pageSize);

      return {
        ...state,
        pageOffset: [...state.friendsById].length % state.pageSize === 0 ? state['friendsById'].length : state.pageOffset,
        friendsById: [
          ...state.friendsById,
          {
            index: state.friendsById.slice(-1).pop().index + 1,
            name: action.name,
            starred: false
          }
        ],
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.filter((item, index) => item.index !== action.id)
      };
    case types.STAR_FRIEND:

      let friends = [...state.friendsById];
      let friend = friends.find((item, index) => index === action.id);
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById: friends
      };

    default:
      return state;
  }
}
