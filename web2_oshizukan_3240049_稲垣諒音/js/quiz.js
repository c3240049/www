let answerlist = [3, 3, 4, 2, 3];//答え番目
let problemlist = ["犬の嗅覚は人間の何倍以上と言われている？", "犬がしっぽを振るときは、何を表している？", "犬が首をかしげる行動の理由として正しいのは？", "世界で最も小さい犬種として知られるのは？", "犬が「パディング」と呼ばれる舌を出した呼吸をする理由は？"];//問題内容
let selectionlist = [['1:約10倍以上<br>2:約100倍以上<br>3:約1,000倍以上<br>4:約100,000倍以上<br>'], ['1:空腹<br>2:寒さ<br>3:喜びと興奮<br>4:眠気<br>'], ['1:首を鍛えるため<br>2:遊びの一環<br>3:疲れている<br>4:音を聞き取りやすくするため<br>'], ['1:ポメラニアン<br>2:チワワ<br>3:トイプードル<br>4:パピヨン<br>'], ['1:息を整えるため<br>2:水分補給のため<br>3:体温を下げるため<br>4:威嚇のため<br>']];//選択問題の内容1~4
let count = 1;//count問目
let firstanser = true;
let niceansercount = 0;
let lastmessage = ["がんばりましょう", "もう少しがんばりましょう", "いいですね！", "よくできました！", "よくできています！素晴らしい！", "完璧ですね！おめでとうございます！"];


function start() {
    count = 1;
    firstanser = true;
    niceansercount = 0;
    innerset();
    // document.getElementById("problem").textContent ="問題" + count;
    // document.getElementById("problem_content").textContent = problemlist[count - 1];
    // document.getElementById("message1").textContent ="ここに答えが表示されます。";
    // document.getElementById("restart").innerHTML ='<div id="restart"></div>';
    // document.getElementById("selection").innerHTML = selectionlist[count - 1];
}


function answer(ans) {
    // document.getElementById("button1").textContent ="次の問題";
    if (ans == answerlist[count - 1]) {
        document.getElementById("message1").textContent = "正解！";
        document.getElementById("nextbutton").innerHTML = '<button onclick="next()">次の問題</button>';
    } else {
        firstanser = false;
        document.getElementById("message1").textContent = "不正解";
    }
}


function next() {
    if (firstanser == true) {
        niceansercount++;
    }
    if (count < 5) {
        firstanser = true;
        count++;
        innerset();
        // document.getElementById("problem").textContent ="問題" + count;
        // document.getElementById("problem_content").textContent = problemlist[count - 1];
        // document.getElementById("message1").textContent ="ここに答えが表示されます。";
        // document.getElementById("nextbutton").innerHTML ='<div id="nextbutton"></div>';
        // document.getElementById("selection").innerHTML = selectionlist[count - 1];
    } else {
        document.getElementById("nextbutton").innerHTML = '<div id="nextbutton"></div>';
        document.getElementById("message1").textContent = "5問中" + niceansercount + "問正解しました！" + lastmessage[niceansercount];//正解した問題の数によって文字を追加する。リストから引用する
        document.getElementById("restart").innerHTML = '<button onclick="start()" id="restert">再挑戦</button>';
    }
    // document.getElementById('nextbutton').remove();
}

function innerset() {
    document.getElementById("problem").textContent = "問題" + count;
    document.getElementById("problem_content").textContent = problemlist[count - 1];
    document.getElementById("message1").textContent = "ここに答えが表示されます。";
    document.getElementById("restart").innerHTML = '<div id="restart"></div>';
    document.getElementById("selection").innerHTML = selectionlist[count - 1];
    document.getElementById("nextbutton").innerHTML = '<div id="nextbutton"></div>';
}