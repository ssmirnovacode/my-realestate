//const baseUrl = 'http://localhost:3001/';
const baseUrl = 'https://myrealestate-api.herokuapp.com/';

// Properties
export const getItems = async (endpoint) => {
    const res = await fetch(baseUrl + 'properties/' + endpoint);
    if (!res.ok) {
        throw new Error('Could not fetch properties');
    }
    return await res.json();
}

export const getItemById = async (id) => {
    const res = await fetch(baseUrl + 'properties/' + id);
    if (!res.ok) {
        throw new Error('Could not fetch selected property');
    }
    return await res.json();
}

// Reviews
export const getFeedback = async () => {
    const res = await fetch(baseUrl + 'feedback');
    if (!res.ok) {
        throw new Error('Could not fetch reviews');
    }
    return await res.json();
}

export const postFeedback = async (data) => {
    const res = await fetch(baseUrl + 'feedback', {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        throw new Error('Server is not available. Try again later');
    }
    return await res.json();
}

// Requests and contacts
export const postRequest = async (data, endpoint) => {
    const res = await fetch(baseUrl + endpoint, {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        console.log('Server is not available. Try again later');
        return;
        //throw new Error('Server is not available. Try again later');
    }
    return await res.json();
}