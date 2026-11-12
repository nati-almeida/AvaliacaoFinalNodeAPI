import atendimento from '../model/atendimento.js'

class Serviceatendimento {

    async Buscar() {
        return atendimento.findAll()
    }
    
    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }

        return atendimento.BuscarUm(id)
    }
    
    async Criar(dia, hora, valor, concluido) {
        if(!dia) {
            throw new Error("Infome o dia")
        }
        if(!hora) {
            throw new Error("Infome a hora")
        }
        if(!valor) {
            throw new Error("Infome o valor")
        }
        if(!concluido) {
            throw new Error("Favor informar a conclusão")
        }
        
        await atendimento.create({ dia, hora, valor, concluido })
    }
    
    async Alterar(id, dia, hora, valor) {
        if(!id || isNaN(id) || !dia || !hora || !valor) {
            throw new Error("Favor informar todos os dados")
        }
        const atendimentoAlterar = await atendimento.findByPk(id)
        if(!atendimentoAlterar) {
            throw new Error("atendimento não encontrada")
        }

        atendimentoAlterar.dia = dia,
        atendimentoAlterar.hora = hora,
        atendimentoAlterar.valor = valor,


        await atendimentoAlterar.save()
    }

     async Alterarconcluido(id, concluido) {
        if(!concluido || (false)) {
            throw new Error("Favor informar todos os dados")
        }
        const atendimentoAlterar = await atendimento.findByPk(id)
        if(!atendimentoAlterar) {
            throw new Error("atendimento não encontrada")
        }

        atendimentoAlterar.concluido = true

        if(!concluido || (true)) {
            throw new Error("Favor informar todos os dados")
        }
        
        atendimentoAlterar.concluido = false

        await atendimentoAlterar.save()
    }

    async Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o Id corretamente")
        }
        const atendimentoDelete = await atendimento.findByPk(id)
        
        if(!atendimentoDelete) {
            throw new Error("Favor informar o ID corretamente")
        }
        
        await atendimentoDelete.destroy()
    }
    
}

export default new Serviceatendimento()