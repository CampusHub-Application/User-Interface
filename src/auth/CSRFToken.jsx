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
    const isStateChanging = true;

    const headers = {
        ...(options.headers || {}),
        'Accept': 'application/json',
        ...(isStateChanging && {
            'X-XSRF-TOKEN': getXsrfToken(),
        }),
    };

    // Perform the initial fetch
    const fetchRequest = fetch(url, {
        ...options,
        credentials: 'include',
        headers,
    });

    return fetchRequest.then(async (response) => {
        // Check if CSRF token is expired (status 419 or 401)
        if (response.status === 419 || response.status === 401) {
            console.warn("Session or CSRF token expired. Logging Out...");
            

            try {
                // Try refreshing the CSRF token
                const csrfRes = await fetch('/sanctum/csrf-cookie', {
                    credentials: 'include',
                });
    
                if (csrfRes.ok) {
                    // Retry original request after token refresh
                    headers['X-XSRF-TOKEN'] = getXsrfToken(); // get fresh token if updated
                    response = await fetchRequest;
                } else {
                    console.error("Failed to refresh CSRF token");
                }
            } catch (err) {
                console.error("Error during CSRF token refresh:", err);
            }
        }

        // Return the response if no CSRF issues
        return response;
    });

    // return fetch(url, {
    //     ...options,
    //     credentials: 'include',
    //     headers,
    // });
}

export default fetchWithCsrf;
export { getXsrfToken }