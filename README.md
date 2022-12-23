# Astro with Newt boiterplate.

このレポジトリは、Astro で Newt を使った静的サイトジェネレートするプロジェクトです。

## 利用方法

### Newt コンテンツの作成

https://www.newt.so/ にアクセスしてアカウントを登録後に、コンテンツを作成してください。

このボイラープレートが想定しているコンテンツは以下の通りです。

| フィールド名 | フィールドタイプ |
| - | - |
| title | テキスト |
| date | カレンダー |
| description | テキスト |
| image | 画像 |
| body | リッチテキスト |

### Newt トークンの設定

https://www.newt.so/ のチーム設定にある API キーを取得して、`.env` ファイルに API キーとスペースUidとAPIタイプを指定してください。

設定例：

```bash
SPACE_UID=xxxxx
NEWT_TOKEN=ABCDEFGHIJKLMNOPQRSTU
API_TYPE=api
```

## ビルド方法

```bash
$npm install
$npm run build
```

`dist` ディレクトリに静的サイトが生成されます

## テスト実行

```bash
$npm install
$npm run dev
```

http://localhost:3000 にアクセスするとテスト環境での実行が出来ます。
