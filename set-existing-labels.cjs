const fs = require('fs');
const path = require('path');

const docsPath = path.join(__dirname, 'docs', 'modulos');

for (const moduleName of fs.readdirSync(docsPath)) {
  const modulePath = path.join(docsPath, moduleName);
  if (!fs.statSync(modulePath).isDirectory()) continue;

  for (const submoduleName of fs.readdirSync(modulePath)) {
    const submodulePath = path.join(modulePath, submoduleName);
    if (!fs.statSync(submodulePath).isDirectory()) continue;

    for (const fileName of fs.readdirSync(submodulePath)) {
      if (!fileName.endsWith('.mdx') || fileName === 'index.mdx' || /^exerc-\d+\.mdx$/.test(fileName)) continue;

      const filePath = path.join(submodulePath, fileName);
      const content = fs.readFileSync(filePath, 'utf8');
      const position = content.match(/^sidebar_position:\s*(\d+)\s*$/m);
      const heading = content.match(/^#\s+(.+)\s*$/m);
      if (!position || !heading) continue;

      const label = `${position[1]}.${heading[1].trim()}`;
      fs.writeFileSync(
        filePath,
        content.replace(/^sidebar_label:.*$/m, `sidebar_label: ${label}`),
        'utf8'
      );
    }
  }
}
