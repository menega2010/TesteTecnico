
import { UserRepositoryInterface } from '../../infra/repositories/UserRepositoryInterface';
import { ValidateUserUseCase } from './ValidateUserUseCase';

const ValidateUserCaseMock = ValidateUserUseCase as jest.Mock<ValidateUserUseCase>;

describe('Validate User Case', () => {
  let sut: ValidateUserUseCase;

  const code = '123456'

  const mockUserRepository: UserRepositoryInterface = {
    validateUser: jest.fn().mockResolvedValueOnce({})
  };

  beforeEach(() => {
    sut = new ValidateUserCaseMock(mockUserRepository);
  });

  test('validate user', async () => {
    const response = await sut.validateUser(code);

    expect(response).toBe(undefined);
  });
});
