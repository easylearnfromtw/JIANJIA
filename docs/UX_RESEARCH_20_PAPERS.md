# JIANJIA v0.3 — 競品與認知心理學設計研究

> 研究型設計備忘錄，不是 JIANJIA 使用者實驗結果。以下 20 篇為可透過 DOI 追溯的原始論文或學術綜述；研究對直播導播 UI 的具體應用是設計推論，**尚待實測**。

## 競品工作流程
- [OBS Studio — Studio Mode](https://obsproject.com/kb/OBS-Studio-Overview)：預覽與節目雙畫面、轉場；保留核心狀態不換頁。
- [vMix — Getting Started](https://www.vmix.com/help26/GettingStarted.html)：上方 Preview / Output、下方來源列、側邊音訊與重播模組。
- Apple HIG：借鏡清晰層級與底部導覽，不直接複製 Apple 專有資產。

## 二十篇心理學／人因研究及對應決策
| # | 研究 | DOI | JIANJIA 設計推論 |
|---|---|---|---|
| 1 | Endsley (1995) | [10.1518/001872095779049543](https://doi.org/10.1518/001872095779049543) | Situation awareness: keep PGM and health visible |
| 2 | Fitts (1954) | [10.1037/h0055392](https://doi.org/10.1037/h0055392) | Large stable TAKE and safety targets |
| 3 | Hick (1952) | [10.1080/17470215208416600](https://doi.org/10.1080/17470215208416600) | Reduce simultaneous high-level choices |
| 4 | Sweller (1988) | [10.1207/s15516709cog1202_4](https://doi.org/10.1207/s15516709cog1202_4) | Avoid unnecessary cognitive processing |
| 5 | Lavie et al. (2004) | [10.1037/0096-3445.133.3.339](https://doi.org/10.1037/0096-3445.133.3.339) | Reduce dual-task cognitive interference |
| 6 | Lavie (2005) | [10.1016/j.tics.2004.12.004](https://doi.org/10.1016/j.tics.2004.12.004) | Prioritize relevant information over distraction |
| 7 | Rosenholtz et al. (2007) | [10.1167/7.2.17](https://doi.org/10.1167/7.2.17) | Minimize visual clutter |
| 8 | Treisman & Gelade (1980) | [10.1016/0010-0285(80)90005-5](https://doi.org/10.1016/0010-0285(80)90005-5) | Use limited color and preattentive cues |
| 9 | Posner (1980) | [10.1080/00335558008248231](https://doi.org/10.1080/00335558008248231) | Avoid unnecessary attentional reorientation |
| 10 | Miller (1956) | [10.1037/h0043158](https://doi.org/10.1037/h0043158) | Use grouping rather than a literal seven-item rule |
| 11 | Cowan (2001) | [10.1017/S0140525X01003922](https://doi.org/10.1017/S0140525X01003922) | Keep working-memory demands low |
| 12 | Hart & Staveland (1988) | [10.1016/S0166-4115(08)62386-9](https://doi.org/10.1016/S0166-4115(08)62386-9) | Evaluate subjective workload with NASA-TLX |
| 13 | Wickens (2002) | [10.1080/14639220210123806](https://doi.org/10.1080/14639220210123806) | Reduce competing modality and response demands |
| 14 | Wickens (2008) | [10.1518/001872008X288394](https://doi.org/10.1518/001872008X288394) | Design for multitask workload |
| 15 | Trafton et al. (2003) | [10.1016/S1071-5819(03)00023-5](https://doi.org/10.1016/S1071-5819(03)00023-5) | Preserve context after interruption |
| 16 | McFarlane & Latorella (2002) | [10.1207/S15327051HCI1701_1](https://doi.org/10.1207/S15327051HCI1701_1) | Treat interruption as a critical design factor |
| 17 | McFarlane (2002) | [10.1207/S15327051HCI1701_2](https://doi.org/10.1207/S15327051HCI1701_2) | Control timing and method of interruption |
| 18 | Monsell (2003) | [10.1016/S1364-6613(03)00028-7](https://doi.org/10.1016/S1364-6613(03)00028-7) | Avoid task-switch costs |
| 19 | Rogers & Monsell (1995) | [10.1037/0096-3445.124.2.207](https://doi.org/10.1037/0096-3445.124.2.207) | Preparation does not eliminate switch costs |
| 20 | Zhang & Norman (1994) | [10.1016/0364-0213(94)90021-3](https://doi.org/10.1016/0364-0213(94)90021-3) | Keep external representations available |

## 設計決策
1. **Studio 永遠是核心**：Preview、PGM、TAKE、SAFE HOLD 不被次要工具遮蓋或換頁。
2. **局部工作面板**：來源、AudioDesk、播出與 EcoStream 從工作台打開右側抽屜；原本控制元件被移入抽屜，關閉後還原，避免重複狀態。
3. **固定狀態摘要**：PGM 與「DEMO 非真實直播」持續可辨識。
4. **低動態**：移除主要頁面滑入動畫，避免導覽選取造成位置跳動。
5. **可返回**：Esc、關閉按鈕、遮罩可關閉面板；完整頁面仍可由 Dock 進入。
6. **分級訊號**：紅色只表示播出／高風險，藍色表示選取或待命；不能只靠顏色判斷。
7. **實測驗收（待執行）**：測量切換來源、靜音、確認 PGM、啟動安全畫面的操作時間、誤觸率、NASA-TLX 與頁面切換次數；桌面與手機分開測試。

## 限制
- 文獻並未直接驗證 JIANJIA 的最佳布局；沒有宣稱「20 篇研究證明這個版面最好」。
- v0.3 仍為靜態 UI，沒有真實影音、SFU、空拍機或 25 秒延遲。
- 工作台抽屜使用原有 UI 元件，不是獨立後端狀態同步。
