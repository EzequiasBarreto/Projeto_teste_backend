import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/postagem.entity/postagem.entity';
import { Membro } from './membro/membro.entity/membro.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',   // Aqui estamos dizendo que o banco será MySQL
      host: 'localhost',  // Ou o IP do seu servidor MySQL
      port: 3306,  // Porta padrão do MySQL
      username: 'root',  // Usuário do MySQL (ajuste se necessário)
      password: '110464',  // Senha do MySQL
      database: 'projeto_teste',  // Nome do banco de dados que criamos
      entities: [Postagem, Membro],  // Nossas entidades
      synchronize: true,  // Atualiza o banco com base nas entidades (cuidado em produção)
    }),
    TypeOrmModule.forFeature([Postagem, Membro]),  // Registra as entidades que vamos usar
  ],
})
export class AppModule {}
