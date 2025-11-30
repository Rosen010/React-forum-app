import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";

const baseUrl = 'http://localhost:3030';

export default function useRequest(endpoint, initialState) {
    const { user, isAuthenticated } = useContext(UserContext);
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const request = async (endpoint, method, data, config = {}) => {
        let options = {};

        if (method) {
            options.method = method;
        }

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            };

            options.body = JSON.stringify(data);
        }

        if (config.accessToken || isAuthenticated) {
            options.headers = {
                ...options.headers,
                'X-Authorization': config.accessToken || user.accessToken,
            }
        }

        const response = await fetch(`${baseUrl}${endpoint}`, options);

        if (!response.ok) {
            console.log(response);
            throw response.statusText;
        }

        if (response.status === 204) {
            return {};
        }

        const result = await response.json();

        return result;
    }

    useEffect(() => {
        if (!endpoint) {
            return;
        }

        setLoading(true);
        request(endpoint)
            .then(result => setData(result))
            .catch(err => alert(err))
            .finally(() => setLoading(false));
    }, [endpoint]);

    return {
        request,
        data,
        setData,
        loading,
    }
}