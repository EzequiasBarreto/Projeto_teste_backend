import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PostagemService } from './postagem.service';
import { Postagem } from './postagem.entity/postagem.entity';

/**
 * Controlador responsável por gerenciar as operações relacionadas a postagens.
 * Fornece rotas para criar, buscar, atualizar e deletar postagens.
 */
@Controller('postagens')
export class PostagemController {
  constructor(private readonly postagemService: PostagemService) {}

  /**
   * Recupera todas as postagens cadastradas.
   * @returns {Promise<Postagem[]>} Uma lista contendo todas as postagens.
   */
  @Get() // Rota para obter todas as postagens realizadas
  findAll(): Promise<Postagem[]> {
    return this.postagemService.findAll();
  }

  /**
   * Recupera uma postagem específica com base no ID fornecido.
   * @param {string} id - O ID da postagem a ser buscada.
   * @returns {Promise<Postagem>} A postagem correspondente ao ID fornecido.
   */
  @Get(':id') // Rota específica para buscar uma postagem pelo ID
  findOne(@Param('id') id: string): Promise<Postagem> {
    return this.postagemService.findOne(+id);
  }

  /**
   * Cria uma nova postagem.
   * @param {Postagem} postagem - O objeto da nova postagem a ser criada.
   * @returns {Promise<Postagem>} A postagem criada.
   */
  @Post() // Rota usada para criar uma nova postagem
  create(@Body() postagem: Postagem): Promise<Postagem> {
    return this.postagemService.create(postagem);
  }

  /**
   * Atualiza uma postagem existente com base no ID fornecido.
   * @param {string} id - O ID da postagem a ser atualizada.
   * @param {Postagem} postagem - O objeto da postagem com os dados atualizados.
   * @returns {Promise<Postagem>} A postagem atualizada.
   */
  @Put(':id') // Rota para atualização de uma postagem já existente
  update(@Param('id') id: string, @Body() postagem: Postagem): Promise<Postagem> {
    return this.postagemService.update(+id, postagem);
  }

  /**
   * Deleta uma postagem com base no ID fornecido.
   * @param {string} id - O ID da postagem a ser deletada.
   * @returns {Promise<void>} Não retorna conteúdo após a exclusão.
   */
  @Delete(':id') // Rota para deletar uma postagem
  delete(@Param('id') id: string): Promise<void> {
    return this.postagemService.remove(+id);
  }
}
