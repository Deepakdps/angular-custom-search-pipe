export interface User {
  gender: string;
  name: Name;
  email: string;
  username: string;
  password: string;
  dob: string;
  phone: string;
  cell?: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}
