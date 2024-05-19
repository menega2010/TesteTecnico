interface UserServiceInterface {
  validateUser(code: string): Promise<boolean>;
}

export { UserServiceInterface };
