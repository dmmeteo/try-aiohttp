# Using official python runtime base image
FROM python:3.6-alpine
# Set the application directory
WORKDIR /app
# Install utils
RUN apk add --no-cache bash postgresql-dev gcc python3-dev musl-dev

# Copy & Install our requirements.txt
ADD requirements.txt /app
RUN pip install --no-cache-dir -r requirements.txt
# Copy code from the current folder to /app inside the container
ADD . /app
# Make port 8000 available for links and/or publish
EXPOSE 8000

# Define our command to be run when launching the container
CMD [ "python", "-u", "aiohttp_polls/main.py" ]
