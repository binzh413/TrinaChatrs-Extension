TW.IDE.Widgets.linechart = function () {

	this.widgetIconUrl = function() {
		return  "'../Common/extensions/TrinaCharts/ui/linechart/linechart.ide.png'";
	};

	this.widgetProperties = function () {
		return {
			'name': 'LineChart',
            'description': 'TrinaSolar Line Chart',
            'isResizable': true,
			'supportsAutoResize': true,
			'supportsLabel': true,
			'isExtension':true,
			'category': ['Common'],
			'properties': {
				'LineChart Property': {
					'baseType': 'STRING',
					'defaultValue': 'LineChart Property default value',
					'isBindingTarget': true
                },
                'Title':{
                    'baseType': 'STRING',
					'defaultValue': 'LineChart Title',
					'isBindingTarget': true
                },
                'Data':{
                    'baseType': 'JSON',
					'defaultValue': 'LineChart Data',
					'isBindingTarget': true
                },
                'SeriesStyle':{
                    'baseType': 'STYLEDEFINITION',
                    'defaultValue': 'DefaultChartStyle'
                },
                'Width': {
                    'description': 'width of widget',
                    'baseType': 'NUMBER',
                    'defaultValue': 400
                },
                'Height': {
                    'description': 'height of widget',
                    'baseType': 'NUMBER',
                    'defaultValue': 300
                },
                
			}
		}
	};

	this.afterSetProperty = function (name, value) {
		var thisWidget = this;
		var refreshHtml = false;
		switch (name) {
			case 'Style':
			case 'LineChart Property':
				thisWidget.jqElement.find('.linechart-property').text(value);
			case 'Alignment':
				refreshHtml = true;
				break;
			default:
				break;
		}
		return refreshHtml;
	};

	this.renderHtml = function () {
		// return any HTML you want rendered for your widget
		// If you want it to change depending on properties that the user
		// has set, you can use this.getProperty(propertyName).
		return 	'<div class="widget-content widget-circularpiechart" id="' + this.jqElementId + '">' +
				'</div>';
	};

	this.afterRender = function () {
		// NOTE: this.jqElement is the jquery reference to your html dom element
		// 		 that was returned in renderHtml()
                //获取插件Dom ID
        var widgetID = document.getElementById(this.jqElementId);
        //设置Echarts的内容
        //将Echarts图表控件在获取的插件Dom ID中进行初始化
        var defaultLineChart = echarts.init(widgetID);
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
        defaultLineChart.setOption(option,true);
        defaultLineChart.resize();
	};

};