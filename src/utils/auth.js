//export const BASE_URL = 'https://api.lenin.mesto.students.nomoredomains.icu';
export const BASE_URL = 'http://localhost:3000';

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        mode: "cors",
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "name": name, "email": email, "password": password, })
    })
        .then((response) => {
            if (response.status === "200") {
                return response.json();
            } else {
                if (response.status === 409) {
                    const consoleError = { message: `Почтовый адрес ${email} не уникальный` };
                    return consoleError;
                }
                return response;
            }
        })

};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "email": email, "password": password })
    })
        .then((response) => { return response.json() })
        .then((data) => {
            if (data.token) {
                localStorage.setItem('token', data.token);
                return data;
            } else {
                return { token: false, message: data.message };
            }
        })
        .catch(err => console.log(err))
};

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
        .then(res => res.json())
        .then(data => data)
}