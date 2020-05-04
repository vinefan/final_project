<template>
    <div>
        <div id="HistoryGraphChart" ref="chart" class="charts-item" ></div>
<!--        <div class="charts-item" v-if="!GShow">-->
<!--            <p style="font-size: 20px;color: grey">当前股票暂无历史交易数据</p>-->
<!--        </div>-->
    </div>
</template>

<script>
    import echarts from 'echarts/lib/echarts'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/component/legend'
    import 'echarts/lib/component/title'
    import 'echarts/lib/component/tooltip'
    import 'echarts/lib/component/grid'

    export default {
        name: "HistoryGraph",
        props:{
            historyData:Array,
        },
        data(){
            return{
                chart: "",  //echarts实例
                data:[],
                time:[],
                price:[],
                GShow:false,

                option:{
                    color: '#7bbfea',
                    // title: {
                    //     text: "vue-Echarts"
                    // },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: this.time
                    },
                    yAxis: [
                        {
                            type: 'value',
                            scale:true
                        }
                    ],
                    series: [{
                        type: 'line',
                        areaStyle: {},
                        data: this.price
                    }],
                    tooltip: {
                        trigger: 'axis',           // 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'
                        showDelay: 20,             // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
                        hideDelay: 100,            // 隐藏延迟，单位ms
                        transitionDuration: 0.4,  // 动画变换时间，单位s
                        backgroundColor: 'rgba(0,0,0,0.7)',     // 提示背景颜色，默认为透明度为0.7的黑色
                        borderColor: '#333',       // 提示边框颜色
                        borderRadius: 4,           // 提示边框圆角，单位px，默认为4
                        borderWidth: 0,            // 提示边框线宽，单位px，默认为0（无边框）
                        padding: 5,
                    },
                    grid: {
                        x: 50,
                        y: 25,
                        x2: 30,
                        y2: 35
                    },
                }
            }
        },
        mounted() {
            this.initCharts()
        },
        methods: {
            initCharts() {
                var that=this
                that.chart = echarts.init(document.getElementById('HistoryGraphChart'));
                that.chart.setOption(that.option);
                //echarts窗口缩放//待改进
                window.onresize = function () {
                    that.chart.resize()
                }

            }
        },
        watch: {
            //props值传过来，就处理数据
            historyData:function(val){
                if(this.historyData!=null) {
                    this.data = val;
                    this.time = this.data.map(obj => {
                        return obj.time
                    })
                    this.price = this.data.map(obj => {
                        return obj.price
                    })
                    this.GShow=true
                    // if(this.price.length>0){
                    //     this.GShow=true
                    // }

                    this.option = {
                        color: '#7bbfea',
                        // title: {
                        //     text: "vue-Echarts"
                        // },
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data: this.time
                        },
                        yAxis: [
                            {
                                type: "value",
                                scale:true
                            }
                        ],
                        series: [{
                            type: 'line',
                            areaStyle: {},
                            data: this.price
                        }],
                        tooltip: {
                            trigger: 'axis',           // 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'
                            showDelay: 20,             // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
                            hideDelay: 100,            // 隐藏延迟，单位ms
                            transitionDuration: 0.4,  // 动画变换时间，单位s
                            backgroundColor: 'rgba(0,0,0,0.7)',     // 提示背景颜色，默认为透明度为0.7的黑色
                            borderColor: '#333',       // 提示边框颜色
                            borderRadius: 4,           // 提示边框圆角，单位px，默认为4
                            borderWidth: 0,            // 提示边框线宽，单位px，默认为0（无边框）
                            padding: 5,
                        },
                        grid: {
                            x: 50,
                            y: 25,
                            x2: 30,
                            y2: 35
                        },

                    }
                }
            },
            //option变化，重绘图标
            option: {

                handler(newVal, oldVal) {
                    if (this.chart) {
                        if (newVal) {
                            this.chart.setOption(newVal, true);
                        } else {
                            this.chart.setOption(oldVal, true);
                        }
                    } else {
                        this.init();
                    }
                },
                deep:true

            }
        }
    }
</script>

<style scoped>
    .charts-item{
        width: 580px;
        height: 150px;
        text-align: center;
        display: table-cell;
        vertical-align: middle;
    }
</style>