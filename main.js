// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
// const PLAYER_KEY = 'F8-player';

// const heading = $('header h2');
// const cdThumb = $('.cd-thumb');
// const audio = $('#audio');
// const player = $('.player');
// const btnPlay = $('.btn-toggle-play');
// const cd = $('.cd');
// const progress = $('#progress');
// const btnPrev = $('.btn-prev');
// const btnRepeat = $('.btn-repeat');
// const btnNext = $('.btn-next');
// const btnRandom = $('.btn-random');
// const playlist = $('.playlist');
// const playBtn =$('.btn-toggle-play');
// const nextBtn =$('.btn-next');
// const prevBtn =$('.btn-prev')
// const randomBtn =$('.btn-random')
// const repeatBtn =$('.btn-repeat')
// const PLAYER_STORAGE_KEY = 'F8_PLAYER'

// const app = {
//   currentIndex: 0,
//   isPlaying: false,
//   isRandom: false,
//   isRepeat: false,
//   config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},  // trả về một object
//   songs: [
//     {
//       name: 'Nevada',
//       singer: 'Vicetone',
//       path: 'https://aredir.nixcdn.com/NhacCuaTui924/Nevada-Vicetone-4494556.mp3?st=_IjpS9u0LjapNgzm058wVw&e=1623143773',
//       image: 'https://i.pinimg.com/originals/f8/6f/33/f86f3378e656883b33594f06d78d1634.jpg',
//     },
//     {
//       name: 'Light It Up',
//       singer: 'Robin Hustin x TobiMorrow',
//       path: 'https://aredir.nixcdn.com/NhacCuaTui968/LightItUp-RobinHustinTobimorrowJex-5619031.mp3?st=kzpVQ5kKnf2LlcAqM6lnxg&e=1623143881',
//       image: 'https://avatar-ex-swe.nixcdn.com/song/2019/01/08/1/3/d/a/1546913843457_640.jpg',
//     },
//     {
//       name: 'Yoru ni kakeru',
//       singer: 'YOASOBI',
//       path: 'https://aredir.nixcdn.com/NhacCuaTui992/YoruNiKakeru-YOASOBI-6149490.mp3?st=68hnFhtGF6RukKDcDcW9Mw&e=1623132179',
//       image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/16788ee5-3436-474a-84fd-6616063a1a9a/de2f4eq-bc67fa17-8dae-46a9-b85d-fe8082c34841.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE2Nzg4ZWU1LTM0MzYtNDc0YS04NGZkLTY2MTYwNjNhMWE5YVwvZGUyZjRlcS1iYzY3ZmExNy04ZGFlLTQ2YTktYjg1ZC1mZTgwODJjMzQ4NDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dABuqANeQEs6FBfslZHdG1lW_gDwzf61yqiSABROSx0',
//     },
//     {
//       name: 'Muộn rồi mà sao còn',
//       singer: 'Sơn Tùng M-TP',
//       path: 'https://aredir.nixcdn.com/Believe_Audio19/MuonRoiMaSaoCon-SonTungMTP-7011803.mp3?st=w9AA-eyRI7yD_VYGfvVWeQ&e=1623141624',
//       image: 'https://pbs.twimg.com/media/Ez5jRyVVgAQN6Kh.jpg',
//     },
//     {
//       name: 'See You Again',
//       singer: 'Charlie Puth ft Wiz Khalifa',
//       path: 'https://aredir.nixcdn.com/NhacCuaTui894/SeeYouAgain-KurtSchneiderEppicAlexGoot-3888930.mp3?st=1q73myBS8FKr8Rx0snpMJw&e=1623144094',
//       image: 'https://nghiennhac.com/wp-content/uploads/2020/09/see-you-again-0.jpg',
//     },
   
