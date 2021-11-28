# GDPRライブラリ
HTML、CSS、JSなどで制作された一般的なサイトにGDPRを即時導入できるようライブラリを作成しました。

既存サイトに
- HTMLの特定の記述
- gdpr.cssの導入
- gdpr.jsの導入

を行うだけで実装が可能です。
# 使い方
## 既存サイトHTMLへ記述
### ①head内に以下の記述をしてください。
```
<head>
 <script defer src="gdpr.js"></script>
 <link href="gdpr.css" rel="stylesheet">
</head>
```
### ②ロードポイントを記述
headerもしくはfooter付近の好きな場所に以下のような記述をします。
```
<div id="gdpr_cookie" allowButton="許可する" refuseButton="拒否する" name="gdpr_allow">
 好きな文言を入力<br>改行や<br><a href="#">アンカーリンクはそのまま引き継がれます。</a>
</div>
```
- **id="gdpr_cookie" 必須項目**
- allowButtonには許可用ボタンの文言を入力。デフォルトは[許可する]
- refuseButtonには拒否用ボタンの文言を入力。デフォルトは[拒否する]
- nameは任意で指定可能ですが**他のcookieのvalue名とは被らないように**してください
- **cookieは365日保存されます**
### ③CSSは任意で変更
CSSはサイトによって細かく調整したい部分が出てくるはずなので適宜書き換えてご利用ください
## ファイルの場所
GDPR-COOKIE > dist内にgdpr.jsとgdpr.cssが格納されています。
# さいごに
今回、初めてライブラリというものを作成しました。
また、Typescriptを用いて記述することも初めてです。そのため無意味な記述や欠陥などがあるかもしれません。その場合は**コメントなどでアドバイス**いただけますと幸いです。
