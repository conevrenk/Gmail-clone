//!import(diğer js dosyasında başka bir js veri aktarımı)
import { months } from "./constants.js"
import { renderMails, showModal } from "./ui.js";
// localstorage dan veri alma
const strMailData = localStorage.getItem("data");
const mailData = JSON.parse(strMailData);
// gelen string veriyi obje ve dizileri çevirme
console.log(mailData)

//! html den gelenler
const hamburgerMenu = document.querySelector(".menu");
const navigation = document.querySelector("nav")
const mailsArea = document.querySelector(".mails-area");
const createMailBtn = document.querySelector('.create-mail');
const closeMailBtn =document.querySelector("#close-btn")
const modal = document.querySelector(".modal-wrapper");
const form=document.querySelector("#create-mail-form")


//! olay izleyicileri
// ekrana yüklenme anında çalışır
document.addEventListener("DOMContentLoaded",()=>renderMails(mailsArea,mailData))
hamburgerMenu.addEventListener("click", handleMenu);
// modal işlemleri
createMailBtn.addEventListener('click', () => showModal(modal, true));
closeMailBtn.addEventListener("click", () => showModal(modal, false));
form.addEventListener("submit",sendMail)


// !fonksiyonlar
// navigasyonu açıp kapamaya yarayan fonsiyon
// hamburger menuyu açıp kapatmaya yarayan fonksiyon
function handleMenu() {
    /**
     * classList.toggle():
     * ona parametre olarak verdiğimiz class
     * yoksa ekler varsa çıkarır
     */
   navigation.classList.toggle("hide")
}

function getDate() {
  // bügünün tarihini alma
  const dateArr = new Date().toLocaleDateString().split('/');
  // tarih dizisinden günü alma
  const day = dateArr[0];
  // tarih dizisinde kaçıncı ayda oldugumuz bilgisini alma
  const monthNumber = dateArr[1];
  // ayın sırasına karşılık gelen ismi tanımla
  const month = months[monthNumber - 1];
  // fonk çağırıldıgı yere gönderilecek cevap
  return day + ' ' + month;
}
function sendMail(e) {
  // sayfanın yenilenmesini engelleme
  e.preventDefault();
  // formun içerisindeki yer alan inputların değerlerine erişme
  const receiver = e.target[0].value;
  const title = e.target[1].value;
  const message = e.target[2].value;
  // yeni mail objesi oluşturma
  const newMail = {
    id: new Date().getTime(),
    sender: "bedirhan",
    receiver,
    title,
    message,
    date: getDate(),
  };
  // oluşturdugumuz objeyi dizinin başına ekleme
  mailData.unshift(newMail);
  
  // veritabanını (localstorage) güncelle
  // veriyi storage göndermek için stringe ceviriyoruz
  const strData = JSON.stringify(mailData);
// storage gönderme işlemi.
  localStorage.setItem("data", strData);
  console.log(JSON.stringify(mailData));
  // ekranı güncelle
  renderMails(mailsArea, mailData);

  // modalı kapatma
  showModal(modal, false);
  // modalı temizle
  e.target[0].value = " ";
  e.target[1].value = " ";
  e.target[2].value = " ";
}






