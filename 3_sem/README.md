# Урок 3. Virtual DOM. Подключение библиотеки UI-компонентов


### Задание 1 (тайминг 15 минут)

1. Создайте функциональный компонент `Greeting`, который
принимает проп name и отображает сообщение Привет, `{name}`!.

2. Используйте компонент `Greeting` в вашем основном компоненте
App, передавая разные имена в качестве пропсов.


### Задание 2 (тайминг 25 минут)
1. Разработайте компонент `Counter`, который отображает число и
две кнопки: одна для увеличения значения на 1, а другая для
уменьшения на 1.

2. Используйте хук `useState` для управления состоянием счётчика.

3. Кнопки можно сделать с помощью ***material ui***

### Задание 3 (тайминг 25 минут)
1.  Создайте компонент `MessagesList`, который отображает список
сообщений. Каждое сообщение должно иметь уникальный `id` и
текст.

2. Используйте проп `key` при рендеринге списка, чтобы
обеспечить оптимальную производительность.


### Задание 4 (тайминг 25 минут)

Создать React компонент `TextDisplayForm`, который позволяет пользователю ввести текст в поле ввода и отобразить его на экране в стилизованном виде по нажатию
кнопки.

1. Создание поля ввода (TextField)

2. Добавить TextField для ввода текста пользователем.

3.  Установить метку (label) поля ввода на "Введите текст".

4.  Сделать поле ввода на всю ширину (fullWidth).

5.  Разместить кнопку под полем ввода.

6.  Установить текст кнопки на "Отобразить текст".

7. При нажатии на кнопку введенный текст должен отображаться под
кнопкой.

8. Отображение введенного текста

9. Использовать состояние для хранения введенного и отображаемого 
текста.

10. При нажатии на кнопку текст из поля ввода должен отображаться в
стилизованной карточке (Card) под кнопкой.

11. Стилизация отображаемого текста

12. Для отображения текста использовать компонент `Typography` с вариантом `h5`.