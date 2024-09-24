import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Postagem } from './postagem.entity/postagem.entity';

/**
 * Serviço responsável por gerenciar as operações de banco de dados relacionadas às postagens.
 * Oferece métodos para buscar, criar, atualizar e deletar postagens.
 */
@Injectable()
export class PostagemService {
  constructor(
    @InjectRepository(Postagem)
    private readonly postagemRepository: Repository<Postagem>, // Repositório do TypeORM para a entidade Postagem
  ) {}

  /**
   * Retorna todas as postagens cadastradas no banco de dados.
   * @returns {Promise<Postagem[]>} Uma lista de todas as postagens.
   */
  findAll(): Promise<Postagem[]> {
    return this.postagemRepository.find();
    // Busca completa de todas as postagens armazenadas no banco de dados.
  }

  /**
   * Retorna uma postagem específica com base no ID fornecido.
   * @param {number} id - O ID da postagem a ser buscada.
   * @returns {Promise<Postagem>} A postagem correspondente ao ID fornecido.
   */
  findOne(id: number): Promise<Postagem> {
    return this.postagemRepository.findOne({ where: { id } });
    // Realiza a busca de uma postagem pelo ID.
  }

  /**
   * Cria uma nova postagem no banco de dados.
   * @param {Postagem} postagem - O objeto da nova postagem a ser criada.
   * @returns {Promise<Postagem>} A postagem criada.
   */
  create(postagem: Postagem): Promise<Postagem> {
    return this.postagemRepository.save(postagem);
    // Cria uma nova postagem e a salva no banco de dados.
  }

  /**
   * Atualiza uma postagem existente com base no ID fornecido.
   * @param {number} id - O ID da postagem a ser atualizada.
   * @param {Postagem} postagem - O objeto com os dados atualizados da postagem.
   * @returns {Promise<Postagem>} A postagem atualizada.
   */
  async update(id: number, postagem: Postagem): Promise<Postagem> {
    await this.postagemRepository.update(id, postagem);
    return this.postagemRepository.findOne({ where: { id } });
    // Atualiza os dados de uma postagem existente.
  }

  /**
   * Remove uma postagem do banco de dados com base no ID fornecido.
   * @param {number} id - O ID da postagem a ser removida.
   * @returns {Promise<void>} Não retorna nada após a exclusão.
   */
  async remove(id: number): Promise<void> {
    await this.postagemRepository.delete(id);
    // Deleta uma postagem com base no ID fornecido.
  }
}
