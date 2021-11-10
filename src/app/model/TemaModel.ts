import { PostagemModel } from "./PostagemModel";

export class TemaModel {
    public id: number;
    public tema: string;
    public postagem: PostagemModel[];
}