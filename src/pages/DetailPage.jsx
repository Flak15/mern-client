import React, { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import Loader from '../components/Loader';
import LinkCard from '../components/LinkCard';

export default () => {
    const { token } = useContext(AuthContext);
    const { makeRequest, isLoading } = useHttp();
    const [link, setLink] = useState(null);
    const { id } = useParams();

    const getLink = useCallback(async () => {
        try {
            const responseLink = await makeRequest(`/api/link/${id}`, 'GET', null, { Authorization: `Bearer ${token}` });
            setLink(responseLink);
        } catch (e) {

        }
    }, [id, makeRequest, token]);
    useEffect(() => {getLink()}, [getLink]);
    if (isLoading) {
        return <Loader />
    }
    return (
        <>
            {!isLoading && link && <LinkCard link={link}/>}
        </>
    )
};