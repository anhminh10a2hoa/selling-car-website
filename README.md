+ Download mysql images on Docker

```bash
docker pull mysql/mysql-server:latest
```

+ Run mysql

```bash
docker run -p 3306:3306 -d --name=mysql mysql/mysql-server:latest
```

+ Run the command ```docker logs mysql``` and get the generated password.

+ Access inside the mysql images: ```docker exec -it mysql bash``` and change the password before using: ``` ALTER USER 'root'@'localhost' IDENTIFIED BY 'your_password';```

+ <b>Note: </b>If you have 2 errors below, you can fix it by: 
    
    + ```Error: ER_HOST_NOT_PRIVILEGED: Host '172.17.0.1' is not allowed to connect to this MySQL server```
        
        + You need to create new account by using ```CREATE USER 'minh'@'%' IDENTIFIED BY 'password';```
        + Then grant all the privileges for the user ```GRANT ALL PRIVILEGES ON *.* TO 'minh'@'%' WITH GRANT OPTION;```
        + And run ```FLUSH PRIVILEGES;```

    + ```Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client```

        + Use this command to fix the problem ```ALTER USER 'minh'@'%' IDENTIFIED WITH mysql_native_password BY 'password';```