import barbies from "../model/dados.js";

export const getAll = (req, res) => {
    res.status(200).json({
        total: barbies.length,
        barbies
    });
};

export const getById = (req, res) => {
    const id = parseInt(req.params.id);
    const barbie = barbies.find(b => b.id);

    if (!barbie) {
        return res.status(404).json({message: "Barbie não encontrada! ❌"})
    }

    res.status(200).json(barbie);

};

export const create = (req, res) => {
    const { nome, profissao, anoLancamento } = req.body;

    if (!nome || !profissao || !anoLancamento) {
        return res.status(400).json({ message: "Preencha todos os campos!"});
    }


const novaBarbie = {
    id: barbies.length + 1,
    nome,
    profissao,
    anoLancamento
};

barbies.push(novaBarbie);

res.status(201).json({
    message: "Nova Barbie adicionada com sucesso! 🎀",
    barbie: novaBarbie
});

};

export const remove = (req, res) => {
    const id = parseInt(req.params.id);
    const index = barbies.findIndex(b => b.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Barbie não encontrada para deletar!"});
    }

const removida = barbies.splice(index, 1);

res.status(200).json({
    message: "Barbie removida com sucesso! 💅"
});

};

