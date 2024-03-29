import { createSlice } from '@reduxjs/toolkit';

const emptyState = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  token: '',
  isLogged: false,
};

const initialStateLocalStorage = JSON.parse(localStorage.getItem('userData'));

const userSlice = createSlice({
  name: 'user',
  initialState: initialStateLocalStorage || emptyState,
  reducers: {
    updateUserData(state, action) {
      const newUserData = action.payload;
      const stateLocalStorage = structuredClone({ ...state });

      state.id = newUserData.id;
      stateLocalStorage.id = newUserData.id;
      state.firstName = newUserData.firstName;
      stateLocalStorage.firstName = newUserData.firstName;
      state.lastName = newUserData.lastName;
      stateLocalStorage.lastName = newUserData.lastName;
      state.email = newUserData.email;
      stateLocalStorage.email = newUserData.email;

      localStorage.removeItem('userData');
      localStorage.setItem('userData', JSON.stringify(stateLocalStorage));
    },

    updateToken(state, action) {
      const newToken = action.payload;
      const stateLocalStorage = structuredClone({ ...state });

      state.token = newToken;
      stateLocalStorage.token = newToken;

      localStorage.removeItem('userData');
      localStorage.setItem('userData', JSON.stringify(stateLocalStorage));
    },

    logInState(state) {
      const stateLocalStorage = structuredClone({ ...state });

      state.isLogged = true;
      stateLocalStorage.isLogged = true;

      localStorage.removeItem('userData');
      localStorage.setItem('userData', JSON.stringify(stateLocalStorage));
    },

    reset() {
      //NO SE PUEDE HACER UNA ASIGNACION DIRECTA DE STATE
      localStorage.removeItem('userData');
      return emptyState;
    },
  },
});

export const { updateUserData, updateToken, logInState, reset } = userSlice.actions;

export default userSlice.reducer;
