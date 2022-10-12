// AUTH

export interface INewUser {
  username: string;
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  password: string;
}

// export interface IItem {
//   title: string;
//   destination: string;
// }

export interface IEdit {
  profilePhoto?: string;
  description?: string;
  location?: string;
  url?: string;
}

export interface IInput {
  placeholder: string;
  value: any;
  func: any;
  secureTextEntry?: boolean;
}

export interface IButton {
  title: string;
  func: any;
}

// Note User interface
export interface INoteUser {
  uid: string;
  username: string;
}

export interface INoteUpdatePost {
  title: string;
  description: string;
  voice_note_url_string: string;
  img_url_str: string;
  user: INoteUser;
  topic: string;
}
// DropdownPicker
export interface IDropdown {
  label: string;
  value: any;
}
