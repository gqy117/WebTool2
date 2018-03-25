docker rm -f $(docker ps -a -q);docker rmi -f webtool2; docker build -t webtool2 .; docker images;
docker run --mount type=bind,source=/home/vagrant/DBs,target=/DBs -d -p 12315:12315 webtool2