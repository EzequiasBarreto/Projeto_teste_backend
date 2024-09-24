import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PostagemService } from './postagem.service';
import { Postagem } from './postagem.entity/postagem.entity';

@Controller('postagens')
export class PostagemController {
  constructor(private readonly postagemService: PostagemService) {}

  @Get() //Obter todas as postagens que foram realizadas 
  findAll(): Promise<Postagem[]> {
    return this.postagemService.findAll();
  }


  @Get(':id') //Rota espefica para buscar uma postagem pelo ID 
  findOne(@Param('id') id: string): Promise<Postagem> {
    return this.postagemService.findOne(+id);
    }

  @Post() //Rota usada para criar uma nova postagem
  create(@Body() postagem: Postagem): Promise<Postagem> {
    return this.postagemService.create(postagem);
    }

  @Put(':id') //Tem como funcionabilidade atualziação de uma postagem já existente
  update(@Param('id') id: string, @Body() postagem: Postagem):
  Promise<Postagem> {
    return this.postagemService.update(+id, postagem);
    }

  @Delete(':id') //Essa rota é criada para deletar uma postagem
  delete(@Param('id') id: string): Promise<void> {
  return this.postagemService.remove(+id);
  }
}

