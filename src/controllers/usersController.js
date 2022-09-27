import { database } from "../database.js";
export class userController {
    criarUsuario(request, response) {
        const { name } = request.body;
        if (name.length < 1) {
            return request.status(403).json({ message: 'Não é possivel criar usuario sem o nome' });
        }
        database.push(name);
        return request.status(201).json({ 'messgae': `Usuário ${name}` });
    }
}
