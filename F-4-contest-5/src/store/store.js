import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from './moviesSlice'
const store = configureStore({
    reducer: moviesSlice,
  })
  
  export default store