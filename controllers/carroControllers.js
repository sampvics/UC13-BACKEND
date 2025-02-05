import { getAllcarros, getCarroBySigla, createCarro as modelCreateCarro, updateCarro as modelCreateCarro, deleteCarro as modelDeleteCarro} from '.../models/carroModel.js'

export const getCarros =(req, res) => {
    // Chama a função que retorna todos os carros do array
    const carros = getAllcarros();
    // Retorna os carros com status 200 (ok)
    res.status(200).json(carros);
};

// Função para retornar um carro específico com base na sigla fornecida
export const getCarro = (req, res) => {
    // Extrai a sigla do carro da URL (Rota)
    const {sigla} = req.params;
    // Chama a função que retorna o carro pela sigla, convertendo a sigla para maiúsculas
    const carro = getCarroBySigla(sigla.toUpperCase());

// Se o carro não for encontrado retornar o erro 404(Não encontrado)
if(!carro){
    return res.status(404).json({mensagem: 'Carro não encontrado'});
}

// Retorna o carro encontrado com o status 200 (Ok)
    res.status(200).json(carro);
};

// Função para criar um novo carro
export const createCarro = (req, res) => {
    // Valida os dados do carro recebidos na requisição com base no modelo definido
    const {error} = modeloCarro.validate(req.body);
    // Se ouver erro de validação
    if (error)  {
        return res.status(400).json({mensagem: error.details[0].message});
    }

    // Caso os dados sejam válidos, criar um novo carro com os dados da requisição
    const novoCarro = req.body;
    // Chama a função para adicionar o novo carro 
    const carroCriado = modelCreateCarro(novoCarro);
    // Retorna o carro criado com status 201 (Created)
    req.status(201).json(carroCriado);
};

// Função par atualizar um carro existente
export const updateCarro = (req, rea) => {
    // Extrai a sigla do carro da URL (Rota)
    const { sigla } = req.params;
    // Valida os dados da atualização com base no modelo
    const { error } = modeloAtualizacaoCarro.validate(req.body);
    // Se houver erro de calidação, retorna status 400 (Bad Request)e a mensagem do erro
    if(error){
        return res.status(400).json({mensagem: error.details[0].message});
    }

    // Chama a função para atualizar os dados do carro, passando a sigla e os novos dados
    const carroAtualizado = modelUpdateCarro(sigla.toUpperCase(), req.body);

    // Se o carro não for encontrado para atulização, retorna status 404 (Não encontrado)
    if(!carroAtiualizado){
        return res
            .status(404)
            .json({mensagem: "Carro não encontrado para atualização!"});
    }

    // Retorna o carro atualizado com status 200 (OK)
    res.status(200).json(carroAtualizado); 
};

// Função para excluir um carro existênte 
export const deleteCarro =(req, res) => {
    // Extrai a sigla do carro da URL (Rota)
    const { Sigla } = req.params;
    // Chama a função para remover o carro, passando a sigla
    const carroRemovido = modelDeleteCarro(sigla.toUpperCase());

    //Se o carro não for encontrado para remoção, retorna status 404 (não encontrado)
    if(!carroRemovido){
        return res.status(404).json({mensagem: 'Carro não encontrado para remoção!'});
    }

    // Retorna uma mensagem de sucesso e os dados do carro removido com status 200 (ok)
    res
        .status(200)
        .json({mensagem: "Carro removido com sucesso!", carro: carroRemovido});
};

    
