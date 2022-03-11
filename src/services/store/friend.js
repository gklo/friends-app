import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createFriend } from '../../domain/friend'

export const fetchFriends = createAsyncThunk(
  'friends/fetchFriends',
  async (thunkApi) => {
    const res = await new Promise((resolve) => setTimeout(() => {
      resolve([{
        _id: '55fd8036-f811-46ad-818a-593582e68722',
        email: 'bianca.wall@jamnation.se',
        location: {
          latitude: 22.35,
          longitude: 113.43
        },
        name: {
          first: 'Erica',
          last: 'Rose'
        },
        picture: 'https://placebear.com/135/249'
      }])
    }, 1000))

    return { friends: res }
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
