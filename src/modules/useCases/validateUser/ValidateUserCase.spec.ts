// import { UserRepositoryInterface } from '../../../interfaces/UserInterface/UserRepositoryInterface';
// import { ValidateUserCase } from './ValidateUserCase';
// const ValidateUserCaseMock = ValidateUserCase as jest.Mock<ValidateUserCase>;
// describe('Valida login user', () => {
//   let sut: ValidateUserCase;
//   const code = {
//     code: '123456'
//   };

//   const mockRepository: UserRepositoryInterface = {
//     validateUser: jest.fn().mockResolvedValueOnce({})
//   };

//   afterAll(() => {
//     sut = new ValidateUserCaseMock(mockRepository);
//   });

//   test('validar usuario', async () => {
//     console.log('SUT:', sut);
//     const resp = await sut.validateUser(code.code);

//     expect(resp).toBe(undefined);
//   });
// });
