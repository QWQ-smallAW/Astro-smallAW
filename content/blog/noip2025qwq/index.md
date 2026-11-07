---
title: NOIP2025 FJ代码迷惑行为大赏
date: 2025-12-10
updated: 2025-12-10
description: 第一次写这个玩意
tags:
  - 整活
  - OI
---

## 前言

第一次做这种东西，还挺累的。

多有遗漏或不足之处，欢迎指点！

## 正文

### freopen

#### FJ-0006

candy.cpp
```cpp
	freopen("candy.in", "r", stdin);
//	freopen("candy.out", "w", stdout);
```
query.cpp（整个文件只有这两个字符）
```cpp
//
```
sale.cpp（没错，它没有freopen）
```cpp
```
tree.cpp
```cpp
freopen("tree2.in", "r", stdin);
```

#### FJ-0059

candy.cpp（英语水准有待提升）
```cpp
freopen("candy.in","r",stdin);
freopen("cnady.out","w",stdout);
```
再贴一份sale.cpp（
```cpp
putcahr('\n');
```
哥们你真不编译啊？

其实应该还是没写完。。。

#### FJ-0181
sale.cpp（死了四分之三）
```cpp
//	freopen("sale2.in","r",stdin);
//	freopen("sale.out","w",stdout);
```

#### FJ-0084

```cpp
#define fr(x)\
	freopen(#x".in","r",stdin);\
	freopen(#x".out","w",stdout);

// from main()
// fr(tree) 注释掉的它
```

#### FJ-0105

query.cpp（死的彻彻底底）
```cpp
// freopen(".in","r",stdin);
// freopen(".out","w",stdout);
```

#### FJ-0242
tree.cpp（很惨了）
```cpp
freopen("tree.in","r",stdin);
//freopen("tree.out","w",stdout);
```

#### FJ-0332
tree.cpp（tree这题是事故多发地是吧）
```cpp
	freopen("tree1.in","r",stdin);
//	freopen("tree.out","w",stdout);
```

#### FJ-0395
candy.cpp
```cpp
freopen("r","candy.in",stdin);
freopen("w","candy.out",stdout);
```
剩下略

#### FJ-0401
candy.cpp（好了这种类型的我觉得够了）
```cpp
freopen("sale3.in","r",stdin);
//	freopen("sale.out","w",stdout);
```

#### FJ-0502
tree.cpp（好吧还是我高估了 NOIP 选手）
```cpp
freopen("tree.out","w+",stdout);
``` 

### 神秘注释

#### FJ-0012
candy.cpp（等待对拍）
```cpp
//wait to duipai
```
sale.cpp（你是什么？）
```cpp
//thx i'm []
```

#### FJ-0050

sale.cpp（不会）
```cpp
//namespace m2{
	//buhui
	
//}

//aeirhguerhgaiojsamdfcoiqhbiu
```

#### FJ-0051

candy.cpp（参数大佬）

```cpp
/*
g++ candy.cpp -o A -std=c++14 -O2 -Wall -Wextra -Wconversion -Wshadow -D_GLIBCXX_DEBUG -fsanitize=undefined -fsanitize=address && ./A
diff candy.out candy1.ans -w
*/
```

剩余略

#### FJ-0070

candy.cpp（我真candy）
```cpp
//Im candy
//Im so candy Im candy candycandydydydy candy Im candy candydy candy candy
//use 2.5h to solve the problem Im candy Im the candiest
//I even dont know if the code is right!
```
query.cpp（惊喜）
```cpp
//如果你看到这里了，那我可以告诉你一个惊喜
//爆零了
//懒得写了，拜拜。 
```
sale.cpp（到底是不是 dp 呢）
```cpp
// seems like DPPDPDPDPDDPDPDPDPDPPPPPDDDDDPPPDDP
// doesnt seem like DPPPDPDPDDDPDPDPDPDPPDPPDDDDP
//god save me
//zhe you shen me dao li a
//已严肃：面向数据点编程 
```
tree.cpp（是不是呢？）
```cpp
//shuxing DPDPDPDDPDPDPDPPDPDPDDDDPPPPDPDPDPDPDDP
//bushi DP
//shibushiDP
//kenengshiDP
//zheshiDP?
```

#### FJ-0071

candy.cpp（幽默键盘）
```cpp
/*
/*

2 10
4 1
3 3


3 15
1 7
2 3
3 1

键盘实在太幽默了
9:06 

*/
```
#### FJ-0081

query.cpp（六年老兵）
```cpp
/*
Away From OI(2019.12.28~2025.11.29)
以此纪念我生命中一段难忘的旅程 
*/ 
```

#### FJ-0083

candy.cpp（过不了样例啊）
```cpp
/*
For a certain version:
WHAT? This code can EXCATLY cannot pass sample 6??
*/
```
#### FJ-0096

游记人*1
```cpp
/*
8:35 begin read
T1 simple DP or greedy?
T2 counting DP
T3 tree DP????
T4 DS?
8:41 try T1
chs min v is wrong
9:16 a new greedy but wA on 5
9:28 AC and check.exe done 100pts
then try T2
transfer the limit failed 9:50
get A
10:00 think T3
10:03 WC
code baoli？
10:07 maybe think T2 B?
no code T4 baoli first
10:41 done 115pts
11:07 get A  125pts
now I want to try T2 again.
11:27 got T2 baoli and A 149pts
12:06 I couldn't do counting!!!
try T3
failed
149pts AFO..... 
*/
```

#### FJ-0109

！！！！！！！警戒！！！！！！！
```cpp
// DO NOT USE #dill in the final code
// DO NOT WRITE any useless comments, such as travel note before having no points to get
// YOU ONLY HAVE THE VERY LAST CHANCE.
```

#### FJ-0114
query.cpp（下次一定）
```cpp
// xia ci yi ding
```

#### FJ-0116
query.cpp（对嘛）
```cpp
也就8分而已，死磕那么久干嘛。
最终也是顺利失败了。 
```

#### FJ-0062

candy.cpp（写了，但没用）
```cpp
//堆
//#define Z(x) (x*2)
//#define Y(x) (x*2+1)
//int d[100005],wz[100005];//堆(存指针，指向z) wz[i]->i在堆中的位置
//int a[100005],b[100005];
//int z[100005];//存储堆中指针中的值
//int n,m;
//void gx(int wz){
//	while(wz/2>1&&z[d[wz]]<z[d[wz/2]])swap(wz[d[wz]],wz[d[wz/2]]),swap(d[wz],d[wz/2]),w/=2;
//	return ;
//}
//void sc(int wz){
//	while(Z(wz)<=d[0]){
//		if(Z(wz)==d[0]){
//			if(z[d[wz]]>z[d[Z(wz)]])swap(wz[d[wz]],wz[d[Z(wz)]]),swap(d[wz],d[Z(wz)]);
//			return ;
//		}
//
//	}
//	return ;
//}
```

#### FJ-0150
query.cpp（帮问）
```cpp
/*
Good Bye OI.
2022-2025
sheng xuan ke neng zai wan xia?
bu guo 135 you 1= ma
luogu uid 683859
*/
```

#### FJ-0208
感谢提醒
```cpp
//要记得开longlong
```

#### FJ-0209
再来一个
```cpp
//ll!!!
```
并无实际作用。。。
```cpp
/*
in1:

out1:

*/
```

#### FJ-0213
tree.cpp（祝福）
```cpp
//let luck bring hopiness
```

#### FJ-0223
query.cpp（记得多捐钱）
```cpp
//I love CCF
```

#### FJ-0234
candy.cpp（不好玩）
```cpp
/*

不好玩 QAQ

*/
```

