//!import(diğer js dosyasında başka bir js veri aktarımı)
import { mailData } from "./constants.js"
import { renderMails, showModal } from "./ui.js";
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
    date:"may 19",
  }

}