//     {
//       name: 'Symphony',
//       singer: 'Clean Bandit',
//       path: 'https://aredir.nixcdn.com/Sony_Audio37/Symphony-CleanBanditZaraLarsson-4822950.mp3?st=sPgJSXtRXYpT_rznXyez6g&e=1623144426',
//       image: 'https://i.ytimg.com/vi/PIf9GvWaxQQ/maxresdefault.jpg',
//     },
//     {
//       name: 'Waiting For Love',
//       singer: 'Avicii',
//       path: 'https://aredir.nixcdn.com/Unv_Audio45/WaitingForLove-Avicii-4203283.mp3?st=mXGv6kIqbxg_coAyUqzlnw&e=1623144462',
//       image: 'https://i.ytimg.com/vi/Hmbm3G-Q444/maxresdefault.jpg',
//     },
//     {
//       name: 'Alone',
//       singer: 'Marshmello',
//       path: 'https://aredir.nixcdn.com/NhacCuaTui927/Alone-Marshmello-4456939.mp3?st=RTsMC9tNcKEi8fd0iKtdaA&e=1623144502',
//       image: 'https://i.ytimg.com/vi/UNB8F0ObA4g/maxresdefault.jpg',
//     },
//     {
//       name: 'Something Just Like This',
//       singer: 'The Chainsmokers & Coldplay',
//       path: 'https://aredir.nixcdn.com/Sony_Audio39/SomethingJustLikeThis-TheChainsmokersColdplay-5337136.mp3?st=VQuH6VgNsPlBizbk-c7n3w&e=1623144556',
//       image: 'https://avatar-ex-swe.nixcdn.com/song/2017/11/07/a/1/4/5/1510038809679_640.jpg',
//     },
//     {
//       name: 'Sugar',
//       singer: 'Maroon 5',
//       path: 'https://aredir.nixcdn.com/Unv_Audio73/Sugar-Maroon5-3338455.mp3?st=3FUWEyikJePPeAuREUcw9g&e=1623144644',
//       image: 'https://i.ytimg.com/vi/7vw84EkHOlY/maxresdefault.jpg',
//     },
//   ],
//   setConfig: function(key , value) { // nghĩa là ngay từ ban đầu nó đã gọi sẵn hàm randomBtn và repeatBtn rồi 
//     this.config[key] = value;
//     console.log(this.config)
//     localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config)) //chính cái thằng setItem nó đã lưu giá trị lại kể cả khi có f5 lại thì giá trị đó vẫn đc giữ lên cái thằng getItem nó có thể lấy bất cứ khi nào
//   },
//   render: function() {
//     const htmls = this.songs.map((song,index) => {  //  lấy hàm render trỏ lên hàm song để thực hiện các tác vị trên đây
//                                             //   hàm này với mục đích in ra các bài thông tin các bài hát trong hàm songs
//       return `                             
//         <div data-index = "${index}"  class="song ${index == this.currentIndex? 'active' : ''}">
//           <div class="thumb"
//               style="background-image: url('${song.image}')">
//           </div>

//           <div class="body">
//               <h3 class="title">${song.name}</h3>
//               <p class="author">${song.singer}</p>
//           </div>

//           <div class="option">
//               <i class="fas fa-ellipsis-h"></i>
//           </div>
//         </div>`;
//     })
//     playlist.innerHTML = htmls.join('')
//   },
//   defineproperties: function() {
//     Object.defineProperty(this, 'currentSong', {   // this là cái hàm app
//       get: function() {
//         return this.songs[this.currentIndex]
//       }
//     })
//   },
//   handleEvents: function() {
//     const _this = this;
//     var cdWidth = cd.offsetWidth   //lấy chiều rộng của cái đĩa này do  sd padding-top 100% lên chỉ cần lấy một cạnh của hình là đc

//     //Xử lí CD quay
//     const cdThumbAnimate = cdThumb.animate([
//       {transform: 'rotate(360deg)'}
//     ],{
//       duration: 10000,
//       iterations: Infinity
//     })
//     cdThumbAnimate.pause()

//     //Xử lí phóng to thu nhỏ  CD
//     document.onscroll = function() {
//       const scrollTop = window.scrollY || document.documentElement.scrollTop
//       var newCdWidth = cdWidth - scrollTop
//       cd.style.width = newCdWidth > 0 ? newCdWidth + 'px': 0
//       cd.style.opacity = newCdWidth / cdWidth 

//     },



//     //Xử lí khi click play
//     playBtn.onclick = function() {
//       if(_this.isPlaying) {
//         audio.pause()
//       }else {
//         audio.play()
//       }
//     }
//     //Khi audio đã chạy 
//     audio.onplay = function() {
//       _this.isPlaying = true
//       player.classList.add('playing')
//       cdThumbAnimate.play()
//     }
//      //Khi audio đã dừng
//     audio.onpause = function() {
//       _this.isPlaying = false
//       player.classList.remove('playing')
//       cdThumbAnimate.pause()
//     }

//     //khi tiến độ bài hát thay đổi
//     audio.ontimeupdate = function() {  // lấy cái thời gian hiện tại khi chạy trả về một thời gian nhất định
//       if(audio.duration) {
//         const progressPercent = Math.floor(audio.currentTime / audio.duration *100)
//         progress.value = progressPercent
//       }

