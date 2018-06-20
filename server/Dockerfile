FROM mhart/alpine-node

WORKDIR /usr/src/app

#Install dependencies (Only the production dependencies)
COPY package*.json ./

RUN npm install

# Copy only the compiled file(s) to the image
COPY index.js .

EXPOSE 3001

CMD [ "npm", "run", "start" ]
