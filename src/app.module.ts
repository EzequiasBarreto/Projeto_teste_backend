import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/postagem.entity/postagem.entity';
import { Membro } from './membro/membro.entity/membro.entity';

import { PostagemController } from './postagem/postagem.controller';
import { PostagemService } from './postagem/postagem.service';

import { MembroController } from './membro/membro.controller';
import { MembroService } from './membro/membro.service';
/*
Configurações de Bando de Dados.
*/
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'projeto_teste',
      entities: [Postagem, Membro],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Postagem, Membro]),
  ],
  controllers: [PostagemController, MembroController],
  providers: [PostagemService, MembroService],
})
export class AppModule {}
