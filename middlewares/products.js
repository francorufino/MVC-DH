function log(req, res, next) {
    console.log("passando pelo middleware de log");
    next();
};

function validateBody(req, res, next) {
    const newProduct = req.body;
    if (newProduct.title.trim() === "" && newProduct.description.trim() === "") {
        res.status(400).send("Erro: Preencha o titulo e a descricao para continuar");
        return;
    }
    if (newProduct.title.trim() === "") {
        res.status(400).send("Erro: Campo de titulo eh obrigatorio");
        return;
    }
    if (newProduct.description.trim() === "") {
        res.status(400).send("Erro: Campo de descricao eh obrigatorio");
        return;
    }
    next();
};



module.exports = {
    log: log,
    validateBody: validateBody
}