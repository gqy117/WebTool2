docker rm -f $(docker ps -a -q);docker rmi -f gqy117/webtool2; docker build -t gqy117/webtool2 .; docker images;
docker run --mount type=bind,source=/DBs,target=/DBs -d -p 12315:12315 gqy117/webtool2