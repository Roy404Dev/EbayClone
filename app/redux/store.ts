import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './features/categories/categorySlice'

export default configureStore({
  reducer: {
    category: categorySlice
  }
})