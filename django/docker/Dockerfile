FROM python:3.7-slim

WORKDIR /django

COPY requirements.txt /django

RUN pip install --trusted-host pypi.python.org -r requirements.txt

EXPOSE 8000
