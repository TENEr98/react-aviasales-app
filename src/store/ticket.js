import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { AviasalesAPI } from '../api'

const initialState = {
  tickets: [],
  searchId: '',
  loading: true
}

export const getSearchId = createAsyncThunk('tickets/getSearchId', async () => {
  const response = await AviasalesAPI.getId()
  return response?.data?.searchId
})

export const getTickets = createAsyncThunk(
  'tickets/getTickets',
  async (searchId) => {
    const response = await AviasalesAPI.getTickets(searchId)
    if (response.status === 200) {
      return response?.data?.tickets
    }
    return (response.error = 'ERROR')
  }
)

export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {},
  extraReducers: {
    [getSearchId.fulfilled]: (state, { payload }) => {
      state.searchId = payload
    },
    [getTickets.fulfilled]: (state, { payload }) => {
      state.tickets = payload
      state.loading = false
    }
  }
})

export default ticketSlice.reducer
