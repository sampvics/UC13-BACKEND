// Importando o módulo brcypt para criptografar senhas
import brcypt from 'brcypt';

// Inicializando uma lista de usuário (Em cenário real, isso viria de um BD)
let usuarios = [
    // Exmplo de um usuário com sneha criptografada 
    {
        id: 1, // ID do usuário
        nome: 'Lilian Damasceno',
        email: 'liliansod22@gmail.com',
        senha: brcypt.hashSync('Senha123', 10)
        // Senha gerada com brcypt(O segundo parametro é o numero de saltos para gerar o Hash)
    },
];

// Função para obter todos os usuários
export const getAllUsuarios = () => usuarios;

// Função para encontrar um usuário por e-mail
export const getUsuarioByEmail = (email) => {
    // Retorna o usuário
    return usuarios.find((usuario) => usuario.email === email)
};

// Função para criar um novo usuário
export const createUsuario = (novoUsuario) => {
    // Gera um novo ID para usuário (simulando um banco de dados com incremento)
    const novoID = usuarios.length + 1;


    // Criar um novo usuário com dados oferecidos e senha criptografada
    const usuario ={
        ...novoUsuario, // Copia os dados do novo usuário
        id: novoID, // Adiciona
        senha: brcypt.hashSync(novoUsuario.senha, 10), // Criptografa a senha antes de armazenar
    };

    // Adiciona o novo usuário a lista de usuários
    usuarios.push(usuario);

    // Adcionar o novo usuario criado 
    return usuario;
};

// Função para atualizar os dados do usuário existêntes
export const updateUsuario = (id, dadosAtualizados) => {
    // Procura o índice do usuario com ID fornecido
    const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);

    //se o usuario não for encontrado retorna Null
    if(usuarioIndex === -1) return null;

    // Atualiza os dados do usuario no indice encontrado (combinando dados antigos com novos)
    usuarios[usuarioIndex] = { ...usuarios[usuarioIndex], ...dadosAtualizados };

    // Retorna o usuario atualizado
    return usuarios[usuarioIndex];
};

// Função para excluir um usuario pelo ID
export const deleteUsuario = (id) => {
    // Procura o índice do usuário a ser removido
    const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);

    // Se o usuário não for encontrado, retorna Null
    if(usuarioIndex === -1) return null;

    // Remove o usuario da lista (usando o método splice) e retorna o usuario removido
    const [usuarioRemovido] = usuario.splice(usuarioIndex,1);

    // Retorna o usuário que foi removido
    return usuarioRemovido;
};
