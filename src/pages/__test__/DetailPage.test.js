import { render, screen } from '@testing-library/react'
import DetailPage from '../DetailPage'
import * as storeAdapter from '../../services/storeAdapter'

beforeEach(() => {
  jest.spyOn(storeAdapter, 'useFriendStore').mockReturnValue({
    isReady: true,
    getFriendById: () => ({
      id: 1,
      name: {
        first: 'First',
        last: 'Last'
      },
      location: {
        latitude: 1,
        longitude: 1
      },
      picture: "notexisted.jpg"
    })
  })
})

test('friend detail', async () => {
  render(<DetailPage />)

  const map = await screen.findByTestId('friend-map')
  const detail = await screen.findByTestId('friend-item')
  const picture = await screen.findByAltText('First Last')
  const name = await screen.findByText('First Last')

  expect(map).toBeInTheDocument()
  expect(detail).toBeInTheDocument()
  expect(picture).toBeInTheDocument()
  expect(name).toBeInTheDocument()
})
