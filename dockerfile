# Use a base image
FROM node:14-alpine

# Copiar la función lambda al directorio /app
COPY funcion_lambda.js /app/

# Establecer el directorio de trabajo
WORKDIR /app

# Ejecutar el comando para iniciar la función lambda
CMD ["node", "funcion_lambda.js"]
