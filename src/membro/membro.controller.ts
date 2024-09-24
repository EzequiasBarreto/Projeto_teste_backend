import { Controller, Get, Post, Put, Delete, Body,Param } from '@nestjs/common';
import { MembroService } from './membro.service';
import { Membro } from './membro.entity/membro.entity';

@Controller('membros')
export class MembroController {
  constructor(private readonly membroService: MembroService) {}

  @Get()
  findAll() {
    return this.membroService.findAll();
  }

  @Get(':id') //Rota espefica para buscar uma membro pelo ID 
  findOne(@Param('id') id: string): Promise<Membro> {
    return this.membroService.findOne(+id);
    }

  @Post() //Rota usada para criar uma nova membro
  create(@Body() membro: Membro): Promise<Membro> {
    return this.membroService.create(membro);
    }

  @Put(':id') //Tem como funcionabilidade atualziação de uma membro já existente
  update(@Param('id') id: string, @Body() membro: Membro):
  Promise<Membro> {
    return this.membroService.update(+id, membro);
    }

  @Delete(':id') //Essa rota é criada para deletar uma membro
  delete(@Param('id') id: string): Promise<void> {
  return this.membroService.remove(+id);
  }
}
