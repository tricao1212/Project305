import {configureStore, createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'UserRedux',
  initialState: {user: null},
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: state => {
      state.user = null;
    },
  },
});

const accountSlice = createSlice({
  name: 'AccountRedux',
  initialState: {account: null},
  reducers: {
    setAccount: (state, action) => {
      state.account = action.payload;
    },
    removeAccount: state => {
      state.account = null;
    },
  },
});

export const {setUser, removeUser} = userSlice.actions;
export const {setAccount, removeAccount} = accountSlice.actions;

const store = configureStore({
  reducer: {
    UserRedux: userSlice.reducer,
  },
  reducer: {
    AccountRedux: accountSlice.reducer,
  },
});

export default store;
