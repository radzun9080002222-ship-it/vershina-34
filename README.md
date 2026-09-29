# Вершина — доступный клининг в Волгограде

Самостоятельный городской лендинг на React, Vite, TypeScript и Tailwind CSS.

## Публикация

- Домен: https://vershina-34.ru/
- Репозиторий: https://github.com/radzun9080002222-ship-it/vershina-34
- Production размещается в Yandex Object Storage.
- GitHub Actions собирает свежую `main` и синхронизирует `dist/` с бакетом `vershina-34.ru`.
- Canonical, Open Graph, JSON-LD, robots.txt, sitemap.xml и политика настроены на `vershina-34.ru`.

## Запуск

```bash
pnpm install
pnpm run dev
pnpm run build
```

## Структура

- `src/data.ts` — контакты, тарифы, чек-листы, кейсы и FAQ.
- `src/components/` — секции страницы.
- `public/images/` — оптимизированные production-изображения.
- `source-assets/images/GPT/volgograd/` — исходные PNG визуализаций.
- `IMAGE-PROMPTS.md` — промты волгоградских изображений.
- `MEMORY.md` — принятые решения и правила продолжения работы.

Телефон, MAX, Telegram и WhatsApp общие с брендом «Вершина». Для Волгограда создаются отдельные рекламный кабинет, счётчик Метрики и сайт в Яндекс Вебмастере; чужие счётчики и verification-файлы не переносятся.
