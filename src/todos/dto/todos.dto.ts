import { Itodos } from "../interfaces/Itodos.interface";

export class CreateTodos implements Itodos{
    id: number;
    title: string;
    done: boolean;
    description?: string;
}