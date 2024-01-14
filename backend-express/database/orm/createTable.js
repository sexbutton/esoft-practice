import knex from "knex";

class CreateTable {
  constructor(config) {
    this.db = knex(config);
  }

  async createTableUsers() {
    try {
      // Создайте таблицу (пример)
      await this.db.schema.createTable("Users", (table) => {
        table.increments("id").primary().unsigned();
        table.string("name").notNullable();
        table.string("surname").notNullable();
        table.string("patronymic");
        table
          .integer("AuthUsers_id")
          .unsigned()
          .references("id")
          .inTable("AuthUsers");
        table.integer("games").notNullable().defaultTo(0).unsigned();
        table.integer("winnings").notNullable().defaultTo(0).unsigned();
        table.integer("defeats").notNullable().defaultTo(0).unsigned();
        table.boolean("gender").notNullable();
        table.date("date_of_creation").notNullable();
        table.boolean("online").notNullable().defaultTo(false);
        table.boolean("in_game").notNullable().defaultTo(false);
        table.timestamps(true, true);
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      // Закройте подключение к базе данных после использования
      await this.db.destroy();
    }
  }
  async createTableAuthUsers() {
    try {
      // Создайте таблицу (пример)
      await this.db.schema.createTable("AuthUsers", (table) => {
        table.increments("id").primary().unsigned();
        table.string("login").notNullable().unique();
        table.string("password").notNullable();
        table.timestamps(true, true);
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      // Закройте подключение к базе данных после использования
      await this.db.destroy();
    }
  }

  async createTables() {
    this.createTableAuthUsers();
    this.createTableUsers();
  }
}

export default CreateTable;
