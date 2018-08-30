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
  - [ ] Описание интерфейса в целом - шапка, левая панель, основное окно

- Пользователи (accounts)
  - [ ] [Список пользователей. Описание элементов страницы и возможности](src/guide/accounts-user.md)
    - [ ] [Таблица с описанием каждого поля](src/guide/accounts-user-fields.md)
    - [ ] [Добавление нового пользователя](src/guide/accounts-user-add.md)
    - [ ] [Редактирование пользователя. Описание элементов страницы и возможностей](src/guide/accounts-user-edit.md)
      - [ ] [Рабочий регион. На что влияет. Изменение рабочего региона](src/guide/accounts-user-region.md)
      - [ ] [Изменение пароля пользователя](src/guide/accounts-user-password.md)
      - [ ] [Выгрузка базы пользователя](src/guide/accounts-user-base-export.md)
      - [ ] [Копирование базы пользователя другому пользователю](src/guide/accounts-user-base-copy.md)
    - [ ] [Удаление и восстановление пользователя](src/guide/accounts-user-delete.md)
  - [ ] [Группы пользователей. Общее описание и список возможностей (создание, редактирование)](src/guide/accounts-group.md)
    - [ ] [Создание группы](src/guide/accounts-group-create.md)
    - [ ] [Редактирование группы. Переключатель "Менеджер/Сотрудник". Настройка прав и их значение](src/guide/accounts-group-edit.md)

- Базы данных (database)
  - Общее для субъектов и объектов
    - [ ] [Описание интерфейса и возможности](src/guide/database.md)
    - [ ] [Экспорт субъектов и объектов](src/guide/database-export.md)
    - [ ] [Просмотр базы сотрудников. Активная, не активная](src/guide/database-user.md)
    - [ ] [Фильтр базы по географической принадлежности](src/guide/database-geo.md)
  - [ ] [Управление субъектами. Описание элементов интерфейса и возможностей](src/guide/database-subject.md)
    - [ ] [Страница редактирования субъекта. Описание элементов интерфейса и возможностей](src/guide/database-subject-edit.md)
      - [ ] [График работы субъекта](src/guide/database-subject-schedule.md)
      - [ ] [Связанные аптеки](src/guide/database-subject-pharmacy.md)
  - [ ] [Управление объектами. Описание элементов интерфейса и возможностей](src/guide/database-object.md)
    - [ ] [Добавление объекта. Обязательные поля. Внесение адреса](src/guide/database-object-add.md)
    - [ ] [Просмотр объекта на карте](src/guide/database-object-map.md)
    - [ ] [Страница редактирования объекта. Описание элементов интерфейса и возможностей](src/guide/database-object-edit.md)
      - [ ] [Контакты. Описание, добавление, удаление](src/guide/database-object-contact.md)
      - [ ] [Добавление субъекта к объекту. Описание (добавить нового или существующего)](src/guide/database-object-add-subject.md)
  - [ ] [Продукты. Описание элементов интерфейса и возможностей](src/guide/database-product.md)
    - [ ] [Установка диапазонов потенциала и лояльности](src/guide/database-product-pl.md)
  - [ ] [Территории. Описание элементов интерфейса и возможностей](src/guide/database-territory.md)
    - [ ] [Добавление](src/guide/database-territory-add.md)
    - [ ] [Редактирование](src/guide/database-territory-edit.md)
  - [ ] [Участки. Описание элементов интерфейса и возможностей](src/guide/database-sector.md)
    - [ ] [Добавление](src/guide/database-sector-add.md)
    - [ ] [Редактирование](src/guide/database-sector-edit.md)
  - [ ] [Списки. Описание элементов интерфейса и возможностей](src/guide/database-dict.md)
    - [ ] [Описание каждого типа и того где он применяется](src/guide/database-dict-type.md)
    - [ ] [Добавление элементов списка](src/guide/database-dict-add.md)
    - [ ] [Особенности визит-эквивалента (вес и коэффициент)](src/guide/database-dict-novisit.md)
    - [x] [Объединение (дедубликация) элементов списка](src/guide/database-dict-merge.md)
  - [ ] [Корзина. Описание элементов интерфейса и возможностей](src/guide/database-trash.md)
    - [ ] [Восстановление удаленных данных](src/guide/database-trash-restore.md)

