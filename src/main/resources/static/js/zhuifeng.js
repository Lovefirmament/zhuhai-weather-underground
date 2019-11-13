var dateForecast=moment().subtract(14,'hour').format();// 结果：moment("2019-06-24T13:19:48+08:00")
var yearForecast=dateForecast.substring(0,4);
var monthForecast=dateForecast.substring(5,7);
var dayForecast=dateForecast.substring(8,10);
var hourForecast=dateForecast.substring(11,13);
hourForecast=checkHour(hourForecast);
var url1='http://www.typhoon2000.ph/multi/models/'+yearForecast+monthForecast+dayForecast+hourForecast+'00_ALL.PNG';
var url2='http://www.typhoon2000.ph/multi/models/'+yearForecast+monthForecast+dayForecast+hourForecast+'00_NCEP-GFS.PNG';
var htmlForecast='<div><img src="'+url1+'" height="480" width="570"></div>';
var htmlForecast1='<div><img src="'+url2+'" height="480" width="570"></div>';
$('#modelForecast').html(htmlForecast);
$('#modelForecast1').html(htmlForecast1);

function checkHour(hourForecast)
{
  if(hourForecast=='00'||hourForecast=='01'||hourForecast=='02'||hourForecast=='03'||hourForecast=='04'||hourForecast=='05'||hourForecast=='06'||hourForecast=='07'||hourForecast=='08'||hourForecast=='09'||hourForecast=='10'||hourForecast=='11')
  hourForecast='00';
  if(hourForecast=='12'||hourForecast=='13'||hourForecast=='14'||hourForecast=='15'||hourForecast=='16'||hourForecast=='17'||hourForecast=='18'||hourForecast=='19'||hourForecast=='20'||hourForecast=='21'||hourForecast=='22'||hourForecast=='23')
  hourForecast='12';
  return hourForecast;
}
var dateHimawari=moment().subtract(40,'minute').format();// 结果：moment("2019-06-24T13:19:48+08:00")
var yearHimawari=dateHimawari.substring(0,4);
var monthHimawari=dateHimawari.substring(5,7);
var dayHimawari=dateHimawari.substring(8,10);
var hourHimawari=dateHimawari.substring(11,13);
var minuteHimawari=dateHimawari.substring(14,16);
minuteHimawari=checkMinute(minuteHimawari);
var url3='https://www.cwb.gov.tw/Data/satellite/LCC_VIS_TRGB_2750/LCC_VIS_TRGB_2750-'+yearHimawari+'-'+monthHimawari+'-'+dayHimawari+'-'+hourHimawari+'-'+minuteHimawari+'.jpg';
var Himawari8='<div><img src="'+url3+'" height="480" width="560"></div>';
$('#Himawari8').html(Himawari8);
function checkMinute(minuteHimawari)
{
  if(minuteHimawari=='00'||minuteHimawari=='01'||minuteHimawari=='02'||minuteHimawari=='03'||minuteHimawari=='04'||minuteHimawari=='05'||minuteHimawari=='06'||minuteHimawari=='07'||minuteHimawari=='08'||minuteHimawari=='09')
  minuteHimawari='00';
  if(minuteHimawari=='10'||minuteHimawari=='11'||minuteHimawari=='12'||minuteHimawari=='13'||minuteHimawari=='14'||minuteHimawari=='15'||minuteHimawari=='16'||minuteHimawari=='17'||minuteHimawari=='18'||minuteHimawari=='19')
  minuteHimawari='10';
  if(minuteHimawari=='20'||minuteHimawari=='21'||minuteHimawari=='22'||minuteHimawari=='23'||minuteHimawari=='24'||minuteHimawari=='25'||minuteHimawari=='26'||minuteHimawari=='27'||minuteHimawari=='28'||minuteHimawari=='29')
  minuteHimawari='20';
  if(minuteHimawari=='30'||minuteHimawari=='31'||minuteHimawari=='32'||minuteHimawari=='33'||minuteHimawari=='34'||minuteHimawari=='35'||minuteHimawari=='36'||minuteHimawari=='37'||minuteHimawari=='38'||minuteHimawari=='39')
  minuteHimawari='30';
  if(minuteHimawari=='40'||minuteHimawari=='41'||minuteHimawari=='42'||minuteHimawari=='43'||minuteHimawari=='44'||minuteHimawari=='45'||minuteHimawari=='46'||minuteHimawari=='47'||minuteHimawari=='48'||minuteHimawari=='49')
  minuteHimawari='40';
  if(minuteHimawari=='50'||minuteHimawari=='51'||minuteHimawari=='52'||minuteHimawari=='53'||minuteHimawari=='54'||minuteHimawari=='55'||minuteHimawari=='56'||minuteHimawari=='57'||minuteHimawari=='58'||minuteHimawari=='59')
  minuteHimawari='50';
  return minuteHimawari;
}
