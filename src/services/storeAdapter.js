import { fetchFriends } from './store/friend'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'

const selectFriendById = createSelector(
  [
    state => state.friends,
    (_, id) => id
  ],
  (friends, id) => friends.find(f => f.id === id) || null
)

export function useFriendStore() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.friend)

  if (state.status === 'idle') {
    dispatch(fetchFriends())
  }

  return {
    ...state,
    fetchFriends: async () => dispatch(fetchFriends()),
    getFriendById: id => selectFriendById(state, id)
  }
}
