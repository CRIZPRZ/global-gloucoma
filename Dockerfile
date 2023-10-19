# Usa una imagen de PHP con FPM
FROM php:8.1-fpm

# Instala las dependencias necesarias y Composer
RUN apt-get update && apt-get install -y \
    libzip-dev \
    libjpeg-dev \
    libpng-dev \
    zip \
    unzip \
    && docker-php-ext-configure gd --with-jpeg \
    && docker-php-ext-install gd zip pdo pdo_mysql \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Instala Node.js y npm
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs npm

# Copia el código de la aplicación Laravel al contenedor
COPY ./ /var/www/html

# Establece el directorio de trabajo
WORKDIR /var/www/html

# Expone el puerto 9000 para conectar con el servidor web
EXPOSE 9000

# Ejecuta Composer para instalar las dependencias de Laravel
RUN composer install

# Ejecuta npm install para instalar las dependencias de Node.js
RUN npm install

# Configura las variables de entorno para Laravel
# ENV DB_CONNECTION=mysql
# ENV DB_HOST=mysql
# ENV DB_PORT=3306
# ENV DB_DATABASE=findstars
# ENV DB_USERNAME=root
# ENV DB_PASSWORD=Thecube.1

# CMD ["composer install"]


