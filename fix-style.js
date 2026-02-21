const fs = require('fs');
const path = './_config.anzhiyu.yml';
let content = fs.readFileSync(path, 'utf8');

// Update avatar to use /img/hgblog.png
content = content.replace(/avatar:\n  img: .*\n  effect: (true|false)/g, 'avatar:\n  img: /img/hgblog.png\n  effect: true');

// Ensure custom.css is enabled
content = content.replace(/# - <link rel="stylesheet" href="\/css\/custom.css" media="defer" onload="this.media='all'">/, '- <link rel="stylesheet" href="/css/custom.css" media="defer" onload="this.media=\'all\'">');

fs.writeFileSync(path, content);
