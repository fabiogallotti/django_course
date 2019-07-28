### Creating a project
* `django-admin startproject my_project`

### Creating a django app
* `cd my_project`
* `django-admin startapp my_app`


In order to have your django project working with Docker, you should:

### Prepare the image ###
Switch to `docker` directory and run  

`docker build -t django .` (don't forget the `.` in the end!)

You will then have a `django` image.

### Run the container
From the django folder, run `docker run -it -v $(pwd):/django/ -p 8000:8000 django /bin/bash`.

Be careful to map the exposed port of the container (specified in the `Dockerfile`) to the port of the host (`-p <host_port>:<container_port>`).

In this specific case the two ports are the same (`8000`), but this is not necessary at all.

### Run the server
In the `settings.py` file, inside the project folder, set `ALLOWED_HOSTS = ['*']`.

Inside the container, do the following:

* `cd my_project`
* `python manage.py runserver 0.0.0.0:8000`

Be careful to specify the IP address and the port you want to run the server (i.e. `0.0.0.0:8000`).

To check that everything works fine, you need to connect to `localhost:8000`, or, in case you are using Docker Toolbox, you need to connect to
`192.168.99.100:8000`, because `192.68.99.100` is the container's default IP.
