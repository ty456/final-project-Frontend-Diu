export class BaseAPI {
    baseURL;

    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    // token(ctx) {
    //     const { token = null } = parseCookies(ctx);
    //     return token;
    // }

    async get(url, ctx) {
        const res = await fetch(`${this.baseURL}/${url}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json',
                // Authorization: this.token(ctx),
            },
        });

        return await res.json();
    }

    async post(url, payload, ctx) {
        const res = await fetch(`${this.baseURL}/${url}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json',
                // Authorization: this.token(ctx),
            },
            body: JSON.stringify(payload),
        });
        return await res.json();
    }

    async put(url, payload, ctx) {
        const res = await fetch(`${this.baseURL}/${url}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json',
                // Authorization: this.token(ctx),
            },
            body: JSON.stringify(payload),
        });

        return await res.json();
    }

    async delete(url, payload, ctx) {
        const res = await fetch(`${this.baseURL}/${url}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json',
                // Authorization: this.token(ctx),
            },
            body: JSON.stringify(payload),
        });

        return await res.json();
    }

    async image(url, payload, ctx) {
        const res = await fetch(`${this.baseURL}/${url}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                // Authorization: this.token(ctx),
            },
            body: payload,
        });

        return await res.json();
    }
}