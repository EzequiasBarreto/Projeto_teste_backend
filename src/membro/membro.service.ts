import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Membro } from './membro.entity/membro.entity';

/**
 * Serviço responsável pelas operações de banco de dados relacionadas à entidade Membro.
 * Oferece métodos para buscar, criar, atualizar e deletar membros.
 */
@Injectable()
export class MembroService {
  constructor(
    @InjectRepository(Membro)
    private readonly membroRepository: Repository<Membro>, // Repositório TypeORM para a entidade Membro
  ) {}

  /**
   * Retorna todos os membros armazenados no banco de dados.
   * @returns {Promise<Membro[]>} Uma lista com todos os membros.
   */
  findAll(): Promise<Membro[]> {
    return this.membroRepository.find();
    // Busca completa de todos os membros encontrados no banco.
  }

  /**
   * Retorna um membro específico com base no ID fornecido.
   * @param {number} id - O ID do membro a ser buscado.
   * @returns {Promise<Membro>} O membro correspondente ao ID fornecido.
   */
  findOne(id: number): Promise<Membro> {
    return this.membroRepository.findOne({ where: { id } });
    // Realiza uma busca de membro pelo ID.
  }

  /**
   * Cria um novo membro no banco de dados.
   * @param {Membro} membro - O objeto do membro a ser criado.
   * @returns {Promise<Membro>} O membro criado.
   */
  create(membro: Membro): Promise<Membro> {
    return this.membroRepository.save(membro);
    // Criação de um novo membro.
  }

  /**
   * Atualiza um membro existente com base no ID fornecido.
   * @param {number} id - O ID do membro a ser atualizado.
   * @param {Membro} membro - O objeto com os dados atualizados do membro.
   * @returns {Promise<Membro>} O membro atualizado.
   */
  async update(id: number, membro: Membro): Promise<Membro> {
    await this.membroRepository.update(id, membro);
    return this.membroRepository.findOne({ where: { id } });
    // Realiza a atualização de um membro existente.
  }

  /**
   * Remove um membro do banco de dados com base no ID fornecido.
   * @param {number} id - O ID do membro a ser deletado.
   * @returns {Promise<void>} Não retorna nada após a exclusão.
   */
  async remove(id: number): Promise<void> {
    await this.membroRepository.delete(id);
    // Deleta um membro com base no ID fornecido.
  }
}
