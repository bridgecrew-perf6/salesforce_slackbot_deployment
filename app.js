import pkg from '@slack/bolt';
import 'dotenv/config'

const { App } = pkg;

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    developerMode:true,
    socketMode: true,
});

app.event('app_mention', async ({ event, context, client, say }) => {
    try {
      await say({"blocks": [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": `Thanks for the mention <@${event.user}>! Here's a button`
          },
          "accessory": {
            "type": "button",
            "text": {
              "type": "plain_text",
              "text": "Button",
              "emoji": true
            },
            "value": "click_me_123",
            "action_id": "first_button"
          }
        }
      ]});
    }
    catch (error) {
      console.error(error);
    }
  });


(async () => {
    await app.start(process.env.PORT || 3000);

    console.log("bolt works");
})();
