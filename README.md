# ToDo アプリ

シンプルかつ拡張性を意識した **タスク管理アプリ** です。  
ユーザーはタスクを作成・編集・削除・検索・カテゴリ分けでき、完了状態を切り替えることができます。  





---

## 技術スタック

### バックエンド
- **言語**: TypeScript  
- **フレームワーク**: [NestJS](https://nestjs.com/)  
- **バリデーション**: class-validator / class-transformer  
- **データベース**: MySQL + TypeORM  
- **認証**: JWT (予定)  
- **リアルタイム通信**: WebSocket 
- **ビルドツール**: npm / Nest CLI  

### フロントエンド
- **言語**: TypeScript  
- **フレームワーク**: [Next.js](https://nextjs.org/) (Pages Router)  
- **ビルドツール**: npm / Next CLI  
- **状態管理**: React Hooks / Context API
- **HTTP クライアント**: Axios / fetch API  

---

## 機能一覧

### 基本機能（実装中）
- 　タスクの作成（タイトル・詳細）  
- 　タスク一覧表示  
- 　タスクの編集（タイトル・詳細）  
- 　タスクの削除  
- 　タスクの完了／未完了切り替え  
- **タスク完了時の音声読み上げ**  
  - タスクは「音声で内容を読み上げて初めて完了扱い」となる  
  - 読み上げにはブラウザの Web Speech API またはサーバー連携を利用予定  

### 拡張機能（予定）
- **検索機能**：キーワードでタスクを検索  
- **カテゴリ分け**：仕事／プライベートなどで分類  
- **リアルタイム同期**：WebSocket によるタスク更新の即時反映  
- **認証機能**：JWT を用いたユーザー認証  
- **統計画面**：完了タスク数や進捗を可視化  

---

## プロジェクト構成

### **CRUD API 仕様（タスク管理）**
- POST /tasks : タスクを新規作成（Create）
- GET /tasks : タスク一覧を取得（Read 全件）
- GET /tasks/:id : 指定したIDのタスクを取得（Read 単体）
- PUT /tasks/:id : 指定したIDのタスクを更新（Update）
- DELETE /tasks/:id : 指定したIDのタスクを削除（Delete）
- PATCH /tasks/:id/toggle : タスクの完了/未完了を切り替え



### **ディレクトリの構成予定**
todo-app/
├── backend/                     # NestJS (APIサーバー)
│   ├── src/
│   │   ├── modules/
│   │   │   └── tasks/           # タスク管理モジュール
│   │   │       ├── dto/         # バリデーション用DTO
│   │   │       ├── entities/    # DBエンティティ
│   │   │       ├── tasks.controller.ts
│   │   │       ├── tasks.service.ts
│   │   │       └── tasks.module.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── ormconfig.ts
│   └── package.json
│
├── frontend/                    # Next.js (フロントエンド)
│   ├── pages/
│   │   ├── index.tsx            # タスク一覧
│   │   ├── tasks/
│   │   │   ├── create.tsx       # タスク作成
│   │   │   └── [id].tsx         # タスク詳細/編集
│   ├── components/              # UIコンポーネント
│   │   ├── TaskItem.tsx
│   │   ├── TaskForm.tsx
│   │   └── Layout.tsx
│   ├── context/                 # 状態管理
│   │   └── TaskContext.tsx
│   ├── lib/
│   │   └── api.ts               # APIクライアント (Axios)
│   ├── styles/
│   │   └── globals.css
│   └── package.json
│
├── docker-compose.yml           # 将来的にDBやAPIをまとめる用（予定）
├── README.md
└── package.json                 # プロジェクト全体管理用
