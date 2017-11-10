//import storage from './storage';
import express from 'express';
import fs from 'fs';
import path from 'path';

// async function getData() {
//   storage;
// }

async function getData() {
  return [
    {
      "timestamp": 1510233116864,
      "resolve": {
        "stars": 36,
        "forks": 9,
        "watchers": 17,
        "issues": 4,
        "clonesCount": 4684,
        "clonesUniques": 250,
        "viewsCount": 3251,
        "viewsUniques": 119,
        "tagLatest": "v0.0.44",
        "releaseLatest": "0.0.42",
        "referrers": [
          {
            "referrer": "github.com",
            "count": 603,
            "uniques": 63
          },
          {
            "referrer": "npmjs.com",
            "count": 34,
            "uniques": 13
          },
          {
            "referrer": "reimagined.github.io",
            "count": 19,
            "uniques": 4
          },
          {
            "referrer": "t.co",
            "count": 11,
            "uniques": 8
          },
          {
            "referrer": "teams.microsoft.com",
            "count": 8,
            "uniques": 2
          },
          {
            "referrer": "Google",
            "count": 7,
            "uniques": 4
          },
          {
            "referrer": "npms.io",
            "count": 3,
            "uniques": 1
          },
          {
            "referrer": "DuckDuckGo",
            "count": 1,
            "uniques": 1
          },
          {
            "referrer": "Yahoo",
            "count": 1,
            "uniques": 1
          }
        ],
        "pages": [
          {
            "path": "/reimagined/resolve",
            "count": 616,
            "uniques": 87
          },
          {
            "path": "/reimagined/resolve/tree/master/packages",
            "count": 59,
            "uniques": 12
          },
          {
            "path": "/reimagined/resolve/tree/master/packages/create-resolve-app",
            "count": 41,
            "uniques": 12
          }
        ]
      },
      "hackerNews": {
        "stars": 54,
        "forks": 6,
        "watchers": 15,
        "issues": 0,
        "clonesCount": 86,
        "clonesUniques": 10,
        "viewsCount": 1501,
        "viewsUniques": 245,
        "referrers": [
          {
            "referrer": "reddit.com",
            "count": 234,
            "uniques": 112
          },
          {
            "referrer": "github.com",
            "count": 196,
            "uniques": 23
          },
          {
            "referrer": "news.ycombinator.com",
            "count": 65,
            "uniques": 33
          },
          {
            "referrer": "hyperfeed.co",
            "count": 20,
            "uniques": 1
          },
          {
            "referrer": "Google",
            "count": 13,
            "uniques": 4
          },
          {
            "referrer": "t.co",
            "count": 9,
            "uniques": 3
          },
          {
            "referrer": "teams.microsoft.com",
            "count": 5,
            "uniques": 1
          },
          {
            "referrer": "facebook.com",
            "count": 4,
            "uniques": 2
          },
          {
            "referrer": "l.facebook.com",
            "count": 4,
            "uniques": 1
          },
          {
            "referrer": "hn.algolia.com",
            "count": 3,
            "uniques": 3
          }
        ],
        "pages": [
          {
            "path": "/reimagined/hacker-news-resolve",
            "count": 513,
            "uniques": 230
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/common",
            "count": 33,
            "uniques": 13
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/client",
            "count": 26,
            "uniques": 17
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/server",
            "count": 25,
            "uniques": 17
          }
        ]
      },
      "npm": [
        {
          "name": "resolve-bus-memory",
          "downloads": 4686
        },
        {
          "name": "resolve-command",
          "downloads": 4700
        },
        {
          "name": "resolve-es",
          "downloads": 4719
        },
        {
          "name": "resolve-bus-rabbitmq",
          "downloads": 4639
        },
        {
          "name": "resolve-bus-zmq",
          "downloads": 4641
        },
        {
          "name": "resolve-storage-mongo",
          "downloads": 4563
        },
        {
          "name": "resolve-storage-lite",
          "downloads": 2966
        },
        {
          "name": "resolve-query",
          "downloads": 4676
        },
        {
          "name": "resolve-readmodel-memory",
          "downloads": 2470
        },
        {
          "name": "create-resolve-app",
          "downloads": 3837
        },
        {
          "name": "resolve-redux",
          "downloads": 4629
        },
        {
          "name": "resolve-scripts",
          "downloads": 4159
        },
        {
          "name": "resolve-storage-base",
          "downloads": 2435
        },
        {
          "name": "resolve-es-mongo",
          "downloads": 0
        },
        {
          "name": "resolve-es-memory",
          "downloads": 0
        }
      ]
    },
    {
      "timestamp": 1510233116864 + (1000*60*60*6),
      "resolve": {
        "stars": 36 + 10,
        "forks": 9 + 10,
        "watchers": 17 + 10,
        "issues": 4 + 10,
        "clonesCount": 4684+1000,
        "clonesUniques": 250+50,
        "viewsCount": 3251+1000,
        "viewsUniques": 119+50,
        "tagLatest": "v0.0.45",
        "releaseLatest": "0.0.45",
        "referrers": [
          {
            "referrer": "vk.com",
            "count": 1203,
            "uniques": 63
          },
          {
            "referrer": "facebook.com",
            "count": 34,
            "uniques": 13
          },
          {
            "referrer": "reimagined.github.io",
            "count": 2,
            "uniques": 1
          },
          {
            "referrer": "t.co",
            "count": 200,
            "uniques": 8
          },
          {
            "referrer": "teams.microsoft.com",
            "count": 3,
            "uniques": 1
          },
          {
            "referrer": "Google",
            "count": 51,
            "uniques": 1
          },
          {
            "referrer": "npms.io",
            "count": 1,
            "uniques": 1
          },
          {
            "referrer": "DuckDuckGo",
            "count": 1,
            "uniques": 1
          },
          {
            "referrer": "Yahoo",
            "count": 1,
            "uniques": 1
          }
        ],
        "pages": [
          {
            "path": "/reimagined/resolve",
            "count": 1616,
            "uniques": 87
          },
          {
            "path": "/reimagined/resolve/tree/master/packages",
            "count": 159,
            "uniques": 12
          },
          {
            "path": "/reimagined/resolve/tree/master/packages/create-resolve-app",
            "count": 141,
            "uniques": 12
          }
        ]
      },
      "hackerNews": {
        "stars": 124,
        "forks": 16,
        "watchers": 115,
        "issues": 10,
        "clonesCount": 186,
        "clonesUniques": 110,
        "viewsCount": 11501,
        "viewsUniques": 1245,
        "referrers": [
          {
            "referrer": "reddit.com",
            "count": 1234,
            "uniques": 1112
          },
          {
            "referrer": "github.com",
            "count": 1196,
            "uniques": 123
          },
          {
            "referrer": "news.ycombinator.com",
            "count": 165,
            "uniques": 133
          },
          {
            "referrer": "hyperfeed.co",
            "count": 120,
            "uniques": 11
          },
          {
            "referrer": "Google",
            "count": 113,
            "uniques": 14
          },
          {
            "referrer": "t.co",
            "count": 19,
            "uniques": 13
          },
          {
            "referrer": "teams.microsoft.com",
            "count": 15,
            "uniques": 11
          },
          {
            "referrer": "facebook.com",
            "count": 14,
            "uniques": 12
          },
          {
            "referrer": "l.facebook.com",
            "count": 41,
            "uniques": 11
          },
          {
            "referrer": "hn.algolia.com",
            "count": 13,
            "uniques": 13
          }
        ],
        "pages": [
          {
            "path": "/reimagined/hacker-news-resolve",
            "count": 1513,
            "uniques": 1230
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/common",
            "count": 133,
            "uniques": 113
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/client",
            "count": 126,
            "uniques": 117
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/server",
            "count": 125,
            "uniques": 117
          }
        ]
      },
      "npm": [
        {
          "name": "resolve-bus-memory",
          "downloads": 14686
        },
        {
          "name": "resolve-command",
          "downloads": 14700
        },
        {
          "name": "resolve-es",
          "downloads": 14719
        },
        {
          "name": "resolve-bus-rabbitmq",
          "downloads": 14639
        },
        {
          "name": "resolve-bus-zmq",
          "downloads": 14641
        },
        {
          "name": "resolve-storage-mongo",
          "downloads": 14563
        },
        {
          "name": "resolve-storage-lite",
          "downloads": 12966
        },
        {
          "name": "resolve-query",
          "downloads": 14676
        },
        {
          "name": "resolve-readmodel-memory",
          "downloads": 12470
        },
        {
          "name": "create-resolve-app",
          "downloads": 13837
        },
        {
          "name": "resolve-redux",
          "downloads": 14629
        },
        {
          "name": "resolve-scripts",
          "downloads": 14159
        },
        {
          "name": "resolve-storage-base",
          "downloads": 12435
        },
        {
          "name": "resolve-es-mongo",
          "downloads": 10
        },
        {
          "name": "resolve-es-memory",
          "downloads": 10
        }
      ]
    },
    {
      "timestamp": 1510233116864 + (1000*60*60*6) + (1000*60*60*6),
      "resolve": {
        "stars": 36,
        "forks": 9,
        "watchers": 17,
        "issues": 4,
        "clonesCount": 4684,
        "clonesUniques": 250,
        "viewsCount": 3251,
        "viewsUniques": 119,
        "tagLatest": "v0.0.44",
        "releaseLatest": "0.0.42",
        "referrers": [
          {
            "referrer": "github.com",
            "count": 603,
            "uniques": 63
          },
          {
            "referrer": "npmjs.com",
            "count": 34,
            "uniques": 13
          },
          {
            "referrer": "reimagined.github.io",
            "count": 19,
            "uniques": 4
          },
          {
            "referrer": "t.co",
            "count": 11,
            "uniques": 8
          },
          {
            "referrer": "teams.microsoft.com",
            "count": 8,
            "uniques": 2
          },
          {
            "referrer": "Google",
            "count": 7,
            "uniques": 4
          },
          {
            "referrer": "npms.io",
            "count": 3,
            "uniques": 1
          },
          {
            "referrer": "DuckDuckGo",
            "count": 1,
            "uniques": 1
          },
          {
            "referrer": "Yahoo",
            "count": 1,
            "uniques": 1
          }
        ],
        "pages": [
          {
            "path": "/reimagined/resolve",
            "count": 616,
            "uniques": 87
          },
          {
            "path": "/reimagined/resolve/tree/master/packages",
            "count": 59,
            "uniques": 12
          },
          {
            "path": "/reimagined/resolve/tree/master/packages/create-resolve-app",
            "count": 41,
            "uniques": 12
          }
        ]
      },
      "hackerNews": {
        "stars": 54,
        "forks": 6,
        "watchers": 15,
        "issues": 0,
        "clonesCount": 86,
        "clonesUniques": 10,
        "viewsCount": 1501,
        "viewsUniques": 245,
        "referrers": [
          {
            "referrer": "reddit.com",
            "count": 234,
            "uniques": 112
          },
          {
            "referrer": "github.com",
            "count": 196,
            "uniques": 23
          },
          {
            "referrer": "news.ycombinator.com",
            "count": 65,
            "uniques": 33
          },
          {
            "referrer": "hyperfeed.co",
            "count": 20,
            "uniques": 1
          },
          {
            "referrer": "Google",
            "count": 13,
            "uniques": 4
          },
          {
            "referrer": "t.co",
            "count": 9,
            "uniques": 3
          },
          {
            "referrer": "teams.microsoft.com",
            "count": 5,
            "uniques": 1
          },
          {
            "referrer": "facebook.com",
            "count": 4,
            "uniques": 2
          },
          {
            "referrer": "l.facebook.com",
            "count": 4,
            "uniques": 1
          },
          {
            "referrer": "hn.algolia.com",
            "count": 3,
            "uniques": 3
          }
        ],
        "pages": [
          {
            "path": "/reimagined/hacker-news-resolve",
            "count": 513,
            "uniques": 230
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/common",
            "count": 33,
            "uniques": 13
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/client",
            "count": 26,
            "uniques": 17
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/server",
            "count": 25,
            "uniques": 17
          }
        ]
      },
      "npm": [
        {
          "name": "resolve-bus-memory",
          "downloads": 4686
        },
        {
          "name": "resolve-command",
          "downloads": 4700
        },
        {
          "name": "resolve-es",
          "downloads": 4719
        },
        {
          "name": "resolve-bus-rabbitmq",
          "downloads": 4639
        },
        {
          "name": "resolve-bus-zmq",
          "downloads": 4641
        },
        {
          "name": "resolve-storage-mongo",
          "downloads": 4563
        },
        {
          "name": "resolve-storage-lite",
          "downloads": 2966
        },
        {
          "name": "resolve-query",
          "downloads": 4676
        },
        {
          "name": "resolve-readmodel-memory",
          "downloads": 2470
        },
        {
          "name": "create-resolve-app",
          "downloads": 3837
        },
        {
          "name": "resolve-redux",
          "downloads": 4629
        },
        {
          "name": "resolve-scripts",
          "downloads": 4159
        },
        {
          "name": "resolve-storage-base",
          "downloads": 2435
        },
        {
          "name": "resolve-es-mongo",
          "downloads": 0
        },
        {
          "name": "resolve-es-memory",
          "downloads": 0
        }
      ]
    },
    {
      "timestamp": 1510233116864 + (1000*60*60*6) + (1000*60*60*6) + (1000*60*60*6),
      "resolve": {
        "stars": 36 + 10,
        "forks": 9 + 10,
        "watchers": 17 + 10,
        "issues": 4 + 10,
        "clonesCount": 4684+1000,
        "clonesUniques": 250+50,
        "viewsCount": 3251+1000,
        "viewsUniques": 119+50,
        "tagLatest": "v0.0.45",
        "releaseLatest": "0.0.45",
        "referrers": [
          {
            "referrer": "vk.com",
            "count": 1203,
            "uniques": 63
          },
          {
            "referrer": "facebook.com",
            "count": 34,
            "uniques": 13
          },
          {
            "referrer": "reimagined.github.io",
            "count": 2,
            "uniques": 1
          },
          {
            "referrer": "t.co",
            "count": 200,
            "uniques": 8
          },
          {
            "referrer": "teams.microsoft.com",
            "count": 3,
            "uniques": 1
          },
          {
            "referrer": "Google",
            "count": 51,
            "uniques": 1
          },
          {
            "referrer": "npms.io",
            "count": 1,
            "uniques": 1
          },
          {
            "referrer": "DuckDuckGo",
            "count": 1,
            "uniques": 1
          },
          {
            "referrer": "Yahoo",
            "count": 1,
            "uniques": 1
          }
        ],
        "pages": [
          {
            "path": "/reimagined/resolve",
            "count": 1616,
            "uniques": 87
          },
          {
            "path": "/reimagined/resolve/tree/master/packages",
            "count": 159,
            "uniques": 12
          },
          {
            "path": "/reimagined/resolve/tree/master/packages/create-resolve-app",
            "count": 141,
            "uniques": 12
          }
        ]
      },
      "hackerNews": {
        "stars": 124,
        "forks": 16,
        "watchers": 115,
        "issues": 10,
        "clonesCount": 186,
        "clonesUniques": 110,
        "viewsCount": 11501,
        "viewsUniques": 1245,
        "referrers": [
          {
            "referrer": "reddit.com",
            "count": 1234,
            "uniques": 1112
          },
          {
            "referrer": "github.com",
            "count": 1196,
            "uniques": 123
          },
          {
            "referrer": "news.ycombinator.com",
            "count": 165,
            "uniques": 133
          },
          {
            "referrer": "hyperfeed.co",
            "count": 120,
            "uniques": 11
          },
          {
            "referrer": "Google",
            "count": 113,
            "uniques": 14
          },
          {
            "referrer": "t.co",
            "count": 19,
            "uniques": 13
          },
          {
            "referrer": "teams.microsoft.com",
            "count": 15,
            "uniques": 11
          },
          {
            "referrer": "facebook.com",
            "count": 14,
            "uniques": 12
          },
          {
            "referrer": "l.facebook.com",
            "count": 41,
            "uniques": 11
          },
          {
            "referrer": "hn.algolia.com",
            "count": 13,
            "uniques": 13
          }
        ],
        "pages": [
          {
            "path": "/reimagined/hacker-news-resolve",
            "count": 1513,
            "uniques": 1230
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/common",
            "count": 133,
            "uniques": 113
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/client",
            "count": 126,
            "uniques": 117
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/server",
            "count": 125,
            "uniques": 117
          }
        ]
      },
      "npm": [
        {
          "name": "resolve-bus-memory",
          "downloads": 14686
        },
        {
          "name": "resolve-command",
          "downloads": 14700
        },
        {
          "name": "resolve-es",
          "downloads": 14719
        },
        {
          "name": "resolve-bus-rabbitmq",
          "downloads": 14639
        },
        {
          "name": "resolve-bus-zmq",
          "downloads": 14641
        },
        {
          "name": "resolve-storage-mongo",
          "downloads": 14563
        },
        {
          "name": "resolve-storage-lite",
          "downloads": 12966
        },
        {
          "name": "resolve-query",
          "downloads": 14676
        },
        {
          "name": "resolve-readmodel-memory",
          "downloads": 12470
        },
        {
          "name": "create-resolve-app",
          "downloads": 13837
        },
        {
          "name": "resolve-redux",
          "downloads": 14629
        },
        {
          "name": "resolve-scripts",
          "downloads": 14159
        },
        {
          "name": "resolve-storage-base",
          "downloads": 12435
        },
        {
          "name": "resolve-es-mongo",
          "downloads": 10
        },
        {
          "name": "resolve-es-memory",
          "downloads": 10
        }
      ]
    },{
      "timestamp": 1510233116864 + (1000*60*60*6) + (1000*60*60*6) + (1000*60*60*6) + (1000*60*60*6),
      "resolve": {
        "stars": 36,
        "forks": 9,
        "watchers": 17,
        "issues": 4,
        "clonesCount": 4684,
        "clonesUniques": 250,
        "viewsCount": 3251,
        "viewsUniques": 119,
        "tagLatest": "v0.0.44",
        "releaseLatest": "0.0.42",
        "referrers": [
          {
            "referrer": "github.com",
            "count": 603,
            "uniques": 63
          },
          {
            "referrer": "npmjs.com",
            "count": 34,
            "uniques": 13
          },
          {
            "referrer": "reimagined.github.io",
            "count": 19,
            "uniques": 4
          },
          {
            "referrer": "t.co",
            "count": 11,
            "uniques": 8
          },
          {
            "referrer": "teams.microsoft.com",
            "count": 8,
            "uniques": 2
          },
          {
            "referrer": "Google",
            "count": 7,
            "uniques": 4
          },
          {
            "referrer": "npms.io",
            "count": 3,
            "uniques": 1
          },
          {
            "referrer": "DuckDuckGo",
            "count": 1,
            "uniques": 1
          },
          {
            "referrer": "Yahoo",
            "count": 1,
            "uniques": 1
          }
        ],
        "pages": [
          {
            "path": "/reimagined/resolve",
            "count": 616,
            "uniques": 87
          },
          {
            "path": "/reimagined/resolve/tree/master/packages",
            "count": 59,
            "uniques": 12
          },
          {
            "path": "/reimagined/resolve/tree/master/packages/create-resolve-app",
            "count": 41,
            "uniques": 12
          }
        ]
      },
      "hackerNews": {
        "stars": 54,
        "forks": 6,
        "watchers": 15,
        "issues": 0,
        "clonesCount": 86,
        "clonesUniques": 10,
        "viewsCount": 1501,
        "viewsUniques": 245,
        "referrers": [
          {
            "referrer": "reddit.com",
            "count": 234,
            "uniques": 112
          },
          {
            "referrer": "github.com",
            "count": 196,
            "uniques": 23
          },
          {
            "referrer": "news.ycombinator.com",
            "count": 65,
            "uniques": 33
          },
          {
            "referrer": "hyperfeed.co",
            "count": 20,
            "uniques": 1
          },
          {
            "referrer": "Google",
            "count": 13,
            "uniques": 4
          },
          {
            "referrer": "t.co",
            "count": 9,
            "uniques": 3
          },
          {
            "referrer": "teams.microsoft.com",
            "count": 5,
            "uniques": 1
          },
          {
            "referrer": "facebook.com",
            "count": 4,
            "uniques": 2
          },
          {
            "referrer": "l.facebook.com",
            "count": 4,
            "uniques": 1
          },
          {
            "referrer": "hn.algolia.com",
            "count": 3,
            "uniques": 3
          }
        ],
        "pages": [
          {
            "path": "/reimagined/hacker-news-resolve",
            "count": 513,
            "uniques": 230
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/common",
            "count": 33,
            "uniques": 13
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/client",
            "count": 26,
            "uniques": 17
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/server",
            "count": 25,
            "uniques": 17
          }
        ]
      },
      "npm": [
        {
          "name": "resolve-bus-memory",
          "downloads": 4686
        },
        {
          "name": "resolve-command",
          "downloads": 4700
        },
        {
          "name": "resolve-es",
          "downloads": 4719
        },
        {
          "name": "resolve-bus-rabbitmq",
          "downloads": 4639
        },
        {
          "name": "resolve-bus-zmq",
          "downloads": 4641
        },
        {
          "name": "resolve-storage-mongo",
          "downloads": 4563
        },
        {
          "name": "resolve-storage-lite",
          "downloads": 2966
        },
        {
          "name": "resolve-query",
          "downloads": 4676
        },
        {
          "name": "resolve-readmodel-memory",
          "downloads": 2470
        },
        {
          "name": "create-resolve-app",
          "downloads": 3837
        },
        {
          "name": "resolve-redux",
          "downloads": 4629
        },
        {
          "name": "resolve-scripts",
          "downloads": 4159
        },
        {
          "name": "resolve-storage-base",
          "downloads": 2435
        },
        {
          "name": "resolve-es-mongo",
          "downloads": 0
        },
        {
          "name": "resolve-es-memory",
          "downloads": 0
        }
      ]
    },
    {
      "timestamp": 1510233116864 + (1000*60*60*6) + (1000*60*60*6) + (1000*60*60*6) + (1000*60*60*6) + (1000*60*60*6),
      "resolve": {
        "stars": 36 + 10,
        "forks": 9 + 10,
        "watchers": 17 + 10,
        "issues": 4 + 10,
        "clonesCount": 4684+1000,
        "clonesUniques": 250+50,
        "viewsCount": 3251+1000,
        "viewsUniques": 119+50,
        "tagLatest": "v0.0.45",
        "releaseLatest": "0.0.45",
        "referrers": [
          {
            "referrer": "vk.com",
            "count": 1203,
            "uniques": 63
          },
          {
            "referrer": "facebook.com",
            "count": 34,
            "uniques": 13
          },
          {
            "referrer": "reimagined.github.io",
            "count": 2,
            "uniques": 1
          },
          {
            "referrer": "t.co",
            "count": 200,
            "uniques": 8
          },
          {
            "referrer": "teams.microsoft.com",
            "count": 3,
            "uniques": 1
          },
          {
            "referrer": "Google",
            "count": 51,
            "uniques": 1
          },
          {
            "referrer": "npms.io",
            "count": 1,
            "uniques": 1
          },
          {
            "referrer": "DuckDuckGo",
            "count": 1,
            "uniques": 1
          },
          {
            "referrer": "Yahoo",
            "count": 1,
            "uniques": 1
          }
        ],
        "pages": [
          {
            "path": "/reimagined/resolve",
            "count": 1616,
            "uniques": 87
          },
          {
            "path": "/reimagined/resolve/tree/master/packages",
            "count": 159,
            "uniques": 12
          },
          {
            "path": "/reimagined/resolve/tree/master/packages/create-resolve-app",
            "count": 141,
            "uniques": 12
          }
        ]
      },
      "hackerNews": {
        "stars": 124,
        "forks": 16,
        "watchers": 115,
        "issues": 10,
        "clonesCount": 186,
        "clonesUniques": 110,
        "viewsCount": 11501,
        "viewsUniques": 1245,
        "referrers": [
          {
            "referrer": "reddit.com",
            "count": 1234,
            "uniques": 1112
          },
          {
            "referrer": "github.com",
            "count": 1196,
            "uniques": 123
          },
          {
            "referrer": "news.ycombinator.com",
            "count": 165,
            "uniques": 133
          },
          {
            "referrer": "hyperfeed.co",
            "count": 120,
            "uniques": 11
          },
          {
            "referrer": "Google",
            "count": 113,
            "uniques": 14
          },
          {
            "referrer": "t.co",
            "count": 19,
            "uniques": 13
          },
          {
            "referrer": "teams.microsoft.com",
            "count": 15,
            "uniques": 11
          },
          {
            "referrer": "facebook.com",
            "count": 14,
            "uniques": 12
          },
          {
            "referrer": "l.facebook.com",
            "count": 41,
            "uniques": 11
          },
          {
            "referrer": "hn.algolia.com",
            "count": 13,
            "uniques": 13
          }
        ],
        "pages": [
          {
            "path": "/reimagined/hacker-news-resolve",
            "count": 1513,
            "uniques": 1230
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/common",
            "count": 133,
            "uniques": 113
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/client",
            "count": 126,
            "uniques": 117
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/server",
            "count": 125,
            "uniques": 117
          }
        ]
      },
      "npm": [
        {
          "name": "resolve-bus-memory",
          "downloads": 14686
        },
        {
          "name": "resolve-command",
          "downloads": 14700
        },
        {
          "name": "resolve-es",
          "downloads": 14719
        },
        {
          "name": "resolve-bus-rabbitmq",
          "downloads": 14639
        },
        {
          "name": "resolve-bus-zmq",
          "downloads": 14641
        },
        {
          "name": "resolve-storage-mongo",
          "downloads": 14563
        },
        {
          "name": "resolve-storage-lite",
          "downloads": 12966
        },
        {
          "name": "resolve-query",
          "downloads": 14676
        },
        {
          "name": "resolve-readmodel-memory",
          "downloads": 12470
        },
        {
          "name": "create-resolve-app",
          "downloads": 13837
        },
        {
          "name": "resolve-redux",
          "downloads": 14629
        },
        {
          "name": "resolve-scripts",
          "downloads": 14159
        },
        {
          "name": "resolve-storage-base",
          "downloads": 12435
        },
        {
          "name": "resolve-es-mongo",
          "downloads": 10
        },
        {
          "name": "resolve-es-memory",
          "downloads": 10
        }
      ]
    },{
      "timestamp": 1510233116864 + (1000*60*60*6) + (1000*60*60*6) + (1000*60*60*6) + (1000*60*60*6) + (1000*60*60*6) + (1000*60*60*6),
      "resolve": {
        "stars": 36,
        "forks": 9,
        "watchers": 17,
        "issues": 4,
        "clonesCount": 4684,
        "clonesUniques": 250,
        "viewsCount": 3251,
        "viewsUniques": 119,
        "tagLatest": "v0.0.44",
        "releaseLatest": "0.0.42",
        "referrers": [
          {
            "referrer": "github.com",
            "count": 603,
            "uniques": 63
          },
          {
            "referrer": "npmjs.com",
            "count": 34,
            "uniques": 13
          },
          {
            "referrer": "reimagined.github.io",
            "count": 19,
            "uniques": 4
          },
          {
            "referrer": "t.co",
            "count": 11,
            "uniques": 8
          },
          {
            "referrer": "teams.microsoft.com",
            "count": 8,
            "uniques": 2
          },
          {
            "referrer": "Google",
            "count": 7,
            "uniques": 4
          },
          {
            "referrer": "npms.io",
            "count": 3,
            "uniques": 1
          },
          {
            "referrer": "DuckDuckGo",
            "count": 1,
            "uniques": 1
          },
          {
            "referrer": "Yahoo",
            "count": 1,
            "uniques": 1
          }
        ],
        "pages": [
          {
            "path": "/reimagined/resolve",
            "count": 616,
            "uniques": 87
          },
          {
            "path": "/reimagined/resolve/tree/master/packages",
            "count": 59,
            "uniques": 12
          },
          {
            "path": "/reimagined/resolve/tree/master/packages/create-resolve-app",
            "count": 41,
            "uniques": 12
          }
        ]
      },
      "hackerNews": {
        "stars": 54,
        "forks": 6,
        "watchers": 15,
        "issues": 0,
        "clonesCount": 86,
        "clonesUniques": 10,
        "viewsCount": 1501,
        "viewsUniques": 245,
        "referrers": [
          {
            "referrer": "reddit.com",
            "count": 234,
            "uniques": 112
          },
          {
            "referrer": "github.com",
            "count": 196,
            "uniques": 23
          },
          {
            "referrer": "news.ycombinator.com",
            "count": 65,
            "uniques": 33
          },
          {
            "referrer": "hyperfeed.co",
            "count": 20,
            "uniques": 1
          },
          {
            "referrer": "Google",
            "count": 13,
            "uniques": 4
          },
          {
            "referrer": "t.co",
            "count": 9,
            "uniques": 3
          },
          {
            "referrer": "teams.microsoft.com",
            "count": 5,
            "uniques": 1
          },
          {
            "referrer": "facebook.com",
            "count": 4,
            "uniques": 2
          },
          {
            "referrer": "l.facebook.com",
            "count": 4,
            "uniques": 1
          },
          {
            "referrer": "hn.algolia.com",
            "count": 3,
            "uniques": 3
          }
        ],
        "pages": [
          {
            "path": "/reimagined/hacker-news-resolve",
            "count": 513,
            "uniques": 230
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/common",
            "count": 33,
            "uniques": 13
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/client",
            "count": 26,
            "uniques": 17
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/server",
            "count": 25,
            "uniques": 17
          }
        ]
      },
      "npm": [
        {
          "name": "resolve-bus-memory",
          "downloads": 4686
        },
        {
          "name": "resolve-command",
          "downloads": 4700
        },
        {
          "name": "resolve-es",
          "downloads": 4719
        },
        {
          "name": "resolve-bus-rabbitmq",
          "downloads": 4639
        },
        {
          "name": "resolve-bus-zmq",
          "downloads": 4641
        },
        {
          "name": "resolve-storage-mongo",
          "downloads": 4563
        },
        {
          "name": "resolve-storage-lite",
          "downloads": 2966
        },
        {
          "name": "resolve-query",
          "downloads": 4676
        },
        {
          "name": "resolve-readmodel-memory",
          "downloads": 2470
        },
        {
          "name": "create-resolve-app",
          "downloads": 3837
        },
        {
          "name": "resolve-redux",
          "downloads": 4629
        },
        {
          "name": "resolve-scripts",
          "downloads": 4159
        },
        {
          "name": "resolve-storage-base",
          "downloads": 2435
        },
        {
          "name": "resolve-es-mongo",
          "downloads": 0
        },
        {
          "name": "resolve-es-memory",
          "downloads": 0
        }
      ]
    },
    {
      "timestamp": 1510233116864 + (1000*60*60*6) + (1000*60*60*6) + (1000*60*60*6) + (1000*60*60*6) + (1000*60*60*6) + (1000*60*60*6) + (1000*60*60*6),
      "resolve": {
        "stars": 36 + 10,
        "forks": 9 + 10,
        "watchers": 17 + 10,
        "issues": 4 + 10,
        "clonesCount": 4684+1000,
        "clonesUniques": 250+50,
        "viewsCount": 3251+1000,
        "viewsUniques": 119+50,
        "tagLatest": "v0.0.45",
        "releaseLatest": "0.0.45",
        "referrers": [
          {
            "referrer": "vk.com",
            "count": 1203,
            "uniques": 63
          },
          {
            "referrer": "facebook.com",
            "count": 34,
            "uniques": 13
          },
          {
            "referrer": "reimagined.github.io",
            "count": 2,
            "uniques": 1
          },
          {
            "referrer": "t.co",
            "count": 200,
            "uniques": 8
          },
          {
            "referrer": "teams.microsoft.com",
            "count": 3,
            "uniques": 1
          },
          {
            "referrer": "Google",
            "count": 51,
            "uniques": 1
          },
          {
            "referrer": "npms.io",
            "count": 1,
            "uniques": 1
          },
          {
            "referrer": "DuckDuckGo",
            "count": 1,
            "uniques": 1
          },
          {
            "referrer": "Yahoo",
            "count": 1,
            "uniques": 1
          }
        ],
        "pages": [
          {
            "path": "/reimagined/resolve",
            "count": 1616,
            "uniques": 87
          },
          {
            "path": "/reimagined/resolve/tree/master/packages",
            "count": 159,
            "uniques": 12
          },
          {
            "path": "/reimagined/resolve/tree/master/packages/create-resolve-app",
            "count": 141,
            "uniques": 12
          }
        ]
      },
      "hackerNews": {
        "stars": 124,
        "forks": 16,
        "watchers": 115,
        "issues": 10,
        "clonesCount": 186,
        "clonesUniques": 110,
        "viewsCount": 11501,
        "viewsUniques": 1245,
        "referrers": [
          {
            "referrer": "reddit.com",
            "count": 1234,
            "uniques": 1112
          },
          {
            "referrer": "github.com",
            "count": 1196,
            "uniques": 123
          },
          {
            "referrer": "news.ycombinator.com",
            "count": 165,
            "uniques": 133
          },
          {
            "referrer": "hyperfeed.co",
            "count": 120,
            "uniques": 11
          },
          {
            "referrer": "Google",
            "count": 113,
            "uniques": 14
          },
          {
            "referrer": "t.co",
            "count": 19,
            "uniques": 13
          },
          {
            "referrer": "teams.microsoft.com",
            "count": 15,
            "uniques": 11
          },
          {
            "referrer": "facebook.com",
            "count": 14,
            "uniques": 12
          },
          {
            "referrer": "l.facebook.com",
            "count": 41,
            "uniques": 11
          },
          {
            "referrer": "hn.algolia.com",
            "count": 13,
            "uniques": 13
          }
        ],
        "pages": [
          {
            "path": "/reimagined/hacker-news-resolve",
            "count": 1513,
            "uniques": 1230
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/common",
            "count": 133,
            "uniques": 113
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/client",
            "count": 126,
            "uniques": 117
          },
          {
            "path": "/reimagined/hacker-news-resolve/tree/master/server",
            "count": 125,
            "uniques": 117
          }
        ]
      },
      "npm": [
        {
          "name": "resolve-bus-memory",
          "downloads": 14686
        },
        {
          "name": "resolve-command",
          "downloads": 14700
        },
        {
          "name": "resolve-es",
          "downloads": 14719
        },
        {
          "name": "resolve-bus-rabbitmq",
          "downloads": 14639
        },
        {
          "name": "resolve-bus-zmq",
          "downloads": 14641
        },
        {
          "name": "resolve-storage-mongo",
          "downloads": 14563
        },
        {
          "name": "resolve-storage-lite",
          "downloads": 12966
        },
        {
          "name": "resolve-query",
          "downloads": 14676
        },
        {
          "name": "resolve-readmodel-memory",
          "downloads": 12470
        },
        {
          "name": "create-resolve-app",
          "downloads": 13837
        },
        {
          "name": "resolve-redux",
          "downloads": 14629
        },
        {
          "name": "resolve-scripts",
          "downloads": 14159
        },
        {
          "name": "resolve-storage-base",
          "downloads": 12435
        },
        {
          "name": "resolve-es-mongo",
          "downloads": 10
        },
        {
          "name": "resolve-es-memory",
          "downloads": 10
        }
      ]
    },
  ];
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
            }
            table, tr, td, th, caption {
                padding: 0;
                margin: 0;
                border: 0;
                border-collapse: collapse;
            }
            table {
                width: 100%;
                border: 3px solid #333;
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