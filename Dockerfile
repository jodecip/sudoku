FROM public.ecr.aws/lambda/python:3.9

COPY ./requirements.txt /requirements.txt
RUN pip install --no-cache-dir -r /requirements.txt

COPY . .

CMD ["main.lambda_handler"]
