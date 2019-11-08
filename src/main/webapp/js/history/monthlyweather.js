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
      cache:false,
      url: '../../history/queryweathermonth?'+ new Date().getTime(),
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
              cache:false,
              url: '../../history/queryweathermonth?'+ new Date().getTime(),
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

