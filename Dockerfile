FROM microsoft/aspnetcore:2.0.6-stretch
MAINTAINER Leo.Li <gqy117@gmail.com>
WORKDIR /WebTool2

ENV NODE_VERSION 6.13.0
ENV NODE_DOWNLOAD_URL https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz

ADD publish /WebTool2

RUN apt-get update \
  && curl -SL "$NODE_DOWNLOAD_URL" --output nodejs.tar.gz \
  && tar -xzf "nodejs.tar.gz" -C /usr/local --strip-components=1 \
  && rm nodejs.tar.gz \
  && rm -rf /var/lib/apt/lists/*

EXPOSE 12315

CMD ["dotnet", "./WebTool2.dll"]