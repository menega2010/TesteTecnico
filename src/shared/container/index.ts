import { container } from 'tsyringe';
import { UserRepository } from '../../modules/games/infra/repositories/UserRepository';
import { UserRepositoryInterface } from '../../modules/games/infra/repositories/UserRepositoryInterface';

container.registerSingleton<UserRepositoryInterface>('UserRepository', UserRepository);
