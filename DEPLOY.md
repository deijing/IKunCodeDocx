# IKunCode 文档站点 Docker 部署指南

## 📦 文件说明

- `Dockerfile` - Docker 镜像构建文件（多阶段构建）
- `.dockerignore` - Docker 构建时忽略的文件
- `nginx.conf` - Nginx 服务器配置
- `docker-compose.yml` - Docker Compose 编排文件

## 🚀 快速部署

### 方式一：使用 Docker Compose（推荐）

```bash
# 构建并启动容器
docker-compose up -d

# 查看日志
docker-compose logs -f

# 停止容器
docker-compose down

# 重新构建并启动
docker-compose up -d --build
```

访问：http://localhost:6688

### 方式二：使用 Docker 命令

```bash
# 构建镜像
docker build -t ikuncode-docs:latest .

# 运行容器
docker run -d \
  --name ikuncode-docs \
  -p 6688:80 \
  --restart unless-stopped \
  ikuncode-docs:latest

# 查看日志
docker logs -f ikuncode-docs

# 停止并删除容器
docker stop ikuncode-docs && docker rm ikuncode-docs
```

访问：http://localhost:6688

## 🔧 自定义配置

### 修改端口

编辑 `docker-compose.yml`：

```yaml
ports:
  - "8080:80"  # 改为 8080 端口
```

或使用 Docker 命令：

```bash
docker run -d -p 8080:80 ikuncode-docs:latest
```

### 使用 HTTPS（推荐生产环境）

1. 准备 SSL 证书文件（`cert.pem` 和 `key.pem`）

2. 修改 `nginx.conf`：

```nginx
server {
    listen 443 ssl http2;
    server_name your-domain.com;

    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;

    # ... 其他配置保持不变
}

server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$server_name$request_uri;
}
```

3. 修改 `docker-compose.yml`：

```yaml
services:
  ikuncode-docs:
    # ... 其他配置
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./ssl:/etc/nginx/ssl:ro  # 挂载 SSL 证书
```

## 🌐 生产环境部署

### 使用 Nginx 反向代理（推荐）

在宿主机上配置 Nginx：

```nginx
server {
    listen 80;
    server_name docs.ikuncode.com;

    location / {
        proxy_pass http://localhost:6688;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 使用 Traefik 反向代理

修改 `docker-compose.yml`：

```yaml
services:
  ikuncode-docs:
    # ... 其他配置
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.ikuncode-docs.rule=Host(`docs.ikuncode.com`)"
      - "traefik.http.routers.ikuncode-docs.entrypoints=websecure"
      - "traefik.http.routers.ikuncode-docs.tls.certresolver=myresolver"
    networks:
      - traefik-network

networks:
  traefik-network:
    external: true
```

## 📊 镜像优化

### 查看镜像大小

```bash
docker images ikuncode-docs
```

当前镜像大小约：**~50MB**（nginx:alpine 基础镜像 + 静态文件）

### 进一步优化

如果需要更小的镜像，可以使用静态文件服务器：

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run docs:build

FROM busybox:latest
COPY --from=builder /app/docs/.vitepress/dist /www
EXPOSE 8080
CMD ["httpd", "-f", "-p", "8080", "-h", "/www"]
```

## 🔍 故障排查

### 查看容器日志

```bash
docker logs -f ikuncode-docs
```

### 进入容器调试

```bash
docker exec -it ikuncode-docs sh

# 查看 nginx 配置
cat /etc/nginx/conf.d/default.conf

# 查看静态文件
ls -la /usr/share/nginx/html
```

### 常见问题

1. **端口被占用**
   ```bash
   # 查看端口占用
   lsof -i :6688
   # 或修改 docker-compose.yml 中的端口
   ```

2. **构建失败**
   ```bash
   # 清理缓存重新构建
   docker-compose build --no-cache
   ```

3. **页面 404**
   - 检查 `nginx.conf` 配置
   - 确认 VitePress 构建输出路径正确

## 🚢 CI/CD 集成示例

### GitHub Actions

```yaml
name: Build and Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Build Docker image
        run: docker build -t ikuncode-docs:latest .

      - name: Push to Docker Hub
        run: |
          echo ${{ secrets.DOCKER_PASSWORD }} | docker login -u ${{ secrets.DOCKER_USERNAME }} --password-stdin
          docker tag ikuncode-docs:latest yourusername/ikuncode-docs:latest
          docker push yourusername/ikuncode-docs:latest
```

### GitLab CI

```yaml
build:
  stage: build
  script:
    - docker build -t ikuncode-docs:latest .
    - docker push registry.gitlab.com/yourproject/ikuncode-docs:latest
  only:
    - main
```

## 📝 维护建议

1. **定期更新基础镜像**
   ```bash
   docker pull nginx:alpine
   docker-compose up -d --build
   ```

2. **备份重要数据**（如果有动态内容）
   ```bash
   docker cp ikuncode-docs:/usr/share/nginx/html ./backup
   ```

3. **监控容器资源**
   ```bash
   docker stats ikuncode-docs
   ```

## 🎯 性能优化

- ✅ Gzip 压缩已启用
- ✅ 静态资源缓存已配置（1年）
- ✅ 使用 Alpine 镜像减小体积
- ✅ 多阶段构建优化层级

## 📮 联系支持

如有问题，请访问：https://t.me/ikuncode
