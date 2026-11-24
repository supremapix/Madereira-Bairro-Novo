const volume=document.querySelector('#volume');
if(volume){
  const result=volume.querySelector('#result');
  const quote=volume.querySelector('#volume-quote');
  const quoteLink=volume.querySelector('#volume-quote-link');
  const clearQuote=()=>{
    quote.hidden=true;
    quoteLink.removeAttribute('href');
  };
  const format=n=>n.toLocaleString('pt-BR',{maximumSignificantDigits:10});
  volume.addEventListener('input',()=>{
    clearQuote();
    result.textContent='Medidas alteradas. Calcule novamente para atualizar o volume.';
  });
  volume.addEventListener('submit',event=>{
    event.preventDefault();
    clearQuote();
    if(!volume.checkValidity())return;
    const data=new FormData(volume);
    const [thickness,width,length,quantity]=['thickness','width','length','quantity'].map(k=>Number(data.get(k)));
    if([thickness,width,length,quantity].some(n=>!Number.isFinite(n)||n<=0)||!Number.isInteger(quantity)){
      result.textContent='Informe medidas positivas e uma quantidade inteira de peças.';
      return;
    }
    const total=thickness/100*width/100*length*quantity;
    if(!Number.isFinite(total)||total<=0){
      result.textContent='Confira os valores informados.';
      return;
    }
    result.textContent=`Volume geométrico: ${format(total)} m³. Confira as medidas efetivas na cotação.`;
    const message=`Olá! Gostaria de cotar madeira.\nProduto: ___\nEspessura × largura × comprimento: ${format(thickness)} cm × ${format(width)} cm × ${format(length)} m\nQuantidade: ${format(quantity)} ${quantity===1?'peça':'peças'}\nVolume geométrico estimado: ${format(total)} m³\nCEP: ___`;
    quoteLink.href='https://wa.me/5541991217114?text='+encodeURIComponent(message);
    quote.hidden=false;
  });
}
if('serviceWorker' in navigator)navigator.serviceWorker.getRegistration().then(reg=>{if(reg?.active?.scriptURL===location.origin+'/sw.js')reg.update();}).catch(()=>{});
