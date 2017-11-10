$(function(){
  var palette = [
    '#49649f',
    '#3094f1',
    '#88bf49',
    '#ad8900',
    '#7f2494',
    '#dd4acc',
    '#f43a37',
    '#8b5413',
    '#3a9a24',
    '#167681'
  ]

  var watchersDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        watchers: item.resolve.watchers
      }
    }
  );

  var chartWatchers = $("#resolve-watchers-zoomed-chart").dxChart({
    dataSource: watchersDataSource,
    size: {
      height: 250
    },
    title: 'watchers',
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
      valueField: 'watchers',
      point: {
        size: 7
      }
    }
  }).dxChart("instance");

  var starsDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        stars: item.resolve.stars
      }
    }
  );

  var chartStars = $("#resolve-stars-zoomed-chart").dxChart({
    dataSource: starsDataSource,
    size: {
      height: 250
    },
    title: 'stars',
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
      valueField: 'stars',
      point: {
        size: 7
      }
    }
  }).dxChart("instance");

  var forksDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        forks: item.resolve.forks
      }
    }
  );

  var chartForks = $("#resolve-forks-zoomed-chart").dxChart({
    dataSource: forksDataSource,
    size: {
      height: 250
    },
    title: 'forks',
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
      valueField: 'forks',
      point: {
        size: 7
      }
    }
  }).dxChart("instance");

  var issuesDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        issues: item.resolve.issues
      }
    }
  );

  var chartIssues = $("#resolve-issues-zoomed-chart").dxChart({
    dataSource: issuesDataSource,
    size: {
      height: 250
    },
    title: 'issues',
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
      valueField: 'issues',
      point: {
        size: 7
      }
    }
  }).dxChart("instance");

  var viewsCountDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        viewsCount: item.resolve.viewsCount
      }
    }
  );

  var chartViewsCount = $("#resolve-views-count-zoomed-chart").dxChart({
    dataSource: viewsCountDataSource,
    size: {
      height: 250
    },
    title: 'views count',
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

  var chartViewsUniques = $("#resolve-views-uniques-zoomed-chart").dxChart({
    dataSource: viewsUniquesDataSource,
    size: {
      height: 250
    },
    title: 'views uniques',
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

  var clonesCountDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        clonesCount: item.resolve.clonesCount
      }
    }
  );

  var chartClonesCount = $("#resolve-clones-count-zoomed-chart").dxChart({
    dataSource: clonesCountDataSource,
    size: {
      height: 250
    },
    title: 'clones count',
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

  var chartClonesUniques = $("#resolve-clones-uniques-zoomed-chart").dxChart({
    dataSource: clonesUniquesDataSource,
    size: {
      height: 250
    },
    title: 'clones uniques',
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

  var listResolveReferrers = [];

  window.DATA.forEach(
    function (item) {
      return item.resolve.referrers.map(
        function (obj) {
          if(!listResolveReferrers.includes(obj.referrer)) {
            listResolveReferrers.push(obj.referrer)
          }
        }
      )
    }
  );

  var resolveRefferersCountDataSource = window.DATA.map(
    function (item) {
      var result = {
        timestamp: item.timestamp,
      };
      item.resolve.referrers.forEach(
        function (obj) {
          result[obj.referrer] = obj.count
        }
      )
      return result
    }
  )

  var resolveRefferersCountChart = $("#resolve-refferers-count-chart").dxChart({
    dataSource: resolveRefferersCountDataSource,
    palette: palette,
    commonSeriesSettings: {
      type: "stackedarea",
      argumentField: "timestamp"
    },
    series: listResolveReferrers.map(
      function (referrer) {
        return { valueField: referrer, name: referrer }
      }
    ),
    title: "refferers count",
    useAggregation: true,
    argumentAxis: {
      valueMarginsEnabled: false,
      argumentType: 'datetime'
    },
    legend: {
      verticalAlignment: "bottom",
      horizontalAlignment: "center"
    }
  }).dxChart("instance");

  var resolveRefferersUniquesDataSource = window.DATA.map(
    function (item) {
      var result = {
        timestamp: item.timestamp,
      };
      item.resolve.referrers.forEach(
        function (obj) {
          result[obj.referrer] = obj.uniques
        }
      )
      return result
    }
  )

  var resolveRefferersUniquesChart = $("#resolve-refferers-uniques-chart").dxChart({
    dataSource: resolveRefferersUniquesDataSource,
    palette: palette,
    commonSeriesSettings: {
      type: "stackedarea",
      argumentField: "timestamp"
    },
    series: listResolveReferrers.map(
      function (referrer) {
        return { valueField: referrer, name: referrer }
      }
    ),
    title: "refferers uniques",
    useAggregation: true,
    argumentAxis: {
      valueMarginsEnabled: false,
      argumentType: 'datetime'
    },
    legend: {
      verticalAlignment: "bottom",
      horizontalAlignment: "center"
    }
  }).dxChart("instance");

  var dateDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        value: 1
      }
    }
  );

  $("#date-selector").dxRangeSelector({
    dataSource: dateDataSource,
    size: {
      height: 100
    },
    chart: {
      series: {
        argumentField: 'timestamp',
        valueField: 'value',
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
      chartWatchers.zoomArgument(e.value[0], e.value[1]);
      chartStars.zoomArgument(e.value[0], e.value[1]);
      chartForks.zoomArgument(e.value[0], e.value[1]);
      chartIssues.zoomArgument(e.value[0], e.value[1]);
      chartViewsCount.zoomArgument(e.value[0], e.value[1]);
      chartViewsUniques.zoomArgument(e.value[0], e.value[1]);
      chartClonesCount.zoomArgument(e.value[0], e.value[1]);
      chartClonesUniques.zoomArgument(e.value[0], e.value[1]);
      resolveRefferersCountChart.zoomArgument(e.value[0], e.value[1]);
      resolveRefferersUniquesChart.zoomArgument(e.value[0], e.value[1]);
    }
  });
});