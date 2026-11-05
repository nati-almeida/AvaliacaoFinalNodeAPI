import { Sequelize } from 'sequelize'

class Database {
    constructor() {
        this.init()
    }
    
    
    init() {
        this.db = new Sequelize({
            dialect: 'postgres',
            database: 'abacaxi_db_xf0c',
            username: 'abacaxi_db_xf0c_user',
            password: '2iQtTzhNuIvUSUai4wWv43btXfhbhdBF',
            host: '2iQtTzhNuIvUSUai4wWv43btXfhbhdBF@dpg-db8lc0nf3r2c7398qvfg-a.oregon-postgres.render.com',
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        })
    }
}

export default new Database()