#### FJ-0233
candy.cpp（神秘膜拜）
```cpp
//\^o^/
//段一LCJ佑我平安
```
#### FJ-0249
query.cpp（小说家）
```cpp
/*
第X章 最短路
陆衍邦有点懵，因为现在是早上六点整。“？我怎么这么早就起了？今天有什么事吗”顶着一头乱蓬蓬的头发，陆衍邦陷入了沉思。
哦！今天是校运会！陆衍邦恍然大悟，连忙开始收拾东西。相机，零食，桌游，以及——
几枝蓝玫瑰。
简单的洗漱后，陆衍邦和家人打了声招呼，背上包下楼买早餐，推开大门，对面的门也正好推开，陆衍邦一愣——黄清影也起得这么早？
两人呆站在门口面面相觑，脸上充满了疑惑与惊讶。几秒钟后，陆衍邦率先打破沉默：“你怎么起得这么早？”
“不知道哇，也没闹钟，突然就醒了。”
“哦…那，一起？”
“行。”
沉默。
沉默地换鞋。
沉默地按电梯。
沉默地站着。
但陆衍邦的心里没那么沉默。
看着身旁低着头的少女，陆衍邦心里呐喊着：“？？？天底下真有这么巧的事让我撞上了？感谢老天！”
沉默。
沉默地走出电梯。 
沉默地同行。
沉默地来到早餐摊。
“你要吃什么？我请你吧。”陆衍邦从兜里掏出手机。
“啊？那怎么好意思呀。”
“这有啥，我也不差那两块钱。”
“哦。那我就要一杯豆浆和一个三明治吧。”
“行。老板！两杯豆浆，两个三明治，还有一个茶叶蛋。我扫你。”
两人拿了早餐，开始往学校走去。
沉默。
不知不觉，两人已经走到校门口了。看着校门口拉起来的校运会主题的横幅，陆衍邦心里有些激动。
“哦对了，晚上的社团之夜你会去吗？”
“emm…我没抢到票。”
“喏，给你一张。”
“？一个人不是只能买一张吗？”
“教练给的，说是最近集训强度有点大，让我们放松一下，学长有事就把两张票都给我了。”
“？你们信竞就两个人吗？”
“其实暑假集训时还有十来个人的，但被数竞和物竞给挖走了，所以新高一就只有我一个信竞的。”
“哦…那谢谢你了。”
“小事情，就当是给我补习英语的谢礼了。走了，晚上见。”
陆衍邦说着，挥了挥手，快步向教学楼走去。
嗯，果然，教室里空无一人。陆衍邦放下书包，托着腮坐在座位上。发了会儿呆后，从课桌里掏出一本《算法竞赛》
“让我看看，昨天集训做的什么来着……哦！最短路！”陆衍邦自言自语道，开始翻看起了这一章。
过了好一会儿，教室里陆陆续续热闹了起来，所有人都在激动地讨论着为期三天的校运会——
除了后桌那座冰山，他正面无表情地继续写物竞习题。
“哎呦我去，你还在内卷！”曹毅看着陆衍邦桌上摊开的书，边说边用力地揉了揉陆衍邦的脑袋 ，“在看什么？哦，竞赛的书啊…让我看看，最短路。”
陆衍邦合上书，慢悠悠地说：“你爸今天早上心情很好，就先不和你计较了。但说好的，今天晚上可得给我点奶茶哟~”
曹毅撇了撇嘴：“昨天晚上那把让你赢了纯是我没认真打，中午敢不敢再来一把？输了我再给你点一杯。”
“行啊，曹大帅哥，你可要做好送我两杯奶茶的准备哟。”
“不！可！能！今天中午我包打爆你！”
“那我拭目以待哟~”
就在这时，广播响起。
“校运会期间，早晚读暂停，第一场比赛将在8：15开始，请参赛选手做好准备。”
“？这不还有45分钟呢吗？所以广播的意思是，现在自由活动？”
“好耶！曹毅，走，咱们叫几个人去老地方玩桌游！”陆衍邦背起书包，一把拉起曹毅。
“什么什么？玩桌游？带我一个带我一个！(★ ω ★)”后桌的鹿栖腾地跳起，一把揪住曹毅的卫衣帽子。
“松手松手，我快被你们两个扯成两半了！”曹毅白净的脸庞涨得通红，从嘴里艰难地挤出几个字来。
“行啊，那叫人的任务就交给你了”陆衍邦一把松开曹毅，懒洋洋地说，“哟，曹毅，怎么坐地上呀，地砖凉，快起来，咱们先去布置一下秘密基地。走吧。”
说着，又一把拉起曹毅，马不停蹄地赶往“秘密基地”。
其实所谓的“秘密基地”，是藏在学校犄角旮旯里的一间破教室，由于年代久远，再加上在这间教室上过课的老师基本都退休了，所以这个地方基本没什么人知道也没什么人去，
但陆衍邦作为J市一中的“土著”，以违反校规校纪闻名的他早就摸清了这间教室的所在地。为了防止有人打扰，他还特地给这间教室配了把锁，又好好“修饰”了一下，将这间
教室伪装成了“常年废弃，请勿靠近”的样子 。
推开门，一股岁月的气息扑面而来，“哎呀呀，上次来这里好像是中考前的那个晚上吧？”陆衍邦抱着脑袋，随意地问着曹毅，“行了，赶紧行动起来，收拾一下，好招待招待咱
的客人。”陆衍邦掸了掸桌上的灰尘，招呼着曹毅来干活儿。
十几分钟后，陆衍邦点了点头，“嗯~虽然还是很破，但至少能看了”。曹毅在一旁气喘吁吁，“居然把本帅哥当黑奴使，信不信我用小号给你挂到校园墙上。”“请便~我正好觉
着无聊呢~”陆衍邦拉长了音调，懒散地说着，“嗯？他们来了。”说着便丢下曹毅 ，向门外走去。
让我看看，都有些谁……鹿栖，哲泓，还有——裴渡？鹿栖果然有点本事，居然给这冰山带过来了。还有思沅。嘶，后面还有一个，是…黄 清 影？陆衍邦张了张嘴，愣在了门
口。
”发啥呆呢，赶紧进去。“鹿栖拍了一下陆衍邦的脑袋，边走进门边说着。“哦…好，你们快进去找座位吧，我关下门。”陆衍邦喃喃道。
“行了，这样就安全了，来吧，我们准备——”陆衍邦回头，“开玩！”，目光落在了那个唯一的空位上——黄清影的旁边。
看着旁边一脸坏笑的几人，又看了看满脸写着“再不开始我就要走了”的裴渡，陆衍邦深吸一口气，红着脸坐到了座位上。
“那咱们先玩这个吧——国王游戏！”陆衍邦从包里抽出一筒签子。
所谓国王游戏，就是场上每个人各抽一支签，其中有一支国王签，剩下的全是号码签，抽到国王签的人可以下达一条命令，命令中对应编号的人就需要完成这条命令。
游戏开始！
“嘿！我是国王！”曹毅惊喜地说道，“那…3号！来给我捶背！让我瞧瞧是谁~”看着站起来的裴渡，曹毅地笑容僵住了。
于是乎，极其诡异的场景上演了——
一个人面无表情地给另一个人捶背，而被捶的那个人胆战心惊，正襟危坐。其余几人用力地憋着笑，纷纷拿出手机记录下了这“甜蜜”的两人。
鹿栖偏过头对祖沅悄悄地说，“哈哈，我要把这张发到‘毅裴子’的超话里。”祖沅点了点头，“肯定能爆火。”
游戏继续，进行了数轮，在曹毅又一次被国王点到并学狗叫后，他大声地喊道“啊~换一个玩啊~怎么老是我输。”
“行啦行啦，再玩一把，再玩一把。”鹿栖和哄小孩一样拍了拍曹毅的脑袋。
“我还就不信了，我一定要抽到国王！”曹毅迅速地抽出一根签，“哈！风水轮流转，2号向4号表白！”
“切，看给你装的，我来来看看我是几号……耶( ?? ω ?? )y，我是3号。”
“我是1号。”
“啊……5号。”
“6号。”
“所以就是你们俩完成命令！”曹毅意气风发地指向了两人——陆衍邦和黄清影。
“……阿毅，我这包薯片给你，你换一个。”陆衍邦一字一顿地说。
“不行！愿赌服输！”曹毅一脸幸灾乐祸地看着陆衍邦。
“……不是，我求你了。”
“求我的人从这里排到了法国，排队去。”
看着手上的2号签，陆衍邦清晰地感觉到自己的耳朵无比的滚烫，血液正不断地往脸上涌去。
他叹了口气，像是下定了决心，转过脑袋去。
看着眼前同样满脸通红，几乎要冒烟的少女，陆衍邦清了清嗓子：“老黄，事先声明啊，这都是游戏需要，不是真心话嗷，别往心里去。” 
陆衍邦深吸了一口气，艰难地说道： 
“我……”
“我……”
“我……”
“我喜……”
就在这时，裴渡突然站起来，打断了两人。
“抱歉。但是，比赛要开始了。”裴渡用低沉的嗓音说道。
“啊？这么快吗？那我们走吧，错过了比赛可不好。”陆衍邦像是抓住了救命稻草似的，连忙站起身来，“你们先走吧，我收一下东西。”
“别啊衍邦，把惩罚做完再走啊！”曹毅哀嚎道。
“得了曹毅，就玩儿到这吧，比赛更重要一点，错过可就不好了。”哲泓推了推眼镜，不由分说地拉着曹毅往外走。
*/
```

