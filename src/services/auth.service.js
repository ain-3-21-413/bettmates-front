import axios from "axios";

async function login(data) {
    return await axios.post("/auth/login", data);
}

export { login };
