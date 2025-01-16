const txArea = document.getElementById('txArea');
const btn = document.getElementById('btn');
const display = document.getElementsByClassName('display')[0];
let strArr = [];
let id = [];

//文字を取得ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
btn.onclick = function(){
  const txValue = txArea.value;
  // display.innerHTML = txValue;
  intoArr(txValue);
  forCreate();
  

  kamikakushi();
  countSet();
  itimozi()
  
}

//正規表現で。ごとに配列に格納ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
function intoArr(str){
  console.log(str);
  // const regexp = new RegExp('。|\.', 'g');
  const arr = str.split(/。|\./);
  arr.forEach(element => {
    if(element != ''){
      strArr.push(element);
    }
  });
  console.log(strArr);
}

//繰り返し文でcreateElementを回す--------------------------
function forCreate(){
  for(let i = 0; i < strArr.length; i++){
    const eleP = document.createElement('p');
    eleP.id = `pId${i}`;
    id.push(eleP.id);
    eleP.innerHTML = strArr[i];
    display.appendChild(eleP);
  }
}

// var id = ['a','b','c','d']; //指定するidを全て配列で渡す
var tx = [];
var txCount = [];
var txSp = 70; // テキストの表示速度
var dly = 70; // 次の文章までの待ち時間
var count = 0;

// window.onload = function(){
//   kamikakushi();
//   countSet();
//   itimozi()
// }

function countSet(){ // 文字数カウントの初期設定
  for(n=0;n<id.length;n++){
    txCount[n] = 0;
  }
}


function kamikakushi(){ // 要素を取得して非表示（opacity:0;）にする
  for(i=0;i<id.length;i++){
    id[i] = document.getElementById(id[i]);
    tx[i] = id[i].firstChild.nodeValue; // 初期の文字列
    id[i].innerHTML = '';
  }
}

function itimozi(){ //　一文字ずつ表示
  id[count].innerHTML = tx[count].substr( 0, ++txCount[count] ); // テキストの指定した数の間の要素を表示
  if(tx[count].length != txCount[count]){ // Count が初期の文字列の文字数と同じになるまでループ
    setTimeout("itimozi()",txSp); // 次の文字へ進む
  }else{
  id[count].innerHTML = tx[count].substr( 0, ++txCount[count] ); // テキストの指定した数の間の要素を表示
    count++; // 次の段落に進む為のカウントアップ
    if(count != id.length){ // id数が最後なら終了
    setTimeout("itimozi()",dly); // 次の段落へ進む
    }
  }
}