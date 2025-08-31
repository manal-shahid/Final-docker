# Use official Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the frontend port
EXPOSE 3000

# Start the frontend in dev mode
CMD ["npm", "run", "dev", "--", "--host"]
