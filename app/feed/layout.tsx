'use client';

import { useEffect, useState } from 'react';

interface FeedLayoutProps {
    children: React.ReactNode;
}

function FeedLayout(props: FeedLayoutProps) {
    const { children } = props;

    const [status, setStatus] = useState('mounting...');

    useEffect(() => {
        setTimeout(() => {
            setStatus('mounted.');
        }, 1000);
    }, []);

    return (
        <div className='box layout'>
            <h4>{`FeedLayout: ${status}`}</h4>
            <div style={{ padding: 8 }}>{children}</div>
        </div>
    );
}

export default FeedLayout;