#### FJ-0262
candy.cpp（为什么啊！）
```cpp
//为什么呢？为什么结果是错的，样例全跑过去了呢？我实在想不通，但既然样例过了那就不管了，直接交上去了；RP++! 
```

#### FJ-0274
自行欣赏
```cpp
//why my T1 6th is 82 not 83?

//ccfwcnm

//i love you 

//i don't love you

//to be or not to be,this is the question

//where there is a will,there is a way

//roma wasn't built in a day

//i miss you

//i hate you

//ptezxzh

//notional olmpics information pie

//computer scince pie

//1145141919810

//350234

//怎么还有十分钟啊

//河北师大附中 
//乒乓少年背向我 
//沉默的注视 
//无法离开的教室 
// 生活在经验里
// 直到大厦崩塌

//电灯熄灭 
//物换星移 
//泥牛入海 

//钟山风雨起苍黄，百万雄师过大江
```

#### FJ-0281
query.cpp（看不懂了）
```cpp
/*
花式技巧像钻石般稀有
早已不是我的title
让自己变成全能的怪兽
See U
Next level
Loog time no see huh
又势在必得
莫比乌斯闭合 
*/
```
sale.cpp（还是个大诗人）
```cpp
/*
三十三声 铃声之后是夕阳带黄昏 
三十三声 你跟我一样在强撑  
三十三声 那年杜苏芮激浪载狂风 
三十三声 教室里传唱彼岸花双生   
三十三声 你已不在我身畔 
		 校园雨天路灯暗  
		 忧愁何人来分担 
		 唯念白露前枫丹  

心灵在大雨中跌宕 
是你我不可能遗忘 
研学我们在台上齐唱 
呵 那只是我的臆想 

闭上眼睛靠在窗前 
因为我没碰过香烟 
书包里注定掏不出项链 
*/
```
tree.cpp（嗯）
```cpp
/*
你一直在我的心里
从来不逃避 也不会放弃 
*/

/*
钢筋铁骨双臂硬如松
沉浸在不败的幸福中
心境高雅韵如风
Call me 英俊潇洒令狐冲 
*/
```

#### FJ-0311
candy.cpp（祝你幸福哦）
```cpp
//表白xwsf K二6LJL 
```
#### FJ-0314
sale.cpp（我也这样认为）
```cpp
//CCF has no egg
//今年和糖果杠上了是吧
```
tree.cpp（？）
```cpp
//我命由天不由我 
```

#### FJ-0326
query.cpp（路灯）
```cpp
/*
		路灯
	我差一点就以为
	我又将独自面对这暗暗长夜
	直到夕阳向昏沉的大地
	伸出千万条手臂
	再一次地拥抱了我
*/
```

#### FJ-0327
能不能也多给我点
```cpp
// I love you ccf,give me more point! Thanks.
```

#### FJ-0344
candy.cpp（神秘语言？）
```cpp
//greedy special AB
//onegai, 1 kara 5 made no tesuto pointo wo paasu suru.
//TAT TAT TAT TAT TAT TAT TAT TAT TAT TAT
//tasukete!tasukete!tasukete!tasukete!tasukete!tasukete!tasukete!
//watasiha, tyougoku no jyouhou gakukai ga dai suki nanode, paasu site onegai... 
```
query.cpp（最后的表白）
```cpp
//I love you forever.
//trntynfqokrvfbn epdcudhfwqiy.
//gisvyhtrrwyn, vbkc?
//last 30 seconds
//trntepdcwqiy.
```
sale.cpp（受害者）
```cpp
//骗你的其实dp也TLE(大哭特哭)(哭天抢地)(以头抢地尔)(阴暗地爬行)(阳光地伸展)
```
tree.cpp（这次看懂了，日语 + 英语）
```cpp
//ace taffy we love you
//watasito isyo ni poroguramu kontesuto wo sanka sitaidesuka
//only 2 bun desu
```

#### FJ-0379
query.cpp（很惨了）
```cpp
// Why there is no 64-bit compiler?????? 
```

#### FJ-0406
tree.cpp（十年 OI 一场空）
```cpp
// Ten years' OI is out of use,
// when you don't use ll to visit ancestors. 
```

#### FJ-0411
膜谁呢这是？
```cpp
//orz 
//orz 
//orz 
//orz 
//orz 
//orz 
//orz 
//orz 
//orz 
//orz 
//orz 
//orz 
//orz 
//orz 
//orz 
//orz 
//orz 
//orz 
//orz 
//orz 
//orz 
//orz 
//orz 
//orz 
//orz 
```

