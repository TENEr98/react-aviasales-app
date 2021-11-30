import { configureStore } from '@reduxjs/toolkit'

import ticketSlice from './ticket'

export default configureStore({
  reducer: {
    tickets: ticketSlice
  }
})
