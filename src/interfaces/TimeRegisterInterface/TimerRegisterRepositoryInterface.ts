// async registerTimer({ id, name, lastName, code, phone, empresa }: UserInterface): Promise<void> {
//   const newUser: UserInterface = {
//     id,
//     name,
//     lastName,
//     code,
//     phone,
//     empresa,
//     createdAt: new Date()
//   };
//   try {
//     await prismaClient.tab_user.create({
//       data: {
//         ...newUser,
//         createdAt: newUser.createdAt.toISOString()
//       }
//     });
//   } catch (error) {
//     throw new Error(`Error creating user: ${error}`);
//   }
// }
