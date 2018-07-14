FROM node:8.11.2
LABEL hello-world.version="0.0.1"
ENV NODE_ENV=development
ADD ./app.js /app.js
EXPOSE 3000
CMD ["node", "app.js"]