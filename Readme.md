Run dev
docker build -t books -f Dockerfile.dev .
docker run -p 7000:7000 books
