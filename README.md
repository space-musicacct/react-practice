# react-practice

React + TypeScript + Vite + Tailwind CSS の学習用リポジトリ。

## 技術スタック

| 技術 | バージョン |
|------|-----------|
| React | 18 |
| TypeScript | 5 |
| Vite | 5 |
| Tailwind CSS | 3 |
| Node.js | 24 (Docker) |

## 前提条件

- WSL2 (Ubuntu)
- Docker CE + docker-compose-plugin
- Git

## 環境構築

```bash
# 1. リポジトリをクローン
git clone git@github.com:space-musicacct/react-practice.git
cd react-practice

# 2. コンテナをビルド・起動
docker compose up -d --build
```

http://localhost:40080 でアクセス。

## よく使うコマンド

```bash
# 起動
docker compose up -d

# 停止
docker compose down

# コンテナ状態確認
docker compose ps

# ログ確認
docker compose logs -f

# 再ビルド
docker compose up -d --build
```

## npm の操作

Node.js はホストにインストールせず、すべて Docker コンテナ経由で実行する。
ホストに直接インストールすると環境を汚染し、バージョン差異で再現性が失われる。

```bash
# パッケージを追加 (package.json に記録される)
docker compose exec frontend npm install <package>

# devDependencies に追加
docker compose exec frontend npm install -D <package>

# パッケージを削除
docker compose exec frontend npm uninstall <package>

# lint
docker compose exec frontend npm run lint

# フォーマット
docker compose exec frontend npm run format

# node_modules ごと作り直す (依存関係が壊れたとき)
docker compose down
docker volume rm react-practice_node_modules
docker compose up -d --build
```
