import axios from "axios";

const api = axios.create({
  baseURL: "https://be-voice-production.up.railway.app/api",
});

// AUTH

interface INewUser {
  username: string;
  email: string;
  password: string;
}

interface IUser {
  email: string;
  password: string;
}

export function postUser(username: string, email: string, password: string) {
  const newUser: INewUser = {
    username: username,
    email: email,
    password: password,
  };
  return api
    .post("/auth/signup", newUser)
    .then((data) => {
      console.log(data, "signup res");
      return data;
    })
    .catch((err) => {
      console.log(err, "err");
    });
}

export function postLogin(email: string, password: string) {
  const user: IUser = {
    email: email,
    password: password,
  };
  return api
    .post("/auth/connect", user)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err, "err");
    });
}

export function fetchSignOutUser() {
  return api.get("/auth/disconnect").then(({ data }) => {
    return data.msg;
  });
}

export function fetchCurrentUser() {
  return api.get("/auth/connected").then(({ data }) => {
    const { user, userId } = data;
    console.log(user, "current user ress");
    console.log(userId, "current user id");
    return [user, userId];
  });
}

// TOPICS

export function fetchTopics() {
  return api.get("/topics").then(({ data }) => {
    return data.topics;
  });
}

export function fetchTopic(slug: string) {
  return api.get(`/topics/${slug}`).then(({ data }) => {
    return data.topic[0];
  });
}

// USERS

export function fetchUsers() {
  return api.get("/users").then(({ data }) => {
    return data.users;
  });
}

export function fetchUser(username: string) {
  return api.get(`api/users/${username}`).then(({ data }) => {
    return data.user;
  });
}

export function patchUserByUID(uid: string) {
  return api.patch(`/api/users/${uid}`).then(({ data }) => {
    return data.response;
  });
}
