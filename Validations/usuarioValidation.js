import Joi from "joi";

// Validação de criação de um novo usuário
export const modeloUsuario = Joi.object({
    nome: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    senha: Joi.string().min(6).required(), 
});

// Validação para login do usuario
export const modeloLogin = Joi.object({
    email: Joi.string().email().required(),
    senha: Joi.string().min(6).required(),
});

// Validação para atualização de usuario
export const modeloAtualizaçãoUsuario = Joi.object({
    nome: Joi.string().min(3),
    email: Joi.string().email(),
    senha: Joi.string().min(6),
}).min(1);