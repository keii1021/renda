function toRanking() {
  // ランキング表示ボタンを非表示
  let button = document.getElementById("rankButton");
  button.style.display = "none";

  // ゲーム画面を非表示
  let game = document.getElementById("main");
  game.style.display = "none";
  // ランキングを表示
  let ranking = document.getElementById("ranking");
  ranking.style.display = "block";
  // データ取得
  checkRanking();
}

// 保存したデータの取得
function checkRanking() {
  // **********ランキングを表示しよう！**********
  let highScore = ncmb.DataStore("GameScore");
  // scoreの降順でデータ5件を取得するように設定する
  highScore
  .order("score",true)
  .limit(5)
  .fetchAll()







  .then(function(results){
    // 検索に成功した場合の処理
    console.log("検索に成功しました。");
    // テーブルにデータをセット
    setData(results);
  })
  .catch(function(error){
    // 検索に失敗した場合の処理
    console.log("検索に失敗しました。エラー:" +error);
  });
  // ******************************************************
}

// テーブルにデータを設定
function setData(scoreData) {
  let table = document.getElementById("rankingTable");
  for(let i=0; i<scoreData.length; i++){
    let id = table.rows[i].cells[1];
    id.innerHTML = scoreData[i].name;
    let message = table.rows[i].cells[2];
    message.innerHTML = scoreData[i].score;
  }


    // 名前の設定



    // スコアの設定

}
function toMain() {
  // ランキング表示ボタンを表示
  let button = document.getElementById("rankButton");
  button.style.display = "block";

  // ゲーム画面を表示
  let game = document.getElementById("main");
  game.style.display = "block";

  // ランキングを非表示
  let ranking = document.getElementById("ranking");
  ranking.style.display = "none";

}
