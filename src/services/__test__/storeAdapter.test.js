import { useFriendStore } from '../storeAdapter'
import * as redux from 'react-redux'

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useCallback: (cb) => cb,
}));

test('using friend store', () => {
  const mockFriends = [...new Array(15)].map((_, idx) => ({ id: idx+1 }))
  const selectorSpy = jest.spyOn(redux, 'useSelector').mockReturnValue({ friends: mockFriends, status: 'fulfilled'  })
  const dispatchSpy = jest.spyOn(redux, 'useDispatch').mockReturnValue(jest.fn())

  const { friends, status, getFriendById, getFriendsByPage, getFriendsPageCount } = useFriendStore()
  expect(friends).toStrictEqual(mockFriends)
  expect(status).toBe('fulfilled')
  expect(getFriendById(1)).toStrictEqual({ id: 1 })
  expect(getFriendsByPage(10, 1)).toStrictEqual(mockFriends.slice(0, 10))
  expect(getFriendsPageCount(10)).toBe(2)
})
