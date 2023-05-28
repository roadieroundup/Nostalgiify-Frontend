import { GithubOutlined } from '@ant-design/icons';
import { Button, Col, Layout, Row, Typography } from 'antd';
import { useAuthStore } from '../../hooks';
import { CreatePlaylistForm, JZIcon, PlaylistEmbed } from '../components';
const { Title } = Typography;
const { Footer, Content } = Layout;

export const HomePage = () => {
    const { status, loading, activePlaylistId } = useAuthStore();

    const handleLogin = () => {
        window.location.href =
            'https://nostalgiify-backend-production.up.railway.app/api/nostalgiify/start';
    };

    return (
        <>
            <Content>
                <Title
                    style={{
                        marginTop: '1rem',
                    }}
                >
                    Nostalgiify
                </Title>
                <Row justify="center">
                    <Col span={20}>
                        <Title
                            level={4}
                            style={{
                                marginTop: '1rem',
                            }}
                        >
                            Travel through time with music. Nostalgiify creates
                            personalized playlists featuring the top songs from
                            any date you choose. Rediscover the past and indulge
                            in nostalgic melodies.
                        </Title>
                    </Col>
                </Row>

                {status == 'logged' ? (
                    <>
                        <CreatePlaylistForm />
                        {activePlaylistId && <PlaylistEmbed />}
                    </>
                ) : (
                    <Button
                        size="large"
                        type="primary"
                        icon={
                            <i
                                className="bi bi-spotify"
                                style={{
                                    fontSize: '1rem',
                                    color: '#ffff',
                                }}
                            ></i>
                        }
                        style={{
                            background: '#1DB954',
                        }}
                        onClick={handleLogin}
                        loading={loading}
                    >
                        Login
                    </Button>
                )}
            </Content>
            <Footer className="glassexp">
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Title level={5}>
                        Made with
                    </Title>
                    <JZIcon
                        className="pulse"
                        style={{
                            marginTop: '-0.5rem',
                            color: '#ff0000',
                        }}
                    />
                    <Title level={5}>
                        in 🇨🇷
                    </Title>
                </div>
                <GithubOutlined
                    className="pulse"
                    style={{
                        fontSize: '2rem',
                    }}
                    onClick={() => {
                        window.open('https://github.com/roadieroundup');
                    }}
                />
            </Footer>
        </>
    );
};
