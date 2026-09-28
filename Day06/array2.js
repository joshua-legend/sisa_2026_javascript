/* map: 바꾸기, filter: 거르기, reduce:누적시켜줘, find: 찾기, some & every: 존재 유무  */
const arr = [10, 20, 30, 40, 50];
const a1 = arr.find((x) => x <= 10); // 10
const a2 = arr.findIndex((x) => x <= 10); // 0 번째
const a3 = arr.some((x) => x > 20); // true
const a4 = arr.every((x) => x > 20); // false

const arr1 = [1, 2, 3, 4, 5];
const result1 = arr1.reduce((a, c) => {
  console.log({ a: a, c: c });
  return a + c;
});

const coupang = [
  { name: "선풍기", price: 55000, counts: 1 }, // 55000 * 1
  { name: "양말", price: 3500, counts: 2 }, // 3500 * 2
  { name: "칫솔", price: 4000, counts: 3 }, // 4000 * 3
];
const total = coupang.map((x) => x.price * x.counts).reduce((a, c) => a + c);

/* 팝송 */
/* 힌트 문자열을 배열로 바꾸는 함수는 split함수임 */
/* 1. butter 갯수 구하기 */
/* 2. 총 글자 몇개? */

const butter = `
Smooth like butter, like a criminal undercover
Gon' pop like trouble breaking into your heart like that, ooh
Cool shade, stunner, yeah, I owe it all to my mother, uh
Hot like summer, yeah, I'm making you sweat like that (break it down)
Ooh, when I look in the mirror
I'll melt your heart into two
I got that superstar glow, so
Ooh (do the boogie, like)
A side step, right-left, to my beat
High like the moon, rock with me, baby
Know that I got that heat
Let me show you 'cause talk is cheap
Side step, right-left, to my beat
Get it, let it roll
Smooth like butter, pull you in like no other
Don't need no Usher to remind me you got it bad
Ain't no other that can sweep you up like a robber
Straight up, I (got ya) making you fall like that (break it down)
Ooh, when I look in the mirror
I'll melt your heart into two
I got that superstar glow, so
Ooh (do the boogie, like)
Side step, right-left, to my beat
High like the moon, rock with me, baby
Know that I got that heat
Let me show you 'cause talk is cheap
A side step, right-left, to my beat
Get it, let it roll
Get it, let it roll
Get it, let it roll
Ice on my wrist, I'm the nice guy
Got the right body and the right mind
Rolling up the party, got the right vibe
Smooth like (butter), hate us (love us)
Fresh boy, pull up and we lay low
All the players get moving when the bass low
Got ARMY right behind us when we say so
Let's go
Side step, right-left, to my beat (right-left, to my beat)
High like the moon, rock with me, baby
You know that I got that heat
Let me show you 'cause talk is cheap (you know that talk is cheap)
Side step, right-left, to my beat
Get it, let it roll
Smooth like (butter), cool shade (stunner)
And you know we don't stop
Hot like (summer), ain't no (bummer)
You'll be like, "Oh, my God"
We gon' make you rock, and you say (yeah)
We gon' make you bounce, and you say (yeah)
Hotter, sweeter, cooler, butter
Get it, let it roll
`;
