if [ $TRAVIS_BRANCH == 'master' ]; then
  echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
  docker build -t gqy117/webtool2 ../
  docker push gqy117/webtool2
fi