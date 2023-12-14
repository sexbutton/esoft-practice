import CreateTable from "./createTable.js";
import config from "./knex-config.js";
import InsertTable from "./insertTable.js";

const database = new CreateTable(config);
const insert = new InsertTable(config);

database.createTables();
insert.addUser("Владислав", "Белан", "Сергеевич", true, "admin", "adminqwerty");
