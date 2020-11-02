import React, { useState, useContext, useCallback } from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';
import { useEffect } from 'react';
import Loader from '../components/Loader';
import LinksList from '../components/LinksList';

export default () => {
    const { token } = useContext(AuthContext);
    const { makeRequest, isLoading } = useHttp();
    const [links, setLinks] = useState([]);

    const getLinks = useCallback(async () => {
        try {
            const responseLinks = await makeRequest(`/api/link/`, 'GET', null, { Authorization: `Bearer ${token}` });
            setLinks(responseLinks);
        } catch (e) {

        }
    }, [makeRequest, token]);

    useEffect(() => {
        getLinks();
    }, [getLinks]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            {!isLoading && links && <LinksList links={ links }/>}
        </>
    )
};