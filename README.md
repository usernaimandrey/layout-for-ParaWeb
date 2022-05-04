[![Node.js CI](https://github.com/usernaimandrey/layout-for-ParaWeb/actions/workflows/node.js.yml/badge.svg)](https://github.com/usernaimandrey/layout-for-ParaWeb/actions/workflows/node.js.yml)

## Тестовое задание для ParaWeb

## Демонстрация на [Vercel](https://layout-for-para-a2n39ju1x-usernaimandrey.vercel.app/)

## Запустить локально в Docker:
1. Клонируйте репозиторй:
```
git clone https://github.com/usernaimandrey/layout-for-ParaWeb.git

```
2. Перходим в папку проекта:
```
cd layout-for-ParaWeb/

```
3. Собрать образ:
```
docker build -t layout
```
4. Запускаем:
```
docker run -i --rm -p 8080:8080 layout

```
5. открываем на http://localhost:8080/