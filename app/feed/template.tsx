'use client';

import { useEffect, useState } from 'react';

interface FeedTemplateProps {
    children: React.ReactNode;
}

function FeedTemplate(props: FeedTemplateProps) {
    const { children } = props;

    const [status, setStatus] = useState('mounting...');

    useEffect(() => {
        setTimeout(() => {
            setStatus('mounted.');
        }, 1000);
    }, []);

    return (
        <div className='box template'>
            <h4>{`FeedTemplate: ${status}`}</h4>
            <div style={{ padding: 8 }}>{children}</div>
        </div>
    );
}

export default FeedTemplate;
