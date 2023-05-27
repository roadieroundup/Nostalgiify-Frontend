import { Layout } from 'antd';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Callback, HomePage } from '../nostalgiify';

export const AppRouter = () => {
    return (
        <>
            <Layout
                className="glassexp"
                style={{
                    minHeight: '100vh',
                    textAlign: 'center',
                }}
            >
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/callback" element={<Callback />} />
                    <Route
                        path="/*"
                        element={<Navigate to="/" replace={true} />}
                    />
                </Routes>
            </Layout>
        </>
    );
};
