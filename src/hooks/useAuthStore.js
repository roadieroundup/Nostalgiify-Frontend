import { notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NostalgiifyApi from '../api/NostalgiifyApi';
import {
    onClearLoading,
    onLoading,
    onLogin,
    onLogout,
    onSetActivePlaylistId,
} from '../store';

export const useAuthStore = () => {
    const { loading, user, status, activePlaylistId } = useSelector(
        state => state.auth
    );

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const startSpotifyLogin = async () => {
        dispatch(onLoading());
        try {
            await NostalgiifyApi.get('/nostalgiify/start');
        } catch (error) {
            console.log(error);
        }
    };

    const startCallback = async (code, error) => {
        dispatch(onLoading());

        try {
            const { data } = await NostalgiifyApi.post(
                '/nostalgiify/callback',
                {
                    code,
                    error,
                }
            );
            dispatch(
                onLogin({
                    id: data.id,
                    access_token: data.access_token,
                })
            );

            notification.success({
                message: data.message,
                placement: 'bottomRight',
                closeIcon: null,
                duration: 3,
                style: {
                    backgroundColor: '#252525',
                    color: '#ffffff',
                },
            });

            navigate('/');
        } catch (error) {
            notification.error({
                message: 'Please authorize Nostalgiify 😭',
                placement: 'bottomRight',
                closeIcon: null,
                duration: 3,
                style: {
                    backgroundColor: '#252525',
                    color: '#ffffff',
                },
            });

            navigate('/');
        }
        dispatch(onClearLoading());
    };

    const startCreatePlaylist = async ({ year, month, day }) => {
        dispatch(onLoading());

        notification.success({
            message: 'Please wait while we are creating your playlist 🎵',
            placement: 'bottomRight',
            closeIcon: null,
            duration: 3,
            style: {
                backgroundColor: '#252525',
                color: '#ffffff',
            },
        });

        try {
            const { data } = await NostalgiifyApi.post(
                '/nostalgiify/createplaylist',
                {
                    access_token: user.access_token,
                    user_id: user.id,
                    year,
                    month,
                    day,
                }
            );
            console.log(data);
            dispatch(onSetActivePlaylistId(data.id));
        } catch (error) {
            console.log(error.response.data);
            notification.error({
                message: 'Error creating playlist 😭',
                placement: 'bottomRight',
                closeIcon: null,
                duration: 3,
                style: {
                    backgroundColor: '#252525',
                    color: '#ffffff',
                },
            });
        }
        dispatch(onClearLoading());
    };

    const startSpotifyLogout = async () => {
        dispatch(onChecking());
        dispatch(onLogout());
    };

    return {
        //props
        loading,
        user,
        status,
        activePlaylistId,

        //actions
        startSpotifyLogin,
        startCallback,
        startCreatePlaylist,
        startSpotifyLogout,
    };
};
