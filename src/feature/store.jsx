import {configureStore} from '@reduxjs/toolkit'
import productsReducer from './cart/CartSlice'

export const store = configureStore({
    reducer: {
        products : productsReducer
    },
})


