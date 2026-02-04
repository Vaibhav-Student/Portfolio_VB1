import React, { useEffect, useState } from 'react';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500); // 500ms delay as per original script

        // Simulate window load
        const handleLoad = () => {
            // In React, we often just rely on component mount, but if we want to wait for assets:
            // window.addEventListener('load', ...) but since we are SPA, component mount is close enough or use state.
            // The original script used window load + 500ms.
        };

        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="preloader" className={!loading ? 'hidden' : ''}>
            <div className="loader"></div>
        </div>
    );
};

export default Preloader;
