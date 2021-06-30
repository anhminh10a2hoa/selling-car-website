+ Download mysql images on Docker

```bash
docker pull mysql/mysql-server:latest
```

+ Run mysql

```bash
docker run -p 3306:3306 -d --name=mysql mysql/mysql-server:latest
```

+ Run the command ```docker logs mysql``` and get the generated password.

+ Access inside the mysql images: ```docker exec -it mysql bash``` and change change the password before using: ``` ALTER USER 'root'@'localhost' IDENTIFIED BY 'your_password';```