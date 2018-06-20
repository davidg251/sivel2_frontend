FROM node

WORKDIR /code

COPY . /code

RUN apt-get update && \
    apt-get install curl -y && \
    apt-get install apt-transport-https -y

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" |  tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && \
    apt-get install yarn -y && \
    yarn install