//     }
//     progress.oninput = function(e) {  //thực hiện sự thay đổi cái gì đó trên thẻ input
//       var seekTime =  audio.duration/100 * e.target.value  //e.target ở đâu chính là thể input
//       audio.currentTime = seekTime;

//     },
//     nextBtn.onclick = function() {
//       if(_this.isRandom) {
//         _this.playRandomSong();
//       }else {
//         _this.nextSong()
//       }
//       audio.play();
//       _this.scrollToActiveSong();
//     }
//     prevBtn.onclick = function() {
//       if(_this.isRandom) {
//         _this.playRandomSong();
//       }else {
//         _this.prevSong()
//       }
//       audio.play();

//     }

//     //Xử lí bật tắt random
//     randomBtn.onclick =  function() {  // mà sử dụng e.target thì khi bấm vào icon thì sẽ không đc active chỉ có thể bấm xung quanh icon ms đc
//                                         // bởi vì cái e.target nó tính cả những cái nằm trong thẻ randomBtn lên khi bấm vào icon thì nó đã chắn việc bấm vào ranomBtn
//       _this.isRandom = !_this.isRandom;
//       _this.setConfig('isRandom', _this.isRandom);
//       randomBtn.classList.toggle('active',_this.isRandom);
//     }

//     //xử lí lặp lại song
//     repeatBtn.onclick = function() {
//       _this.isRepeat = !_this.isRepeat;
//       _this.setConfig('isRepeat', _this.isRepeat);

//       repeatBtn.classList.toggle('active',_this.isRepeat)
//     }


//     audio.onended = function() {
//       if(_this.isRepeat) {
//         audio.play();
//       }else{
//         nextBtn.click() // thực chất là đi gọi cái hàm nextBtn có thuộc tính onclick
//       }
//     }

//     playlist.onclick =  function(e) {
//       const songNode = e.target.closest('.song:not(.active)') //nghĩa là đi tìm các thuộc tính có thuộc tính song và không có thuộc tính active từ cái element mình bấm vào 
//       if(songNode || e.target.closest('.option')) { //nghĩa là lấy các thể không phải thẻ chứa .song.active  hoặc lấy các thẻ option
//         if(! e.target.closest('.option')) { 
//           _this.currentIndex = songNode.getAttribute('data-index') //  songNode.dataset.index  cái này sẽ trả về một dạng chuỗi số lên sd Number để biến thành số
//           _this.loadCurrentSong()
//           audio.play()
//         }else{
//           alert('bạn có thể chọn các tùy chọn sau')
//         }
//         }

//     }
//   },
//     playRandomSong: function() {
//       let newIndex
//       do{
//         newIndex = Math.floor(Math.random()*this.songs.length)

//       }while(newIndex == this.currentIndex);
//       this.currentIndex = newIndex;
//       this.loadCurrentSong()

    
//     },

//     scrollToActiveSong: function() {
//       setTimeout(() => {
//         if(this.currentIndex<=3) {
//           $('.song.active').scrollIntoView({ //mục đích là để đưa bài hát hiện đang phát nhìn đc trên cửa sổ trình duyệt
//             behavior: 'smooth',
//             block: 'end'  //nghĩa là kéo cả cả màn hình song xuống kịch phía dưới
//           })
//         }else{
//           $('.song.active').scrollIntoView({
//             behavior: 'smooth',
//             block: 'center'   //kéo bài hát đang phát vào giữa màn hình 
  
//           })
//         }
//       },200)
//     },
//   loadCurrentSong :function() {
//     heading.textContent = this.currentSong.name
//     cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
//     audio.src = this.currentSong.path

//     if($('.song.active')) {
//       $('.song.active').classList.remove('active')
//     }
    
//     let list = $$('.song')
//     list.forEach((song) => {  //nên sử dụng arrow function ở đây vì nó không định nghĩa this lên khi sd this nó sẽ lấy cái ngữ cảnh gần nhất
//       if(song.getAttribute('data-index') == this.currentIndex) {
//         song.classList.add('active')
//         console.log(this.currentIndex)
//       }
//     })
//   },
//   loadConfig: function() {
//     this.isRandom = this.config.isRandom
//     this.isRepeat = this.config.isRepeat
//   },
//   nextSong: function() {
//     this.currentIndex++
//     if(this.currentIndex >= this.songs.length) {
//       this.currentIndex = 0
//     }
//     this.loadCurrentSong()
//   },
//   prevSong: function() {
//     this.currentIndex--
//     if(this.currentIndex < 0) {
//       this.currentIndex = this.songs.length -1
//     }
//     this.loadCurrentSong()
//   },
//   start: function() {
//     this.loadConfig() // gán cấu hình từ config vào ứng dụng
//     randomBtn.classList.toggle('active', this.isRandom) //ngay từ ban đầu cái isRandom nó đã có giá trị là false
//     repeatBtn.classList.toggle('active', this.isRepeat)
//     this.defineproperties()// định nghĩa các thuộc tính cho object
//     this.handleEvents() //Láng nghe xư lí các sự kiện DOM
//     this.loadCurrentSong() //Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
//     this.render();  //this ở đây để nói là hàm app đang gọi đến hàm render()

