import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false, // true | false
        user: {}, // { id, access_token }
        status: 'not-logged', //  'logged' | 'not-logged'
        activePlaylistId: null,
    },

    reducers: {
        onLoading: state => {
            state.loading = true;
        },
        onClearLoading: state => {
            state.loading = false;
        },
        onLogin: (state, action) => {
            state.user = action.payload;
            state.status = 'logged';
        },
        onLogout: state => {
            state.user = {};
            state.status = 'not-logged';
        },

        onSetActivePlaylistId: (state, action) => {
            state.activePlaylistId = action.payload;
        },
        onClearActivePlaylistId: state => {
            state.activePlaylistId = null;
        },
    },
});

export const {
    onLoading,
    onClearLoading,
    onLogin,
    onLogout,

    onSetActivePlaylistId,
    onClearActivePlaylistId,
} = authSlice.actions;
