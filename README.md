# Serverless Framework - Lambda + Mongo

![](https://res.cloudinary.com/jam-trading/image/upload/v1698898570/aws_yrqysh.png)

# Tokenización de Tarjetas

#### Este proyecto consta de creacion de lambda functions para validación de tarjeta de crédito y generación de tokens único y obtener la información de la tarjeta a traves del token generado en otra lamda Functions. A continuación, se describen los componentes clave y los requisitos del sistema:

- Generación de un Token
- Consulta del comercio
- Almacenamiento seguro
- Tiempo de registro

Para todo esto se utilizo Clean Architecture,Serveless, TypeScript , base de Datos PostgreSql , para la información CACHE Redis y test Unitarios Jest

## 1. Clonar proyecto

```
git clone git@github.com:MarvoloV/InterviewC-Token.git
```

## 2. Instalar las dependencias

```
npm install
```

## 3. Clonar el archivo `.env.template` y renombrarlo a `.env`

```
cp .env.template .env
```

## 4. Levantar la base de datos y redis

```
docker-compose up -d
```

## 5. Ejecutar MIGRATE

```
  npx prisma migrate dev --name init
```

## 5. Ejecutar SEED

```
   npx prisma db seed
```

### Deploy Local

Puede invocar su función localmente usando el siguiente comando:

```bash
npm run local
```

```bash


Starting Offline at stage dev (us-east-1)

endpoints:
  POST - http://localhost:3000/api/token
  GET  - http://localhost:3000/api/token/{token}

POST - http://localhost:3000/api/token

body:{
   "card_number":"4557880821444944",
    "expiration_month":"11",
    "expiration_year":"2023",
    "email":"jorge2ad0812@gmail.com",
    "cvc":"1234"
}
header:{
    Authorization: 'Bearer pk_test_9rP8oZ3piARWTerm'
}
----------------------------------------------------------
GET  - http://localhost:3000/api/token/{token}
header:{
    Authorization: 'Bearer pk_test_9rP8oZ3piARWTerm'
}

```

## Testing

```bash
npm run test
```
