var vm=new Vue(
  {
        el:'#monitor',
        data:{
          weatherList:[],
          temList:{
            tem:[],
            temH:[],
            temL:[],
          },
          rhuList:{
            rhu:[],
            rhuH:[],
            rhuL:[],
          },
          prsList:{
            prs:[],
            prsH:[],
            prsL:[],
          },
          winList:{
            win:[],
            winH:[],
            winL:[],
          },
          winGustList:{
            winGust:[],
            winGustH:[],
            winGustL:[],
          },
          windirList:{
            windir:[],
          },
          preList:{
            pre:[],
            preH:[],
          },
          preRateList:{
            preRate:[],
            preRateH:[],
          },
          location:[
            {lat:22.13761902,lon:113.33688354,name:'金湾观测站'},
            {lat:22.28580856,lon:113.5638504,name:'香洲观测站'},
            {lat:22.24321938,lon:113.54924774,name:'板樟观测站'},
          ],
          mapflag:true,
          chartflag:false,
          staionIndex:'',
        },
        mounted:function(){
          this.weatherdata();
         var map=this.mapinit();
        this.mapmarker(map);
        for(var i=0;i<this.weatherList.length;i++)
        this.getWeather(i);
       this.drawchart(0);
        },
        methods:
        {

          weatherdata:function(){
            var self=this;
            $.ajax({
              type: 'GET',
              dataType:'json',
              async:false,
              url: 'https://api.weather.com/v2/pws/observations/all/1day?stationId=IZHUHA1&format=json&units=m&apiKey=7f429a86cbc74347829a86cbc7a3472d&numericPrecision=decimal',
              success: function(data){
                self.weatherList[0]=data.observations;
            },
            error:function(){
              console.log("金湾站获取失败");
            }
          })
          $.ajax({
            type: 'GET',
            dataType:'json',
            async:false,
            url: 'https://api.weather.com/v2/pws/observations/all/1day?stationId=IZHUHA6&format=json&units=m&apiKey=bee6252f37b142fba6252f37b1d2fbe0&numericPrecision=decimal',
            success: function(data){
              self.weatherList[1]=data.observations;
          },
          error:function(){
            console.log("香洲站获取失败");
          }
        })
        $.ajax({
          type: 'GET',
          dataType:'json',
          async:false,
          url: 'https://api.weather.com/v2/pws/observations/all/1day?stationId=IZHUHA5&format=json&units=m&apiKey=50f3cccd1d094c9cb3cccd1d09dc9ccc&numericPrecision=decimal',
          success: function(data){
            self.weatherList[2]=data.observations;
        },
        error:function(){
          console.log(" 板樟站获取失败");
        }
      })
         },
         getWeather:function(i){
           var a=[];
          for(var j=0;j<this.weatherList[i].length;j++)
              {
                a[j]=this.weatherList[i][j].metric.tempAvg;
            }
           this.temList.tem[i]=a;
            var tem1=a.slice(0);
            tem1.sort(
            function(a,b){
               return a-b;
             }
         )
            this.temList.temH[i]=tem1[tem1.length-1];
            this.temList.temL[i]=tem1[0];
            var b=[];
           for(var j=0;j<this.weatherList[i].length;j++)
               {
                 b[j]=this.weatherList[i][j].humidityAvg;
             }
            this.rhuList.rhu[i]=b;
             var rhu1=b.slice(0);
             rhu1.sort(
             function(a,b){
                return a-b;
              }
          )
             this.rhuList.rhuH[i]=rhu1[rhu1.length-1];
             this.rhuList.rhuL[i]=rhu1[0];
             var c=[];
            for(var j=0;j<this.weatherList[i].length;j++)
                {
                  c[j]=this.weatherList[i][j].metric.pressureMin;
              }
             this.prsList.prs[i]=c;
              var prs1=c.slice(0);
              prs1.sort(
              function(a,b){
                 return a-b;
               }
           )
              this.prsList.prsH[i]=prs1[prs1.length-1];
              this.prsList.prsL[i]=prs1[0];

              var d=[];
             for(var j=0;j<this.weatherList[i].length;j++)
                 {
                   d[j]=(this.weatherList[i][j].metric.windspeedHigh)/3.6.toFixed(1);
               }
              this.winList.win[i]=d;
               var win1=d.slice(0);
               win1.sort(
               function(a,b){
                  return a-b;
                }
            )
               this.winList.winH[i]=win1[win1.length-1];
               this.winList.winL[i]=win1[0];

               var e=[];
              for(var j=0;j<this.weatherList[i].length;j++)
                  {
                    e[j]=this.weatherList[i][j].metric.windgustHigh/3.6.toFixed(1);
                }
               this.winGustList.winGust[i]=e;
                var winGust1=e.slice(0);
                winGust1.sort(
                function(a,b){
                   return a-b;
                 }
             )
                this.winGustList.winGustH[i]=winGust1[winGust1.length-1];
                this.winGustList.winGustL[i]=winGust1[0];

                var f=[];
               for(var j=0;j<this.weatherList[i].length;j++)
                   {
                     f[j]=(this.weatherList[i][j].winddirAvg);
                 }
                this.windirList.windir[i]=f;

                var g=[];
               for(var j=0;j<this.weatherList[i].length;j++)
                   {
                     g[j]=this.weatherList[i][j].metric.precipTotal.toFixed(1);
                 }
                this.preList.pre[i]=g;
                 var pre1=g.slice(0);
                 pre1.sort(
                 function(a,b){
                    return a-b;
                  }
              )
                 this.preList.preH[i]=pre1[winGust1.length-1];

                 var h=[];
                for(var j=0;j<this.weatherList[i].length;j++)
                    {
                      h[j]=this.weatherList[i][j].metric.precipRate.toFixed(1);
                  }
                 this.preRateList.preRate[i]=h;
                  var preRate1=h.slice(0);
                  preRate1.sort(
                  function(a,b){
                     return a-b;
                   }
               )
                  this.preRateList.preRateH[i]=preRate1[preRate1.length-1];
           },
         mapinit:function(){
           var map = new AMap.Map('map', {
               resizeEnable: true, //是否监控地图容器尺寸变化
               zoom:11, //初始化地图层级
               center: [113.40, 22.14] //初始化地图中心点
           });
           return map;
         },
         mapmarker:function(map){
           var self=this;
           var location=[
             {lat:'22.13761902',lon:'113.33688354',name:'金湾观测站'},
             {lat:'22.28580856',lon:'113.5638504',name:'香洲观测站'},
             {lat:'22.24321938',lon:'113.54924774',name:'板樟观测站'},
           ]
           var circle = new AMap.Circle({
          map:map,
          center: new AMap.LngLat(location[0].lon, location[0].lat), // 圆心位置
          radius: 500,  //半径
          strokeColor: "#F33",  //线颜色
          strokeOpacity: 0,  //线透明度
          strokeWeight: 0,  //线粗细度
          fillColor: "#ee2200",  //填充颜色
          fillOpacity: 1 //填充透明度
          });
          var circle1 = new AMap.Circle({
         map:map,
         center: new AMap.LngLat(location[1].lon,  location[1].lat), // 圆心位置
         radius: 500,  //半径
         strokeColor: "#F33",  //线颜色
         strokeOpacity: 0,  //线透明度
         strokeWeight: 0,  //线粗细度
         fillColor: "#ee2200",  //填充颜色
         fillOpacity: 1 //填充透明度
         });
         var circle2 = new AMap.Circle({
        map:map,
        center: new AMap.LngLat(location[2].lon, location[2].lat), // 圆心位置
        radius: 500,  //半径
        strokeColor: "#F33",  //线颜色
        strokeOpacity: 0,  //线透明度
        strokeWeight: 0,  //线粗细度
        fillColor: "#ee2200",  //填充颜色
        fillOpacity: 1 //填充透明度
        });
         circle.on('click', function(){
           var infoWindow=self.infoinit(0);
           map.setCenter([location[0].lon, location[0].lat]);
          setTimeout(function(){ self.openinfo(map,infoWindow);},"500");
         });
         circle1.on('click', function(){
           var self1=self;
           var infoWindow=self.infoinit(1);
           map.setCenter([location[1].lon, location[1].lat]);
           setTimeout(function(){ self.openinfo(map,infoWindow);},"500");
         });
         circle2.on('click', function(){
           var infoWindow=self.infoinit(2);
           map.setCenter([location[2].lon, location[2].lat]);
           setTimeout(function(){ self.openinfo(map,infoWindow);},"500");
         });
       },
        infoinit:function(i){
          //构建信息窗体中显示的内容
          var weather=this.weatherList[i][this.weatherList[i].length-1];
          var infoWindow;
          var info = [];
          info.push("<div style=\"padding:0px 0px 0px 4px;\"><span style=\"font-size:12px;font-weight:600;\">站名:"+this.location[i].name+"("+weather.stationID+")</span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
          info.push("<span style=\"font-size:10px;font-weight:500;\">更新时间:"+weather.obsTimeLocal+"</span>");
          info.push("<div style=\"font-size:12px;font-weight:600;color:blue;\"><span>气温:"+weather.metric.tempAvg+"℃</span><span style=\"position:absolute;left:120px;\">露点:"+weather.metric.dewptAvg+"℃</span>"
               +"<div><span>湿度:"+weather.humidityAvg.toFixed(0)+"%</span> <span style=\"position:absolute;left:120px;\">气压:"+weather.metric.pressureMin.toFixed(1)+"hpa</span></div>"
               +"<div><span>日雨量:"+weather.metric.precipTotal.toFixed(1)+"mm</span><span style=\"position:absolute;left:120px;\">雨强:"+weather.metric.precipRate.toFixed(1)+"mm/h</span></div>"
               +"<div><span>风速:"+(weather.metric.windspeedHigh/3.6).toFixed(1)+"m/s</span><span style=\"position:absolute;left:120px;\">阵风:"+(weather.metric.windgustHigh/3.6).toFixed(1)+"m/s</span></div>"
               +"<div><span>日照:"+weather.solarRadiationHigh+"w/㎡</span><span style=\"position:absolute;left:120px;\">紫外线:"+weather.uvHigh+"</span></div></div></div>");
            infoWindow = new AMap.InfoWindow({
              content: info.join("<br/>")  //使用默认信息窗体框样式，显示信息内容
          });
          return infoWindow;
        },
        openinfo:function(map,infoWindow){
          infoWindow.open(map, map.getCenter());
        },
        closeinfo:function(infoWindow){
           infoWindow.close();
        },
        showmap:function(){
         this.mapflag=true;
         this.chartflag=false;
        },
         showchart:function(){
          this.mapflag=false;
          this.chartflag=true;
         },
         drawchart:function(stationIndex){
           this.temchart(stationIndex);
           this.rhuchart(stationIndex);
           this.prschart(stationIndex);
           this.winchart(stationIndex);
           this.windirchart(stationIndex);
           this.prechart(stationIndex);
         },
         temchart:function(stationIndex){
           $("#temchart").remove();
           $("#temchartshow").append("<canvas id='temchart'></canvas>");
           if(stationIndex==null)
           stationIndex=0;
           var time=new Array();
           var number=new Array(288);
            var title=this.location[stationIndex].name+" "+this.weatherList[stationIndex][0].obsTimeLocal.substring(0,10);
           for(var i=0;i<this.weatherList[stationIndex].length;i++)
           {
           time[i]=this.weatherList[stationIndex][i].obsTimeLocal;
         }
          number[0]=0;
         for(var i=1;i<=288;i++)
         {
            number[i]=i/12;
         }
           var ctx = document.getElementById('temchart').getContext('2d');
           var chart = new Chart(ctx, {
         // The type of chart we want to create
         type: 'line',
         // The data for our dataset
         data: {
             labels: number,
             datasets: [{
                 label:'气温',
                 backgroundColor: "rgba(255,255,255,0.1)",
                 borderColor:"rgba(255,0,0,1)",
                 pointBorderColor:"rgba(255,0,0,0)",
                 borderWidth:2,
                 data: this.temList.tem[stationIndex],
             }]
         },
         // Configuration options go here
         options: {

              layout: {
              padding: {
              left: 0,
              top: 0,
              right: 0,
              bottom: 80,
              },
            },
           title:{
             display:true,
             text: title+' 气温曲线',
             fontSize:15,
             fontColor:'#000000',
           },
           legend:{
             display:false,
           },
           tooltips: {
             displayColors:false,
           callbacks: {
             title: function(tooltipItem, data) {
               var i=data['labels'][tooltipItem[0]['index']]*12;
                return time[i];
            },
            label: function(tooltipItem, data) {
              var label = data.datasets[tooltipItem.datasetIndex].label || '';
              if (label) {
                label += ': ';
              }
              label += tooltipItem.yLabel+'℃';
              return label;
            }
          }
         },
           scales: {
             xAxes: [{
               scaleLabel: {
                     padding:-60,
                     display: true,
                     fontSize:15,
                     labelString: ' 最高气温:'+this.temList.temH[stationIndex]+ '℃   最低气温:'+this.temList.temL[stationIndex]+"℃",
                   },
               ticks: {
                maxTicksLimit: 24,
             }
           }],
             yAxes: [{
               ticks: {
                 min:Math.round(this.temList.temL[stationIndex])-2,
                 max:Math.round(this.temList.temH[stationIndex])+2,
                 callback: function(value, index, values) {
                     return value+"℃";
                 }
             }
            }]
         }
         }
       });
     },
    rhuchart:function(stationIndex){
      $("#rhuchart").remove();
      $("#rhuchartshow").append("<canvas id='rhuchart'></canvas>");
      if(stationIndex==null)
      stationIndex=0;
      var time=new Array();
      var number=new Array(288);
        var title=this.location[stationIndex].name+" "+this.weatherList[stationIndex][0].obsTimeLocal.substring(0,10);
      for(var i=0;i<this.weatherList[stationIndex].length;i++)
      {
      time[i]=this.weatherList[stationIndex][i].obsTimeLocal;
    }
     number[0]=0;
    for(var i=1;i<=288;i++)
    {
       number[i]=i/12;
    }
      var ctx = document.getElementById('rhuchart').getContext('2d');
      var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: number,
        datasets: [{
            label:'湿度',
            backgroundColor: "rgba(255,255,255,0.1)",
            borderColor:"rgba(255,0,0,1)",
            pointBorderColor:"rgba(255,0,0,0)",
            borderWidth:2,
            data: this.rhuList.rhu[stationIndex],
        }]
    },
    // Configuration options go here
    options: {
      layout: {
      padding: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 80,
      },
    },
      title:{
        display:true,
        text: title+' 湿度曲线',
        fontSize:15,
        fontColor:'#000000',
      },
      legend:{
        display:false,
      },
      tooltips: {
        displayColors:false,
      callbacks: {
        title: function(tooltipItem, data) {
          var i=data['labels'][tooltipItem[0]['index']]*12;
           return time[i];
       },
       label: function(tooltipItem, data) {
         var label = data.datasets[tooltipItem.datasetIndex].label || '';
         if (label) {
           label += ': ';
         }
         label += tooltipItem.yLabel+'%';
         return label;
       }
     }
    },
      scales: {
        xAxes: [{
          scaleLabel: {
                padding:-60,
                display: true,
                fontSize:15,
                labelString: ' 最高湿度:'+this.rhuList.rhuH[stationIndex]+ '%   最低湿度:'+this.rhuList.rhuL[stationIndex]+"%",
              },
          ticks: {
           maxTicksLimit: 24,
        }
      }],
        yAxes: [{
          ticks: {
            min:Math.round(this.rhuList.rhuL[stationIndex])-5,
            max:Math.round(this.rhuList.rhuH[stationIndex])+5,
            callback: function(value, index, values) {
                return value+"%";
            }
        }
       }]
    }
    }
  });
},
 prschart:function(stationIndex){
   $("#prschart").remove();
   $("#prschartshow").append("<canvas id='prschart'></canvas>");
   if(stationIndex==null)
   stationIndex=0;
   var time=new Array();
   var number=new Array(288);
  var title=this.location[stationIndex].name+" "+this.weatherList[stationIndex][0].obsTimeLocal.substring(0,10);
   for(var i=0;i<this.weatherList[stationIndex].length;i++)
   {
   time[i]=this.weatherList[stationIndex][i].obsTimeLocal;
 }
  number[0]=0;
 for(var i=1;i<=288;i++)
 {
    number[i]=i/12;
 }
   var ctx = document.getElementById('prschart').getContext('2d');
   var chart = new Chart(ctx, {
 // The type of chart we want to create
 type: 'line',
 // The data for our dataset
 data: {
     labels: number,
     datasets: [{
         label:'气压',
         backgroundColor: "rgba(255,255,255,0.1)",
         borderColor:"rgba(255,0,0,1)",
         pointBorderColor:"rgba(255,0,0,0)",
         borderWidth:2,
         data: this.prsList.prs[stationIndex],
     }]
 },
 // Configuration options go here
 options: {
   layout: {
   padding: {
   left: 0,
   top: 0,
   right: 0,
   bottom: 80,
   },
 },
   title:{
     display:true,
     text: title+' 气压曲线',
     fontSize:15,
     fontColor:'#000000',
   },
   legend:{
     display:false,
   },
   tooltips: {
     displayColors:false,
   callbacks: {
     title: function(tooltipItem, data) {
       var i=data['labels'][tooltipItem[0]['index']]*12;
        return time[i];
    },
    label: function(tooltipItem, data) {
      var label = data.datasets[tooltipItem.datasetIndex].label || '';
      if (label) {
        label += ': ';
      }
      label += tooltipItem.yLabel+'hpa';
      return label;
    }
  }
 },
   scales: {
     xAxes: [{
       scaleLabel: {
             padding:-60,
             display: true,
            fontSize:15,
             labelString: '最高气压:'+this.prsList.prsH[stationIndex].toFixed(1)+ 'hpa   最低气压:'+this.prsList.prsL[stationIndex].toFixed(1)+"hpa",
           },
       ticks: {
        maxTicksLimit: 24,
     }
   }],
     yAxes: [{
       ticks: {
         min:Math.round(this.prsList.prsL[stationIndex])-1,
         max:Math.round(this.prsList.prsH[stationIndex])+1,
         callback: function(value, index, values) {
             return value+"hpa";
         }
     }
    }]
 }
 }
});
},
winchart:function(stationIndex){
  $("#winchart").remove();
  $("#winchartshow").append("<canvas id='winchart'></canvas>");
  if(stationIndex==null)
  stationIndex=0;
  var time=new Array();
  var number=new Array(288);
  var title=this.location[stationIndex].name+" "+this.weatherList[stationIndex][0].obsTimeLocal.substring(0,10);
  for(var i=0;i<this.weatherList[stationIndex].length;i++)
  {
  time[i]=this.weatherList[stationIndex][i].obsTimeLocal;
}
 number[0]=0;
for(var i=1;i<=288;i++)
{
   number[i]=i/12;
}
  var ctx = document.getElementById('winchart').getContext('2d');
  var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'line',
// The data for our dataset
data: {
    labels: number,
    datasets: [{
        label:'风速',
        backgroundColor: "rgba(255,255,255,0.1)",
        borderColor:"rgba(0,0,255,1)",
        pointBorderColor:"rgba(255,0,0,0)",
        borderWidth:1,
        data: this.winList.win[stationIndex],
        yAxisID: 'y-axis1'
    },{
        label:'阵风风速',
        backgroundColor: "rgba(255,255,255,0.1)",
        borderColor:"rgba(255,0,0,1)",
        pointBorderColor:"rgba(255,0,0,0)",
        borderWidth:1,
        data: this.winGustList.winGust[stationIndex],
        yAxisID: 'y-axis2'
    },

  ]
},
// Configuration options go here
options: {
  layout: {
  padding: {
  left: 0,
  top: 0,
  right: 0,
  bottom: 80,
  },
},
  title:{
    display:true,
    text: title+' 风速曲线',
    fontSize:15,
    fontColor:'#000000',
  },
  legend:{
    display:false,
  },
  tooltips: {
    displayColors:false,
  callbacks: {
    title: function(tooltipItem, data) {
      var i=data['labels'][tooltipItem[0]['index']]*12;
       return time[i];
   },
   label: function(tooltipItem, data) {
     var label = data.datasets[tooltipItem.datasetIndex].label || '';
     if (label) {
       label += ': ';
     }
     label += tooltipItem.yLabel.toFixed(1)+'m/s';
     return label;
   }
 }
},
  scales: {
    xAxes: [{
      scaleLabel: {
            padding:-60,
            display: true,
           fontSize:15,
            labelString: '最大风速:'+this.winList.winH[stationIndex].toFixed(1)+ 'm/s   极大风速:'+this.winGustList.winGustH[stationIndex].toFixed(1)+"m/s",
          },
      ticks: {
       maxTicksLimit: 24,
    }
  }],
    yAxes: [{
      id: 'y-axis1',
      ticks: {
        min:Math.round(this.winList.winL[stationIndex]),
        max:Math.round(this.winGustList.winGustH[stationIndex])+1,
        callback: function(value, index, values) {
            return value+"m/s";
        }
    }
  },
  {
    id: 'y-axis2',
    position:'right',
    ticks: {
      min:Math.round(this.winList.winL[stationIndex]),
      max:Math.round(this.winGustList.winGustH[stationIndex])+1,
      callback: function(value, index, values) {
          return value+"m/s";
      }
  }
},

]
}
}
});
},
windirchart:function(stationIndex){
  $("#windirchart").remove();
  $("#windirchartshow").append("<canvas id='windirchart'></canvas>");
  if(stationIndex==null)
  stationIndex=0;
  var time=new Array();
  var number=new Array(288);
  var title=this.location[stationIndex].name+" "+this.weatherList[stationIndex][0].obsTimeLocal.substring(0,10);
  for(var i=0;i<this.weatherList[stationIndex].length;i++)
  {
  time[i]=this.weatherList[stationIndex][i].obsTimeLocal;
}
 number[0]=0;
for(var i=1;i<=288;i++)
{
   number[i]=i/12;
}
  var ctx = document.getElementById('windirchart').getContext('2d');
  var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'line',
// The data for our dataset
data: {
    labels: number,
    datasets: [{
        label:'风向',
        backgroundColor: "rgba(255,255,255,0.1)",
        borderColor:"rgba(255,0,0,0)",
        borderWidth:1,
        pointBorderColor:"rgba(255,0,0,1)",
        pointHoverBackgroundColor:"rgba(255,0,0,1)",
        pointRadius:1,
        pointBorderWidth:2,
        pointStyle:'circle',
        data: this.windirList.windir[stationIndex],
        yAxisID: 'y-axis1'
    }

  ]
},
// Configuration options go here
options: {
  layout: {
  padding: {
  left: 0,
  top: 0,
  right: 0,
  bottom: 80,
  },
},
  title:{
    display:true,
    text: title+' 风向分布',
    fontSize:15,
    fontColor:'#000000',
  },
  legend:{
    display:false,
  },
  tooltips: {
    displayColors:false,
  callbacks: {
    title: function(tooltipItem, data) {
      var i=data['labels'][tooltipItem[0]['index']]*12;
       return time[i];
   },
   label: function(tooltipItem, data) {
     var label = data.datasets[tooltipItem.datasetIndex].label || '';
     if (label) {
       label += ': ';
     }
     label += tooltipItem.yLabel;
     return label+'°';
   }
 }
},
  scales: {
    xAxes: [{
      scaleLabel: {
            padding:-60,
            display: true,
           fontSize:15,
          },
      ticks: {
       maxTicksLimit: 24,
    }
  }],
    yAxes: [{
      id: 'y-axis1',
      ticks: {
        min:0,
        stepSize:45,
        max:360,
        callback: function(value, index, values) {
            return value+"°";
        }
    }
  }

]
}
}
});
},
prechart:function(stationIndex){
  $("#prechart").remove();
  $("#prechartshow").append("<canvas id='prechart'></canvas>");
  if(stationIndex==null)
  stationIndex=0;
  var time=new Array();
  var number=new Array(288);
  var title=this.location[stationIndex].name+" "+this.weatherList[stationIndex][0].obsTimeLocal.substring(0,10);
  for(var i=0;i<this.weatherList[stationIndex].length;i++)
  {
  time[i]=this.weatherList[stationIndex][i].obsTimeLocal;
}
 number[0]=0;
for(var i=1;i<=288;i++)
{
   number[i]=i/12;
}
var scalemax;
if(this.preList.preH[stationIndex]!=this.preRateList.preRateH[stationIndex])
scalemax=Math.round(Math.max(this.preList.preH[stationIndex],this.preRateList.preRateH[stationIndex]));
else
scalemax=Math.round(this.preList.preH[stationIndex]);

  var ctx = document.getElementById('prechart').getContext('2d');
  var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'line',
// The data for our dataset
data: {
    labels: number,
    datasets: [{
        label:'雨量mm',
        backgroundColor: "rgba(255,255,255,0.1)",
        borderColor:"rgba(0,0,255,1)",
        pointBorderColor:"rgba(255,0,0,0)",
        borderWidth:1,
        data: this.preList.pre[stationIndex],
        yAxisID: 'y-axis1'
    },{
        label:'雨强mm/h',
        backgroundColor: "rgba(255,255,255,0.1)",
        borderColor:"rgba(255,0,0,1)",
        pointBorderColor:"rgba(255,0,0,0)",
        borderWidth:1,
        data: this.preRateList.preRate[stationIndex],
        yAxisID: 'y-axis2'
    },

  ]
},
// Configuration options go here
options: {
  layout: {
  padding: {
  left: 0,
  top: 0,
  right: 0,
  bottom: 80,
  },
},
  title:{
    display:true,
    text: title+' 降水曲线',
    fontSize:15,
    fontColor:'#000000',
  },
  legend:{
    display:false,
  },
  tooltips: {
    displayColors:false,
  callbacks: {
    title: function(tooltipItem, data) {
      var i=data['labels'][tooltipItem[0]['index']]*12;
       return time[i];
   },
   label: function(tooltipItem, data) {
     var label = data.datasets[tooltipItem.datasetIndex].label. substring(0,2)|| '';
     if (label) {
       label += ': ';
     }
     label += tooltipItem.yLabel.toFixed(1)+data.datasets[tooltipItem.datasetIndex].label.substring(2);
     return label;
   }
 }
},
  scales: {
    xAxes: [{
      scaleLabel: {
            padding:-60,
            display: true,
           fontSize:15,
          labelString: '日雨量:'+this.preList.preH[stationIndex]+ 'mm   最大雨强:'+this.preRateList.preRateH[stationIndex]+"mm/h",
          },
      ticks: {
       maxTicksLimit: 24,
    }
  }],
    yAxes: [{
      id: 'y-axis1',
      ticks: {
        min:0,
        max:scalemax+10,
        callback: function(value, index, values) {
            return value+"mm";
        }
    }
  },
  {
    id: 'y-axis2',
    position:'right',
    ticks: {
      min:0,
      max:10+scalemax,
      callback: function(value, index, values) {
          return value+"mm/h";
      }
  }
},

]
}
}
});
},
     }
  })
