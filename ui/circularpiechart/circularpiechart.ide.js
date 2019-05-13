TW.IDE.Widgets.circularpiechart = function () {

	this.widgetIconUrl = function() {
		return  "'../Common/extensions/TrinaCharts/ui/circularpiechart/circularpiechart.ide.png'";
	};

	this.widgetProperties = function () {
		return {
			'name': 'CircularPieChart',
            'description': 'TrinaSolar Circular Pie Chart',
            'isResizable': true,
			'supportsAutoResize': true,
			'supportsLabel': true,
			'isExtension':true,
			'category': ['Common'],
			'properties': {
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
				'CircularPieChart Property': {
					'baseType': 'STRING',
					'defaultValue': 'CircularPieChart Property default value',
					'isBindingTarget': true
                },
                'Title':{
                    'baseType': 'STRING',
                    'defaultValue': 'CircularPieChart Title'
                },
                'Value':{
                    'baseType': 'NUMBER',
                    'defaultValue': 0.80,
                    'isBindingTarget': true
                },
                'Data1Style':{
                    'baseType': 'STYLEDEFINITION',
                    'defaultValue': 'DefaultChartStyle'
                },
                'Data2Style':{
                    'baseType': 'STYLEDEFINITION',
                    'defaultValue': 'DefaultChartStyle'
                }
			}
		}
	};

	this.afterSetProperty = function (name, value) {
		var thisWidget = this;
		var refreshHtml = false;
		switch (name) {
			case 'Style':
			case 'CircularPieChart Property':
				thisWidget.jqElement.find('.circularpiechart-property').text(value);
			case 'Alignment':
				refreshHtml = true;
				break;
			default:
				break;
		}
		return refreshHtml;
	};

    //编辑状态界面
	this.renderHtml = function () {
		// return any HTML you want rendered for your widget
		// If you want it to change depending on properties that the user
		// has set, you can use this.getProperty(propertyName).
		return 	'<div class="widget-content widget-circularpiechart">' +
                    //'<span class="circularpiechart-property">' + this.getProperty('CircularPieChart Property') + '</span>' +
                    '<div class="widget-content widget-piejackytest" id="' + this.jqElementId + '"></div >' +
        		'</div>';
	};

	this.afterRender = function () {
        
	};

};