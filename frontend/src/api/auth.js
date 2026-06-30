import API_BASE from "./api";

// LOGIN

export async function login(email, password) {

    const body = new URLSearchParams();

    body.append("username", email);
    body.append("password", password);

    const response = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
    });

    if (!response.ok) {

        const error = await response.json();

        throw new Error(error.detail || "Login failed");

    }

    return await response.json();

}

// REGISTER

export async function register(name, email, password) {

    const response = await fetch(`${API_BASE}/auth/register`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            name,
            email,
            password,
        }),

    });

    if (!response.ok) {

        const error = await response.json();

        throw new Error(error.detail || "Registration failed");

    }

    return await response.json();

}