import { Button, DatePicker, Form, Typography, notification } from 'antd';
import { useAuthStore } from '../../hooks';
import { useForm } from 'antd/es/form/Form';
const { Title } = Typography;

export const CreatePlaylistForm = () => {

    const { startCreatePlaylist, loading } =
        useAuthStore();

    const [form] = useForm();

    const handleCreatePlaylist = () => {
        try {
            const selectedDate = form
                .getFieldValue('datePicker')
                .format('YYYY-MM-DD');
            const year = selectedDate.split('-')[0];
            const month = selectedDate.split('-')[1];
            const day = selectedDate.split('-')[2];
            console.log(year, month, day);
            startCreatePlaylist({ year, month, day });
            form.resetFields();
        } catch (error) {
            notification.error({
                message: 'Select a date!',
                placement: 'bottomRight',
                closeIcon: null,
                duration: 3,
                style: {
                    backgroundColor: '#252525',
                    color: '#ffffff',
                },
            });
        }
    };

    const disabledDate = current => current && current > new Date();

    return (
        <>
            <Title level={5}>Pick a date</Title>
            <Form form={form}>
                <Form.Item name="datePicker">
                    <DatePicker size="large" disabledDate={disabledDate} />
                </Form.Item>
                <Button
                    size="large"
                    type="primary"
                    style={{
                        background: '#1DB954',
                        marginTop: '1rem',
                    }}
                    onClick={handleCreatePlaylist}
                    loading={loading}
                >
                    Create Playlist!
                </Button>
            </Form>
        </>
    );
};
