import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { MembroService } from './membro.service';
import { Membro } from './membro.entity/membro.entity';

/**
 * Controlador para gerenciar operações relacionadas a membros.
 * Fornece rotas para criar, ler, atualizar e deletar membros.
 */
@Controller('membros')
export class MembroController {
  constructor(private readonly membroService: MembroService) {}

  /**
   * Recupera todos os membros.
   * @returns {Promise<Membro[]>} Uma lista de todos os membros.
   */
  @Get()
  findAll() {
    return this.membroService.findAll();
  }

  /**
   * Recupera um membro específico com base no ID fornecido.
   * @param {string} id - O ID do membro a ser buscado.
   * @returns {Promise<Membro>} O membro correspondente ao ID.
   */
  @Get(':id') // Rota específica para buscar um membro pelo ID
  findOne(@Param('id') id: string): Promise<Membro> {
    return this.membroService.findOne(+id);
  }

  /**
   * Cria um novo membro.
   * @param {Membro} membro - O objeto do membro a ser criado, passado no corpo da requisição.
   * @returns {Promise<Membro>} O membro criado.
   */
  @Post() // Rota usada para criar um novo membro
  create(@Body() membro: Membro): Promise<Membro> {
    return this.membroService.create(membro);
  }

  /**
   * Atualiza um membro existente com base no ID fornecido.
   * @param {string} id - O ID do membro a ser atualizado.
   * @param {Membro} membro - O objeto do membro atualizado, passado no corpo da requisição.
   * @returns {Promise<Membro>} O membro atualizado.
   */
  @Put(':id') // Tem como funcionalidade a atualização de um membro já existente
  update(@Param('id') id: string, @Body() membro: Membro): Promise<Membro> {
    return this.membroService.update(+id, membro);
  }

  /**
   * Deleta um membro específico com base no ID fornecido.
   * @param {string} id - O ID do membro a ser deletado.
   * @returns {Promise<void>} Nenhum conteúdo é retornado após a exclusão.
   */
  @Delete(':id') // Essa rota é criada para deletar um membro
  delete(@Param('id') id: string): Promise<void> {
    return this.membroService.remove(+id);
  }
}
