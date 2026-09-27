import { DatabaseConnection } from "./05-interfaceDB";

export abstract class MySqlConnection implements DatabaseConnection{
    connect(): void {
       console.log("DB connection initiated");
    }
    disconnect(): void {
        console.log("DB connection disconnected");
    }
    executeUpdate(): void {
        console.log("Record updated");
    }
   

    abstract executeQuery():void
    
}