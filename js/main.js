// $(function () {
//   // $(".contact-me .bg").mouseenter(function () {
//   //   $(".card").show();
//   //   applyTypingEffect();
//   // });
//   // $(".contact-me .bg").mouseleave(function () {
//   //   $(".card").hide();
//   // });
// });
document.querySelector('.tt').addEventListener('click', function () {
    this.classList.toggle('clicked');
});

$(function(){
  $('.tabmenu > ul > li').mouseenter(function(){
      $('.tab-content').hide()
      $(this).find('.tab-content').show()
  })
  $('.tab-content').mouseleave(function(){
      $(this).hide()
  })

  $('.tt h1').click(function(){
      $('.tt img').addClass('active').toggle()
  })

})


const pEl = document.querySelector('.contact-me .phone p')
const spanEl = document.querySelector('.contact-me .phone span')
const tpEl = document.querySelector('.contact-me .email p')
const spantEl = document.querySelector('.contact-me .email span')
const ttpEl = document.querySelector('.contact-me .adress p')
const spanttEl = document.querySelector('.contact-me .adress span')
const pwEl = document.querySelector('.contact-me .adress .pp')


const txtArr = ['phone']
let index = 0;
let currentTxt = txtArr[index].split("")

const txxtArr = ['010-7594-0137']
let currentTxxt = txxtArr[index].split("")


const txetAr = ['E-mail']
let mail = 0;
let currentTwxt = txetAr[mail].split("")

const txxetaArr = ['qrte@naver.com']
let currentTxxwt = txxetaArr[mail].split("")



const txewtAr = ['adress']
let adress = 0;
let currentTwwxt = txewtAr[adress].split("")

const txxewtaArr = ['Daegu.Dongu']
let currentTxxwwt = txxewtaArr[adress].split("")

const tAr = ['Dongbu-ro ,185-4']
let currentTxxwwqt = tAr[adress].split("")




// writeTxt
// writeTxt()

function writeTxt() {
    pEl.textContent += currentTxt.shift()
    if (currentTxt.length !== 0) {
        setTimeout(writeTxt, 200)
        // setTimeout(writeTxt, Math.floor(Math.random()* 100))
    }
}



// writeTxxt()

function writeTxxt() {
    spanEl.textContent += currentTxxt.shift()
    if (currentTxxt.length !== 0) {
        setTimeout(writeTxxt, 200)
        // setTimeout(writeTxt, Math.floor(Math.random()* 100))
    }
}


// writeTwxt()

function writeTwxt() {
    tpEl.textContent += currentTwxt.shift()
    if (currentTwxt.length !== 0) {
        setTimeout(writeTwxt, 200)
        // setTimeout(writeTxt, Math.floor(Math.random()* 100))
    }
}

// writeTxxwt()

function writeTxxwt() {
    spantEl.textContent += currentTxxwt.shift()
    if (currentTxxwt.length !== 0) {
        setTimeout(writeTxxwt, 200)
        //    setTimeout(writeTxt, Math.floor(Math.random()* 100))
    }
}

// writetxewt()

function writetxewt() {
    ttpEl.textContent += currentTwwxt.shift()
    if (currentTwwxt.length !== 0) {
        setTimeout(writetxewt, 200)
        // setTimeout(writeTxt, Math.floor(Math.random()* 100))
    }
}

// writetxxewt()

function writetxxewt() {
    spanttEl.textContent += currentTxxwwt.shift()
    if (currentTxxwwt.length !== 0) {
        setTimeout(writetxxewt, 200)
        // setTimeout(writeTxt, Math.floor(Math.random()* 100))
    }
}

// writetxxewqt()

function writetxxewqt() {
    pwEl.textContent += currentTxxwwqt.shift()
    if (currentTxxwwqt.length !== 0) {
        setTimeout(writetxxewqt, 200)
        // setTimeout(writeTxt, Math.floor(Math.random()* 100))
    }
}

// $(function(){
//     $('.contact-me .bg').mouseenter(function(){
//         // wirte 함수 실행
//         writeTxt()
//         writeTxxt()
//         writeTwxt()
//         writeTxxwt()
//         writetxewt()
//         writetxxewt()
//         writetxxewqt()
//         $('.card').show()
//     })

// })