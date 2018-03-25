FROM microsoft/aspnetcore-build:2.0.3-stretch
MAINTAINER Leo.Li <gqy117@gmail.com>
WORKDIR /WebTool2

ADD publish /WebTool2

RUN apt-get update

EXPOSE 12315

CMD ["dotnet", "./WebTool2.dll"]