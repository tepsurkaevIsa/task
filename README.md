Это проект написан на: [Next.js](https://nextjs.org/).

## Зупуск

Чтобы запустить проект, введите в терминале:

```bash
npm i
# и
npm run dev
```
Откройте http://localhost:3000 в вашем браузере, чтобы увидеть результат.

## Заметки

- Реальная температура на улице берется с [API](https://openweathermap.org/) Выбран город: Москва.
- Для графиков и спиннера использована библиотека [Mateal UI](https://mui.com/).
  
  примечание:
  - Сделана искусственная задержка, чтобы показать реализацию загрузки/loading на странице "Температура на улице".
    
  - Для графиков изначально установлены фиктивные данные, чтобы они не были пустыми. Однако при изменении данных они добавляются в график и кэшируются в состоянии, как и требовалось по заданию.

## Деплой на Vercel

Откройте  https://task-indicators.vercel.app/ в вашем браузере, чтобы посмотреть деплой проекта.
