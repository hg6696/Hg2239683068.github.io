const fs = require('fs');
const path = './_config.anzhiyu.yml';
let content = fs.readFileSync(path, 'utf8');

// Replace all known default avatars with /img/hgblog.png
content = content.replace(/https:\/\/bu.dusays.com\/2023\/04\/27\/64496e511b09c.jpg/g, '/img/hgblog.png');
content = content.replace(/https:\/\/npm.elemecdn.com\/anzhiyu-blog-static@1.0.4\/img\/avatar.jpg/g, '/img/hgblog.png');

fs.writeFileSync(path, content);
