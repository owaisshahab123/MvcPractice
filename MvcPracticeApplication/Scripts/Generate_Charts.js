function UserBookingStatus_BarChart(DivID, Title, JsonData, argField, vField, Series) {
    

    $(function () {
        $("#"+DivID).dxChart({
            palette: "soft",
            dataSource: JsonData,

            commonSeriesSettings: {

                ignoreEmptyPoints: true,
                barPadding: 0.5,
                argumentField: argField,
                type: "bar",
                label: {
                    visible: true,
                    format: {
                        type: "fixedPoint",
                        precision: 0
                    }
                }
            },
            series: Series,

            legend: {
                visible: false
            },

            tooltip: {
                enabled: true,
                customizeTooltip: function (arg) {
                    
                    return {
                        text: "Total Amount - " + arg.originalValue
                    };
                }
            },

            margin: {
                bottom: 110
            },

            title: Title
        });
    });

    //$(function () {
    //    $("#" + DivID).dxChart({
    //        palette: "soft",
    //        dataSource: JsonData,
    //        commonSeriesSettings: {
    //            ignoreEmptyPoints: true,
    //            argumentField: argField,
    //            type: "bar"
    //        },

    //        series: Series,

    //        legend: {
    //            verticalAlignment: "bottom",
    //            horizontalAlignment: "center"
    //        },
    //        tooltip: {
    //            enabled: true,
    //            customizeTooltip: function (arg) {
    //                
    //                return {
    //                    text: "Total Amount - " + arg.originalValue
    //                };
    //            }
    //        },

    //        title: Title
    //    });
    //});

}



function BookingStatus_BarChart(DivID, Title, JsonData, argField, vField) {
    
    var highAverage = 5,
        lowAverage = 1;

    $("#" + DivID).dxChart({
       
        dataSource: JsonData,
      
        series: {
            label: {
                visible: true,
                backgroundColor: "#25A49E",
                argumentField: argField,
                valueField: vField,
                name: argField
            },
            argumentField: argField,
            valueField: vField,
            type: "bar",
            barWidth: 40,
           
        },

        commonSeriesSettings: {
            ignoreEmptyPoints: true,
            argumentField: argField,
            type: "bar",
             barPadding: 0.5
        },

        customizePoint: function () {
            if (this.value > highAverage) {
                return { color: "#ff7c7c", hoverStyle: { color: "#ff7c7c" } };
            } else if (this.value < lowAverage) {
                return { color: "#8c8cff", hoverStyle: { color: "#8c8cff" } };
            }
        },
       
        argumentAxis: {
            tickInterval: 10,
            label: {
                format: {
                    type: "decimal"
                }
            }
        },

        margin: {
            bottom: 20
        },

        tooltip: {
            enabled: true,
            customizeTooltip: function (arg) {
                
                return {
                    text: "Total Booking - " + arg.valueText + "<br>" + "Total Amount - " + arg.point.data.TrainerAmount
                };
            }
        },

        legend: {
            visible: false
        },

        title: Title
    });


}