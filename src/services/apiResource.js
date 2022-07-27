import axios from "axios";

let baseURL = import.meta.env.VITE_APP_API_URL;

const http = axios.create({
    baseURL: baseURL,
    withCredentials: false,
    timeout: 900000,
    headers: {
        "Content-type": 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});

async function handleToken(config) {
    // if (store.state.authenticated && keycloak.isTokenExpired()) {
    //     try {
    //         await keycloak.updateToken();
    //         await store.dispatch("refreshToken", keycloak.token);
    //     } catch (error) {
    //         store.dispatch("logout");
    //         return Promise.reject(new Error(`${error.error_description}`));
    //     }
    // }
    // if (store.state.authenticated) {
    //     config.headers["Authorization"] = `Bearer ${store.state.token}`;
    // }
    return config;
}

const interceptorFunctions = [
    function (config) {
        return handleToken(config);
    },
    function (error) {
        return getErrorMessage(error);
    },
];

function getErrorMessage(error) {
    if (error.response) {
        // high level error (remote server)
        if (error.response.status === 403 || error.response.status === 404) {
            if ('title' in error.response.data) {
                return Promise.reject(new Error(error.response.data.title));
            }
            return Promise.reject(new Error(error.response.data.message));
        } else if (error.response.data && "detail" in error.response.data && error.response.status === 500) {
            return Promise.reject(new Error(error.response.data.detail));
        } else if (error.response.data && "title" in error.response.data) {
            return Promise.reject(new Error(error.response.data.title)); // Problem Detail: http://tools.ietf.org/html/rfc7807
        } else if (error.response.data && error.response.data.status === 409) {
            return Promise.reject(new Error(error.response.data.message));
        } else if (error.response.data && "message" in error.response.data) {
            return Promise.reject(new Error(error.response.data.message)); // Native error handling
        }
        return Promise.reject(
            new Error(`${error.response.status} - ${error.response.statusText}`)
        ); // No response data; only http status
    }
    const message = typeof error == "string" ? error : error.message;
    return Promise.reject(new Error(message)); // low level error (browser)
}

http.interceptors.response.use(...interceptorFunctions);
http.interceptors.request.use(...interceptorFunctions);

export { http };
