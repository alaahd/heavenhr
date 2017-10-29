import * as types from '../constants/ActionTypes';

const initialState = {
  pageSize: 2,
  pageOffset: 0,
  friendsById: [
    {
      name: 'Theodore Roosevelt',
      starred: true
    },
    {
      name: 'Abraham Lincoln',
      starred: false
    },
    {
      name: 'George Washington',
      starred: false
    }
  ]
};

export default function friends(state = initialState, action) {
  switch (action.type) {
      case types.SET_PAGE_OFFSET:
      console.log('calling set page offset', action.offset);
      // return {
      //     ...state,
      //     {pageOffset: action.offset}
      // };
      //return Object.assign({}, state, {pageOffset: action.offset});
      return {
          ...state,
          pageOffset: action.offset
      }
    case types.ADD_FRIEND:
      console.log('offset', state['friendsById'].length % state.pageSize);

      return {
        ...state,
        pageOffset: state['friendsById'].length % state.pageSize === 0 ? state['friendsById'].length : state.pageOffset,
        friendsById: [
          ...state.friendsById,
          {
            name: action.name
          }
        ],
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.filter((item, index) => index !== action.id)
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
