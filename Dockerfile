FROM ubuntu:14.04

ENV DJANGO_CONFIGURATION Docker

RUN apt-get update
RUN apt-get install -y ca-certificates git-core nodejs npm python-pip libpq-dev python-dev
RUN ln -s /usr/bin/nodejs /usr/bin/nodejs

ENV HOME /root

RUN git clone https://github.com/isidrok/Django-pizza-shop.git

WORKDIR /usr/src/app/Django-pizza-shop
RUN pip install -r requirements.txt
RUN npm install

CMD ["gunicorn", "-c", "gunicorn_conf.py", "--chdir", "mysite", "mysite.wsgi:application", "--reload"]