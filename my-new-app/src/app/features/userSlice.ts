import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface UserState {
    users: {
      id: string | null;
      name: string | null;
      email: string | null;
    };
  }

  const initialState: UserState = {
    users: {
      id: null,
      name: null,
      email: null,
    },
  };
  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      login(state, action: PayloadAction<{ id: string; name: string; email: string }>) {
        state.users.id = action.payload.id;
        state.users.name = action.payload.name;
        state.users.email = action.payload.email;
      },
      logout(state) {
        state.users.id = null;
        state.users.name = null;
        state.users.email = null;
      },
    },
  });
  
  export const { login, logout } = userSlice.actions;
  export default userSlice.reducer;