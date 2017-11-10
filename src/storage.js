import NeDB from 'nedb';

export default new NeDB({
  filename: 'storage.txt',
  autoload: true
});