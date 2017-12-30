FROM node:8.9.3-alpine
RUN npm install -g create-react-app

# Yarn install
ENV PATH /root/.yarn/bin:$PATH
RUN apk update \
  && apk add curl bash binutils tar \
  && rm -rf /var/cache/apk/* \
  && /bin/bash \
  && touch ~/.bashrc \
  && curl -o- -L https://yarnpkg.com/install.sh | bash \
  && apk del curl tar binutils

RUN mkdir /app
WORKDIR /app
ADD . /app
RUN yarn