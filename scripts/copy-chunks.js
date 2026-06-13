const fs = require('fs');
const path = require('path');

async function copyChunks() {
  const serverDir = path.join(__dirname, '..', '.next', 'server');
  const chunksDir = path.join(serverDir, 'chunks');
  try {
    if (!fs.existsSync(chunksDir)) return;
    const files = fs.readdirSync(chunksDir).filter(f => f.endsWith('.js'));
    for (const f of files) {
      const src = path.join(chunksDir, f);
      const dest = path.join(serverDir, f);
      try {
        fs.copyFileSync(src, dest);
      } catch (err) {
        // ignore individual copy errors
      }
    }
    console.log(`Copied ${files.length} chunk(s) from chunks/ to server/`);
  } catch (err) {
    console.error('copy-chunks failed:', err && err.message);
    process.exitCode = 1;
  }
}

copyChunks();
