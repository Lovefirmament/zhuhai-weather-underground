var vm=new Vue(
  {
    el:'#weather',
    data:{
      weather:[
       ],
      yearLists:[ ],
      monthLists:[],
      currentYear:'2018',
      currentMonth:'12'
  },
    created:function(){
      var self=this;
      $.ajax({
      type: 'GET',
      dataType:'json',
      cache:false,
      url: '../../history/queryweatherday?'+ new Date().getTime(),
      success: function(data){
          self.weather=data;
    },
    error:function(){
      alert("获取失败");
    }
  });
    for(var i=1961;i<=2018;i++)
    this.yearLists[i-1961]=i;
    for(var i=1;i<=12;i++)
    this.monthLists[i]=i;
  },
    methods:{

        submit:function(){
            var self=this;
            $.ajax({
              type: 'GET',
              url: '../../history/queryweatherday?'+ new Date().getTime(),
              cache:false,
              data:{
                'year':self.currentYear,
                'month':self.currentMonth,
              },
              success: function(data){
                  self.weather=data;
            },
            error:function(){
              alert("获取失败");
            }
          });
        }
    }
  })

