import { combineReducers, configureStore } from "@reduxjs/toolkit";
import recommendReducer from './BooksSlice'
const rootReducer = combineReducers({
    book:recommendReducer
    
})

const store = configureStore({
    reducer:rootReducer
})

export default store