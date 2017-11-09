import 'regenerator-runtime/runtime';
import axios from 'axios';
import GitHubApi from 'github';
import { promisify } from 'util';
import NeDB from 'nedb';
import secret from './secret';

async function script() {
  const storage = new NeDB({ filename: 'storage.txt', autoload: true });

  const sleep = () => new Promise(resolve => setTimeout(resolve, 100));

  const getNpmDownloads = async () => {
    const getResolvePackagesList = async () =>
      (await axios('https://www.npmjs.com/-/search?text=maintainer:reimagined&size=100')).data.objects.map(object => object['package'].name);

    const getDownloadsByPackage = async (name) => (await axios(`https://api.npmjs.org/downloads/point/last-day/${name}`)).data.downloads

    const result = [];

    for(const name of (await getResolvePackagesList())) {
      result.push({
        name,
        downloads: await getDownloadsByPackage(name)
      })

      await sleep();
    }

    return result;
  }

  const github = new GitHubApi({
    headers: {
      'Authorization': `bearer ${secret}`
    }
  });

  const getStatsByRepository = async (repo) => {
    const pages = (await promisify(github.repos.getPaths)({
      owner: 'reimagined',
      repo,
      per_page: 100
    })).data.filter(
      ({ path }) => {
        if(path.includes('/pull')) { return false }
        if(path.includes('/pulls')) { return false }
        if(path.includes('/pulse')) { return false }
        if(path.includes('/commits')) { return false }
        if(path.includes('/graphs')) { return false }
        if(path.includes('/issues')) { return false }
        if(path.includes('/branches')) { return false }
        return true;
      }
    ).map(
      ({ path, count, uniques }) => ({ path, count, uniques })
    );

    await sleep();

    const clones = (await promisify(github.repos.getClones)({
      owner: 'reimagined',
      repo,
      per_page: 100
    })).data;
    const clonesCount = clones.count;
    const clonesUniques = clones.uniques;

    await sleep();

    const views = (await promisify(github.repos.getViews)({
      owner: 'reimagined',
      repo,
      per_page: 100
    })).data;
    const viewsCount = views.count;
    const viewsUniques = views.uniques;

    await sleep();

    const referrers = (await promisify(github.repos.getReferrers)({
      owner: 'reimagined',
      repo,
      per_page: 100
    })).data;

    await sleep();

    const tagLatest = (Array.from((await promisify(github.repos.getTags)({
      owner: 'reimagined',
      repo,
      per_page: 100
    })).data)[0] || {}).name;

    await sleep();

    const issues = (await promisify(github.search.issues)({
      q: `reimagined/${repo} is:open`,
      per_page: 100
    })).data.total_count;

    await sleep();

    const releaseLatest = ((await promisify(github.repos.getReleases)({
      owner: 'reimagined',
      repo,
      per_page: 100
    })).data[0] || {}).name;

    await sleep();

    const forks = (await promisify(github.repos.getForks)({
      owner: 'reimagined',
      repo,
      per_page: 100
    })).data.length;

    await sleep();

    const stars = (await promisify(github.activity.getStargazersForRepo)({
      owner: 'reimagined',
      repo,
      per_page: 100
    })).data.length;

    await sleep();

    const watchers = (await promisify(github.activity.getWatchersForRepo)({
      owner: 'reimagined',
      repo,
      per_page: 100
    })).data.length;

    return {
      stars,
      forks,
      watchers,
      issues,
      clonesCount,
      clonesUniques,
      viewsCount,
      viewsUniques,
      tagLatest,
      releaseLatest,
      referrers,
      pages,
    };
  }

  const npm = await getNpmDownloads();
  const resolve = await getStatsByRepository('resolve');
  const hackerNews = await getStatsByRepository('hacker-news-resolve');

  const timestamp = Date.now();

  storage.insert({
    timestamp,
    resolve,
    hackerNews,
    npm
  }, (error) => {
    if(error) {
      console.error(error);
    }
  });
}

script();
setInterval(script, 1000 * 60 * 6)

