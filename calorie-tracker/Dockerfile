# Étape 1 : Build de l'application Angular avec Node
FROM node:20 AS build

# Dossier de travail
WORKDIR /app

# Copie des fichiers package.json et package-lock.json
COPY package*.json ./

# Installation des dépendances Angular
RUN npm install

# Copie de tout le code Angular dans l'image
COPY . .

# Build de l'application Angular en mode production
RUN npm run build --prod

# Étape 2 : Serveur NGINX pour héberger l'app Angular
FROM nginx:alpine

# Répertoire dans lequel NGINX va servir le site
COPY --from=build /app/dist/calorie-tracker/browser /usr/share/nginx/html

# Copie de la configuration NGINX (gère les routes Angular)
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Exposition du port 80 pour accès HTTP
EXPOSE 80

# Commande de démarrage de NGINX
CMD ["nginx", "-g", "daemon off;"]
