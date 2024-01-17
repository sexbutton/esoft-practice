import React, { useState, useEffect } from "react";

export function TestComp(props) {
  // Используем хук useState для создания переменной состояния
  const [myData, setMyData] = useState(props.initialData);

  // Пример использования useEffect для обновления данных при изменении props
  useEffect(() => {
    setMyData(props.initialData);
  }, [props.initialData]);

  // Функция для изменения данных внутри компонента
  const updateData = () => {
    // Используем setMyData для обновления состояния
    setMyData("Новые данные");
  };

  return (
    <div>
      <p>{myData}</p>
      <button onClick={updateData}>Изменить данные</button>
    </div>
  );
}
