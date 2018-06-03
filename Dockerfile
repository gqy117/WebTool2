FROM microsoft/dotnet:2.1.0-aspnetcore-runtime-alpine3.7
MAINTAINER Leo.Li <gqy117@gmail.com>
WORKDIR /WebTool2

ADD . /WebTool2

RUN apk add --no-cache nodejs nodejs-npm

EXPOSE 12315