// src/api.js
export const serverCalls = {
  get: async () => {
    const response = await fetch(`https://alexsrangerdrones121.glitch.me/api/drones`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const data = await response.json();
    return data;
  },
  // Add other API calls for POST, PUT, DELETE as needed...
};

