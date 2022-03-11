import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createFriend } from '../../domain/friend'
import api from '../api'

export const fetchFriends = createAsyncThunk(
  'friends/fetchFriends',
  async (thunkApi) => {
    const res = await api.get('/')
     
    return { friends: res.data }
  }
)

export const friendSlice = createSlice({
  name: 'friend',
  initialState: {
    friends: [],
    status: 'idle'
  },
  reducers: {},
  extraReducers: {
    [fetchFriends.fulfilled]: (state, action) => {
      if (Array.isArray(action.payload.friends)) {
        const list = []
        for (const fd of action.payload.friends) {
          list.push(createFriend(fd))
        }

        state.friends = list
      }
      state.status = 'fulfilled'
    },
    [fetchFriends.rejected]: (state, action) => {
      state.status = 'rejected'
    },
    [fetchFriends.pending]: (state, action) => {
      state.status = 'pending'
    }
  }
})

export default friendSlice.reducer
