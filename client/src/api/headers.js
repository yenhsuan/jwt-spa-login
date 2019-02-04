const token = localStorage.getItem('token');

export const authHeader = !token ? { Authorization: `Bearer ${token}` } : {};
export const uploadHeader = {};
