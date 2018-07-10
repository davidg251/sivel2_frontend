FROM node:8.11

WORKDIR /code

COPY . /code

RUN apt-get update && \
    apt-get install curl -y && \
    apt-get install apt-transport-https -y && \
    curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --1.8.0 [1.8.0] && \
    apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
    #curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    #echo "deb https://dl.yarnpkg.com/debian/ stable main" |  tee /etc/apt/sources.list.d/yarn.list && \
    #apt-get update && \
    #apt-get install yarn -y && \
    #yarn install