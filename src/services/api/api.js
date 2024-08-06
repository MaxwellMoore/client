const BASE_URL = "http://localhost:3001";

//? User Network Requests

// Create
export const addUser = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/api/register`, {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    });
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (e) {
    console.log(e);
  }
};
// Read
export const getCurrentUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/me`, {
      method: "GET",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (e) {
    console.log(e);
  }
};
export const getUser = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/api/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    });
    const jsonResponse = await response.json();
    return response;
  } catch (e) {
    console.log(e);
  }
};

//? Product Network Requests

// Create
export const addApp = async (payload, setIsLoading, setApplications) => {
  try {
    const response = await fetch("http://localhost:3001/api/products", {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...payload }),
    });
    const jsonResponse = await response.json();
    setApplications((prevApps) => [...prevApps, jsonResponse]);
  } catch (e) {
    console.log(e);
  } finally {
    setIsLoading(false);
  }
};
// Read
export const getApps = async (setIsLoading, setApplications) => {
  setIsLoading(true);

  try {
    const response = await fetch(
      `http://localhost:3001/api/products?_=${new Date().getTime()}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const apps = await response.json();
    setApplications(apps);
  } catch (e) {
    console.log(e);
  } finally {
    setIsLoading(false);
  }
};
export const getFilteredApps = async (
  filter,
  setIsLoading,
  setApplications
) => {
  setIsLoading(true);

  try {
    const response = await fetch(
      `http://localhost:3001/api/filter/products?_=${new Date().getTime()}`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ ...filter }),
      }
    );
    const filteredApps = await response.json();
    setApplications(filteredApps);
  } catch (e) {
    console.log(e);
  } finally {
    setIsLoading(false);
  }
};
export const getSortedApps = async (
  filter,
  sort,
  setIsLoading,
  setApplications
) => {
  setIsLoading(true);

  try {
    const response = await fetch(
      `http://localhost:3001/api/filter/products?_=${new Date().getTime()}`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ ...filter, ...sort }),
      }
    );
    const filteredApps = await response.json();
    setApplications(filteredApps);
  } catch (e) {
    console.log(e);
  } finally {
    setIsLoading(false);
  }
};
// Updated
export const updateApp = async (data) => {
  const { product_id, user_id, ...payload } = data;

  try {
    const response = await fetch(
      `http://localhost:3001/api/products/${product_id}`,
      {
        method: "PUT",
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ ...payload }),
      }
    );
  } catch (e) {
    console.log(e);
  }
};
// Delete
export const deleteApp = async (data) => {
  const { product_id } = data;

  try {
    const response = await fetch(
      `http://localhost:3001/api/products/${product_id}`,
      {
        method: "DELETE",
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
      }
    );
  } catch (e) {
    console.log(e);
  }
};
