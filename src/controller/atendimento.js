import Serviceatendimento from '../service/atendimento.js'

class Controlleratendimento {

    async Buscar(req, res) {
        try {
            const dia = Serviceatendimento.Buscar()

            res.send({ dia })
        } catch (e) {
            res.send({ message: e.message })
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const dia = Serviceatendimento.BuscarUm(id)

            res.send({ dia })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    async Criar(req, res) {
        try {
            const dia = req.body.dia
            const hora = req.body.hora
            const valor = req.body.valor
            const concluido = req.body.concluido
            Serviceatendimento.Criar(dia, hora, valor, concluido)

            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    
    Alterar(req, res) {
        try {
            const id = req.params.id
            const dia = req.body.dia
            const hora = req.body.hora
            const valor = req.body.valor
            Serviceatendimento.Alterar(id, dia, hora, valor)

            res.send({ message: "Alterado!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

        Alterarconcluido(req, res) {
        try {
            const id = req.params.id
            const concluido = req.body.concluido
            Serviceatendimento.Alterarconcluido(id, concluido)

            res.send({ message: "Alterado!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    
    
    async Deletar(req, res) {
        try {
            const id = req.params.id
            await Serviceatendimento.Deletar(id)

            res.send({ message: "Deletado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

}

export default new Controlleratendimento()