# Use official Node.js LTS image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start application
CMD ["node", "app.js"]
