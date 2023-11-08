# by Konrad Münch

# base-image (its depends on your requirements alpine is the smallest):
FROM python:3.11-alpine

# upgrade your pip
RUN pip install --upgrade pip

# copy your code to container (CHANGE THE NAME my_app is not the name of YOUR project ;) )
COPY . ./my_app

# set your workdir its your relative path
WORKDIR /my_app

# install your requirements!
RUN pip install -r requirements.txt

# run the app with u-flag to set the std out to console
CMD ["python","-u","main.py"]


