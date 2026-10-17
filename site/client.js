const volume=document.querySelector('#volume');
volume?.addEventListener('submit',event=>{
  event.preventDefault();
  const data=new FormData(volume);
  const values=['thickness','width','length','quantity'].map(k=>Number(data.get(k)));
  const result=document.querySelector('#result');
  if(values.some(n=>!Number.isFinite(n)||n<=0)||!Number.isInteger(values[3])){result.textContent='Informe medidas positivas e uma quantidade inteira de peças.';return;}
  const total=values[0]/100*values[1]/100*values[2]*values[3];
  result.textContent=Number.isFinite(total)?`Volume geométrico: ${total.toLocaleString('pt-BR',{maximumSignificantDigits:10})} m³. Confira as medidas efetivas na cotação.`:'Confira os valores informados.';
});
if('serviceWorker' in navigator)navigator.serviceWorker.getRegistration().then(reg=>{if(reg?.active?.scriptURL===location.origin+'/sw.js')reg.update();}).catch(()=>{});
