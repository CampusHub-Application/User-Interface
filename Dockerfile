FROM node:22.14.0-alpine

COPY . /campushub/
WORKDIR /campushub/

RUN chown -R node:node /campushub/
RUN chown -R node:node /tmp/

RUN npm install -g npm@latest
RUN npm install -g serve
RUN npm audit fix --audit-level=none
RUN npm run build

RUN rm -rf /tmp/* && rm -rf ~/.npm/
RUN rm -rf /etc/localtime
RUN ln -s /usr/share/zoneinfo/Asia/Jakarta /etc/localtime

USER node
CMD serve -s dist