import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import store from './services/store'

import Nav from './components/Nav'
import ListingPage from './pages/ListingPage'
import DetailPage from './pages/DetailPage'

function App() {
  return (
    <div className="App">
      <CssBaseline enableColorScheme />
      <Provider store={store}>
        <Router>
          <Nav />
          <Routes>
            <Route index element={<ListingPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
