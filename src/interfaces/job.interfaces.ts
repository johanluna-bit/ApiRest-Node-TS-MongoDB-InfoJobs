export interface IJob {
    id: number;
    title: string;
    description: string;
    budged: Number;
    publicationDate: Date;
    state: boolean;
    typeUser: "freelancer" | "client";
    job: [];
    proposal: [];
};