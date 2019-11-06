var vm=new Vue(
  {
    el:'#weather',
    data:{
      weather:[
       ],
      yearLists:[ ],
      currentYear:'2018',
  },
    created:function(){
      var self=this;
      $.ajax({
      type: 'GET',
      dataType:'json',
      url: '../../history/queryweathermonth',
      success: function(data){
          self.weather=data;
    },
    error:function(){
      alert("获取失败");
    }
  });
    for(var i=1961;i<=2018;i++)
    this.yearLists[i-1961]=i;
  },
    methods:{

        submit:function(){
            var self=this;
            $.ajax({
              type: 'GET',
              url: '../../history/queryweathermonth',
              data:{
                'year':self.currentYear,
              },
              success: function(data){
                  self.weather=data;
            },
            error:function(){
              alert("获取失败");
            }
          });
        },
    }
  })

  Vue.prototype.print = (obj,type) => {
      type = type || "log";
      const log = JSON.parse(JSON.stringify(obj));
      console[type](log)
  }
