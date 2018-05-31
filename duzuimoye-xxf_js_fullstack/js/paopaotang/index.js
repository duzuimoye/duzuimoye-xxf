function player (name,teamColor){
    this.name = name;
    this.teamColor =teamColor;
    this.enemies = [];
    this.partners = [];
    this.status = 'live'
    this.enemy = null;
}

//输与赢
player.prototype.win =function(){
    console.log(`${this.name} win!!`)
}
player.prototype.lose =function(){
    console.log(`${this.name} lose!!`)
}
player.prototype.die=function(){
   this.lose();
//    假设游戏结束
   let all_dead = true;
//    判断游戏是否结束 status live|dead
// for this.partners 4个 dead
//游戏结束 我方输 对方赢 

//    this.status = 'die';
   for(let i=1;i<this.partners.length;i++){
       if(this.partners[i].state==='live'){
        all_dead = false;
        break;
       }
   }
   if(all_dead){
       this.lose();
       for(let i=1;i<this.partners.length;i++){
           this.partners[i].lose();
        //    console.log('a');
       }
       for(let i=1;i<this.enemies.length;i++){
        this.enemies[i].win();
    }
   }
//    this.enemy.win();
}
// 流程太多了 规律 red blue 另一对
//工厂模式
const players = [];
function playerFactory(name,teamColor){
    // 实例化 分配队伍
    var newplayer = new player(name,teamColor);
    for(var i= 0;i<players.length;i++){
        const player = players[i];
        if(player.teamColor === newplayer.teamColor ){
            player.partners.push(newplayer);
            newplayer.partners.push(player);
        }else{
            player.enemies.push(newplayer);
            newplayer.enemies.push(player);
        }
    }
    players.push(newplayer);
    return newplayer;
   
}
const player1 = playerFactory('皮蛋','red')
const player2 = playerFactory('小乖','red')
const player3 = playerFactory('宝宝','red')
const player4 = playerFactory('小强','red')

const player5 = playerFactory('黑妞','blue')
const player6 = playerFactory('葱头','blue')
const player7 = playerFactory('胖墩','blue')
const player8 = playerFactory('海盗','blue')

player1.die();
player2.die();
player3.die();
player4.die();
// const player1 = new player('皮蛋','red');
// const player2 = new player('凯哥','blue');
// const player3 = new player('cjk');
// const player4 = new player('xiaohu');
// player2.win();
// player1.lose();
// player3.lose();
// player4.lose();

//上线了 互为敌人 匹配到一局去了
player1.enemy = player2;
player2.enemy = player1;











// enemy  实例 instanceof => new player