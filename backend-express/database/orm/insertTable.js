import bcrypt from "bcrypt";
import knex from "knex";

class InsertTable {
  constructor(config) {
    this.db = knex(config);
  }

  async addUser(name, surname, patronymic, gender, login, password) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);

    try {
      await this.db.transaction(async (trx) => {
        // Вставляем данные в таблицу "AuthUsers"
        const [authUserId] = await trx("AuthUsers").insert({
          login: login,
          password: hash,
        });

        // Вставляем данные в таблицу "Users"
        await trx("Users").insert({
          name: name,
          surname: surname,
          patronymic: patronymic,
          AuthUsers_id: authUserId,
          gender: gender,
          date_of_creation: new Date(),
        });

        console.log("Data inserted successfully");
      });
    } catch (error) {
      console.error("Error inserting data:", error);
    } finally {
      // Закрываем подключение к базе данных после использования
      await this.db.destroy();
    }
  }
}

export default InsertTable;
