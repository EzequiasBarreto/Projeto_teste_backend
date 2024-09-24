import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Postagem } from './postagem.entity/postagem.entity';

@Injectable()
export class PostagemService {
  constructor(
    @InjectRepository(Postagem)
    private readonly postagemRepository: Repository<Postagem>,
  ) {}

  findAll(): Promise<Postagem[]> {
    return this.postagemRepository.find();
    //Tem a função de buscar todas as postagens. 
  }

  findOne(id:number): Promise<Postagem> {
    return this.postagemRepository.findOne({ where: {id} });
    //Realiza uma Busca de postagem pelo ID
  }

  create(postagem: Postagem): Promise<Postagem> {
    return this.postagemRepository.save(postagem);
    //Cria uma nova postagem
  }

  async update(id: number, postagem:Postagem): Promise<Postagem>{
    await this.postagemRepository.update(id, postagem);
    return this.postagemRepository.findOne({ where: {id} });
    //Atualiza uma postagem
  }


  async remove(id: number): Promise<void> {
    await this.postagemRepository.delete(id);
    //Deleta uma postagem
  }
}
