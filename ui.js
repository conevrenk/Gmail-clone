// yazıları kesmek için kullandıgımız fonk

function trimString(str, max) {
    // metin 50 karakterden kısaysa oldugu gibi döndür
    if (str.length < 40) return str;

    // metnin harf uzunluğu 50 karakterden uzunsa
    // 50 ye kadar olan kısmı kes sonrasında  ...koy
     return str.slice(0,50) +"..."
    
}

// ekrana mailleri listeyecek fonksiyon
// outlet :ekrana hangi kısmına mudahele edilecek
// data :hangi verileri ekrana basıcaz
export function renderMails(outlet, data) {
  if (!data) return;
    console.log(outlet, data);
    // herbir mail objesi için bir maili temsil eden html oluştur
    outlet.innerHTML = data.map((mail) => `
     
          <div class="mail">
            <div class="left">
              <input type="checkbox" />
              <i class="bi bi-star"></i>
              <span>${mail.sender} </span>
            </div>
            <div class="right">
              <p class="message-title">${trimString (mail.title ,30)} </p>
              <p class="message-desc">${trimString (mail.message ,40)} </p>
              <p class="message-date">${mail.date} </p>
              <div>
                <button id="delete">Sil</button>
              </div>
            </div>
          </div>
     `
    ).join(" ")
  
}
// ekrana mail oluşturma penceresi açıcak fonk.

export function showModal(modal, willOpen) {
  modal.style.display = willOpen ? "grid" : 'none';
  
}