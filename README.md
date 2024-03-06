# ILC Monitor

A script to monitor when Impartus is up because I got tired of refreshing the site.
You can also specify the interval at which to check if Impartus is up using `-t` or `--time`.

## Building

Firstly install `vercel/gcc` globally using `npm i -g @vercel/ncc`. Then execute the following commands for your OS.

- macOS: `ncc build app.js -o dist && npx pkg -t node18-macos-arm64 -o bin/ilc-monitor .`
- Windows: `ncc build app.js -o dist && npx pkg -t node18-win-arm64 -o bin/ilc-monitor .`
- Linux: `ncc build app.js -o dist && npx pkg -t node18-linux-arm64 -o bin/ilc-monitor .`

If I missed your particular OS or architecture, look up instructions [here](https://github.com/vercel/pkg?tab=readme-ov-file#targets)

The compilation may give some warning but it's okay

## Running

Run it normally on the terminal like any other executable, for example on macOS, `./path/to/binary` (optionally with time interval).
