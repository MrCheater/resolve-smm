$(function(){
  var viewsCountDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        viewsCount: item.resolve.viewsCount
      }
    }
  );

  var chartViewsCount = $("#views-count-zoomed-chart").dxChart({
    dataSource: viewsCountDataSource,
    size: {
      height: 300
    },
    title: 'Views count / Date',
    argumentAxis: {
      valueMarginsEnabled: false,
      argumentType: 'datetime'
    },
    useAggregation: true,
    legend: {
      visible: false
    },
    series: {
      argumentField: 'timestamp',
      valueField: 'viewsCount',
      point: {
        size: 7
      }
    }
  }).dxChart("instance");

  var viewsUniquesDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        viewsCount: item.resolve.viewsUniques
      }
    }
  );

  var chartViewsUniques = $("#views-uniques-zoomed-chart").dxChart({
    dataSource: viewsUniquesDataSource,
    size: {
      height: 300
    },
    title: 'Views uniques / Date',
    argumentAxis: {
      valueMarginsEnabled: false,
      argumentType: 'datetime'
    },
    useAggregation: true,
    legend: {
      visible: false
    },
    series: {
      argumentField: 'timestamp',
      valueField: 'viewsCount',
      point: {
        size: 7
      }
    }
  }).dxChart("instance");


  ////////////////



  var clonesCountDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        clonesCount: item.resolve.clonesCount
      }
    }
  );

  var chartClonesCount = $("#clones-count-zoomed-chart").dxChart({
    dataSource: clonesCountDataSource,
    size: {
      height: 300
    },
    title: 'Clones count / Date',
    argumentAxis: {
      valueMarginsEnabled: false,
      argumentType: 'datetime'
    },
    useAggregation: true,
    legend: {
      visible: false
    },
    series: {
      argumentField: 'timestamp',
      valueField: 'clonesCount',
      point: {
        size: 7
      }
    }
  }).dxChart("instance");

  var clonesUniquesDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        clonesUniques: item.resolve.clonesUniques
      }
    }
  );

  var chartClonesUniques = $("#clones-uniques-zoomed-chart").dxChart({
    dataSource: clonesUniquesDataSource,
    size: {
      height: 300
    },
    title: 'Clones uniques / Date',
    argumentAxis: {
      valueMarginsEnabled: false,
      argumentType: 'datetime'
    },
    useAggregation: true,
    legend: {
      visible: false
    },
    series: {
      argumentField: 'timestamp',
      valueField: 'clonesUniques',
      point: {
        size: 7
      }
    }
  }).dxChart("instance");



  //////////




  $("#date-selector").dxRangeSelector({
    dataSource: viewsUniquesDataSource,
    size: {
      height: 100
    },
    chart: {
      series: {
        argumentField: 'timestamp',

        valueField: 'viewsCount',
      },
      useAggregation: true
    },
    scale: {
      minRange: 1,
      valueType: 'datetime'
    },
    behavior: {
      callValueChanged: "onMoving",
      snapToTicks: false
    },
    onValueChanged: function (e) {
      chartViewsCount.zoomArgument(e.value[0], e.value[1]);
      chartViewsUniques.zoomArgument(e.value[0], e.value[1]);
      chartClonesCount.zoomArgument(e.value[0], e.value[1]);
      chartClonesUniques.zoomArgument(e.value[0], e.value[1]);
    }
  });
});