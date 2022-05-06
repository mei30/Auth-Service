FROM node:14

ENV PB_REL="https://github.com/protocolbuffers/protobuf/releases"
RUN curl -LO $PB_REL/download/v3.15.8/protoc-3.15.8-linux-x86_64.zip
RUN unzip protoc-3.15.8-linux-x86_64.zip -d /.local 
ENV PATH="$PATH:/.local/bin"

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app/

RUN npm run proto:auth


EXPOSE 5003

CMD ["npm", "start:dev"]


