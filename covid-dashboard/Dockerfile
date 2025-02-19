# สเตจที่ 1: Build แอปด้วย Node.js
FROM node:18-alpine AS builder

# กำหนดโฟลเดอร์ทำงานใน Container
WORKDIR /app

# คัดลอกไฟล์ที่จำเป็นสำหรับการติดตั้ง dependency
COPY package*.json ./

# ติดตั้ง Dependencies
RUN npm install

# คัดลอกไฟล์โค้ดทั้งหมดเข้าไปใน Container
COPY . .

# รันคำสั่ง Build แอป React
RUN npm run build

# สเตจที่ 2: Serve ด้วย Nginx
FROM nginx:1.21.0-alpine

# คัดลอกไฟล์ที่ Build แล้วไปยังโฟลเดอร์ที่ Nginx ใช้เสิร์ฟเว็บ
COPY --from=builder /app/dist /usr/share/nginx/html

# คัดลอกไฟล์ตั้งค่า Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# เปิด Port 80 สำหรับให้เข้าใช้งาน
EXPOSE 80

# เริ่มรัน Nginx
CMD ["nginx", "-g", "daemon off;"]

# Stage 1: Development
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install -g vite

COPY . .

EXPOSE 5173

CMD ["npm", "run", "start"]
