const config = {
  client: "sqlite3",
  connection: {
    filename: "./database/dev.sqlite3", // Путь к файлу базы данных SQLite
  },
  useNullAsDefault: true, // Использовать NULL в качестве значения по умолчанию для отсутствующих полей
};

export default config;
