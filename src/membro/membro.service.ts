import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Membro } from './membro.entity/membro.entity';

@Injectable()
export class MembroService {
  constructor(
    @InjectRepository(Membro)
    private readonly membroRepository: Repository<Membro>,
  ) {}

  findAll(): Promise<Membro[]> {
    return this.membroRepository.find();
    //É feita a busca completa de todos os membros encontrado no banco.
  }

    
    findOne(id: number): Promise<Membro> {
      return this.membroRepository.findOne({ where: { id } });
      // Realizar uma busca de membro pelo ID
    }
  
    
    create(membro: Membro): Promise<Membro> {
      return this.membroRepository.save(membro);
      // Criação de um novo membro.
    }
  
    
    async update(id: number, membro: Membro): Promise<Membro> {
      await this.membroRepository.update(id, membro);
      return this.membroRepository.findOne({ where: { id } });
      //É realizado a atualização de Membro existente
    }
  
    async remove(id: number): Promise<void> {
      await this.membroRepository.delete(id);
      //Deletar uma Membro
    }
}
