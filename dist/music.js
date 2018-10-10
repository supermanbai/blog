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
        name: '9420',
        artist: '麦小兜',
        url: 'http://up.mcyt.net/?down/45967.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
      },
      {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});
