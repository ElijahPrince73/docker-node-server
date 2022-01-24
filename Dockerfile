# Specify base image
FROM alpine

# Install dependencies
RUN yarn install

# Default command
CMD ["yarn", "start"]