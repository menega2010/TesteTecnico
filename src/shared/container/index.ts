import { container } from 'tsyringe';
import { TimeRepository } from '../../modules/time/infra/repositories/TimeRepository';
import { TimeRepositoryInterface } from '../../modules/time/infra/repositories/TimeRepositoryInterface';
import { UserRepository } from '../../modules/userValidate/infra/repositories/UserRepository';
import { UserRepositoryInterface } from '../../modules/userValidate/infra/repositories/UserRepositoryInterface';

container.registerSingleton<UserRepositoryInterface>('UserRepository', UserRepository);
container.registerSingleton<TimeRepositoryInterface>('TimeRepository', TimeRepository);
