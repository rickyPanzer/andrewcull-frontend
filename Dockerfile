FROM node:latest
MAINTAINER btcmp.io <studentservices@btcmp.io>

RUN apt-get update && apt-get install -qq -y build-essential zsh git-core lsof vim --fix-missing --no-install-recommends

# Install Zsh
# RUN git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh \
#       && cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc \
#       && chsh -s /bin/zsh

ENV INSTALL_PATH /install
RUN mkdir -p $INSTALL_PATH
RUN mkdir -p react

WORKDIR $INSTALL_PATH

RUN yarn global add rimraf webpack nodemon

COPY package.json package.json
RUN yarn install

WORKDIR /react

COPY . .

EXPOSE 80

# CMD ECHO "Hello world"

# CMD webpack --watch --watch-polling --config webpack.config.js --display-error-details
