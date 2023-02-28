import { User, UserService } from "./UserService";

describe('UserService', () => {
    const mockDb: User[] = []
    const userService = new UserService(mockDb);

    it('Deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('nath', 'nath@test.com');
        expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDb)
    })

    it('Deve deletar um usuário do DB', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.deleteUser('nath', 'nath@test.com');
        expect(mockConsole).toHaveBeenCalledWith('Usuário deletado', mockDb)
    })
})
