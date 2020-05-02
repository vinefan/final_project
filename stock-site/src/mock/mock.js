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
    'data|3':[
        {
            'source':'@cname',
            'comments':[

            ]
        }
    ]
});
