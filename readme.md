# Документация Медпред CRM 

**Технические требования:**

- Каждый пункт документации должен храниться в отдельном файле `.md` в папке `src/guide`
- Названия файлов повторяют URL страницы + описание того что содержит данный файл. Например файл описания дедубликации списков будет таким `database-dict-merge.md`.
- Имена файлов `.md` и изображений могут содержать только латинские буквы, цифры и знак тире
- Все изображения хранятся в папке `src/images`
- Все ссылки на изображения имеют относительный путь

## Список тем

- Общие (common)

  - [ ] Авторизация и первый вход
  - [ ] Обновление программы
  - [ ] Оффлайн. Описание возможностей и нюансы

- Пользователи (accounts)

  - [ ] Список пользователей. Описание элементов страницы и возможностей
    - [ ] Таблица с описанием каждого поля
    - [ ] Добавление нового пользователя
    - [ ] Редактирование пользователя. Описание элементов страницы и возможностей
      - [ ] Рабочий регион. На что влияет. Изменение рабочего региона
      - [ ] Изменение пароля пользователя
      - [ ] Копирование базы пользователя другому пользователю
      - [ ] Выгрузка базы пользователя
    - [ ] Удаление и восстановление пользователя
  - [ ] Группы пользователей. Общее описание и список возможностей (создание, редактирование)
    - [ ] Создание группы
    - [ ] Редактирование группы. Переключатель "Менеджер/Сотрудник". Настройка прав и их значение

- Базы данных (database)
  - [ ] Управление субъектами. Описание элементов интерфейса и возможностей
    - [ ] Таблица с описанием каждого поля
    - [ ] Страница редактирования субъекта. Описание элементов интерфейса и возможностей
      - [ ] График работы субъекта
      - [ ] Связанные аптеки
  - [ ] Управление объектами. Описание элементов интерфейса и возможностей.
    - [ ] Таблица с описанием каждого поля.
    - [ ] Добавление объекта. Обязательные поля. Внесение адреса. 
    - [ ] Просмотр объекта на карте.
    - [ ] Страница редактирования объекта. Описание элементов интерфейса и возможностей
      - [ ] Контакты. Описание, добавление, удаление
      - [ ] Добавление субъекта. Описание (добавить нового или существующего)
  - Общее для субъектов и объектов
    - [ ] Экспорт субъектов и объектов
    - [ ] Просмотр базы сотрудников. Активная, не активная
    - [ ] Фильтр базы по региональной принадлежности
  - [ ] Продукты. Описание элементов интерфейса и возможностей
    - [ ] Установка диапазонов потенциала и лояльности
  - [ ] Территории. Описание элементов интерфейса и возможностей
    - [ ] Добавление
    - [ ] Редактирование
  - [ ] Участки. Описание элементов интерфейса и возможностей
    - [ ] Добавление
    - [ ] Редактирование
  - [ ] Списки. Описание элементов интерфейса и возможностей
    - [ ] Описание каждого типа и того где он применяется
    - [ ] Добавление элементов списка
    - [ ] Особенности визит-эквивалента (вес и коэффициент)
    - [x] [Объединение (дедубликация) элементов списка](src/guide/database-dict-merge.md)
  - [ ] Корзина. Описание элементов интерфейса и возможностей
    - [ ] Восстановление удаленных данных

- Инструменты (tools)
  - [x] [Дедубликация. Описание элементов интерфейса и возможностей](src/guide/tools-deduplication.md)
    - [x] [Процесс объединения найденных дублей. Выбор основного. Отмена (не дубли)](src/guide/tools-deduplication-merge.md)
    - [ ] Восстановление результатов объединения

- Планирование (rep)
  - [ ] Планирование. Описание элементов (блоков) интерфейса и возможностей
  - [ ] Блок. Короткий план. Описание элементов интерфейса и возможностей
  - [ ] Подробный план. Описание элементов интерфейса и возможностей
    - [ ] Изменение даты визита
  - [ ] Добавление в план
    - [ ] Описание интерфейса с календарем
    - [ ] Двойной визит
    - [ ] Цели визита
    - [ ] Режим работы врача
  - Вкладки: врачи, аптеки, клиники и пр. (центральный блок)
    - [ ] Двойной (коуч, аудит) визит. Описание элементов интерфейса и возможностей
      - [ ] Добавление двойного визита в план
    - [ ] Списки субъектов (врачи, ОЛ). Описание элементов интерфейса и возможностей
      - [ ] Врачи. Список по ФИО
      - [ ] Врачи. Список по месту работы. Коротко + ссылка на страницу описание "Клиники (аптеки)"
    - [ ] Список объектов (аптеки, клиники). Описание элементов интерфейса и возможностей
    - Общее по объектам и субъектам
      - [ ] Режим редактирования
        - [ ] Отключение или удаление нескольких объектов/субъектов
        - [ ] Просмотр отключенных объектов/субъектов
      - [ ] Фильтры
      - [ ] Экспорт
    - [ ] Визит эквивалент. Описание элементов интерфейса и возможностей
  - [ ] Осуществление визита и занесение его итогов. Откуда можно открыть страницу визита
    - [ ] Итоги визита в объект (аптеку). Описание интерфейса
      - [ ] Поля итогов визита в аптеку
    - Общее
      - [ ] Добавление фото
      - [ ] Цели визита
      - [ ] Отмена визита
      - [ ] Поля итогов визита к врачу или ОЛ
    - [ ] Итоги визита к субъекту (врачу). Описание интерфейса
      - [ ] Поля итогов визита в аптеку
    - [ ] Итоги визит эквивалента
    - [ ] Итоги двойных визитов

- Карта (map)
  - [ ] Карта. описание и возможности. (для менеджера и пользователя)
  - [ ] Просмотр списка своих объектов на карте. Планирование из карты
  - [ ] [Изменение координат объекта](src/guide/map-change-object-latlng.md)
  - [ ] Просмотр визитов на карте.  Просмотр объектов и геометок
  - [ ] Менеджеру. Просмотр объектов визита и геометок пользователей

- Сообщения (messenger) *Дополню после внедрения хелпдеска*

- Статистика (reports)
  - [ ] Визиты. Описание, интерфейс возможности (переключатель "моя статистика")
    - [ ] Выбор периода и фильтры. Типы фильтров, множественный выбор
    - [ ] Описание блока с визитами. Обозначения. Детали и Цели визита
    - [ ] Экспорт визитов. Варианты экспорта. Детали визита
    - [ ] Сводная таблица. Описание, интерфейс возможности
    - [ ] Общая сводная таблица. Описание некоторых колонок. Экспорт
    - [ ] По специальности. Описание
    - [ ] [Частота визитов. Описание](src/guide/reports-summary-frequency.md)
  - [ ] Журнал действий. Описание, интерфейс возможности
