Наглядные примеры логических схем
=================================
_реализация на Coffee Script_

Структура
---------

Базовые классы:
- Node: выводы элементов схемы (логические элементы, ввод, вывод и т.д.);
- Wire: провода, соединяющие выводы элементов
- Element: базовый класс логического элемента _(в процессе)_
- Input: интерфейс ввода
- Output: интерфейс вывода

Классы логических элементов:
- Not
- And
- Or
