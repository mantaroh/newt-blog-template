# Astro with microCMS boiterplate.

このレポジトリは、Astro で microCMS を使った静的サイトジェネレートするプロジェクトです。

## 利用方法

### microCMS コンテンツの作成

https://microcms.co.jp/ にアクセスしてアカウントを登録後に、コンテンツを作成してください。

このボイラープレートが想定しているコンテンツは以下の通りです。

| フィールド名 | フィールドタイプ |
| - | - |
| title | テキスト |
| date | カレンダー |
| description | テキスト |
| image | 画像 |
| body | リッチテキスト |

### microCMS API キーの設定

https://microcms.co.jp/ のチーム設定にある API キーを取得して、`.env` ファイルに API キーとドメインメイン(xxx.microcms.io の xxx の部分)

設定例：

```bash
API_DOMAIN=xxxxx
MICROCMS_API_KEY=ABCDEFGHIJKLMNOPQRSTU
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