#### FJ-0416
candy.cpp（画画大师）
```cpp
/*
????????  ????????  ????????  ?????   
????????  ????????  ????????  ?????   
??    ??  ??    ??  ??           ??   
??    ??  ??    ??  ??           ??   
????????  ????????  ????????     ??   
????????  ????????  ????????     ??   
      ??        ??  ??    ??     ??   
      ??        ??  ??    ??     ??   
      ??        ??  ??    ??     ??   
      ??        ??  ????????  ????????
*/
```
sale.cpp（十分形象）
```cpp
/*
 
   [ ]--==Sakuzyo Beam==>>>>
   |
  |\

*/
```
![](https://ts1.tc.mm.bing.net/th/id/OIP-C.KNeiGrFe1TNHsAH9ZWe-rgHaFH?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3)

#### FJ-0612
tree.cpp（给 ccf 的信）
```cpp
/*
To CCF_NOI:
我看着 零落的 枯的 碎的 风肆意地 卷起那 满地的皱褶 
像我们的纠葛 腐烂成沼泽 
痛快地 飞舞着 飘着 烧着 无休止地 恨不得 要一整个透彻 
多苦涩 像刀割 被拉扯ToT 
循着—— 
看不见 听不见 一转眼 搁浅 太危险 再蔓延 我无力深陷 
看不见 听不见 一转眼 搁浅 太危险 再蔓延 循着你画的线  
I LOVE CCF_NOI FOR EVER!!!
*/
```

#### FJ-0549
candy.cpp（我爱暴力）
```cpp
/*
9:21
I think it's tantan  but I'm not able to solve the problem    wuwuwu
BaoLi is very good   can solve candy1-6
BaoLi  I love you!!!
9:41
OHHHHHHHHHH   I AC candy7
maybe I AC T1 
*/ 
```

#### FJ-0429
query.cpp（差点把你漏了）
```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
	
	return 0;
}





































































//she me nb kaochang ymy zhijin ymy shuibi caogaozhi haiyao zijiyao\n
//wo tai lj l
```

#### FJ-0497
query.cpp（膜拜+1）
```cpp
//%%%chzhh hzh lsx lrc lzl cyz czx dingshen!!!
```

### 编译失败

#### FJ-0066

query.cpp（std::max 魅力时刻）
```cpp
now=max(now,f[j][i]);
// now:ull, f:ll
```

#### FJ-0071

tree.cpp
```cpp
#include<bits/stdc++.h>
using namespace std;
const long long N=8e3+11;
long long f[N],dis[N],me[N],head[N],sum[N],siz[N];
struct lcq{
	long long v,s;
}c[N];
inline void ls(long long u,long long v)
{
	a[++aa].v=v,a[aa].s=head[u];
	head[u]=aa;
	return;
}
inline void dfs(long long u)
{
	long long v;
	me[u]=-1;
	siz[u]=1;
	for(long long i=head[u]; i; i=a[i].s)
	{
		v=a[i].v;
		dis[v]=dis[u]+1;
		dfs(v);
		me[u]=max(me[u],me[v]);
		sum[u]=sum[u]+sum[v];
		siz[u]+=siz[v];
	}
	me[u]++;
	sum[u]=sum[u]+me[u];
	return;
}
int main()
{
	freopen("tree.in","r",stdin);
	freopen("tree.out","w",stdout);
	long long T,n,m,dan;
	cin>>T;
	while(T--)
	{
		dan=aa=0;
		memset(head,0,sizeof(head));
		cin>>n>>m;
		for(long long i=2; i<=n; i++)
			scanf("%lld",&f[i]),ls(f[i],i);
		dfs(1);
		dan=sum[1];
		printf("%lld\n",sum[1]);
	}
	return 0;
}
```
可见我们的选手普遍没有很多时间。

#### FJ-0117

query.cpp（where is your update?）
```cpp
#include<bits/stdc++.h>
#define ll long long
using namespace std;
const ll INF=-1e18;
int n,a[50010]; ll sum[50010];
signed main(){
    freopen("query.in","r",stdin),freopen("query.out","w",stdout);
    scanf("%d",&n);
    for(int i=1;i<=n;++i)scanf("%d",&a[i]),sum[i]=sum[i-1]+a[i];
    int T; scanf("%d",&T);
    for(int l=1;l<=n;++l){
        for(int r=l;r<=n;++r){
            update(r-l+1,l,r,sum[r]-sum[l-1]);
        }
    }
    while(T--){
        int L,R; scanf("%d%d",&L,&R);
        unsigned ll Ans=0;
        for(int i=1;i<=n;++i){
            ll ans=INF;
            for(int j=L;j<=R;++j){
                for(int k=max(i-j+1,1);k<=i;++k){
                    ans=max(ans,sum[k+j-1]-sum[k-1]);
                }
            }
            Ans^=i*ans;
        }
        printf("%llu\n",Ans);
    }
}
```

#### FJ-0132
candy.cpp（19:从 "int" 到 "double" 进行收缩转换无效）
```cpp
#include<bits/stdc++.h>
using namespace std;
using ll = long long;

const int N = 1e5 + 7;
int n, res; ll m;
struct candy {
	double s; int n;
	bool operator < (const candy x) const {
		return s == x.s? n > x.n : s < x.s;
	}
} a[N << 1]; int sz;

signed main() {
	freopen("candy.in", "r", stdin);
	freopen("candy.out", "w", stdout);
	scanf("%d%lld", &n, &m);
	for (int i = 1, x, y; i <= n; i++)
		scanf("%d%d", &x, &y), a[++sz] = {(x + y) / 2.0, 2}, a[++sz] = {x, 1}; //there
	sort(a + 1, a + 1 + (n << 1));
	for (int i = 1; i <= n && m; i++) {
		if (a[i].n == 1)
			if (m > a[i].s) { m -= a[i].s, res++; continue; }
			else break;
		ll tmp = m / a[i].s;
		if (!tmp) break;
		res += tmp;
		m -= tmp * a[i].s;
	}
	printf("%d", res);
	return 0;
}
```

#### FJ-0159
sale.cpp（未定义标识符 "pow"）
```cpp
#include<iostream>
#include<cstdio>
using namespace std;
const long long M = 998244353;
const int MAXN = 5005;
int C,T,n,m;
long long a[MAXN];
long long pow2[MAXN];
int main(){
	freopen("sale.in","r",stdin);
	freopen("sale.out","w",stdout);
	cin>>C>>T;
	pow2[0] = 1;
	for(int i = 1;i<MAXN;i++)pow2[i] = (pow2[i]<<1)%M;
	if(C == 18){
		while(T--){
			cin>>n>>m;
			for(int i = 1;i<=n;i++)cin>>a[i];
			cout<<pow[n]<<endl;
		}
	}
	return 0;
} 
```
#### FJ-0166
sale.cpp（压行事故多发地，从 "long long" 到 "int" 进行收缩转换无效:long long R()）
```cpp
#include<bits/stdc++.h>
#define ll long long
using namespace std;const int N=10010,M=998244353,V=1e6;
ll c,t,n,m,A,v[N],h[N],vi,hi,jc[V],cj[V];struct P{int x,i,j;}a[N];
ll R(){ll a=0;char c=getchar();for(;c<48;c=getchar());
    for(;c>47;c=getchar())a=(a<<3)+(a<<1)+(c^48);return a;
}ll K(ll x,ll y){ll a=1;for(;y;y>>=1,x=x*x%M)if(y&1)a=a*x%M;return a;}
ll C(ll x,ll y){return x<y||y<0?0:jc[x]*cj[y]%M*cj[x-y]%M;}
bool cmp(P a,P b){return a.x==b.x?a.j==b.j?a.i>b.i:a.j<b.j:a.x<b.x;}
int main(){
    freopen("sale.in","r",stdin);
    freopen("sale.out","w",stdout);
    for(int i=jc[0]=1;i<V;i++)jc[i]=jc[i-1]*i%M;
    cj[N-1]=K(jc[N-1],M-2);for(int i=N-1;i;i--)cj[i-1]=cj[i]*i%M;
    for(c=R(),t=R();t--;A=vi=hi=0){n=R()+1,m=R();
        for(int i=1;i<n;i++)a[i]={R(),i,1},a[i+n]=(P){a[i].x<<1,i,0};
        a[n]={0,n,1},a[n+n]={0,n,0};sort(a+1,a+n+n+1,cmp);
        if(c==18||c==16){printf("%lld\n",K(2,n-1));continue;}
        if(c==17){printf("%lld\n",(K(2,n-1)+M-(a[3].x*2!=a[4].x&&a[3].x!=a[4].x))%M);continue;}
        for(int i=1;i<=n+n;i++)if(a[i].j)v[++vi]=i;else h[++hi]=i;
        for(int i=1;i<n;i++)for(int j=i+1;j<=n;j++){
            ll d=0,b=0,c=0,e=0;
            for(int k=1;k<v[i];k++)if(a[k].j)c++;
            for(int k=v[j]+1;k<h[i];k++)if(a[k].j)b++;
            for(int k=max(h[i],v[j])+1;k<h[j];k++)if(a[k].j)
                if(a[k].x>a[v[i]].x+a[v[j]].x)d++;else b++;
            for(int k=h[j]+1;k<=n+n;k++)if(a[k].j)e++;
            if(i^1)c--;c=K(2,c);
            for(int k=0;k<d;k++)for(int l=0;l<d-k;l++)
                (A+=c*C(d,k)%M*C(e+b,m-e-2-l*2-k)%M)%=M;
        }
        printf("%lld\n",(K(2,n-1)+M-A)%M);
    }
    return 0;
}/*
8:40-11:28
52pts
11:28-11:50
64pts
11:50-12:05
64pts
*/
```

#### FJ-0168
query.cpp（未定义标识符 "i"）
```cpp
#include<bits/stdc++.h>

#define int long long

using namespace std;

int n;
int a[50005];

int solve(int len){
	int res = 0;
	int sum = 0;
	
	for(int i = 1; i <= len; i++){
		sum += a[i];
	}
	
	res = max(res, sum);
	for(int l = 2; l + len - 1 <= n; l++){
		int r = l + len - 1;
		sum -= a[i];
		sum += a[r];
		res = max(res, sum);
	}
	
	return res;
}

signed main(){
	
	//ios::sync_with_stdio(0);
	//cin.tie(0);
	
	freopen("query.in",  "r", stdin); 
	freopen("query.out", "w", stdout);
	
	cin>> n;
	for(int i = 1; i <= n; i++){
		cin>> a[i];
	}
	
	int q;
	cin>> q;
	
	int ans = 0;
	for(int i = 1; i <= q; i++){
		int L, R;
		cin>> L >> R;
		ans = 0;
		for(int j = L; j <= R; j++){
			ans = max(ans, solve(j));
		}
		cout<< ans << "\n";
	}
	
	return 0;
} 
```

#### FJ-0184
tree.cpp（如你所愿，找不到用户定义的文本运算符，字符 U+ff1b "；" 可能会与 ASCII 字符 U+003b ";" 混淆，后者在源代码中更为常见。）
```cpp
#include<bits/stdc++.h>
using namespace std;
int t;
int n,m;
vector<int>v[8005];
//希望能上奇葩代码 
int main(){
	freopen("tree.in","r",stdin);
	freopen("tree.out","w",stdout);
	cin>>t;
	while(t--){
		cin>>n>>m;
		for(int i=1,x;i<=n;i++){
			cin>>x;
			v[x].push_back(i);
		}
		cout<<"不会了，太难了，推了半天公式没推出来"； 
	}
	return 0;
}
```

#### FJ-0231
不用NOI Linux的锅。
```cpp
#include <bits/stdc++.h >
```

#### FJ-0239
query.cpp（嗯。）
```cpp
typedef long long ll;
typedef unsigned ll ull;
```

#### FJ-0261
tree.cpp（未定义标识符 "r"）
```cpp
#include<bits/stdc++.h>
using namespace std;
#define max(x,y) ((x>y)?x:y)
const int MAXN=8005;
template<typename T>inline void read(T &x){
	x=0;
	int f=1;
	char s=getchar();
	while(!isdigit(s)){
		if(s=='-')f=-1;
		s=getchar();
	}
	while(isdigit(s)){
		x=x*10+(s^48);
		s=getchar();
	}
	x*=f;
}
template<typename T>inline void write(T x){
	if(x<0){
		putchar('-');
		x=-x;
	}
	if(x>9)write(x/10);
	putchar(x%10+'0');
}
int T,n,m,f[MAXN],z[MAXN],deep[MAXN],vis[MAXN];
vector<int>e[MAXN],c[MAXN];
long long ans;
int mex(int i,int &s){
	int res=0,vi=0;
    for(int v:e[i]){
		res+=mex(v,vi);
	}
	for(int j=0;j<=n+1;j++){
		if(!(vi&(1<<j))){
			res+=j;
			break;
		}
	}
	vi|=(1<<z[i]);
	s|=vi;
	return res;
}
void baoli(int x){
	if(x>n){
		int tmp=0;
		ans=max(ans,mex(1,tmp));
		return;
	}
	for(int i=0;i<=n;i++){
		z[x]=i;
		baoli(x+1);
	}
}
void dfs(int x,int c){
	deep[x]=c;
	for(int v:e[x]){
		dfs(v,c+1);
	}
}
void tx(){
	dfs(1,0);
	int res=0;
	for(int i=0;i<=n;i++)c[i].clear();
	for(int i=1;i<=n;i++)c[deep[i]].push_back(i);
	for(int i=n;i>=0;i--){
		if(c[i].size()){
			int cnt=0;
			for(int j:c[i]){
				int tmp=0;
				res=mex(j,tmp);
				ans+=res;
				if(!res){
					z[j]=++cnt;
				}else{
					z[j]=res;
				}
			}
		}
	}
}
int main(){
	#ifndef NOT_FRE
	freopen("tree.in","r",stdin);
	freopen("tree.out","w",stdout);r
	#endif
	read(T);
	while(T--){
		read(n),read(m);
		memset(z,0,sizeof(z));
		for(int i=1;i<=n;i++)e[i].clear();
		for(int i=2;i<=n;i++){
			read(f[i]);
			e[f[i]].push_back(i);
		}
		ans=0;
		if(n<=7){
			baoli(1);
		}else{
			tx();
		}
		write(ans),putchar('\n');
	}
	return 0;
} 
```

#### FJ-0305
sale.cpp（cin<<）
```cpp
for(int i=1;i<=n;i++)cin<<a[i];
```

#### FJ-0320
query.cpp（故意的吧）
```cpp
#onclude<icecream>
using name space std;
in mian()
{
	
	cuo<<hello?world;
	return 0;
 } 
```

#### FJ-0321
candy.cpp（别开香槟啊喂，9：缺少显式类型）
```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const int N=1e6+5,mod=998244353;
ll n,m,sum=0;
struct node{
	ll x,y;
}candys[N];
operator<(const pair<double,node>& __x, const pair<double,node>& __y)
    { return __x.first > __y.first;}
priority_queue<pair<double,node>>q;//价格,(编号,1&2&3)//第一个，第二个，整套 
int main(){
	freopen("candy.in","r",stdin);
	freopen("candy.out","w",stdout);
	scanf("%lld%lld",&n,&m);
	for (ll i=1;i<=n;i++){
		scanf("%lld%lld",&candys[i].x,&candys[i].y);
		//cout<<" "<<(candys[i].x+candys[i].y)/2.0;
		q.push({candys[i].x,{i,1}});
		q.push({ (candys[i].x+candys[i].y)/2.0 , {i,3}});
	}
	while (m>0 and !q.empty()){
		pair<double,node> t=q.top();q.pop();
		double pr=t.first;
		ll mark=t.second.x,ty=t.second.y;
		if (pr>m)break;
		if (ty==1 or ty==2){
			sum+=1;
			if (ty==1) q.push({candys[mark].y,{mark,2}});
			else if (ty==2) q.push({candys[mark].x,{mark,1}});
			m-=pr;	
		}else if (ty==3){
			pr*=2;//总价 
			ll num=floor(m/pr);
			if (num>=1){
				sum+=(num*2);
				m-=pr*num;
			}
		}
	}
	printf("%lld",sum);
	return 0;
}
/*
我是最棒的~虽然鄙人技术较差
OI无憾！ 
*/
```

#### FJ-0353
这对吗？这不对。
```cpp
ios::sync_with_stdio(nullptr);
```

#### FJ-0402
不理解，反正在 Linux 上是过不了编译的。
```cpp
fin>>n>>m;
```

#### FJ-0430
sale.cpp（英文水平有待提高）
```cpp
run*=2;
rum%=modn;//rum未定义
```

#### FJ-0410
candy.cpp（无奖竞猜，猜猜哪错了）
```cpp
#include<bits/stdc++.h>
#define int long long 
using namespace std;
struct node{
	int x,y;
}a[10005];
bool cmp1(node c,node d){
	return c.x+c.y<d.x+d.y;
}
bool cmp2(node c,node d){
	return c.x<d.x;
}
signed main(){
	freopen("candy.in","r",stdin);
	freopen("candy.out","w",stdout);
	int n,m,ans=0,f,t=0;
	cin>>n>>m;
	for(int i=1;i<=n;i++){
		cin>>a[i].x>>a[i].y;
		if(a[i].x!=a[i].y) t=1;
	}
	if(t==0){
		sort(a+1,a+n+1,cmp2);
		cout<<m/a[1].x;
		return 0;
	}
	sort(a+1,a+n+1,cmp1);
	int s=a[1].x+a[1].y;
	int g=a[1].x
	sort(a+1,a+n+1,cmp2);
	for(int i=1;i<=n;i+=2){
		if(a[i].x+a[i+1].x<=s){
			m-=(a[i].x+a[i+1].x);
			ans+=2;
		} 
		if(i+1<=n&&a[i].x+a[i+1].x>s){
			f=i;
			break;
		} 
		if(i==n){
			f=i;
			break;
		}
	}
	ans+=m/s*2;
	m%=s;
	cout<<f<<endl;
	while(m>=0){
		m-=a[f].x;
		f++;
		ans++;
	}
	ans--;
	cout<<ans;
	return 0;
}
```
提示：少了个分号。

query.cpp（这等取模）
```cpp
k[i]=k[i]%2e64;
```

#### FJ-0481
sale.cpp（自己定义的函数一定是不会调用错的）
```cpp
#include<bits/stdc++.h>
using namespace std;
namespace sol
{
	#define int long long
	const int mod=1e9+7; 
	int a[5010],da[5010],jc[5010],inv[5010];
	struct node
	{
		int a,w,p;
	}b[5010];
	bool cmp(node a,node b)
	{
		if(a.a*b.w==b.a*a.w)
		{
			if(a.w!=b.w)return a.w>b.w;
			return a.p<b.p;
		}
		return a.a*b.w>b.a*a.w;
	}
	int qpow(int a,int b)
	{
		int res=1;
		while(b)
		{
			if(b&1)res=1ll*res*a%mod;
			a=1ll*a*a%mod;
			b>>=1;
		}
		return res;
	}
	int C(int n,int m)
	{
		return jc[n]*inv[m]%mod*inv[n-m]%mod;
	}
	void solve()
	{
		int n,m;
		cin>>n>>m;
		for(int i=1;i<=n;i++)cin>>a[i];
		if(n<=10)
		{
			int ou=0;
			for(int i=0;i<(1<<n);i++)
			{
				for(int j=1;j<=n;j++)
				{
					if(i&(1<<j-1))b[j]={a[j],1,j};
					else b[j]={a[j],2,j};
				}
				sort(b+1,b+1+n,cmp);
				int dm=m;
				long long sum=0,ans=0;
				for(int j=0;j<(1<<n);j++)
				{
					long long res=0,cost=0;
					for(int k=1;k<=n;k++)
						if(j&(1<<k-1))res+=b[k].a,cost+=b[k].w;
					if(cost<=m)ans=max(ans,res);
				}
				for(int j=1;j<=n;j++)
				{
					if(dm>=b[j].w)dm-=b[j].w,sum+=b[j].a;
				}
				if(sum==ans)ou++;
			}
			cout<<ou<<'\n';
		}
		else
		{
			if(m==2)
			{
				long long ans=1;
				for(int i=1;i<=n;i++)da[i]=a[i];
				sort(da+1,da+1+n);
				int cnt=0;
				for(int i=1;i<=n;i++)if(da[i]==da[n])cnt++;
				int dn=unique(da+1,da+1+n)-da-1;
				if(da[dn-2]+da[dn-1]<=da[n])ans+=qpow(n-cnt); //there
				for(int i=1;i<=cnt;i++)ans+=C(cnt,i)*qpow(2,n-cnt)%mod<<'\n';
				cout<<ans%mod<<'\n';
			}
			else cout<<qpow(2,n)<<'\n';
		}
	}
	signed main()
	{
		freopen("sale.in","r",stdin);
		freopen("sale.out","w",stdout);
		ios::sync_with_stdio(0),cin.tie(0),cout.tie(0);
		jc[0]=1;
		for(int i=1;i<=5000;i++)jc[i]=jc[i-1]*i%mod;
		for(int i=0;i<=5000;i++)inv[i]=qpow(jc[i],mod-2);
		int c,t;
		cin>>c>>t;
		while(t--)solve();
		return 0;
	}
}
signed main()
{
 	sol::main();
	return 0;
}
```

### 其他类型

#### FJ-0187
candy.cpp（AI风代码）
```cpp
#include<bits/stdc++.h>
#define int long long

using namespace std;

const int MAXN=1e5+5;
int n,m,sum[MAXN],ans;

struct candy{
	int _fir,_sec,both;
}num[MAXN];

bool cmp(candy a,candy b){return a.both<b.both;}
bool cmp2(candy a,candy b){return a._fir<b._fir;}

vector<int> inter_;

bool check(int id,int mm){
	return mm>=sum[id];
}

int bin_se(int mm){
	int lt=0,rt=n;
	
	while(1){
		if(abs(rt-lt)<=1){
			if(check(rt,mm))	return rt;
			else return lt;
		}
		
		int mid=(rt+lt)>>1;
		
		if(check(mid,mm))	lt=mid;
		else	rt=mid;
	}
}

signed main(){
	
	freopen("candy.in","r",stdin);
	freopen("candy.out","w",stdout);
	
	ios::sync_with_stdio(false);
	cin.tie(0),cout.tie(0);
	
	cin>>n>>m;
	
	for(int i=1;i<=n;i++)
		cin>>num[i]._fir>>num[i]._sec,num[i].both=num[i]._fir+num[i]._sec;
	
	sort(num+1,num+n+1,cmp);
	
	int low_=num[1].both,use_num=m/low_;
	
	for(int can_use=max(low_*(use_num-n),(int)0);can_use<=m;can_use+=low_)
		inter_.emplace_back(can_use/low_);
	
	sort(num+1,num+n+1,cmp2);
	
	for(int i=1;i<=n;i++)
		sum[i]=sum[i-1]+num[i]._fir;
		
	for(int i:inter_){
		int now_num=i*2,now_m=m-i*low_;
		
		now_num+=bin_se(now_m);
		
		ans=max(now_num,ans);
		
	}
	
	cout<<ans<<"\n";
	
	return 0;
}
```
剩余略

#### FJ-0228
666
```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
int main()
{
	freopen("query.in", "r", stdin);
	freopen("query.out", "w", stdout);
	cout<<666;
	return 0;
}
```
#### FJ-0240
tree.cpp（试图卡评测）
```cpp
#include<bits/stdc++.h>
using namespace std;
int main(){
	freopen("tree.in","r",stdin);
	freopen("tree.out","w",stdout);
	//<windows.h>
	while(1){
		cout<<0;
	}
}
```

#### FJ-0263
tree.cpp（哈，哈哈哈）
```cpp
bool cmp(int ha, int hahaha) {
	return ha > hahaha;
}
```

#### FJ-0279
candy.cpp（二次元真恶心瞄）
```cpp
#define Arknights return 0;
int openbread(bool whichchoice){
	if(whichchoice){
		freopen("candy.in","r",stdin);
		freopen("candy.out","w",stdout);
	}else{
		printf("你这baka别忘了把我打开\n");
	}
	Arknights
}
```

#### FJ-0286
candy.cpp（兄弟你这空行和格式真吓人吧）
```cpp
#include<bits/stdc++.h>
using namespace std;








const long long MAXN=100009;
long long n,m;
struct candy{
	long long x;
    long long  y;
	long long sum;
	bool visit;
}a[MAXN];






bool cmp2(candy c,candy d)
{
	return c.x<=d.x ;
	 
}
bool cmp(candy x,candy y)
{
	if(x.sum <=y.sum )
	{
		return true;
}
else return false;

}









long long solve2()
{


	long long ans=0,k=m;
	sort(a,a+n,cmp);
for(long long i=1;i<=n-1;i++)
{
	if(a[i].x <=a[0].x &&a[i].x <a[0].y  )
	{
		k-=a[i].x ;
		a[i].visit =1;
		ans++;
	}
}

while(k>=a[0].sum)
{   
	k-=a[0].sum ;
	ans+=2;
}
   sort(a,a+n,cmp2);

	for(int i=0;i<=n-1;i++)
	{
		if(k>=a[i].x &&a[i].visit ==0)
		{
			a[i].visit =1;
			k-=a[i].x;
			ans++;
		}
	}


return ans;
}











int main()
{
freopen("candy.in","r",stdin);
freopen("candy.out","w",stdout);
cin>>n>>m;
for(long long i=0;i<=n-1;i++)
{
	long long x1,y1;
	scanf("%lld%lld",&x1,&y1);
	a[i].x =x1;a[i].y=y1;a[i].sum =x1+y1;
	a[i].visit =0;
}

long long ANS=solve2();

printf("%lld",ANS);
fclose(stdin);
fclose(stdout);
return 0;
}
```

#### FJ-0308
candy.cpp（和溢位）
```cpp
int mi=0x333333333333333333f,mn=0x33333333333333333f;
```

#### FJ-0313
tree.cpp（一时不知道该放在那个分类）
```cpp
/*
#include<bits/stdc++.h>
#include<windows.h>
using namespace std;
bool KEY_DOWN(int x)
{
	return GetAsyncKeyState(x) == -32768;
}
const int cooldown = 1;
int p[7][7],score = 0;
void updateDisplay()
{
	system("cls");
	for(int i = 1;i <= 4;i++)
	{
		cout << "---------------------" << endl;
		printf("|%4d|%4d|%4d|%4d|\n",p[i][1],p[i][2],p[i][3],p[i][4]);
	}
	cout << "---------------------" << endl;
	cout << "Score: " << score << endl;
}
void generateNumber()
{
	int counter = 0;
	for(int i = 1;i <= 4;i++)
		for(int j = 1;j <= 4;j++)
			counter += (!p[i][j]);
	if(counter)
		while(1)
		{
			int randx = rand() % 4 + 1;
			int randy = rand() % 4 + 1;
			int randp = rand() % 4 + 1;
//			cout << randx << ' ' << randy << ' ' << p[randx][randy] <<endl;
			int randnum = (randp == 4 ? 4 : 2);
			if(p[randx][randy] == 0)
			{
				p[randx][randy] = randnum;
				break;
			}
		}
}
void handleOperationUp()
{
	for(int j = 1;j <= 4;j++)
	{
		queue <int> q;
		for(int i = 1;i <= 4;i++)
			if(p[i][j] != 0) q.push(p[i][j]),p[i][j] = 0;
		int cnt = 0;
		while(!q.empty())
		{
			int a = q.front(); q.pop();
			if(a == p[cnt][j]) p[cnt][j] = a * 2,score += a * 2;
			else p[++cnt][j] = a;
		}
	}
	generateNumber();
	updateDisplay();
	Sleep(cooldown);
}
void handleOperationDown()
{
	for(int j = 1;j <= 4;j++)
	{
		queue <int> q;
		for(int i = 4;i >= 1;i--)
			if(p[i][j] != 0) q.push(p[i][j]),p[i][j] = 0;
		int cnt = 5;
		while(!q.empty())
		{
			int a = q.front(); q.pop();
			if(a == p[cnt][j]) p[cnt][j] = a * 2,score += a * 2;
			else p[--cnt][j] = a;
		}
	}
	generateNumber();
	updateDisplay();
	Sleep(cooldown);
}
void handleOperationLeft()
{
	for(int i = 1;i <= 4;i++)
	{
		queue <int> q;
		for(int j = 1;j <= 4;j++)
			if(p[i][j] != 0) q.push(p[i][j]),p[i][j] = 0;
		int cnt = 0;
		while(!q.empty())
		{
			int a = q.front(); q.pop();
			if(a == p[i][cnt]) p[i][cnt] = a * 2,score += a * 2;
			else p[i][++cnt] = a;
		}
	}
	generateNumber();
	updateDisplay();
	Sleep(cooldown);
}
void handleOperationRight()
{
	for(int i = 1;i <= 4;i++)
	{
		queue <int> q;
		for(int j = 4;j >= 1;j--)
			if(p[i][j] != 0) q.push(p[i][j]),p[i][j] = 0;
		int cnt = 5;
		while(!q.empty())
		{
			int a = q.front(); q.pop();
			if(a == p[i][cnt]) p[i][cnt] = a * 2,score += a * 2;
			else p[i][--cnt] = a;
		}
	}
	generateNumber();
	updateDisplay();
	Sleep(cooldown);
}
void handleInput()
{
	if(KEY_DOWN(VK_UP))    handleOperationUp();
	if(KEY_DOWN(VK_DOWN))  handleOperationDown();
	if(KEY_DOWN(VK_LEFT))  handleOperationLeft();
	if(KEY_DOWN(VK_RIGHT)) handleOperationRight();
}
bool gameStatus = 1;
void detectGameStatus()
{
	bool flag = 0;
	for(int i = 1;i <= 4;i++)
		for(int j = 1;j <= 4;j++)
		{
			int cur   = p[i][j];
			int up    = p[i - 1][j];
			int down  = p[i + 1][j];
			int left  = p[i][j - 1];
			int right = p[i][j + 1];
			if(cur == 0 || cur == up || cur == down || cur == left || cur == right) flag = 1;
		}
	gameStatus = flag;
}
int main()
{
	srand(time(0));
	generateNumber();
	updateDisplay();
	while(gameStatus)
	{
//		generateNumber();
//		updateDisplay();
		handleInput();
		detectGameStatus();
	}
	cout << "Game is Over!" << endl;
	return 0;
}
*/
```

#### FJ-0339
tree.cpp（还挺整齐）
```cpp
memset(ans_tree,0,sizeof(ans_tree));
memset(vis,false,sizeof(vis));
memset(yes,false,sizeof(yes));
memset(deep,0,sizeof(deep));
memset(ans,0,sizeof(ans));
memset(out,0,sizeof(out));
memset(co,0,sizeof(co));
memset(e,0,sizeof(e));
memset(f,0,sizeof(f));
memset(h,0,sizeof(h));
```

#### FJ-0356
奇码共欣赏

candy.cpp
```cpp
#include "bits/stdc++.h"
using namespace std;
 
#define bv(T) 0
#define bn 0

#define NN  printf("\n")
#define iu(T) scanf("%lld",&T)
#define ou(T) printf("%lld",T)

 
#define MN 100100
#define U long long 
U X[MN] ;
U Y[MN] ;
U m;
U n;
#define w(i,n) for(U i=0;i<n;i++)
#define ws(i,s,n) for(U i=s;i<n;i++)
#define ew(i,n) for(U i=n;i--;)
#define ews(i,s,n) for(U i=n;i-->=s;)
bool bA=true; 
int main()
{
	freopen("candy.in","r",stdin);
	freopen("candy.out","w",stdout);
	
iu(n);iu(m);		
w(i,n)
{
	iu(X[i] );	iu(Y[i] );	
	if(X[i] !=Y[i] )bA=0;
}
U mx=0xFFffFFffFFffFFf;
U mi;
	if(bA)
	{
	w(i,n)	mx=min(mx,X[i] );
		
		ou(n/mx);
	}
	else
	{
		U as=0;
		U N=m;
		U mxx;
			w(i,n)
			{
				if(X[i]+Y[i]<mx)
				mx=X[i]+Y[i],mi=i;
			}
			mxx=	X[mi]; 
			X[mi]=0xFFffFFffFFffFFf;
			
			bool asd= (N-(N/mx)*mx>=mxx);
		sort(X,X+n);
			w(i,n)
			if(X[i]< (asd? mx: 0) )
			N-=X[i],as++,bv(X[i]);
			
			ou(as+(N/mx)*2);
	}
	///  11  8 3 
	fclose(stdin);
	fclose(stdout);
	
}
```
query.cpp
```cpp
#include "bits/stdc++.h"
using namespace std;

 
#define bv(T) 0
#define bn 0

#define NN  printf("\n")
#define iu(T) scanf("%lld",&T)
#define ou(T) printf("%lld",T)

 
#define MN 100100
typedef  long long U;
U A[MN] ;
typedef  unsigned long long ull;

U K[MN] ;

U m;
U n,q;
	U c,t;
#define w(i,n) for(U i=0;i<n;i++)
#define ws(i,s,n) for(U i=s;i<n;i++)
#define ew(i,n) for(U i=n;i--;)
#define ews(i,s,n) for(U i=n;i-->=s;)
bool bA=true; 
	char Q[100];
void fw(ull n)
{	
int i=0;
	while(n)Q[i++]=(n%10ull)+'0',n/=10ull;
	while(i)putchar(Q[--i]);
}

int main()
{
	freopen("query.in","r",stdin);
	freopen("query.out","w",stdout);

iu(n); 
 w(i,n) iu(A[i] );
 
 iu(q); 
 
 w(j,q) 
 {
 	U L,R;	 
 	iu(L);iu(R);
 	U d=0;
 	U d1=0;
 	U li=0; 
 	U li1=0; 
 		w(i,n)	K[i]=-0xFFffFFffFFFFfff;

 	w(i,n)
 	{
 	
 		d+=A[i];
 		d1+=A[i];
 		if(i-li1>=R)	
 		{
 				 li1++,d1-=A[li];
		 }
 		if(i-li>=R)	
		 {
		 
		 li++,d-=A[li];
		 
		 
		}
 		
 		
 		if(d<0)
		 d=0,li=i+1;
		 
		 if(i-li+1>=L)
		 	ws(k,li,i+1)
			 K[k]=max(K[k],   d);
			 	
			ws(k,li1,i+1)
			 K[k]=max(K[k],   d1);		 
	}
	ull as=0;
//		w(i,n) bv(K[i]);
	w(i,n)
	{
	//	as^= (ull&)i*(ull&)K[i];
	U ah= (i*K[i]);
	
	 as^=ah<0?0xFFFFffffFFFFffffull+ (ull)ah :ah ;
}
//	as=
//printf("%lld",as);NN;
	fw(as);NN;
 }
 
 
 
	///  11  8 3 
	fclose(stdin);
	fclose(stdout);
	
}
```
sale.cpp
```cpp
#include "bits/stdc++.h"
using namespace std;
 
#define bv(T) 0
#define bd(T) 0
#define bn 0

#define NN  printf("\n")
#define iu(T) scanf("%lld",&T)
#define ou(T) printf("%lld",T)

 
#define MN 100100
#define U long long 
U A[MN] ;
 
U m;
U n;
	U c,t;
#define w(i,n) for(U i=0;i<n;i++)
#define ws(i,s,n) for(U i=s;i<n;i++)
#define ew(i,n) for(U i=n;i--;)
#define ews(i,s,n) for(U i=n;i-->=s;)
bool bA=true; 
	U deff=0;

 
U mcl(U i,bool bh)
{
//	bool fgh=1;
//	vector<>
		U mm=m;
 		U as=0;
 		U q=0;
 		U e1=0;
 		U e2=0;
 		for(;mm;)
 		{
	//	 	bv( (i>>0) );
	//	 	bv(  ((i>>0)&1)  );
	//	 		bv( ( ((i>>0)&1) ==0)  );
 	//	bv( !!((i>>0)&1==0ll) );
 		while(q<64ll&&((i>>(q))&1)==0 ) q++ ;
 		while(e1<64ll&&(i>>(e1))&1)e1++;e2=e1+1;
 		while(e2<64ll&&(i>>(e2))&1)e2++;
 		
 		U aq,ae1,ae2;
 		aq=q<n?A[q]:0;
 		ae1=e1<n?A[e1]:0;
 		ae2=e2<n?A[e2]:0;
 		 
 	//	bv(q); bv(e1); bv(e2); 
 	//	 bv(aq);  bv(ae1);bv(ae2);  bv(mm);
 		 
 	//	 if(bh&&(aq>=ae1+ae2) != (aq>=ae1*2) && fgh  )
 	//	 {
		  //fgh=0;
		  
	//	  deff++ ;
 	//	}
 		if(aq>=(bh?ae1*2:ae1+ae2)&& mm>=2)
 		{
		// bv("use2");
	//	bv(aq);
	q++;
		bd( aq); 
		 as+=aq,
		 mm-=2;
		}
 		else  if(mm>=1)
 		{
 	e1++;
 		bd(  ae1);
		 as+=ae1,mm-=1;
 		}
	//	 else break; 
 		}
 	bn;
 		return as;
 //	return 1;
}
 
U as=0;
int main()
{//bv("k2");
	freopen("sale.in","r",stdin);
	freopen("sale.out","w",stdout);

iu(c);iu(t);
while(t--)
{
iu(n);iu(m);
	w(i,n)
	{
	
		iu(A[i] );	
			if(i&&A[i]!=A[i-1])	bA=false;
	}	
if(bA)
{

ou( 1ll<<n);NN;
 goto CNCN;
}

sort(A,A+n,[](const U& a,const U& b){return a>b;});
/////w(i,n)bv(A[i]);
//bn;
as=0;
deff=0;
	w(i,1ll<<n)
 	{
 		
 //		as+=mcl(i,0);//==mcl(i,1)	 ; 
 	as+=mcl(i,0)==mcl(i,1)	 ; 
 //	 ou(	mcl(i));NN;
 		bn;
	}
 //	 bv(deff);
 	
 ou(as%998244353);NN;
 
 
 
 CNCN:; 
}
	///  11  8 3 
	fclose(stdin);
	fclose(stdout);
	
}
```
tree.cpp
```cpp
#include <iostream>
using namespace std;
/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
		freopen("tree.in","r",stdin);
	freopen("tree.out","w",stdout);
cout << R"(309
160
137
173
142
)";
	fclose(stdin);
	fclose(stdout);
}
```

#### FJ-0468
query.cpp（int：我的要爆啦！）
```cpp
const int inf = 0x8080808080808080ll;
```

#### FJ-0479
sale.cpp（自信放光芒）
```cpp
const int PowerfulN = 5005,PowerfulMaxn = 5000;
```

### 特殊成就

1. 恭喜 FJ-0327 选手获得 **最长空格奖**，一共173个连续空格。
2. 找不到什么其他神秘的活了，就这样结束吧！

:wq