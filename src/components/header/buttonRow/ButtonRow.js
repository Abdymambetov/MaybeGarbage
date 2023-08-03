import React, { useState } from 'react';

function ButtonRows() {
  const [selectedButtons, setSelectedButtons] = useState(Array(8).fill(false));

  const handleButtonClick = (buttonIndex) => {
    // Создаем новый массив для обновления состояния
    const newSelectedButtons = Array.from(selectedButtons);
    // Сбрасываем выделение на всех кнопках в этом ряду
    const startIndex = buttonIndex < 4 ? 0 : 4;
    const endIndex = startIndex + 4;
    for (let i = startIndex; i < endIndex; i++) {
      newSelectedButtons[i] = false;
    }
    // Устанавливаем выделение только на выбранной кнопке
    newSelectedButtons[buttonIndex] = true;
    // Обновляем состояние
    setSelectedButtons(newSelectedButtons);
  };

  return (
    <div>
      <div>
        <button
          onClick={() => handleButtonClick(0)}
          className={selectedButtons[0] ? 'selected' : ''}
        >
          Button 1
        </button>
        <button
          onClick={() => handleButtonClick(1)}
          className={selectedButtons[1] ? 'selected' : ''}
        >
          Button 2
        </button>
        <button
          onClick={() => handleButtonClick(2)}
          className={selectedButtons[2] ? 'selected' : ''}
        >
          Button 3
        </button>
        <button
          onClick={() => handleButtonClick(3)}
          className={selectedButtons[3] ? 'selected' : ''}
        >
          Button 4
        </button>
      </div>
      <div>
        <button
          onClick={() => handleButtonClick(4)}
          className={selectedButtons[4] ? 'selected' : ''}
        >
          Button 5
        </button>
        <button
          onClick={() => handleButtonClick(5)}
          className={selectedButtons[5] ? 'selected' : ''}
        >
          Button 6
        </button>
        <button
          onClick={() => handleButtonClick(6)}
          className={selectedButtons[6] ? 'selected' : ''}
        >
          Button 7
        </button>
        <button
          onClick={() => handleButtonClick(7)}
          className={selectedButtons[7] ? 'selected' : ''}
        >
          Button 8
        </button>
      </div>
      <style jsx>{`
        .selected {
          background-color: black;
          color: white;
        }
      `}</style>
    </div>
  );
}

export default ButtonRows;