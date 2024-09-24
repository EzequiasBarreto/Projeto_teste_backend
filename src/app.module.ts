import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/postagem.entity/postagem.entity';
import { Membro } from './membro/membro.entity/membro.entity';
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
      password: '110464',  
      database: 'projeto_teste',
      entities: [Postagem, Membro],  
      synchronize: true,  
    }),
    TypeOrmModule.forFeature([Postagem, Membro]),  
  ],
})
export class AppModule {}
