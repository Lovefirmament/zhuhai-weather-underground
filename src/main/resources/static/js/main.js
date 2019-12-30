var vm=new Vue(
  {
    el:'#index',
    data:{
      warningList:[ ],
      forecastList:[],
      conditionList:[],
      detectTime:"00",
      radarTime:{
        year:"",
        month:"",
        day:"",
        hour:"",
        minute:"",
      }
  },
    created:function(){
      this.weatherinfo();
      this.getRadarTime();
  },
  methods:
  {
    weatherinfo:function(){
      var self=this;
      $.ajax({
      type: 'GET',
      dataType:'json',
      cache:false,
      url: './index/weatherinfo?'+ new Date().getTime(),
      success: function(data){
        console.log(data);
          self.warningList=data.warning;
          self.forecastList=data.forecast;
          self.conditionList=data.condition;
    },
    error:function(){
      console.log("获取失败");
    }
  });
},
    setDetectTime:function(time){
        this.detectTime=time;
    },
    getRadarTime:function(){
      var date=moment().subtract(8,'hour').subtract(18,'minute').format();// 结果：moment("2019-06-24T13:19:48+08:00")
      this.radarTime.year=date.substring(0,4); //获取当前时间
      this.radarTime.month=date.substring(5,7);
      this.radarTime.day=date.substring(8,10);
      this.radarTime.hour=date.substring(11,13);
      var minuteString=date.substring(14,16);
      var minuteInt=parseInt(minuteString);
      if(minuteInt>=0&&minuteInt<6)
      minuteString='00';
      if(minuteInt>=6&&minuteInt<12)
      minuteString='06';
      if(minuteInt>=12&&minuteInt<18)
      minuteString='12';
      if(minuteInt>=18&&minuteInt<24)
      minuteString='24';
      if(minuteInt>=24&&minuteInt<30)
      minuteString='30';
      if(minuteInt>=30&&minuteInt<36)
      minuteString='30';
      if(minuteInt>=36&&minuteInt<42)
      minuteString='36';
      if(minuteInt>=42&&minuteInt<48)
      minuteString='42';
      if(minuteInt>=48&&minuteInt<54)
      minuteString='48';
      if(minuteInt>=54&&minuteInt<60)
      minuteString='54';
      this.radarTime.minute=minuteString;
   },
  }
  })
