TW.Runtime.Widgets.linechart= function () {
    //设置界面支持自适应大小
    this.properties.ResponsiveLayout = true;

    this.runtimeProperties = function () {
        return {
            'supportsAutoResize': true,
        };
    };
    //获取平台传入参数的值
    var chartTitle = this.getProperty("Title");
    //返回页面HTML
	this.renderHtml = function () {
		return 	'<div class="widget-content widget-circularpiechart" id="' + this.jqElementId + '">' +
				'</div>';
	};

    /*
	*默认重构界面方法
	*/
	this.resize = function(width,height) {
        this.afterRender();
    }

	this.afterRender = function () {
		// NOTE: this.jqElement is the jquery reference to your html dom element
		// 		 that was returned in renderHtml()
        //获取插件Dom ID
        var widgetID = document.getElementById(this.jqElementId);
        //调整 界面实际大小
        if(this.properties.ResponsiveLayout) {

			 var width= this.jqElement.width();

			 var height = this.jqElement.height();

        }
        //设置Echarts的内容
        //将Echarts图表控件在获取的插件Dom ID中进行初始化
        var lineChart = echarts.init(widgetID);
        option = {
            title:{
                show:true,
                text:chartTitle,
                left:'center',
                textStyle:{
                    fontSize:'100%',
                    fontWeight:'bold',
                    fontFamily:'Microsoft YaHei'
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['08:00:00', '09:00:00', '10:00:00', '11:00:00', '12:00:00'
                , '13:00:00', '14:00:00','15:00:00', '16:00:00', '17:00:00', '18:00:00','19:00:00']
            },
            yAxis: {
                type: 'value',
                axisLabel:{
                    formatter: function (value, index) {
                        //格式化Y轴的显示方式
                        var valueData = parseFloat(value) * 100;
                        return (valueData + '%');
                    }
                }
            },
            series: [{
                data: [0.820, 0.932, 0.901, 0.934, 0.890, 0.730, 0.620, 0.720
                ,0.820, 0.932, 0.901, 0.934, 0.890, 0.730, 0.620, 0.720],
                type: 'line',
                smooth: true,
                symbol:'none',
                areaStyle:{
                    color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#03ABFD' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#E7F1F3' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                    }
                },
                lineStyle:{
                    color:'#05ADFB'
                }
            }]
        };
        lineChart.setOption(option,true);
        lineChart.resize();
	};

	// this is called on your widget anytime bound data changes
	this.updateProperty = function (updatePropertyInfo) {
		// TargetProperty tells you which of your bound properties changed
		if (updatePropertyInfo.TargetProperty === 'Title') {
		}
	};
};