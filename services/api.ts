import axios from "axios";
import { INewUser, IUser, IEdit } from "../types/types";

const api = axios.create({
  baseURL: "https://be-voice-production.up.railway.app/api",
  // baseURL: "http://localhost:7090/api",
});

// AUTH

export function postUser(username: string, email: string, password: string) {
  const newUser: INewUser = {
    username: username,
    email: email.toLowerCase(),
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
    email: email.toLowerCase(),
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
  return api
    .get("/auth/disconnect")
    .then(({ data }) => {
      return data.msg;
    })
    .catch((err) => {
      console.log(err, "err");
    });
}

export function fetchCurrentUser() {
  return api
    .get("/auth/connected")
    .then(({ data }) => {
      const { user, userId } = data;
      console.log(user, "current user ress");
      console.log(userId, "current user id");
      return [user, userId];
    })
    .catch((err) => {
      console.log(err, "err");
    });
}

// TOPICS

export function fetchTopics() {
  return api
    .get("/topics")
    .then(({ data }) => {
      return data.topics;
    })
    .catch((err) => {
      console.log(err, "err");
    });
}

export function fetchTopic(slug: string) {
  return api
    .get(`/topics/${slug}`)
    .then(({ data }) => {
      return data.topic[0];
    })
    .catch((err) => {
      console.log(err, "err");
    });
}

// USERS

export function fetchUsers() {
  return api
    .get("/users")
    .then(({ data }) => {
      return data.users;
    })
    .catch((err) => {
      console.log(err, "err");
    });
}

export function fetchUserByUsername(username: string) {
  return api
    .get(`/users/username/${username}`)
    .then(({ data }) => {
      return data.user;
    })
    .catch((err) => {
      console.log(err, "err");
    });
}

export function fetchUserByUID(uid: string) {
  return api.get(`/users/${uid}`).then(({ data }) => {
    return data;
  });
}

export function patchUserByUID(uid: string, info: IEdit) {
  return api.patch(`/users/${uid}`, info).then(({ data }) => {
    return data.response;
  });
}

// test patch avatar
export function fetchS3URL() {
  return api.get("/s3/upload-url").then(({ data }) => {
    console.log(data, "fetch s3 api response");
    return data;
  });
}

export function putImageToBucket(url: string, formData: any) {
  return api
    .put(url, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then(({ data }) => {
      return data;
    });
}

// NOTES

export function fetchNotes() {
  return api.get("/notes").then(({ data }) => {
    console.log(data, "fetch noytes data ");
    return data.notes;
  });
}

export function postNote(note: object) {
  return api
    .post("/notes/post", note)
    .then(({ data }) => {
      return data.response;
    })
    .catch((err) => {
      console.log(err, "err");
    });
}
