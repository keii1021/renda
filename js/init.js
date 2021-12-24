// APIキーの設定
const APPLICATION_KEY = "7010d031975ed8b90dc9199fe3babdd43ec21524aa111c148f838e48e8f129dd";
const CLIENT_KEY = "de294a1563cb66460a14ee0d7d708369c29610f038e13978046cff25933d9f24";

// タイマー設定
let countTimer = 13;
// タップ回数カウンター
let counter = 0;
// タイマーエレメント
const countDown = document.getElementById('countDown');
// タップ可否設定（フラグ）
let tapFlag = false;
// スコア表示エレメント
const score = document.getElementById("score");
// メイン画面エレメント
const main = document.getElementById("main");
const startButton = document.getElementById("startButton");
// ランキング表示関連エレメント
const rankButton = document.getElementById("rankButton");
const ranking = document.getElementById("ranking");