- Инструменты (tools)
  - [x] [Дедубликация. Описание элементов интерфейса и возможностей](src/guide/tools-deduplication.md)
    - [x] [Процесс объединения найденных дублей. Выбор основного. Отмена (не дубли)](src/guide/tools-deduplication-merge.md)
    - [ ] Восстановление результатов объединения

- Планирование (rep)
  - [ ] [Планирование. Описание элементов (блоков) интерфейса и возможностей](src/guide/rep-planning.md)
  - [ ] [Вкладки: врачи, аптеки, клиники и пр. (центральный блок)](src/guide/rep-planning-central-block.md)
    - Общее по объектам и субъектам
      - [ ] [Режим редактирования](src/guide/rep-planning-central-block-edit.md)
        - [ ] [Отключение или удаление нескольких объектов/субъектов](src/guide/rep-planning-central-block-edit-multi.md)
        - [ ] [Просмотр отключенных объектов/субъектов](src/guide/rep-planning-central-block-edit-view.md)
      - [ ] [Фильтры](src/guide/rep-planning-central-block-filters.md)
      - [ ] [Экспорт](src/guide/rep-planning-central-block-export.md)
    - [ ] [Списки субъектов (врачи, ОЛ). Описание элементов интерфейса и возможностей](src/guide/rep-planning-central-block-subjects.md)
      - [ ] [Врачи. Список по ФИО](src/guide/rep-planning-central-block-subjects-fio.md)
      - [ ] [Врачи. Список по месту работы. Коротко + ссылка на страницу описание "Клиники (аптеки)"](src/guide/rep-planning-central-block-subjects-work.md)
    - [ ] [Списки объектов (аптеки, клиники). Описание элементов интерфейса и возможностей](src/guide/rep-planning-central-block-objects.md)
    - [ ] [Визит эквивалент. Описание элементов интерфейса и возможностей](src/guide/rep-planning-central-block-novisit.md)
    - [ ] [Двойной (коуч, аудит) визит. Описание элементов интерфейса и возможностей](src/guide/rep-planning-central-block-double.md)
      - [ ] [Добавление двойного визита в план](src/guide/rep-add-double.md)
  - [ ] [Блок. Короткий план. Описание элементов интерфейса и возможностей](src/guide/rep-planning-short-plan.md)
  - [ ] [Подробный план. Описание элементов интерфейса и возможностей](src/guide/rep-planning-full-plan.md)
    - [ ] [Изменение даты визита](src/guide/rep-planning-full-plan-change-date.md)
  - [ ] [Добавление в план](src/guide/rep-add.md)
    - [ ] [Описание интерфейса с календарем](src/guide/rep-add-calendar.md)
    - [ ] [Двойной визит](src/guide/rep-add-double.md)
    - [ ] [Цели визита](src/guide/rep-add-target.md)
    - [ ] [Режим работы врача](src/guide/rep-add-schedule.md)
    
- Планирование - Визиты (rep-visits)    
  - [ ] [Осуществление визита и занесение его итогов. Откуда можно открыть страницу визита](src/guide/rep-visits.md)
    - Общее
      - [ ] [Добавление фото](src/guide/rep-visits-foto.md)
      - [ ] [Цели визита](src/guide/rep-visits-target.md)
      - [ ] [Отмена визита (несостоявшийся визит)](src/guide/rep-visits-cancel.md)
    - [ ] [Итоги визита в объект (аптеку)](src/guide/rep-visits-object.md)
    - [ ] [Итоги визита к субъекту (врачу)](src/guide/rep-visits-subject.md)
    - [ ] [Итоги визита к ОЛ](src/guide/rep-visits-ol.md)
    - [ ] [Итоги визит эквивалента](src/guide/rep-visits-novisit.md)
    - [ ] [Итоги двойных визитов](src/guide/rep-visits-double.md) 

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
