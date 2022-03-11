import { configureStore } from '@reduxjs/toolkit'
// slices
import friend from './friend'

const store = configureStore({
  reducer: {
    friend
  }
})

export default store
