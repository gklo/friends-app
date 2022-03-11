import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom'

import ListingPage from './pages/ListingPage'
import DetailPage from './pages/DetailPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<ListingPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
