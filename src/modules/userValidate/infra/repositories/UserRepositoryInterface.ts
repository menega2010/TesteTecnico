interface UserRepositoryInterface {
  validateUser(codeData: string): Promise<boolean>;
}

export { UserRepositoryInterface };
