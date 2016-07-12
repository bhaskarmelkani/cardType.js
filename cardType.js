function getCardType(n){
  switch(true){
    case /^(62|88)/.test(n):
      return 'China Union Pay';
    case /^((30[0-59])|(3[689]))/.test(n):
      return 'Diners Club International';
    case /^(6(5|011|4[4-9]|22(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9([01][0-9]|2[0-5]))))/.test(n):
      return 'Discover Card';
    case /^35(2[89]|[3-8][0-9])/.test(n):
      return 'JCB';
    case /^6(304|7(0[69]|71))/.test(n):
      return 'Laser';
    case /^(5(89[34]|612|0(18|81|20|[34]8))|6(220|3(90|04)|7(59|6[1-3]))|0604)/.test(n):
      return 'Maestro';
    case /^5019/.test(n):
      return 'Dankort';
    case /^508[5-9][0-9]{2}|6(0((69(8[5-9]|9[0-9])|7([0-8][0-9]{2}|9[0-7][0-9]|98[0-4]))|8(00[1-9]|0[0-9]{2}|[1-4][0-9]{2}|500))|5(21[5-9]|2[2-9][0-9]{2}|30[0-9]{2}|31[0-4][0-9]))/.test(n):
      return 'RuPay';
    case /^3(4|7)/.test(n):
      return 'American Express';
    case /^5[1-5]/.test(n):
      return 'Master Card';
    case /^4/.test(n):
      return 'Visa';
    default:
      return 'Other'; 
  }
}
