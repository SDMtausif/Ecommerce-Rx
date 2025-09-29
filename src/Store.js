import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from './slice/cartSlice.js'

export default configureStore({
  reducer: {
    cartDetails: cartSlice
  }
})