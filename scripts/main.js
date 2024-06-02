let imgBox = document.getElementById('imgBox')
let qrImage = document.getElementById('qrImage')
let qrText =document.getElementById('qrText')


function generateQR(){
  if(qrText.value.length > 0){
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=` + qrText.value;
    qrImage.src = url
    imgBox.classList.add('show-img')
    downloadImage(url);
  }else{
    qrText.classList.add('error');
    setTimeout(() => {
      qrText.classList.remove('error')
    },500)
  }
  
}

document.querySelector('.buttonBox').addEventListener('click', () =>{
  generateQR();
})

async function downloadImage(imageSrc) {
  const image = await fetch(imageSrc)
  const imageBlog = await image.blob()
  const imageURL = URL.createObjectURL(imageBlog)
  document.querySelector('.download-container').innerHTML = `
  <a href="${imageURL}" download><button class="js-download">Download</button></a>`
}

