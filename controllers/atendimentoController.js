const atendimentoModel = require("../models/atendimentoModel");
class AtendimentoController {
    buscar() {
        return atendimentoModel.lsitar();
    }
    criar(novoAtendimento) {
        return atendimentoModel.criar(novoAtendimento);
    }
    atualizar(atendimentoAtualizado, id){
        return atendimentoModel.atualizar(atendimentoAtualizado, id);
    }
    deletar(id) {
        return atendimentoModel.delete(id);
    }
}

module.exports = new AtendimentoController();