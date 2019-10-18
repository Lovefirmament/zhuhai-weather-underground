
  /*$.ajax({
                type: 'GET',
                dataType:'json',
                url: 'https://api.weather.com/v2/pws/observations/current?stationId=IZHUHA1&format=json&units=m&apiKey=7f429a86cbc74347829a86cbc7a3472d',
                success: function(data){
                var resultData=data;
                console.log(resultData);
                $('#发布时间').text("更新时间："+resultData.observations[0].obsTimeLocal);
                $('#气温').text("气温："+resultData.observations[0].metric.temp+"℃");
                $('#湿度').text("湿度："+resultData.observations[0].humidity+"%");
                $('#日雨量').text("日雨量："+resultData.observations[0].metric.precipTotal+"mm");
                $('#雨强').text("雨强："+resultData.observations[0].metric.precipRate+"mm/h");
                $('#气压').text("气压："+resultData.observations[0].metric.pressure+"hpa");
                $('#风速').text("风速："+resultData.observations[0].metric.windGust+"km/h");
              },
              error:function(){
                console.log("失败")
                $('#error').text("网络出故障了，加载失败")
              }
            })
*/

$('#login').on('click',function()
{
  $.ajax({
                type: 'GET',
                dataType:'json',
                url: 'https://api.weather.com/v2/pws/observations/current?stationId=IZHUHA1&format=json&units=m&apiKey=7f429a86cbc74347829a86cbc7a3472d',
                success: function(data){
                var resultData=data;
                console.log(resultData);
                var localtime=resultData.observations[0].obsTimeLocal;
                var temp=resultData.observations[0].metric.temp;
                var dewpt=resultData.observations[0].metric.dewpt;
                var humidity=resultData.observations[0].humidity;
                var precipTotal=resultData.observations[0].metric.precipTotal;
                precipTotal=precipTotal.toFixed(1);
                var precipRate=resultData.observations[0].metric.precipRate;
                precipRate=precipRate.toFixed(1);
                var pressure=resultData.observations[0].metric.pressure;
                pressure=pressure.toFixed(1);
                var windSpeed=resultData.observations[0].metric.windSpeed/3.6;
                windSpeed=windSpeed.toFixed(1);
                var windGust=resultData.observations[0].metric.windGust/3.6;
                windGust=windGust.toFixed(1);
                var solarRadiation=resultData.observations[0].solarRadiation;
                solarRadiation=solarRadiation.toFixed(1);
                var uv=resultData.observations[0].uv;
              $('#updateTime').text("更新时间："+localtime);

              var html='<div>气温：'+temp+'℃&nbsp&nbsp&nbsp&nbsp&nbsp露点:'+dewpt+'℃</div>'+
                  '<div>湿度：'+humidity+'%&nbsp&nbsp&nbsp&nbsp&nbsp气压:'+pressure+'hpa</div>'+
                  '<div>日雨量：'+precipTotal+'mm&nbsp&nbsp&nbsp雨强:'+precipRate+'mm/h</div>'+
                  '<div>平均风：'+windSpeed+'m/s&nbsp&nbsp&nbsp阵风:'+windGust+'m/s</div>'+
                  '<div>日照：'+solarRadiation+'w/㎡&nbsp&nbsp&nbsp&nbsp紫外线:'+uv+'</div>';
              $('#btmb').html(html);
              },
              error:function(){
                console.log("失败")
                $('#error').text("网络出故障了，加载失败")
              }
            })
  })
  $('#login').on('click',function()
  {
    $.ajax({
                  type: 'GET',
                  dataType:'json',
                  url: 'https://api.weather.com/v2/pws/dailysummary/7day?stationId=IZHUHA1&format=json&units=m&apiKey=bee6252f37b142fba6252f37b1d2fbe0',
                  success: function(data){
                  var resultData=data;
                  console.log(resultData);
               var tempHigh=resultData.summaries[6].metric.tempHigh;
               var tempLow=resultData.summaries[6].metric.tempLow;
               var windSpeed=resultData.summaries[6].metric.windspeedHigh/3.6;
               windSpeed=windSpeed.toFixed(1);
               var windGust=resultData.summaries[6].metric.windgustHigh/3.6;
               windGust=windGust.toFixed(1);
               var pressureMax=resultData.summaries[6].metric.pressureMax;
               pressureMax=pressureMax.toFixed(1);
               var pressureMin=resultData.summaries[6].metric.pressureMin;
               pressureMin=pressureMin.toFixed(1);
             var html='<div>最高气温：'+tempHigh+'℃&nbsp&nbsp&nbsp最低气温：'+tempLow+'℃</div>'+
                 '<div>最大风速：'+windSpeed+'m/s&nbsp&nbsp&nbsp极大风速:'+windGust+'m/s</div>'
                 +'<div>最高气压：'+pressureMax+'hpa&nbsp&nbsp&nbsp最低气压:'+pressureMin+'hpa</div>';
              $('#btmb1').html(html);
                },
                error:function(){
                  console.log("失败")
                  $('#error').text("网络出故障了，加载失败")
                }
              })
    })
  $('#login1').on('click',function()
  {
    $.ajax({
                  type: 'GET',
                  dataType:'json',
                  url:'https://api.weather.com/v2/pws/observations/current?stationId=IZHUHA6&format=json&units=m&apiKey=bee6252f37b142fba6252f37b1d2fbe0',
                  success: function(data){
                  var resultData=data;
                  console.log(resultData);
                  var localtime=resultData.observations[0].obsTimeLocal;
                  var temp=resultData.observations[0].metric.temp;
                  var dewpt=resultData.observations[0].metric.dewpt;
                  var humidity=resultData.observations[0].humidity;
                  var precipTotal=resultData.observations[0].metric.precipTotal;
                  precipTotal=precipTotal.toFixed(1);
                  var precipRate=resultData.observations[0].metric.precipRate;
                  precipRate=precipRate.toFixed(1);
                  var pressure=resultData.observations[0].metric.pressure;
                  pressure=pressure.toFixed(1);
                  var windSpeed=resultData.observations[0].metric.windSpeed/3.6;
                  windSpeed=windSpeed.toFixed(1);
                  var windGust=resultData.observations[0].metric.windGust/3.6;
                  windGust=windGust.toFixed(1);
                  var solarRadiation=resultData.observations[0].solarRadiation;
                  solarRadiation=solarRadiation.toFixed(1);
                  var uv=resultData.observations[0].uv;
                  $('#updateTime1').text("更新时间："+localtime);
                  var html='<div>气温：'+temp+'℃&nbsp&nbsp&nbsp&nbsp&nbsp露点:'+dewpt+'℃</div>'+
                      '<div>湿度：'+humidity+'%&nbsp&nbsp&nbsp&nbsp&nbsp气压:'+pressure+'hpa</div>'+
                      '<div>日雨量：'+precipTotal+'mm&nbsp&nbsp&nbsp雨强:'+precipRate+'mm/h</div>'+
                      '<div>平均风：'+windSpeed+'m/s&nbsp&nbsp&nbsp阵风:'+windGust+'m/s</div>'+
                      '<div>日照：'+solarRadiation+'w/㎡&nbsp&nbsp&nbsp&nbsp紫外线:'+uv+'</div>';
                  $('#xzmb').html(html);
                },
                error:function(){
                  console.log("失败")
                  $('#error').text("网络出故障了，加载失败")
                }
              })
    })
    $('#login1').on('click',function()
    {
      $.ajax({
                    type: 'GET',
                    dataType:'json',
                    url: 'https://api.weather.com/v2/pws/dailysummary/7day?stationId=IZHUHA6&format=json&units=m&apiKey=bee6252f37b142fba6252f37b1d2fbe0',
                    success: function(data){
                    var resultData=data;
                    console.log(resultData);
                 var tempHigh=resultData.summaries[6].metric.tempHigh;
                 var tempLow=resultData.summaries[6].metric.tempLow;
                 var windSpeed=resultData.summaries[6].metric.windspeedHigh/3.6;
                 windSpeed=windSpeed.toFixed(1);
                 var windGust=resultData.summaries[6].metric.windgustHigh/3.6;
                 windGust=windGust.toFixed(1);
                 var pressureMax=resultData.summaries[6].metric.pressureMax;
                 pressureMax=pressureMax.toFixed(1);
                 var pressureMin=resultData.summaries[6].metric.pressureMin;
                 pressureMin=pressureMin.toFixed(1);
               var html='<div>最高气温：'+tempHigh+'℃&nbsp&nbsp&nbsp最低气温：'+tempLow+'℃</div>'+
                   '<div>最大风速：'+windSpeed+'m/s&nbsp&nbsp&nbsp极大风速:'+windGust+'m/s</div>'
                   +'<div>最高气压：'+pressureMax+'hpa&nbsp&nbsp&nbsp最低气压:'+pressureMin+'hpa</div>';
                $('#xzmb1').html(html);
                  },
                  error:function(){
                    console.log("失败")
                    $('#error').text("网络出故障了，加载失败")
                  }
                })
      })
    $('#login2').on('click',function()
    {
      $.ajax({
                    type: 'GET',
                    dataType:'json',
                    url:'https://api.weather.com/v2/pws/observations/current?stationId=IZHUHA5&format=json&units=m&apiKey=50f3cccd1d094c9cb3cccd1d09dc9ccc',
                    success: function(data){
                    var resultData=data;
                    console.log(resultData);
                    var localtime=resultData.observations[0].obsTimeLocal;
                    var temp=resultData.observations[0].metric.temp;
                    var dewpt=resultData.observations[0].metric.dewpt;
                    var humidity=resultData.observations[0].humidity;
                    var precipTotal=resultData.observations[0].metric.precipTotal;
                    precipTotal=precipTotal.toFixed(1);
                    var precipRate=resultData.observations[0].metric.precipRate;
                    precipRate=precipRate.toFixed(1);
                    var pressure=resultData.observations[0].metric.pressure;
                    pressure=pressure.toFixed(1);
                    var windSpeed=resultData.observations[0].metric.windSpeed/3.6;
                    windSpeed=windSpeed.toFixed(1);
                    var windGust=resultData.observations[0].metric.windGust/3.6;
                    windGust=windGust.toFixed(1);
                    var solarRadiation=resultData.observations[0].solarRadiation;
                    solarRadiation=solarRadiation.toFixed(1);
                    var uv=resultData.observations[0].uv;
                   $('#updateTime2').text("更新时间："+localtime);
                   var html='<div>气温：'+temp+'℃&nbsp&nbsp&nbsp&nbsp&nbsp露点:'+dewpt+'℃</div>'+
                       '<div>湿度：'+humidity+'%&nbsp&nbsp&nbsp&nbsp&nbsp气压:'+pressure+'hpa</div>'+
                       '<div>日雨量：'+precipTotal+'mm&nbsp&nbsp&nbsp雨强:'+precipRate+'mm/h</div>'+
                       '<div>平均风：'+windSpeed+'m/s&nbsp&nbsp&nbsp阵风:'+windGust+'m/s</div>'+
                       '<div>日照：'+solarRadiation+'w/㎡&nbsp&nbsp&nbsp&nbsp紫外线:'+uv+'</div>';
                   $('#bzmb').html(html);
                  },
                  error:function(){
                    console.log("失败")
                    $('#error').text("网络出故障了，加载失败")
                  }
                })
      })
      $('#login2').on('click',function()
      {
        $.ajax({
                      type: 'GET',
                      dataType:'json',
                      url: 'https://api.weather.com/v2/pws/dailysummary/7day?stationId=IZHUHA5&format=json&units=m&apiKey=50f3cccd1d094c9cb3cccd1d09dc9ccc',
                      success: function(data){
                      var resultData=data;
                      console.log(resultData);
                      var tempHigh=resultData.summaries[6].metric.tempHigh;
                      var tempLow=resultData.summaries[6].metric.tempLow;
                   var windSpeed=resultData.summaries[6].metric.windspeedHigh/3.6;
                   windSpeed=windSpeed.toFixed(1);
                   var windGust=resultData.summaries[6].metric.windgustHigh/3.6;
                   windGust=windGust.toFixed(1);
                   var pressureMax=resultData.summaries[6].metric.pressureMax;
                   pressureMax=pressureMax.toFixed(1);
                   var pressureMin=resultData.summaries[6].metric.pressureMin;
                   pressureMin=pressureMin.toFixed(1);
                 var html=
                     '<div>最高气温：'+tempHigh+'℃&nbsp&nbsp&nbsp最低气温：'+tempLow+'℃</div>'+
                     '<div>最大风速：'+windSpeed+'m/s&nbsp&nbsp&nbsp极大风速:'+windGust+'m/s</div>'
                     +'<div>最高气压：'+pressureMax+'hpa&nbsp&nbsp&nbsp最低气压:'+pressureMin+'hpa</div>';
                  $('#bzmb1').html(html);
                    },
                    error:function(){
                      console.log("失败")
                      $('#error').text("网络出故障了，加载失败")
                    }
                  })
        })
