import Icon from '@ant-design/icons';

const SVG = () => {
    return (
        <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1080 1080"
            width="3em"
            height="3em"
            style={{
                
            }}
            fill="currentColor"
        >
            <path d="m406.1 788.4q16.8 7.2 36.8 7.2 18.4 0 36-15.2 17.6-16 17.6-53.6v-588.8h96.8v605.6q0 36-11.2 61.6-10.4 25.6-30.4 42.4-20 16.8-47.2 24.8-27.2 7.2-58.4 7.2-24.8 0-48.8-6.4-23.2-7.2-40.8-16.8-17.6-9.6-28-18.4l50.4-69.6q10.4 12 27.2 20z" />
            <path d="m717.1 304.8l3.1 336-290-207.7 1.8 190.4-80 0.7-3.2-344 290 211.7-1.7-186.4z" />
        </svg>
    );
};

export const JZIcon = props => {
    return <Icon component={SVG} {...props} />;
};
