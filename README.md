# react-practice

React + TypeScript + Vite + Tailwind CSS の学習用リポジトリ。

## 起動方法 (Docker)

```bash
docker compose up -d --build
```

http://localhost:40080 でアクセス。

### 停止

```bash
docker compose down
```

### リビルド (依存関係が変わったとき)

```bash
docker compose down -v
docker compose up -d --build
```

## 起動方法 (ローカル)

```bash
npm install
npm run dev
```

http://localhost:40080 でアクセス。
