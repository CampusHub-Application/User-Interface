function getXsrfToken() {
    const name = 'XSRF-TOKEN=';
    const cookie = document.cookie
        .split('; ')
        .find(row => row.startsWith(name));
    
    if (!cookie) return '';

    try {
        const token = decodeURIComponent(cookie.substring(name.length));
        return token;
    } catch {
        return cookie.substring(name.length);
    }
}

function fetchWithCsrf(url, options = {}) {
    const method = (options.method || 'GET').toUpperCase();
    const isStateChanging = ['POST', 'PUT', 'PATCH', 'DELETE'].includes(method);

    const headers = {
        ...(options.headers || {}),
        'Accept': 'application/json',
        ...(isStateChanging && {
            'X-XSRF-TOKEN': getXsrfToken(),
        }),
    };

    return fetch(url, {
        ...options,
        credentials: 'include',
        headers,
    });
}

export default fetchWithCsrf;
export { getXsrfToken }