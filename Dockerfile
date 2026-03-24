# Use Node image
FROM node:18

# Create app folder
WORKDIR /app

# Copy package.json
COPY package.json .

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose port (same as your app)
EXPOSE 7000

# Run app
CMD ["node", "index.js"]