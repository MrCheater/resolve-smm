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

  //////////////////////////////////
  //////////////////////////////////

  var resolveWatchersDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        watchers: item.resolve.watchers
      }
    }
  );

  var resolveWatchersChart = $("#resolve-watchers-zoomed-chart").dxChart({
    dataSource: resolveWatchersDataSource,
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

  var resolveStarsDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        stars: item.resolve.stars
      }
    }
  );

  var resolveStarsChart = $("#resolve-stars-zoomed-chart").dxChart({
    dataSource: resolveStarsDataSource,
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

  var resolveForksDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        forks: item.resolve.forks
      }
    }
  );

  var resolveForksChart = $("#resolve-forks-zoomed-chart").dxChart({
    dataSource: resolveForksDataSource,
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

  var resolveIssuesDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        issues: item.resolve.issues
      }
    }
  );

  var resolveIssuesChart = $("#resolve-issues-zoomed-chart").dxChart({
    dataSource: resolveIssuesDataSource,
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

  var resolveViewsCountDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        viewsCount: item.resolve.viewsCount
      }
    }
  );

  var resolveViewsCountChart = $("#resolve-views-count-zoomed-chart").dxChart({
    dataSource: resolveViewsCountDataSource,
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

  var resolveViewsUniquesDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        viewsCount: item.resolve.viewsUniques
      }
    }
  );

  var resolveViewsUniquesChart = $("#resolve-views-uniques-zoomed-chart").dxChart({
    dataSource: resolveViewsUniquesDataSource,
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

  var resolveClonesCountDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        clonesCount: item.resolve.clonesCount
      }
    }
  );

  var resolveClonesCountChart = $("#resolve-clones-count-zoomed-chart").dxChart({
    dataSource: resolveClonesCountDataSource,
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

  var resolveClonesUniquesDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        clonesUniques: item.resolve.clonesUniques
      }
    }
  );

  var resolveClonesUniquesChart = $("#resolve-clones-uniques-zoomed-chart").dxChart({
    dataSource: resolveClonesUniquesDataSource,
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

  var resolveReferrersList = [];

  window.DATA.forEach(
    function (item) {
      return item.resolve.referrers.map(
        function (obj) {
          if(!resolveReferrersList.includes(obj.referrer)) {
            resolveReferrersList.push(obj.referrer)
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
  );

  var resolveRefferersCountChart = $("#resolve-refferers-count-chart").dxChart({
    dataSource: resolveRefferersCountDataSource,
    palette: palette,
    commonSeriesSettings: {
      type: "stackedarea",
      argumentField: "timestamp"
    },
    series: resolveReferrersList.map(
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
    tooltip: {
      enabled: true,
      customizeTooltip(args) {
        return {
          text: args.seriesName + ' (' + args.value + ')'
        };
      }
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
  );

  var resolveRefferersUniquesChart = $("#resolve-refferers-uniques-chart").dxChart({
    dataSource: resolveRefferersUniquesDataSource,
    palette: palette,
    commonSeriesSettings: {
      type: "stackedarea",
      argumentField: "timestamp"
    },
    series: resolveReferrersList.map(
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
    tooltip: {
      enabled: true,
      customizeTooltip(args) {
        return {
          text: args.seriesName + ' (' + args.value + ')'
        };
      }
    },
    legend: {
      verticalAlignment: "bottom",
      horizontalAlignment: "center"
    }
  }).dxChart("instance");

  $("#resolve-refferers-chart-types").dxSelectBox({
    dataSource: ["area", "stackedarea", "fullstackedarea"],
    value: "stackedarea",
    onValueChanged: function(e){
      resolveRefferersCountChart.option("commonSeriesSettings.type", e.value);
      resolveRefferersUniquesChart.option("commonSeriesSettings.type", e.value);
    }
  });

  var resolvePagesList = [];

  window.DATA.forEach(
    function (item) {
      return item.resolve.pages.map(
        function (obj) {
          var path = obj.path.replace('/reimagined/resolve/tree/master', '').replace('reimagined/resolve', '').replace('//', '/');
          if(!resolvePagesList.includes(path)) {
            resolvePagesList.push(path)
          }
        }
      )
    }
  );

  var resolvePagesCountDataSource = window.DATA.map(
    function (item) {
      var result = {
        timestamp: item.timestamp,
      };
      item.resolve.pages.forEach(
        function (obj) {
          var path = obj.path.replace('/reimagined/resolve/tree/master', '').replace('reimagined/resolve', '').replace('//', '/');
          result[path] = obj.count || 0
        }
      )
      return result
    }
  )

  var resolvePagesCountChart = $("#resolve-pages-count-chart").dxChart({
    dataSource: resolvePagesCountDataSource,
    palette: palette,
    commonSeriesSettings: {
      type: "stackedarea",
      argumentField: "timestamp"
    },
    series: resolvePagesList.map(
      function (page) {
        return { valueField: page, name: page }
      }
    ),
    title: "pages count",
    useAggregation: true,
    argumentAxis: {
      valueMarginsEnabled: false,
      argumentType: 'datetime'
    },
    tooltip: {
      enabled: true,
      customizeTooltip(args) {
        return {
          text: args.seriesName + ' (' + args.value + ')'
        };
      }
    },
    legend: {
      verticalAlignment: "bottom",
      horizontalAlignment: "center"
    }
  }).dxChart("instance");

  var resolvePagesUniquesDataSource = window.DATA.map(
    function (item) {
      var result = {
        timestamp: item.timestamp,
      };
      item.resolve.pages.forEach(
        function (obj) {
          var path = obj.path.replace('/reimagined/resolve/tree/master', '').replace('reimagined/resolve', '').replace('//', '/');
          result[path] = obj.uniques
        }
      )
      return result
    }
  );

  var resolvePagesUniquesChart = $("#resolve-pages-uniques-chart").dxChart({
    dataSource: resolvePagesUniquesDataSource,
    palette: palette,
    commonSeriesSettings: {
      type: "stackedarea",
      argumentField: "timestamp"
    },
    series: resolvePagesList.map(
      function (page) {
        return { valueField: page, name: page }
      }
    ),
    title: "pages uniques",
    useAggregation: true,
    argumentAxis: {
      valueMarginsEnabled: false,
      argumentType: 'datetime'
    },
    tooltip: {
      enabled: true,
      customizeTooltip(args) {
        return {
          text: args.seriesName + ' (' + args.value + ')'
        };
      }
    },
    legend: {
      verticalAlignment: "bottom",
      horizontalAlignment: "center"
    }
  }).dxChart("instance");

  $("#resolve-pages-chart-types").dxSelectBox({
    dataSource: ["area", "stackedarea", "fullstackedarea"],
    value: "stackedarea",
    onValueChanged: function(e){
      resolvePagesCountChart.option("commonSeriesSettings.type", e.value);
      resolvePagesUniquesChart.option("commonSeriesSettings.type", e.value);
    }
  });

  ////////////////////////////////////////

  var hackerNewsWatchersDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        watchers: item.hackerNews.watchers
      }
    }
  );

  var hackerNewsWatchersChart = $("#hacker-news-watchers-zoomed-chart").dxChart({
    dataSource: hackerNewsWatchersDataSource,
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

  var hackerNewsStarsDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        stars: item.hackerNews.stars
      }
    }
  );

  var hackerNewsStarsChart = $("#hacker-news-stars-zoomed-chart").dxChart({
    dataSource: hackerNewsStarsDataSource,
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

  var hackerNewsForksDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        forks: item.hackerNews.forks
      }
    }
  );

  var hackerNewsForksChart = $("#hacker-news-forks-zoomed-chart").dxChart({
    dataSource: hackerNewsForksDataSource,
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

  var hackerNewsIssuesDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        issues: item.hackerNews.issues
      }
    }
  );

  var hackerNewsIssuesChart = $("#hacker-news-issues-zoomed-chart").dxChart({
    dataSource: hackerNewsIssuesDataSource,
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

  var hackerNewsViewsCountDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        viewsCount: item.hackerNews.viewsCount
      }
    }
  );

  var hackerNewsViewsCountChart = $("#hacker-news-views-count-zoomed-chart").dxChart({
    dataSource: hackerNewsViewsCountDataSource,
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

  var hackerNewsViewsUniquesDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        viewsCount: item.hackerNews.viewsUniques
      }
    }
  );

  var hackerNewsViewsUniquesChart = $("#hacker-news-views-uniques-zoomed-chart").dxChart({
    dataSource: hackerNewsViewsUniquesDataSource,
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

  var hackerNewsClonesCountDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        clonesCount: item.hackerNews.clonesCount
      }
    }
  );

  var hackerNewsClonesCountChart = $("#hacker-news-clones-count-zoomed-chart").dxChart({
    dataSource: hackerNewsClonesCountDataSource,
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

  var hackerNewsClonesUniquesDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        clonesUniques: item.hackerNews.clonesUniques
      }
    }
  );

  var hackerNewsClonesUniquesChart = $("#hacker-news-clones-uniques-zoomed-chart").dxChart({
    dataSource: hackerNewsClonesUniquesDataSource,
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

  var hackerNewsReferrersList = [];

  window.DATA.forEach(
    function (item) {
      return item.hackerNews.referrers.map(
        function (obj) {
          if(!hackerNewsReferrersList.includes(obj.referrer)) {
            hackerNewsReferrersList.push(obj.referrer)
          }
        }
      )
    }
  );

  var hackerNewsRefferersCountDataSource = window.DATA.map(
    function (item) {
      var result = {
        timestamp: item.timestamp,
      };
      item.hackerNews.referrers.forEach(
        function (obj) {
          result[obj.referrer] = obj.count
        }
      )
      return result
    }
  );

  var hackerNewsRefferersCountChart = $("#hacker-news-refferers-count-chart").dxChart({
    dataSource: hackerNewsRefferersCountDataSource,
    palette: palette,
    commonSeriesSettings: {
      type: "stackedarea",
      argumentField: "timestamp"
    },
    series: hackerNewsReferrersList.map(
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
    tooltip: {
      enabled: true,
      customizeTooltip(args) {
        return {
          text: args.seriesName + ' (' + args.value + ')'
        };
      }
    },
    legend: {
      verticalAlignment: "bottom",
      horizontalAlignment: "center"
    }
  }).dxChart("instance");

  var hackerNewsRefferersUniquesDataSource = window.DATA.map(
    function (item) {
      var result = {
        timestamp: item.timestamp,
      };
      item.hackerNews.referrers.forEach(
        function (obj) {
          result[obj.referrer] = obj.uniques
        }
      )
      return result
    }
  );

  var hackerNewsRefferersUniquesChart = $("#hacker-news-refferers-uniques-chart").dxChart({
    dataSource: hackerNewsRefferersUniquesDataSource,
    palette: palette,
    commonSeriesSettings: {
      type: "stackedarea",
      argumentField: "timestamp"
    },
    series: hackerNewsReferrersList.map(
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
    tooltip: {
      enabled: true,
      customizeTooltip(args) {
        return {
          text: args.seriesName + ' (' + args.value + ')'
        };
      }
    },
    legend: {
      verticalAlignment: "bottom",
      horizontalAlignment: "center"
    }
  }).dxChart("instance");

  $("#hacker-news-refferers-chart-types").dxSelectBox({
    dataSource: ["area", "stackedarea", "fullstackedarea"],
    value: "stackedarea",
    onValueChanged: function(e){
      hackerNewsRefferersCountChart.option("commonSeriesSettings.type", e.value);
      hackerNewsRefferersUniquesChart.option("commonSeriesSettings.type", e.value);
    }
  });

  var hackerNewsPagesList = [];

  window.DATA.forEach(
    function (item) {
      return item.hackerNews.pages.map(
        function (obj) {
          var path = obj.path.replace('/reimagined/hacker-news-resolve/tree/master', '').replace('reimagined/hacker-news-resolve', '').replace('//', '/');
          if(!hackerNewsPagesList.includes(path)) {
            hackerNewsPagesList.push(path)
          }
        }
      )
    }
  );

  var hackerNewsPagesCountDataSource = window.DATA.map(
    function (item) {
      var result = {
        timestamp: item.timestamp,
      };
      item.hackerNews.pages.forEach(
        function (obj) {
          var path = obj.path.replace('/reimagined/hacker-news-resolve/tree/master', '').replace('reimagined/hacker-news-resolve', '').replace('//', '/');
          result[path] = obj.count || 0
        }
      )
      return result
    }
  )

  var hackerNewsPagesCountChart = $("#hacker-news-pages-count-chart").dxChart({
    dataSource: hackerNewsPagesCountDataSource,
    palette: palette,
    commonSeriesSettings: {
      type: "stackedarea",
      argumentField: "timestamp"
    },
    series: hackerNewsPagesList.map(
      function (page) {
        return { valueField: page, name: page }
      }
    ),
    title: "pages count",
    useAggregation: true,
    argumentAxis: {
      valueMarginsEnabled: false,
      argumentType: 'datetime'
    },
    tooltip: {
      enabled: true,
      customizeTooltip(args) {
        return {
          text: args.seriesName + ' (' + args.value + ')'
        };
      }
    },
    legend: {
      verticalAlignment: "bottom",
      horizontalAlignment: "center"
    }
  }).dxChart("instance");

  var hackerNewsPagesUniquesDataSource = window.DATA.map(
    function (item) {
      var result = {
        timestamp: item.timestamp,
      };
      item.hackerNews.pages.forEach(
        function (obj) {
          var path = obj.path.replace('/reimagined/hacker-news-resolve/tree/master', '').replace('reimagined/hacker-news-resolve', '').replace('//', '/');
          result[path] = obj.uniques
        }
      )
      return result
    }
  );

  var hackerNewsPagesUniquesChart = $("#hacker-news-pages-uniques-chart").dxChart({
    dataSource: hackerNewsPagesUniquesDataSource,
    palette: palette,
    commonSeriesSettings: {
      type: "stackedarea",
      argumentField: "timestamp"
    },
    series: hackerNewsPagesList.map(
      function (page) {
        return { valueField: page, name: page }
      }
    ),
    title: "pages uniques",
    useAggregation: true,
    argumentAxis: {
      valueMarginsEnabled: false,
      argumentType: 'datetime'
    },
    tooltip: {
      enabled: true,
      customizeTooltip(args) {
        return {
          text: args.seriesName + ' (' + args.value + ')'
        };
      }
    },
    legend: {
      verticalAlignment: "bottom",
      horizontalAlignment: "center"
    }
  }).dxChart("instance");

  $("#hacker-news-pages-chart-types").dxSelectBox({
    dataSource: ["area", "stackedarea", "fullstackedarea"],
    value: "stackedarea",
    onValueChanged: function(e){
      hackerNewsPagesCountChart.option("commonSeriesSettings.type", e.value);
      hackerNewsagesUniquesChart.option("commonSeriesSettings.type", e.value);
    }
  });

  ////////////////////////////////////////

  var npmPackagesList = [];

  window.DATA.forEach(
    function (item) {
      return item.npm.map(
        function (obj) {
          if(!npmPackagesList.includes(obj.name)) {
            npmPackagesList.push(obj.name)
          }
        }
      )
    }
  );

  var npmDownloadsDataSource = window.DATA.map(
    function (item) {
      var result = {
        timestamp: item.timestamp,
      };
      item.npm.forEach(
        function (obj) {
          result[obj.name] = obj.downloads || 0
        }
      )
      return result
    }
  );

  var npmDownloadsChart = $("#npm-downloads-chart").dxChart({
    dataSource: npmDownloadsDataSource,
    palette: palette,
    commonSeriesSettings: {
      type: "stackedarea",
      argumentField: "timestamp"
    },
    series: npmPackagesList.map(
      function (packageName) {
        return { valueField: packageName, name: packageName }
      }
    ),
    title: "npm downloads",
    useAggregation: true,
    argumentAxis: {
      valueMarginsEnabled: false,
      argumentType: 'datetime'
    },
    tooltip: {
      enabled: true,
      customizeTooltip(args) {
        return {
          text: args.seriesName + ' (' + args.value + ')'
        };
      }
    },
    legend: {
      verticalAlignment: "bottom",
      horizontalAlignment: "center"
    }
  }).dxChart("instance");

  $("#npm-downloads-chart-types").dxSelectBox({
    dataSource: ["area", "stackedarea", "fullstackedarea"],
    value: "stackedarea",
    onValueChanged: function(e){
      npmDownloadsChart.option("commonSeriesSettings.type", e.value);
    }
  });

  var npmDownloadsAverageDataSource = window.DATA.map(
    function (item) {
      var result = {
        timestamp: item.timestamp,
        downloads: 0
      };
      item.npm.forEach(
        function (obj) {
          result.downloads += obj.downloads || 0
        }
      )
      result.downloads /= item.npm.length;
      return result
    }
  );

  var npmDownloadsAverageChart = $("#npm-downloads-average-chart").dxChart({
    dataSource: npmDownloadsAverageDataSource,
    title: 'npm downloads average',
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
      valueField: 'downloads',
      point: {
        size: 7
      }
    },
    tooltip: {
      enabled: true,
      customizeTooltip(args) {
        return {
          text: args.seriesName + ' (' + args.value + ')'
        };
      }
    }
  }).dxChart("instance");

  ////////////////////////////////////////
  ////////////////////////////////////////

  var dateDataSource = window.DATA.map(
    function (item) {
      return {
        timestamp: item.timestamp,
        value: 1
      }
    }
  );

  var rangeUpdateTimer;
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
      clearTimeout(rangeUpdateTimer);
      var dx = e.value[0];
      var dy = e.value[1];
      rangeUpdateTimer = setTimeout(function () {
        resolveWatchersChart.zoomArgument(dx, dy);
        resolveStarsChart.zoomArgument(dx, dy);
        resolveForksChart.zoomArgument(dx, dy);
        resolveIssuesChart.zoomArgument(dx, dy);
        resolveViewsCountChart.zoomArgument(dx, dy);
        resolveViewsUniquesChart.zoomArgument(dx, dy);
        resolveClonesCountChart.zoomArgument(dx, dy);
        resolveClonesUniquesChart.zoomArgument(dx, dy);
        resolveRefferersCountChart.zoomArgument(dx, dy);
        resolveRefferersUniquesChart.zoomArgument(dx, dy);
        resolvePagesCountChart.zoomArgument(dx, dy);
        resolvePagesUniquesChart.zoomArgument(dx, dy);

        hackerNewsWatchersChart.zoomArgument(dx, dy);
        hackerNewsStarsChart.zoomArgument(dx, dy);
        hackerNewsForksChart.zoomArgument(dx, dy);
        hackerNewsIssuesChart.zoomArgument(dx, dy);
        hackerNewsViewsCountChart.zoomArgument(dx, dy);
        hackerNewsViewsUniquesChart.zoomArgument(dx, dy);
        hackerNewsClonesCountChart.zoomArgument(dx, dy);
        hackerNewsClonesUniquesChart.zoomArgument(dx, dy);
        hackerNewsRefferersCountChart.zoomArgument(dx, dy);
        hackerNewsRefferersUniquesChart.zoomArgument(dx, dy);
        hackerNewsPagesCountChart.zoomArgument(dx, dy);
        hackerNewsPagesUniquesChart.zoomArgument(dx, dy);

        npmDownloadsChart.zoomArgument(dx, dy);
        npmDownloadsAverageChart.zoomArgument(dx, dy);
      }, 50)
    }
  });
});