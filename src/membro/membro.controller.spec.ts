import { Test, TestingModule } from '@nestjs/testing';
import { MembroController } from './membro.controller';

describe('MembroController', () => {
  let controller: MembroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MembroController],
    }).compile();

    controller = module.get<MembroController>(MembroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
