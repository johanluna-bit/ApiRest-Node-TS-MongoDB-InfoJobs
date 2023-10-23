export interface IUser  {
    name: String;
    lastName: String;
    email: String;
    password: String;
    description: String;
    typeUser: "freelancer" | "client";
}