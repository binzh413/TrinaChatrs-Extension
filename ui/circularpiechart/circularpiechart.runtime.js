TW.Runtime.Widgets.circularpiechart= function () {
    //设置界面支持自适应大小
    this.properties.ResponsiveLayout = true;

    this.runtimeProperties = function () {
        return {
            'supportsAutoResize': true,
        };
    };
    //获取平台传入参数的值
    var value = this.getProperty("Value");
    var tValue = Math.floor( value* 10000)/100;
    var tName = String(tValue) + '%';
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
        //获取页面样式颜色
        var data1Format = TW.getStyleFromStyleDefinition(this.getProperty('Data1Style'));
        var data2Format = TW.getStyleFromStyleDefinition(this.getProperty('Data1Style'));

        var data1Color = data1Format.backgroundColor;
        var data2Color = data2Format.backgroundColor;

        TW.log.error('Color1 = ' + data1Color + '; Color2 = ' + data2Color + ';');
        //设置Echarts的内容
        //将Echarts图表控件在获取的插件Dom ID中进行初始化
        var circularPieChart = echarts.init(widgetID);
        option = {
            title:{
                show:true,
                text:chartTitle,
                left:'center',
                // top:'8%',
                textStyle:{
                    fontSize:'180%',
                    fontWeight:'bold',
                    fontFamily:'Microsoft YaHei'
                }
            },
            tooltip: {
                trigger: 'item',
                show:false,
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
                {
                    name:'',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: true,
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            color:'#03ABFD',
                            textStyle: {
                                fontSize: '250%',
                                fontWeight: 'bold'
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '250%',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[{name:'',value:1 - tValue/100 },{name:tName,value:tValue/100}]
                }
            ],
            color:['#D2D4D3','#03ABFD']
        };
        circularPieChart.setOption(option,true);
        circularPieChart.resize();
	};

	// this is called on your widget anytime bound data changes
	this.updateProperty = function (updatePropertyInfo) {
		// TargetProperty tells you which of your bound properties changed
		if(updatePropertyInfo.TargetProperty === 'Title'){

        }
	};
};