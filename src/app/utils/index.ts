import { User } from "../models/user";

export function restructure(Obj: any): User {
  const newOBj: any = {
    username: Obj.username,
    phone: Obj.phone,
    password: Obj.password,
    gender: Obj.gender,
    email: Obj.email,
    dob: Obj.dob
  };
  const name = { title: Obj.title, first: Obj.first, last: Obj.last };
  newOBj.name = name;
  return newOBj;
}
