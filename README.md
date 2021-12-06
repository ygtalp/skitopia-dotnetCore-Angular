
# skitopia-dotnetCore-Angular

Skitopia Ecommerce website with Angular and .net 5

![terminal](https://github.com/ygtalp/skitopia-dotnetCore-Angular/blob/master/gif.gif?raw=true)
## Requirements

1- **.net** 5.0.401 or later

2- **Angular CLI** 11.2.1 or later

3- **Node** @v14.18.0 or later and **npm** @6.14.15 or later

4- **Docker Desktop** @4.1.0 or later

To see versions:

```bash 
  dotnet --version
  ng --version
  node --version
  npm --version
```

After install requirements, clone project
```bash 
git clone https://github.com/ygtalp/skitopia-dotnetCore-Angular
```

## Run projects for **first time**

1- Run Backend

Open new terminal and go to the project's API folder and Run backend
```bash 
  cd API
```

Then type:
```bash 
  dotnet watch run
```

You can see swagger ui on https://localhost:5001/swagger

##
2- Run Docker Redis

FOR ONCES! this step for setting docker and redis setup. Open new terminal and go to projects root folder. Then type:

```bash 
  docker-compose up --detach
```
##

2.5 Go to Docker Desktop, go to containers and press Start button. 

**You have to do this step every time you run the project**

##
3- Run Frontend

Open new terminal and go to the project's Client folder and Run frontend

```bash 
  cd Client
```
then install node modules. _(for once)_

```bash 
  npm install
```

Then type:

```bash 
  ng serve
```

To see front end go to https://localhost:4200/

### Login credentials:

username: bob@test.com

password: Pa$$w0rd

**If you don't run docker container, can't see products.**
##


## First time running projects terminal screenshots.

![terminal](https://raw.githubusercontent.com/ygtalp/skitopia-dotnetCore-Angular/master/terminals.png)


## For later run
![terminal](https://raw.githubusercontent.com/ygtalp/skitopia-dotnetCore-Angular/master/afterr.jpg)


## Screenshots
![terminal](https://raw.githubusercontent.com/ygtalp/skitopia-dotnetCore-Angular/master/screenshots/1.png)
![terminal](https://raw.githubusercontent.com/ygtalp/skitopia-dotnetCore-Angular/master/screenshots/2.png)
![terminal](https://raw.githubusercontent.com/ygtalp/skitopia-dotnetCore-Angular/master/screenshots/3.png)
![terminal](https://raw.githubusercontent.com/ygtalp/skitopia-dotnetCore-Angular/master/screenshots/4.png)
![terminal](https://raw.githubusercontent.com/ygtalp/skitopia-dotnetCore-Angular/master/screenshots/5.png)
![terminal](https://raw.githubusercontent.com/ygtalp/skitopia-dotnetCore-Angular/master/screenshots/6.png)
![terminal](https://raw.githubusercontent.com/ygtalp/skitopia-dotnetCore-Angular/master/screenshots/7.png)
![terminal](https://raw.githubusercontent.com/ygtalp/skitopia-dotnetCore-Angular/master/screenshots/8.png)
![terminal](https://raw.githubusercontent.com/ygtalp/skitopia-dotnetCore-Angular/master/screenshots/9.png)
![terminal](https://raw.githubusercontent.com/ygtalp/skitopia-dotnetCore-Angular/master/screenshots/10.png)
