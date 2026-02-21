const fs = require('fs');
const path = './_config.anzhiyu.yml';
let content = fs.readFileSync(path, 'utf8');

// Ensure the custom css is injected
if (!content.includes('href="/css/custom.css"')) {
    content = content.replace(/inject:\n  head:/, 'inject:\n  head:\n    - <link rel="stylesheet" href="/css/custom.css" media="defer" onload="this.media=\'all\'">');
}

fs.writeFileSync(path, content);
