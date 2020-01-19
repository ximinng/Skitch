# Reboot-Blog

This is blog  project: **Full Stack App built using Nginx, Spring Boot, Spring Security, JWT, React, and Ant Design.Finally deploy with Docker.**

## Steps to Setup the Spring Boot Back end app (blog-app-server)

1. **Clone the application**

	```bash
	git clone https://github.com/ximingxing/App-Scaffolding-Project.git
	cd App-Scaffolding-Project
	```

2. **Create MySQL database**

	```bash
	create database blogs
	```

3. **Change MySQL username and password as per your MySQL installation**

	+ open `src/main/resources/application.yml` file.

	+ change `spring.datasource.username` and `spring.datasource.password` properties as per your mysql installation

4. **Run the app**

	You can run the springboot app by typing the following command -

	```bash
	mvn spring-boot:run
	```

	The server will start on port 8080.

	You can also package the application in the form of a `jar` file and then run it like so -

	```bash
	mvn package
	java -jar target/polls-0.0.1-SNAPSHOT.jar
	```
5. **Default Roles**
	
	The spring boot app uses role based authorization powered by spring security. To add the default roles in the database, I have added the following sql queries in `src/main/resources/data.sql` file.

## Steps to Setup the React Front end app (polling-app-client)

First go to the `blog-app-client` folder -

```bash
cd blog-app-client
```

Then type the following command to install the dependencies and start the application -

```bash
npm install && npm start
```

The front-end server will start on port `3000`.
