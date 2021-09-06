const baseUrl = 'http://localhost:3001/';

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

export const getFeedback = async () => {
    const res = await fetch(baseUrl + 'feedback/');
    if (!res.ok) {
        throw new Error('Could not fetch reviews');
    }
    return await res.json();
}