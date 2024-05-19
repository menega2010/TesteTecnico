import { container } from 'tsyringe';
import { UserRepository } from '../../modules/userValidate/infra/repositories/UserRepository';
import { UserRepositoryInterface } from '../../modules/userValidate/infra/repositories/UserRepositoryInterface';

container.registerSingleton<UserRepositoryInterface>('UserRepository', UserRepository);
