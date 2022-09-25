import axios from "axios";

const api = axios.create({
  baseURL: "https://be-voice-production.up.railway.app/api",
});

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
