import { useEffect, useState } from 'react';
import { useAuthStore } from '../../hooks';

export const PlaylistEmbed = () => {
    const { activePlaylistId } = useAuthStore();

    const [isLoading, setIsLoading] = useState(true);

    //only show the emded if a timeout has passed, not my fault spotify is kinda slow
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Adjust the timeout value as needed

        return () => clearTimeout(timeout);
    }, []);

    if (isLoading || !activePlaylistId) {
        return null; // or render a loading state if desired
    }

    return (
        <div
            style={{
                marginTop: '1rem',
                maxWidth: '90%',
                display: 'flex',
                justifyContent: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
        >
            <iframe
                width="100%"
                height="352"
                src={`https://open.spotify.com/embed/playlist/${activePlaylistId}?utm_source=generator`}
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
        </div>
    );
};
