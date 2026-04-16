# アーキテクチャ

## 構成

UI → Service → Repository → Supabase

## ルール

- UIから直接DBアクセス禁止
- ロジックはServiceに集約
