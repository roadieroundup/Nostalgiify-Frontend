import { Typography } from 'antd';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAuthStore } from '../../hooks';
import { HomePage } from '../pages';

const { Title } = Typography;

export const Callback = () => {
    const [searchParams] = useSearchParams();
    const { startCallback, ok, message} = useAuthStore();

    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const error = searchParams.get('error');

    useEffect(() => {
        startCallback(code, error);
    }, []);
    return <HomePage />;
};
