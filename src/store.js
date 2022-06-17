import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from '../src/Features/cartSlice'
import authReducer from '../src/Features/authSlice'
import themeReducer from '../src/Features/themeSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  theme: themeReducer,
}

)
const persistConfig = {
  key: 'rot',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)
export default store;