var card=$('#card')
var card1=$('#card1')
card.on('click',function()
{
    if(card1.is(':visible')){
      card1.hide()
    }
    else{
    card1.show();
  }
})
var card2=$('#card2')
var card3=$('#card3')
card2.on('click',function()
{
    if(card3.is(':visible')){
      card3.hide()
    }
    else{
    card3.show();
  }
})
var card4=$('#card4')
var card5=$('#card5')
card4.on('click',function()
{
    if(card5.is(':visible')){
      card5.hide()
    }
    else{
    card5.show();
  }
})
var time00=$('#time00')
var time10=$('#time10')
var time20=$('#time20')
var time30=$('#time30')
var time40=$('#time40')
var time50=$('#time50')
var b0=$('#b0')
var b1=$('#b1')
var b2=$('#b2')
var b3=$('#b3')
var b4=$('#b4')
var b5=$('#b5')
  b0.on('click',function()
{
    time00.show();time10.hide();time20.hide();time30.hide();time40.hide();time50.hide();
  }
);

  b1.on('click',function()
{
  time00.hide();time10.show();time20.hide();time30.hide();time40.hide();time50.hide();
}
);
  b2.on('click',function()
{
time00.hide();time10.hide();time20.show();time30.hide();time40.hide();time50.hide();
}
);
  b3.on('click',function()
{
time00.hide();time10.hide();time20.hide();time30.show();time40.hide();time50.hide();
}
);
  b4.on('click',function()
{
time00.hide();time10.hide();time20.hide();time30.hide();time40.show();time50.hide();
}
);
  b5.on('click',function()
{
time00.hide();time10.hide();time20.hide();time30.hide();time40.hide();time50.show();
}
);
var date=moment().subtract(8,'hour').subtract(24,'minute').format();// 结果：moment("2019-06-24T13:19:48+08:00")
var year=date.substring(0,4);
var month=date.substring(5,7);
var day=date.substring(8,10);
var hour=date.substring(11,13);
var minute=date.substring(14,16);
var minute1,hou1;

