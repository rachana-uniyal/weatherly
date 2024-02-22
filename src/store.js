import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './redux/locationSlice'

export default configureStore({
  reducer: {
    location: locationReducer
  },
})