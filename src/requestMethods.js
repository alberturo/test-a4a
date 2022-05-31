import axios from "axios";

const BASE_URL = "https://obscure-anchorage-32277.herokuapp.com/api";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";
// token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTJkNmRmZDllNTI2YzI5ZjlkNDM2MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mzk1MjcyMCwiZXhwIjoxNjU0MjExOTIwfQ.zVOiMFxNKdYrG7GUbgzQ4tSFshntdRPmG-P-GFxmBPM

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});