# Project Rules

## 🎯 目的

## AIを活用し、高速かつ安全にWebアプリを開発する

## 🧠 Development Flow

1. contextを読む
2. 既存コードを理解
3. 影響範囲を特定
4. 実装
5. テスト
6. ドキュメント更新

---

## 🧠 Tech Stack

- Next.js（App Router）
- TypeScript
- Supabase
- TailwindCSS

---

## ⚙️ Coding Rules

- Functional Componentsのみ使用
- any禁止
- 型安全最優先
- 可読性重視
- 小さく分割

---

## 🧱 Architecture Rules

- UI → Service → Repository → Supabase
- UIから直接DBアクセス禁止
- ロジックはService層に集約
- 再利用可能な設計

---

## 🔐 Supabase Rules

- RLS必須
- Repository経由のみアクセス
- 直接クエリ禁止
- 認証必須

---

## 🎨 UI Rules

- モバイルファースト
- シンプル設計
- Tailwind使用
- コンポーネント分割

---

## 🧪 Testing Rules

- 変更時は必ずテスト
- エラーを握り潰さない
- 境界値テスト

---

## 🧾 Git Rules

- feat:
- fix:
- refactor:
- chore:

---

## 📤 Output Rules

- 日本語で説明
- コードはコメント付き
- ファイル構成も出力
- 実装手順も提示

---

## 🚫 禁止事項

- anyの使用
- 型定義なし
- 直接DB操作
- ハードコード@AGENTS.md
