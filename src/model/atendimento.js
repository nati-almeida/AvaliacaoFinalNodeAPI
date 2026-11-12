import database from "../Config/database.js";

class atendimento {
    constructor() {
        this.model = database.db.define("atendimento", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true                
            },
            dia: {
                type: database.db.Sequelize.STRING
            },
            hora: {
                type: database.db.Sequelize.STRING
            },
            valor: {
                type: database.db.Sequelize.DECIMAL(10, 2)
            },
            concluido: {
                type: database.db.Sequelize.BOOLEAN
            }

        })
    }
}

export default new atendimento().model