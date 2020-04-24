// pages/card/card.js
Page({
  data: {
    list:[
      {
        name:"假期是否离渝",
        pick:["待选择","是","否"],
        picked:'待选择'
      },
      {
        name:"寒假有无接触湖北人员",
        pick:["待选择","是","否"],
        picked:'待选择'
      },
      {
        name:"有无接触确诊或疑似病例",
        pick:["待选择","是","否"],
        picked:'待选择'
      },
      {
        name:"现居地有无确诊或疑似病例",
        pick:["待选择","是","否"],
        picked:'待选择'
      },
      {
        name:"体温是否正常",
        pick:["待选择","是","否"],
        picked:'待选择'
      },
      {
        name:"乏力咳嗽不",
        pick:["待选择","是","否"],
        picked:'待选择'
      },
      {
        name:"家庭成员健康",
        pick:["待选择","是","否"],
        picked:'待选择'
      },
      {
        name:"有无疾病史",
        pick:["待选择","是","否"],
        picked:'待选择'
      }
    ]
  },
   changeText:function(e){
     let now=e.currentTarget.dataset.operation;
      let param = {};
      let string = "list["+now+"].picked";
     param[string] =this.data.list[now].pick[e.detail.value]
      this.setData(param);
   }
})

