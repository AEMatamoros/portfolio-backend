import { connect } from 'mongoose';

class DB {

    constructor() {
    }

    async ConnectDB() {
        try {
            await connect(process.env.DB_URL);
            console.log('DB Conected')
        } catch (error) {
            console.log('DB not Conected')
            console.log(error)
        }

    }
}

const DatabaseConection = new DB();

export default DatabaseConection;
export let ROLES = ["admin${process.env.ROLSTACH}", `user${process.env.ROLSTACH}`, "moderator${process.env.ROLSTACH}"];
