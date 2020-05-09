import { Injectable, HttpException } from '@nestjs/common';
import { Itodos } from 'src/todos/interfaces/Itodos.interface';
import { CreateTodos } from './dto/todos.dto';

@Injectable()
export class TodosService {
    
    private todos: Itodos[] = 
    [
        {
            id: 1, 
            title: "First to do",
            done: true,
            description: "blalalla",
        }, 
        {
            id: 2, 
            title: "bread",
            done: false,
            description: "Go to the shop for buying bred",
        }, 
        {
            id: 3, 
            title: "Nest app",
            done: false,
            description: "Create my first Nest.js applition",
        }, 
        {
            id: 4, 
            title: "Diner",
            done: true,
            description: "Eate chiken",
        }
    ]

    findAll(): Itodos[]{
        return this.todos
    }

    findOne(id: string): Itodos{
        return this.todos.find( todo => todo.id === Number(id))
    }

    create(todos: CreateTodos): CreateTodos{
        this.todos = [...this.todos, todos]
        return todos
    }

    update(id: string, todo: CreateTodos) : CreateTodos{
        let index = this.todos.findIndex( t => t.id === Number(id))
        console.log(index)
        if(index > -1) {
            this.todos[index] = todo
           
            return todo
        }else{
            throw new HttpException('Todo Not Found ', 404);
            
        }
    }
}
