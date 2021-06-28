FROM node:12 AS builder
COPY . /app/
WORKDIR /app/
RUN cd types && yarn install && yarn build && cd ../data-manager && yarn install && yarn pkg 

FROM debian:10.5-slim
ENV NODE_ENV=production
WORKDIR /app/
ADD /data-manager/src/assets/images src/assets/images
COPY --from=builder /app/data-manager/datamanager.app /app/datamanager.app
CMD /app/datamanager.app