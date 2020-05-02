import Mock from 'mockjs';
var Random = Mock.Random;

export default
//index首页数据
Mock.mock('http://stocksite/index', {
    //大盘行情
    'bigPanel|6':[
        {
            'id|+1':'999900',
            'name':'@cname',
            'rate':Random.float(0,100).toFixed(2),
            'price':Random.float(10,60).toFixed(2),
            'updown':Random.float(0,100).toFixed(2),
            'quantity':Random.float(1,10).toFixed(2)
        }
    ],

    //大盘异动
    'bigPanelChange|50':[
        {
            'timePoint|+1':9,
            'indexNum|20-100':21,
            'panelPoint':'无'
        }

    ],
    //涨跌排名
    'stocksUpDown':[
        {
            'type':'kc',
            'stock|50':[{
                'stockid|+1':'000001',
                'name':'@cname',
                'price':Random.float(10,60).toFixed(2),
                'rate':Random.float(0,100).toFixed(2)
            }]
        },
        {
            'type':'zf',
            'stock|50':[{
                'stockid|+1':'000001',
                'name':'@cname',
                'price':Random.float(10,60).toFixed(2),
                'rate':Random.float(0,1).toFixed(2)
            }]
        },
        {
            'type':'df',
            'stock|50':[{
                'stockid|+1':457342,
                'name':'@cname',
                'price':Random.float(10,60).toFixed(2),
                'rate':Random.float(0,1).toFixed(2)
            }]
        }
    ],

});

//请求我的自选 {userId==>}
Mock.mock('http://stocksite/myfavourite', {
    //我的自选股票
    'stock|1-12':[
        {
            'stockid|+1':959900,
            'name':'@cname',
            'price':Random.float(10,60).toFixed(2),
            'rate':Random.float(0,100).toFixed(2)
        }
    ],
});

//请求实时数据
Mock.mock('http://stocksite/currentdata', {
    'data|1-50':[
        {
            'time|+1':9,
            'price|+1':1
        }
    ],
});

//画图数据
Mock.mock('http://stocksite/graph', {
    'data|10':[
        {
            'time|+1':9,
            'price|1':[1,2,3,5,1,7,2,6,3,5,5,3,3,3,2,1,1,7,,9,0,1,0,10,36]
        }
    ],
    'note|1-20':[
        {
            'time|+1':9,
            'note':'@string'
        }
    ]
});

//删除自选
Mock.mock('http://stocksite/delete', {
    'status|1':[200,400]
});

//推荐数据
Mock.mock('http://stocksite/recommend', {
    'data|2':[
        {
            'type|1':['短期','中期','长期'],
            'source':'网站 www.baidu.adopjok/awpdj9',
           'text|1':["第一，充分认识风险。回报高意味着风险大。他说，虽然这听起来并不新鲜，但投资者被盈利冲昏头脑时，往往会忽略风险的存在。",'在这些简报季刊做出看跌预测，建议投资者们卖出手上的股票时，其正确率也很差劲。比如上图显示，在这些简报建议卖出股票后的一个月，美国股市大约有一半时间是上涨的。']
        }
    ]
});
