const fs = require('fs');

let fileTree = {};

const walkDirectory = function(path, obj) {
  const dir = fs.readdirSync(path);
  for (let i = 0; i < dir.length; i++) {
    const name = dir[i];
    const target = path + '/' + name;
    const stats = fs.statSync(target);
    if (stats.isFile()) {
      console.log(name,'name')
      if (name.slice(-3) === 'mdx') {
        obj[name] = target;
      }
    } if (stats.isDirectory()) {
      obj[name] = {};
      walkDirectory(target, obj[name]);
    }
  }
};

walkDirectory('./pages', fileTree);

const makePath = () => fs.writeFileSync("structure.json", JSON.stringify(filetree));

makePath();

module.export = {
  makePath,
}