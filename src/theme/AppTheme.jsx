import { ConfigProvider, theme } from 'antd';

export const AppTheme = ({ children }) => {
    const { darkAlgorithm, compactAlgorithm } = theme;

    return (
        <ConfigProvider
            theme={{
                token: {
                    fontFamily: 'Jost, sans-serif',
                },
                algorithm: [darkAlgorithm, compactAlgorithm],
            }}
        >
            {children}
        </ConfigProvider>
    );
};
