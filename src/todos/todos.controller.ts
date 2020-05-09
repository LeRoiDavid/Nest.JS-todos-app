import { Controller, Get, Param, Post, Body, Patch } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Itodos } from 'src/todos/interfaces/Itodos.interface';
import { CreateTodos } from './dto/todos.dto';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Get()
    findAll(): Itodos[]{
        return this.todosService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string): Itodos{
       return this.todosService.findOne(id)
    }

    @Post()
    createTodos(@Body() newTodos: CreateTodos): CreateTodos{
       return this.todosService.create(newTodos)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() todo: CreateTodos){
        console.log("Patch")
        return this.todosService.update(id, todo)
    }
    
    

    
}