minute1=checkMinute(minute);
hour1='10';
var url='http://image.nmc.cn/product/'+year+'/'+month+'/'+day+'/RDCP/medium/SEVP_AOC_RDCP_SLDAS_EBREF_ASCN_L88_PI_'+year+month+day+hour+minute1+'00001.PNG';
var html='<div><img src="'+url+'" width="380"></div>';
$('#huananRadar').html(html);

var dateForecast=moment().subtract(14,'hour').format();// 结果：moment("2019-06-24T13:19:48+08:00")
var yearForecast=dateForecast.substring(0,4);
var monthForecast=dateForecast.substring(5,7);
var dayForecast=dateForecast.substring(8,10);
var hourForecast=dateForecast.substring(11,13);
hourForecast=checkHour(hourForecast);
var url1='http://www.typhoon2000.ph/multi/models/'+yearForecast+monthForecast+dayForecast+hourForecast+'00_ALL.PNG';
var url2='http://www.typhoon2000.ph/multi/models/'+yearForecast+monthForecast+dayForecast+hourForecast+'00_NCEP-GFS.PNG';
var htmlForecast='<div><img src="'+url1+'" height="300" width="380"></div>';
var htmlForecast1='<div><img src="'+url2+'" height="300" width="380"></div>';
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
function checkMinute(minute)
{
if(minute=='00'||minute=='01'||minute=='02'||minute=='03'||minute=='04'||minute=='05')
minute1='00';
if(minute=='06'||minute=='07'||minute=='08'||minute=='09'||minute=='10'||minute=='11')
minute1='06';
if(minute=='12'||minute=='13'||minute=='14'||minute=='15'||minute=='16'||minute=='17')
minute1='12';
if(minute=='18'||minute=='19'||minute=='20'||minute=='21'||minute=='22'||minute=='23')
minute1='18';
if(minute=='24'||minute=='25'||minute=='26'||minute=='27'||minute=='28'||minute=='29')
minute1='24';
if(minute=='30'||minute=='31'||minute=='32'||minute=='33'||minute=='34'||minute=='35')
minute1='30';
if(minute=='36'||minute=='37'||minute=='38'||minute=='39'||minute=='40'||minute=='41')
minute1='36';
if(minute=='42'||minute=='43'||minute=='44'||minute=='45'||minute=='46'||minute=='47')
minute1='42';
if(minute=='48'||minute=='49'||minute=='50'||minute=='51'||minute=='52'||minute=='53')
minute1='48';
if(minute=='54'||minute=='55'||minute=='56'||minute=='57'||minute=='58'||minute=='59')
minute1='54';
return minute1;
}
