import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Nav from '../Nav'

const renderWithRouter = (ui, {route = '/'} = {}) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route element={ui} path={route} />
      </Routes>
    </MemoryRouter>
  )
}

test('Nav component on listing page', async () => {
  renderWithRouter(<Nav />, { route : '/' })
  expect(screen.queryByTestId('back-button')).toBeNull()
})

test('Nav component on detail page', async () => {
  renderWithRouter(<Nav />, { route : '/detail/123' })
  expect(screen.queryByTestId('back-button')).toBeInTheDocument()
})
