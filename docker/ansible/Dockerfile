FROM python:3.8.3-alpine3.12

WORKDIR /usr/src/app

RUN mkdir sodata

COPY requirements.txt ./

RUN apk add --no-cache build-base libffi-dev musl-dev libressl-dev openssh sshpass
RUN pip install --no-cache-dir -r requirements.txt

COPY ./id_rsa /root/.ssh/id_rsa
COPY ./id_rsa.pub /root/.ssh/id_rsa.pub

RUN chmod 600 -R /root/.ssh

COPY ./init.sh /usr/src/app/init.sh
RUN chmod a+x /usr/src/app/init.sh

ENTRYPOINT ["sh",  "init.sh"]