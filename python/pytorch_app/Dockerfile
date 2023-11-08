# by Konrad Münch

# base-image (nvidia base image for AI apps):

FROM nvidia/cuda:11.8.0-devel-ubuntu22.04

# set your workdir its your relative path
WORKDIR /app

# upgrade the OS and pip
RUN apt update && apt install python3-pip -y

# copy and install your requirements!
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# install torch
RUN pip3 install torch --index-url https://download.pytorch.org/whl/cu118

# copy your files to WORKDIR
COPY . .

# mount a volume to prevent the app from download the model
# on each start, you have to use it with compose for example
VOLUME /root/.cache/huggingface/
CMD ["python3", "-u", "main.py"]


# example run command for non compose:

# docker run -p 5000:5000 -v $(pwd)/resources:/root/.cache/huggingface/ 
# --gpus all --name container_name --env-file .env image_name
