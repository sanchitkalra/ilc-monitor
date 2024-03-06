const axios = require("axios");
const notifier = require("node-notifier");
var cron = require("node-cron");
const { Command } = require("commander");

const program = new Command();

program
  .name("ilc-monitor")
  .version("0.1", "-v, --version")
  .usage("[OPTIONS]...")
  .option(
    "-t, --time <interval>",
    "Time interval at which to periodically check if Impartus is working (default 5 minutes)"
  )
  .parse(process.argv);

const options = program.opts();

const timeInterval = options.time ? options.time : 5;
// console.log("specified time: ", timeInterval);

cron.schedule(`*/${timeInterval} * * * *`, () => {
  //   console.log("here");
  axios
    .get("http://172.16.3.20/", { timeout: 2000 })
    .then((_) => {
      //   console.log("site up, really?");
      notifier.notify({
        title: "Impartus Status Update",
        message: "Impartus is up!",
      });
    })
    .catch((_) => {
      // console.error("site ain't up");
      // notifier.notify({
      //   title: "Impartus Status Update",
      //   message: "Impartus is down :(",
      // });
    });
});
