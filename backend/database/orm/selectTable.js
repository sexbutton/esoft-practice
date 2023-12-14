import bcrypt from "bcrypt";
import knex from "knex";

class SelectTable {
  constructor(config) {
    this.db = knex(config);
  }

  async authUser(login, password) {
    try {
      // Получаем хэш пароля из базы данных по логину
      const user = await this.db("AuthUsers").where({ login }).first();

      if (!user) {
        // Пользователь с таким логином не найден
        return false;
      }

      // Сравниваем введенный пароль с хэшем из базы данных
      const passwordMatch = await bcrypt.compare(password, user.password);

      return passwordMatch;
    } catch (error) {
      console.error("Error comparing passwords:", error);
      return false;
    } finally {
      // Закрываем подключение к базе данных после использования
      await this.db.destroy();
    }
  }
}

export default InsertTable;