//     // Hiển thị trạng thái ban đầu của button repeat & random
//   }
// }
// app.start();


const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// xử lí việc lấy các thẻ
const playlist = $('.playlist')
const cd = $('.cd')
const heading = $('header h2')
const audio = $('#audio')
const cdThumb = $('.cd-thumb')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const progress = $('.progress')

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
     songs: [
    {
      name: 'Nevada',
      singer: 'Vicetone',
      path: 'https://aredir.nixcdn.com/NhacCuaTui924/Nevada-Vicetone-4494556.mp3?st=_IjpS9u0LjapNgzm058wVw&e=1623143773',
      image: 'https://i.pinimg.com/originals/f8/6f/33/f86f3378e656883b33594f06d78d1634.jpg',
    },
    {
      name: 'Light It Up',
      singer: 'Robin Hustin x TobiMorrow',
      path: 'https://aredir.nixcdn.com/NhacCuaTui968/LightItUp-RobinHustinTobimorrowJex-5619031.mp3?st=kzpVQ5kKnf2LlcAqM6lnxg&e=1623143881',
      image: 'https://avatar-ex-swe.nixcdn.com/song/2019/01/08/1/3/d/a/1546913843457_640.jpg',
    },
    {
      name: 'Yoru ni kakeru',
      singer: 'YOASOBI',
      path: 'https://aredir.nixcdn.com/NhacCuaTui992/YoruNiKakeru-YOASOBI-6149490.mp3?st=68hnFhtGF6RukKDcDcW9Mw&e=1623132179',
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/16788ee5-3436-474a-84fd-6616063a1a9a/de2f4eq-bc67fa17-8dae-46a9-b85d-fe8082c34841.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE2Nzg4ZWU1LTM0MzYtNDc0YS04NGZkLTY2MTYwNjNhMWE5YVwvZGUyZjRlcS1iYzY3ZmExNy04ZGFlLTQ2YTktYjg1ZC1mZTgwODJjMzQ4NDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dABuqANeQEs6FBfslZHdG1lW_gDwzf61yqiSABROSx0',
    },
    {
      name: 'Muộn rồi mà sao còn',
      singer: 'Sơn Tùng M-TP',
      path: 'https://aredir.nixcdn.com/Believe_Audio19/MuonRoiMaSaoCon-SonTungMTP-7011803.mp3?st=w9AA-eyRI7yD_VYGfvVWeQ&e=1623141624',
      image: 'https://pbs.twimg.com/media/Ez5jRyVVgAQN6Kh.jpg',
    },
    {
      name: 'See You Again',
      singer: 'Charlie Puth ft Wiz Khalifa',
      path: 'https://aredir.nixcdn.com/NhacCuaTui894/SeeYouAgain-KurtSchneiderEppicAlexGoot-3888930.mp3?st=1q73myBS8FKr8Rx0snpMJw&e=1623144094',
      image: 'https://nghiennhac.com/wp-content/uploads/2020/09/see-you-again-0.jpg',
    },
   
    {
      name: 'Symphony',
      singer: 'Clean Bandit',
      path: 'https://aredir.nixcdn.com/Sony_Audio37/Symphony-CleanBanditZaraLarsson-4822950.mp3?st=sPgJSXtRXYpT_rznXyez6g&e=1623144426',
      image: 'https://i.ytimg.com/vi/PIf9GvWaxQQ/maxresdefault.jpg',
    },
    {
      name: 'Waiting For Love',
      singer: 'Avicii',
      path: 'https://aredir.nixcdn.com/Unv_Audio45/WaitingForLove-Avicii-4203283.mp3?st=mXGv6kIqbxg_coAyUqzlnw&e=1623144462',
      image: 'https://i.ytimg.com/vi/Hmbm3G-Q444/maxresdefault.jpg',
    },
    {
      name: 'Alone',
      singer: 'Marshmello',
      path: 'https://aredir.nixcdn.com/NhacCuaTui927/Alone-Marshmello-4456939.mp3?st=RTsMC9tNcKEi8fd0iKtdaA&e=1623144502',
      image: 'https://i.ytimg.com/vi/UNB8F0ObA4g/maxresdefault.jpg',
    },
    {
      name: 'Something Just Like This',
      singer: 'The Chainsmokers & Coldplay',
      path: 'https://aredir.nixcdn.com/Sony_Audio39/SomethingJustLikeThis-TheChainsmokersColdplay-5337136.mp3?st=VQuH6VgNsPlBizbk-c7n3w&e=1623144556',
      image: 'https://avatar-ex-swe.nixcdn.com/song/2017/11/07/a/1/4/5/1510038809679_640.jpg',
    },
    {
      name: 'Sugar',
      singer: 'Maroon 5',
      path: 'https://aredir.nixcdn.com/Unv_Audio73/Sugar-Maroon5-3338455.mp3?st=3FUWEyikJePPeAuREUcw9g&e=1623144644',
      image: 'https://i.ytimg.com/vi/7vw84EkHOlY/maxresdefault.jpg',
    },
   ],
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `                             
                <div data-index="${index}" class="song ${this.currentIndex == index ? 'active' : ''}">
                    <div class="thumb"
                        style="background-image: url('${song.image}')">
                    </div>

                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>

                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>`;
        })
        playlist.innerHTML = htmls.join('')
    },

    handleEvents: function() {
        const _this = this;
        const cdWidth = cd.offsetWidth
        document.onscroll = function() {
            var scrollTop = window.scrollY || document.documentElement.scrollTop
            var newCdWidth = cdWidth - scrollTop
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
            cd.style.opacity = newCdWidth / cdWidth
        }

        
        var cdThumbAnimate = cdThumb.animate([
            {transform: 'rotate(360deg'}
        ],{
            duration:10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause()

        playBtn.onclick = function() {
            if(_this.isPlaying) {
                audio.pause()
            }else {
                audio.play()
            }

            audio.onplay = function() {
                _this.isPlaying = true
                player.classList.add('playing')
                cdThumbAnimate.play()
            }
            audio.onpause = function() {
                _this.isPlaying = false
                player.classList.remove('playing')
               cdThumbAnimate.pause()
            }
        }

        nextBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            }else {
                _this.nextSong()
            }
            audio.play()
            _this.scrollToActiveSong()

        }
        prevBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            }else {
                _this.prevSong()
            }
            audio.play()
            _this.scrollToActiveSong()
        }

        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play()
            }else {
                nextBtn.click()
                audio.play()
            }
        }

        audio.ontimeupdate = function() {
            if(audio.duration){
                var progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }

        progress.oninput = function(e) {
            var seekTime = e.target.value * audio.duration / 100
            audio.currentTime = seekTime
        }

        randomBtn.onclick= function() {
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle('active', _this.isRandom)
        }
        repeatBtn.onclick= function() {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }

        playlist.onclick = function(e) {
            var songNode = e.target.closest('.song:not(.active)')
            if(songNode || e.target.closest('.option')) {
                if(!e.target.closest('option')) {
                    _this.currentIndex = songNode.getAttribute('data-index')
                    _this.loadCurrentSong()
                    audio.play()
                }else {
                    alert("tuy chon")
                }
            }
        }
    },

    playRandomSong: function() {
        this.currentIndex = Math.floor(Math.random() * this.songs.length)
        this.loadCurrentSong()
    },


    scrollToActiveSong: function() {
        if(this.currentIndex <=3 ) {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'end'
            })
        }else {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }
    },

    defineproperties: function() {
        Object.defineProperty(this, "currentSong", {
             get: function(){
                return this.songs[this.currentIndex]
            }
        })
    },

    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path

        if($('.song.active')) {
            $('.song.active').classList.remove('active')
        }

        var list = $$('.song')
        list.forEach((song) => {
            if(this.currentIndex == song.getAttribute('data-index')) {
                song.classList.add('active')
            }
        })
        
    },
    
    nextSong: function() {
        this.currentIndex++;
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        playBtn.click()
        this.loadCurrentSong()
    },
    prevSong: function() {
        this.currentIndex--;
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        playBtn.click()
        this.loadCurrentSong()
    },

    start: function() {
        this.defineproperties()
        this.loadCurrentSong()
        this.render()
        this.handleEvents()
    }
}

app.start();


