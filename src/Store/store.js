import { configureStore, combineReducers } from '@reduxjs/toolkit';
import favoritesReducer from '../Reducers/favoritesSlice'
import cartReducer from '../Reducers/cartSlice'


const rootReducer = combineReducers({
 Cart_store: cartReducer,
  favorites_store: favoritesReducer,
});


 const store = configureStore({

  reducer: rootReducer,
})

export default store;