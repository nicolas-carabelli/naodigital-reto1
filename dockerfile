# Usa una imagen de Node.js como base
FROM node:14

# Directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el archivo de la función en el contenedor
COPY funcion_lambda.js .

# Instala las dependencias si las hubiera
# RUN npm install

# Define el comando para ejecutar la función
CMD ["node", "funcion_lambda.js"]
