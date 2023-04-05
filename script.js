const iFrame = document.querySelector("iframe")

 const changeSrc = (src)=>{
 iFrame.innerHTML = ``
iFrame.src = `${src}.html`
 }