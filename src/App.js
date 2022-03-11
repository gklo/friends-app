import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import store from './services/store'
import { Provider } from 'react-redux'

import ListingPage from './pages/ListingPage'
import DetailPage from './pages/DetailPage'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
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
