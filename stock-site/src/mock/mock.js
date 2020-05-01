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
                'stockid|+1':'000001',
                'name':'@cname',
                'price':Random.float(10,60).toFixed(2),
                'rate':Random.float(0,1).toFixed(2)
            }]
        }
    ],

});
