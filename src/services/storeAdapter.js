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

const selectFriendsByPage = createSelector(
  [ state => state.friends, (_, args) => args ],
  (friends, { size, pageNum }) => {
    const pageCount = Math.ceil(friends.length / size)
    if (pageNum <= pageCount) return friends.slice((size * (pageNum - 1)), (size * (pageNum - 1)) + size)
    return []
  }
)

export function useFriendStore() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.friend)

  if (state.status === 'idle') {
    dispatch(fetchFriends())
  }

  return {
    ...state,
    get isReady() { return state.status === 'fulfilled' },
    fetchFriends: async () => dispatch(fetchFriends()),
    getFriendById: id => selectFriendById(state, id),
    getFriendsByPage: (size, pageNum) => selectFriendsByPage(state, { size, pageNum }),
    getFriendsPageCount: count => Math.ceil(state.friends.length / count)
  }
}
