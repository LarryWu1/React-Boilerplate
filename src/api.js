export const postJSON = async (url, payload) => {
    try {
        const data = await fetch(`${process.env.REACT_APP_BACKEND_URL}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: localStorage.authToken,
            },
            body: JSON.stringify(payload),
        });
        const response = await data.json();
        if (data.status === 200) {
            return response;
        }
        return { status: data.status, error: response.error };
    } catch (err) {
        return { error: 'Oops, something went wrong. Sorry about that!' };
    }
};

export const putJSON = async (url, payload) => {
    try {
        const data = await fetch(`${process.env.REACT_APP_BACKEND_URL}${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: localStorage.authToken,
            },
            body: JSON.stringify(payload),
        });
        const response = await data.json();
        if (data.status === 200) {
            return response;
        }
        return { status: data.status, error: response.error };
    } catch (err) {
        return { error: 'Oops, something went wrong. Sorry about that!' };
    }
};

export const deleteJSON = async (url, payload) => {
    try {
        const data = await fetch(`${process.env.REACT_APP_BACKEND_URL}${url}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: localStorage.authToken,
            },
            body: JSON.stringify(payload),
        });
        const response = await data.json();
        if (data.status === 200) {
            return response;
        }
        return { status: data.status, error: response.error };
    } catch (err) {
        return { error: 'Oops, something went wrong. Sorry about that!' };
    }
};

export const getJSON = async (url) => {
    try {
        const data = await fetch(`${process.env.REACT_APP_BACKEND_URL}${url}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: localStorage.authToken,
            },
        });
        const response = await data.json();
        if (data.status === 200) {
            return response;
        }
        return { status: data.status, error: response.error };
    } catch (err) {
        return { error: 'Oops, something went wrong. Sorry about that!' };
    }
};
