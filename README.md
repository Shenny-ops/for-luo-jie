# 橘色回憶 · 獻給羅潔

PID 送給羅潔的電子紀念冊網站（GitHub Pages）。

## 檔案說明

```
ro-jie-tribute/
├── index.html        網頁結構與大部分文字（封面、結尾祝福）
├── style.css         顏色、字體、版面
├── script.js         照片清單（PHOTOS）與留言（MESSAGES）
└── assets/photos/    photo01.jpg ～ photo05.jpg
```

## 常見修改

- **換照片**：用同樣的檔名（例如 photo02.jpg）覆蓋 `assets/photos/` 裡的檔案。
- **改照片說明**：在 `script.js` 最上面的 `PHOTOS` 修改 `caption`。
- **改／加留言**：在 `script.js` 的 `MESSAGES` 修改，格式是 `{ "name": "名字", "text": "內容" }`，換行用 `\n`。
- **改封面或結尾文字**：直接在 `index.html` 裡搜尋那句話修改。

在 GitHub 網頁上點檔案 → 右上角鉛筆圖示 ✏️ 就能直接編輯，按 **Commit changes** 儲存，大約 1 分鐘後網站會自動更新。
