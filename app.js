const { App } = require('@slack/bolt');

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SIGNING_SECRET,
    port: process.env.PORT || 3000
});

(async () => {
    await app.start();
    console.log("bolt works");
})();