import chokidar from 'chokidar';
import fs from 'fs';
import less from 'less';

console.log('The watch begins');
chokidar.watch('style.less')
  .on('change', () => {
    let lessInput = fs.readFileSync('style.less', { encoding: 'utf-8' });
      less.render(lessInput, { compress: true })
        .then((lessOutput, err) => {
          if ( err ) return console.log(err);
          fs.writeFileSync('style.min.css', lessOutput.css);
          console.log('Update');
        });
  })
