import Cliente from '../model/cliente.js'

class ServiceCliente {

    async Buscar() {
        return Cliente.findAll()
    }
    
    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }

        return Cliente.findByPk(id)
    }

    async Criar(nome, email, senha) {
        if(!nome) {
            throw new Error("Favor informar o nome")
        }
        
        await Cliente.create({ nome, email, senha })
    }
    
    async Alterar(id, nome) {
        if(!id || isNaN(id) || !nome) {
            throw new Error("Favor informar todos os dados")
        }
        const clienteAlterar = await Cliente.findByPk(id)

        if(!clienteAlterar) {
            throw new Error("Pessoa não encontrada")
        }

        clienteAlterar.nome = nome

        await clienteAlterar.save()
    }

    async Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o Id corretamente")
        }
        const pessoaDelete = await Cliente.findByPk(id)

        if(!clienteDelete) {
            throw new Error("Favor informar o Id corretamente")
        }

        await clienteDelete.destroy()
    }
    
}

export default new ServiceCliente()