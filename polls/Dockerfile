# Using official python runtime base image
FROM python:3.6-alpine
# Set the application directory
WORKDIR /app
# Copy code from the current folder to /app inside the container
ADD . /app
# Install our requirements.txt
RUN pip install -r requirements.txt
# Make port 80 available for links and/or publish
EXPOSE 80

# Define our command to be run when launching the container
CMD [ "python", "-u", "aiohttp_polls/main.py" ]
