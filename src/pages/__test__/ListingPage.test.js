import { fireEvent, render, screen } from '@testing-library/react'
import ListingPage from '../ListingPage'
import * as storeAdapter from '../../services/storeAdapter'

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

beforeEach(() => {
  const friends = [...new Array(15)].map((_, idx) => ({ id: idx+1, name: { first: 'First', last: 'Last' }, picture: "" }))

  jest.spyOn(storeAdapter, 'useFriendStore').mockReturnValue({
    isReady: true,
    getFriendsByPage(_, pageNum) {
      if (pageNum === 1) return friends.slice(0, 10)
      if (pageNum === 2) return friends.slice(10)
    },
    getFriendsPageCount() {
      return 2
    }
  })
})


test('list item', async () => {
  render(<ListingPage />)
  const listItems = await screen.findAllByTestId('friend-item')
  const page1Button = await screen.findByLabelText('page 1')
  const page2Button = await screen.findByLabelText('Go to page 2')
  expect(listItems.length).toBe(10)
  expect(page1Button).toBeInTheDocument()
  expect(page2Button).toBeInTheDocument()
})

test('pagination', async () => {
  render(<ListingPage />)

  const page2Button = await screen.findByLabelText('Go to page 2')
  fireEvent(page2Button, new Event('click', { bubbles: true, cancelable: true }))
  const listItems = await screen.findAllByTestId('friend-item')
  expect(listItems.length).toBe(5)
})
