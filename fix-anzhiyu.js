const fs = require('fs');
const path = './_config.anzhiyu.yml';
let content = fs.readFileSync(path, 'utf8');

// Enable nav
content = content.replace(/nav:\n  enable: false/, 'nav:\n  enable: true');

// Optimize avatar
content = content.replace(/avatar:\n  img: https:\/\/bu.dusays.com\/2023\/04\/27\/64496e511b09c.jpg\n  effect: false/, 'avatar:\n  img: https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg\n  effect: true');

// Make banner nicer
content = content.replace(/index_img: false/, 'index_img: "background: url(https://picsum.photos/1920/1080?random=1) top / cover no-repeat"');

// Enable lazyload
content = content.replace(/lazyload:\n  enable: false/, 'lazyload:\n  enable: true');

// Turn on smooth scrolling
content = content.replace(/smooth_scroll:\n  enable: false/, 'smooth_scroll:\n  enable: true');

// Pjax
content = content.replace(/pjax:\n  enable: false/, 'pjax:\n  enable: true');

fs.writeFileSync(path, content);
