# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el código fuente de la función Lambda
COPY index.js .

# Comando para ejecutar la función (puede variar según tu función)
CMD ["node", "index.js"]




