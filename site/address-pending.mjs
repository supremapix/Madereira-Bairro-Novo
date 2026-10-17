// Temporary editorial safeguard while the business resolves conflicting public addresses.
export function pendingAddress(html){return html
 .replaceAll('Rua Coronel Joaquim Antônio de Azevedo, 1459<br>Sítio Cercado · Curitiba / PR<br>CEP 81920-010','Sítio Cercado · Curitiba / PR<br>Confirme o endereço de retirada com a loja.')
 .replaceAll('Rua Coronel Joaquim Antônio de Azevedo, 1459, Curitiba.','Atendimento no Sítio Cercado, Curitiba.')
 .replaceAll('Endereço: Rua Coronel Joaquim Antônio de Azevedo, 1459, Sítio Cercado, Curitiba.','Peça à equipe o endereço de retirada atualizado.')
 .replaceAll('Rua Coronel Joaquim Antônio de Azevedo, 1459<br>Sítio Cercado, Curitiba / PR · CEP 81920-010','Sítio Cercado, Curitiba / PR. Confirme o endereço de retirada com a equipe.')
 .replaceAll('Rua Coronel Joaquim Antônio de Azevedo, 1459<br>Sítio Cercado, Curitiba / PR<br>CEP 81920-010','Sítio Cercado, Curitiba / PR<br>Peça o endereço de retirada à equipe.')
 .replaceAll('O endereço divulgado é Rua Coronel Joaquim Antônio de Azevedo, 1459, no Sítio Cercado.','O atendimento divulgado é no Sítio Cercado; confirme o endereço de retirada com a equipe.')
 .replaceAll('https://maps.app.goo.gl/cCwvjeDfxpL8RkZMA','https://wa.me/5541991217114?text=Ol%C3%A1!%20Qual%20o%20endere%C3%A7o%20atual%20para%20retirada%3F')
 .replaceAll('Abrir localização no Google Maps ↗','Confirmar endereço pelo WhatsApp ↗');}
