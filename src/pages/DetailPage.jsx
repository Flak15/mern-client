import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default () => {
    const [link, setLink] = useState(null);
    const { id } = useParams();
    return (
        <div>
            <h1>Detail Page</h1>
            <div>Link id: {id}</div>
        </div>
    )
};