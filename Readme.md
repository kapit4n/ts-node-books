Run dev
docker build -t books -f Dockerfile.dev .
docker run -p 7000:7000 books

# TODO
- predictions
- users
- intergations with other services
- 

# DONE
- books(get, post, put, delete)
- bookLogs(get, post, delete)
- 
