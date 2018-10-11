const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "平凡之路",
        artist: '朴树',
        url: 'http://m10.music.126.net/20181010181008/feee125d73c0ea2de87f5249360e59e1/ymusic/5dde/f2d3/3dba/0a0914dcd1585247b58938a3a7afd925.mp3',
        cover: 'https://ww1.sinaimg.cn/bmiddle/006AU3yKly1fvrd0yd3csj30ij0rswgx.jpg',
      },
      {
        name: '君が好きだと叫びたい',
        artist: 'BAAD',
        url: 'http://m10.music.126.net/20181010183449/7184cbf7109f61faf21812816caf8d09/ymusic/7899/fb25/b37d/7b8e787662157ce9bcbb6fead6429f6d.mp3',
        cover: 'https://ww4.sinaimg.cn/bmiddle/90f58663ly1fw2r116t82j21kw11d7u4.jpg',
      },
      {
        name: '世界が终わるまでは…',
        artist: 'WANDS',
        url: 'http://m10.music.126.net/20181010183449/349e1ee8381522e711d699ec9afb2293/ymusic/8e6f/5e12/9b3c/d7fc6100607b2c0b16d14338ae95dddc.mp3',
        cover: 'https://wx4.sinaimg.cn/mw600/96a82ad7gy1fw02abwwuoj20k00zkwgs.jpg',
      }
    ]
});
