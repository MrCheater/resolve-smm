import storage from './storage';
import express from 'express';
import fs from 'fs';
import path from 'path';

function getData() {
  return new Promise(resolve => {
    storage.find({}, function (err, docs) {
      resolve(docs.sort(
        (a, b) => (a.timestamp > b.timestamp ? 1 : a.timestamp < b.timestamp ? -1 : 0)
      ))
    });
  })
}

const app = express();
app.get('/', async(req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Marketing/Analytics</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/17.1.7/css/dx.spa.css" />
        <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/17.1.7/css/dx.common.css" />
        <link rel="dx-theme" data-theme="generic.light" href="https://cdn3.devexpress.com/jslib/17.1.7/css/dx.light.css" />
        <script src="https://cdn3.devexpress.com/jslib/17.1.7/js/dx.all.js"></script>
        <script src="client.js"></script>
        <script>
            window.DATA = ${JSON.stringify(await getData())}
        </script>
        <style>
            body, html {
                padding: 0;
                margin: 0;
                text-align: center;
            }
            table, tr, td, th, caption {
                vertical-align: top;
                padding: 0;
                margin: 0;
                border: 0;
                border-collapse: collapse;
            }
            table {
                width: 98%;
                border: 3px solid #333;
                border-left: 0;
                border-right: 0;
                box-sizing: border-box;
                margin-bottom: -3px;
            }
            caption {
                font-size: 32px;
                font-family: 'Segoe UI Light', 'Helvetica Neue Light', 'Segoe UI', 'Helvetica Neue', 'Trebuchet MS', Verdana;
                font-weight: 200;
                color: #232323;
            }
            #date-selector {
                position: fixed;
                left: 0;
                right: 0;
                bottom: 0;
                height: 100px;
                background-color: #eee;
            }
        </style>
    </head>
    <body>
        <table>
            <caption>Resolve</caption>
            <tr>
                <td width="33%">
                    <div id="resolve-watchers-zoomed-chart"></div>
                </td>
                <td width="33%">
                    <div id="resolve-stars-zoomed-chart"></div>
                </td>
                <td width="33%">
                    <div id="resolve-forks-zoomed-chart"></div>
                </td>
            </tr>
        </table>
        <table>
            <tr>
                <td width="100%">
                    <div id="resolve-issues-zoomed-chart"></div>
                </td>
            </tr>
        </table>
        <table>
            <tr>
                <td width="50%">
                    <div id="resolve-views-count-zoomed-chart"></div>
                </td>
                <td width="50%">
                    <div id="resolve-views-uniques-zoomed-chart"></div>
                </td>
            </tr>
        </table>
        <table>
            <tr>
                <td width="50%">
                    <div id="resolve-clones-count-zoomed-chart"></div>
                </td>
                <td width="50%">
                    <div id="resolve-clones-uniques-zoomed-chart"></div>
                </td>
            </tr>
        </table>
        <table>
            <tr>
                <td  width="50%">
                    <div id="resolve-refferers-count-chart"></div>
                </td>
                <td width="50%">
                    <div id="resolve-refferers-uniques-chart"></div>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <div id="resolve-refferers-chart-types"></div>
                </td>
            </tr>
        </table>
        <table>
            <tr>
                <td  width="50%">
                    <div id="resolve-pages-count-chart"></div>
                </td>
                <td width="50%">
                    <div id="resolve-pages-uniques-chart"></div>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <div id="resolve-pages-chart-types"></div>
                </td>
            </tr>
        </table>
        
        <table>
            <tr>
                <td style="background-color:#000">
                    <br/>
                </td>
            </tr>
        </table>
        
        <table>
            <caption>Hacker news</caption>
            <tr>
                <td width="33%">
                    <div id="hacker-news-watchers-zoomed-chart"></div>
                </td>
                <td width="33%">
                    <div id="hacker-news-stars-zoomed-chart"></div>
                </td>
                <td width="33%">
                    <div id="hacker-news-forks-zoomed-chart"></div>
                </td>
            </tr>
        </table>
        <table>
            <tr>
                <td width="100%">
                    <div id="hacker-news-issues-zoomed-chart"></div>
                </td>
            </tr>
        </table>
        <table>
            <tr>
                <td width="50%">
                    <div id="hacker-news-views-count-zoomed-chart"></div>
                </td>
                <td width="50%">
                    <div id="hacker-news-views-uniques-zoomed-chart"></div>
                </td>
            </tr>
        </table>
        <table>
            <tr>
                <td width="50%">
                    <div id="hacker-news-clones-count-zoomed-chart"></div>
                </td>
                <td width="50%">
                    <div id="hacker-news-clones-uniques-zoomed-chart"></div>
                </td>
            </tr>
        </table>
        <table>
            <tr>
                <td  width="50%">
                    <div id="hacker-news-refferers-count-chart"></div>
                </td>
                <td width="50%">
                    <div id="hacker-news-refferers-uniques-chart"></div>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <div id="hacker-news-refferers-chart-types"></div>
                </td>
            </tr>
        </table>
        <table>
            <tr>
                <td  width="50%">
                    <div id="hacker-news-pages-count-chart"></div>
                </td>
                <td width="50%">
                    <div id="hacker-news-pages-uniques-chart"></div>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <div id="hacker-news-pages-chart-types"></div>
                </td>
            </tr>
        </table>
        
        <table>
            <tr>
                <td style="background-color:#000">
                    <br/>
                </td>
            </tr>
        </table>
        
        <table>
            <caption>NPM</caption>
            <tr>
                <td width="50%">
                    <div id="npm-downloads-chart"></div>
                    <div id="npm-downloads-chart-types"></div>
                </td>
                <td width="50%">
                    <div id="npm-downloads-average-chart"></div>
                </td>
            </tr>
        </table>
        
        <div style="height:110px"></div>
        <div id="date-selector"></div>
    </body>
    </html>
  `)
})

app.get('/client.js', (req, res) => {
  fs.createReadStream(path.join(__dirname, './client.js')).pipe(res);
});

app.listen(8007)