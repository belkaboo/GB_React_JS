import React, { useState, useEffect } from 'react';


function TodoList() {
    const [todos, setTodos] = useState([]); // Состояние для списка дел
    const [inputValue, setInputValue] = useState(''); // Состояние для поля ввода

    const addTodo = (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы

        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue.trim()]); // Добавляем новое дело в массив
            setInputValue(''); // Очищаем поле ввода
        }
    };

    return (
        <>
            <h3>Задание 3</h3>
            <div className='container'>
                <form onSubmit={addTodo}>
                    <input
                        className='todo-input'
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Введите новое дело"
                    />
                    <button type="submit">Добавить</button>
                </form>

                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default TodoList;