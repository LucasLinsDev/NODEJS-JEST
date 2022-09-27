import { database } from "../database.js";
export class userController {
    criarUsuario(request, response) {
        const { name } = request.body;
        if (name.length < 1) {
            return response.status(403).json({ message: 'Não é possivel criar usuario sem o nome' });
        }
        database.push(name);
        return response.status(201).json({ 'messgae': `Usuário ${name}` });
    }
}
