const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || (import.meta.env.PROD ? "https://coinbase-clone-backend-yxt2.onrender.com" : "http://localhost:5001");

const parseBody = async (response) => {
  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return response.json();
  }
  return response.text();
};

const request = async (path, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  const data = await parseBody(response);

  if (!response.ok) {
    const error = new Error(data?.message || response.statusText || "Request failed");
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
};

export const api = {
  get: (path) => request(path),
  post: (path, body) => request(path, {
    method: "POST",
    body: JSON.stringify(body),
  }),
};

export { API_BASE_URL };
