import * as types from '../constants/ActionTypes';

const initialState = {
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
      name: 'Abraham Lincoln',
      starred: false,
      gender: 'female'
    },
    {
      index: 2,
      name: 'George Washington',
      starred: false,
      gender: 'male'
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
      return {
        ...state,
        pageOffset: [...state.friendsById].length - ([...state.friendsById].length % {...state}.pageSize),
        friendsById: [
          ...state.friendsById,
          {
            index: state.friendsById.length ? state.friendsById.slice(-1).pop().index + 1 : 0,
            name: action.name,
            gender: action.gender,
            starred: false
          }
        ],
      };
      case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.filter((item, index) => item.index !== action.id),
        pageOffset: (state.friendsById.length - 1 ) % state.pageSize === 0 && state.friendsById.length > state.pageSize ? ([...state.friendsById].length - 1) - {...state}.pageSize : {...state}.pageOffset
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
