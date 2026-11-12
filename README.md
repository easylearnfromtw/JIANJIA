# JIANJIA — Live Production OS

> **Any Device. Any Team. One Live Studio.**

兼葭（JIANJIA）是一個以**低設備負載、低伺服器單位時間耗能、跨設備相容與漸進式專業工作流程**為核心的直播製作平台構想。目標從單手機直播一路擴展到跨國 Podcast、新聞台、野外直播、金融直播、歷史重現與 VTuber 演出。

## ⚠️ 目前版本：UI Prototype v0.1

**本 Repository 的初版僅包含可互動的靜態使用者介面。** 不含真實攝影機／麥克風接入、WebRTC、直播推流、錄製、伺服器、帳號系統、雲端運算、空拍機連線、真實安全延遲、新聞資料或動作捕捉。畫面上的狀態、節點、節能策略與工作階段均為本機示意。不可將此版本用於正式直播或安全關鍵場景。

### 快速開啟

1. 直接以瀏覽器開啟 `index.html`，或部署三個檔案到 GitHub Pages。
2. 在 GitHub Repository 的 **Settings → Pages** 選擇 **Deploy from a branch**，選擇 `main` / `(root)`。
3. 不需 Node.js、資料庫、金鑰或伺服器。此方式**僅能使用前端展示介面**。

### 本次已完成的前端互動

- 深色響應式導播控制台、手機版排版
- 六種製作場景切換及對應模組顯示
- Preview / Program 示意畫面與 TAKE 按鈕
- 安全備援畫面示意切換
- 模擬來源清單、空拍機 DroneLink 節點、手動新增模擬來源
- AudioDesk 四通道滑桿與靜音狀態
- 播出目的地展示選項
- EcoStream 三種運算策略、模擬電量與預覽 FPS
- Newsroom 資訊總覽、操作事件紀錄

## 產品完整功能藍圖（**尚未實作**）

### 1. Universal Connect / QuickJoin

手機、平板、筆電、專業攝影機與擷取器；QR Code、一次性邀請連結、六位數代碼加入；可選帳號；多層 Node → Branch → Sub-branch 管理；來源獨立待命、啟用、暫停與離開；支援相容的 USB/HDMI/SDI 擷取、RTMP/SRT、網路來源。實際能力依作業系統、裝置與協定限制。

### 2. 導播與節目製作

Preview（PVW）、即時製作節目（LIVE PGM）、公開延遲節目（PUBLIC PGM）、外部平台回傳監看（Confidence）；INSPECT / ARM / TAKE；多機切換、分割畫面、畫中畫、16:9 與 9:16 版型、字幕條、跑馬燈、Breaking News、虛擬 PTZ、來源健康檢測與多畫面監看。

### 3. AudioDesk

獨立音軌、音量推桿、Mute / Solo、EQ、壓縮器、Limiter、Noise Gate、Pan、Ducking、Mix-minus、多軌錄音；Conversation、Talkback、Monitoring、LIVE PGM、PUBLIC PGM、Recording 獨立匯流排；內部對講不得混入公開節目。

### 4. Safety Delay & Field Safety

目標 25 秒的**公開輸出**安全緩衝；敏感片段消音／畫面替換／跳過／緊急安全畫面；音畫同步與恢復機制；記者 SOS、隱私保護、查證狀態、來源紀錄與更正流程。25 秒為設計目標，不保證所有情況都能成功攔截。

### 5. Recording & Multistream

PGM 與獨立來源錄製、本機高品質錄製、斷線後補傳、時間碼、剪輯與 VOD；YouTube、Twitch、Facebook、Instagram、TikTok、自有網站及自訂 RTMP/SRT 的**相容平台**輸出；平台授權、API 與串流限制需個別處理。

### 6. EcoStream — 低負載／低耗能架構

Edge-first、Cloud-on-demand、硬體編碼優先、能轉送就不重複轉碼、相容時共用單次編碼供多目的地使用；待命來源降低預覽負載、非必要工作按需啟動、電池與熱狀態保護、弱網優先保留音訊；以 CPU、GPU、RAM、流量、平均功率與估算 Wh/Session 衡量。不可假定所有外接裝置都能受軟體直接控制，也不以虛構節電百分比宣稱效果。

### 7. DroneLink — 個人空拍機畫面

透過相容遙控器影像輸出、HDMI/USB 擷取、手機螢幕分享、RTMP/SRT 或廠商 SDK 接入空拍機畫面；多空拍機來源、畫中畫、導播切換、本機錄製、弱網回傳、可取得時的電池／GPS／高度資訊；預設只接收影音，不接管飛行控制；飛航法規與隱私規範由實際部署與使用情境處理。

### 8. 六大 V2 專業場景

| 模式 | 規劃能力 |
|---|---|
| Wall Street / Market Live | 授權行情、資料時間戳、行情新鮮度、財經圖表、重大公告 |
| WWII / Historical Live | 明確標示歷史模擬、史料證據鏈、多戰線時間軸、地圖與重建動畫 |
| Discovery / Expedition Live | 遠端攝影機、環境感測、低頻寬、邊緣錄製、設備健康與補傳 |
| Crime Scene / Sensitive Reporting | 記者安全、敏感內容攔截、隱私、未證實資訊與來源查證 |
| BBC/CNN-style / Global Newsroom | 24/7 排程、跨時區編輯室、多地備援、交接、突發新聞與 CMS |
| hololive-style / Virtual Live | 2D/3D Avatar、動作捕捉、虛擬攝影機、多人舞台與多軌音訊 |

> 上述名稱描述製作類型與能力目標，不代表任何品牌合作或已達到其實際製播標準。

### 9. Unified Time & Event Engine

區分事件發生、擷取、接收、製作、公開輸出、外部平台播放及歷史模擬時間；來源可信度、授權、版本與更正紀錄；確保延遲節目中的圖表與主播聲音時間一致。

### 10. Global Reliability & Newsroom

來源故障隔離、弱網降級、節點自動重連、獨立目的地健康狀態、Control Plane 與 Media Plane 分離、主備導播接管、24/7 交接、事故紀錄與監控。可靠性必須經實際故障演練驗證。

## 建議後續技術路線（尚未導入）

- 前端：TypeScript + React / Next.js（目前原型為零依賴 HTML/CSS/JS）
- 即時媒體：WebRTC SFU，例如 LiveKit；多畫面合成視需要啟動
- 後端：Session / Control API、事件服務、PostgreSQL
- 錄製與播出：按需啟動 Media Workers、FFmpeg、S3 相容儲存
- 安全延遲：獨立可編輯的公開輸出緩衝管線
- 部署：GitHub Actions、容器化、可觀測性；**GitHub Pages 不能承載完整直播後端**

## 下一步工程里程碑

1. 真實本機攝影機／麥克風預覽、設備權限與裝置選擇
2. 多裝置 Session、邀請連結、WebRTC 連線
3. 導播 Preview / TAKE、音訊路由、實際 PGM
4. 可靠錄製、外部直播輸出、安全延遲
5. EcoStream 裝置遙測與低負載策略實測
6. DroneLink 接入相容性測試
7. 六大專業模組與故障／負載驗收

## 專案結構

```text
JIANJIA/
├── index.html   # 靜態互動式介面
├── style.css    # 深色響應式設計
├── app.js       # 本機 UI 狀態與模擬互動
└── README.md    # 功能藍圖、限制與開發路線
```

## 授權

目前尚未指定開源授權。公開 GitHub Repository **不等於**自動授權他人重製或散布程式碼；正式公開前應選擇合適 LICENSE。