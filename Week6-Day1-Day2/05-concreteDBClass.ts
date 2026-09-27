import { MySqlConnection } from "./05-abstractionDB";

class PlaywrightConnection extends MySqlConnection{
    executeQuery(): void {
        console.log("Query executed")
    }
    
    
}

const objDB = new PlaywrightConnection();
objDB.connect();
objDB.executeQuery();
objDB.executeUpdate();
objDB.disconnect();