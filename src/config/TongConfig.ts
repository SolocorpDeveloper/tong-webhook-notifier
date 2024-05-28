import { TongConfig } from '../interface/TongConfig';

const tongConfig: TongConfig = {
    default: "slack",
    config: {
        "slack": {
            webhook_url: process.env.SLACK_WEBHOOK_URL || "https://hooks.slack.com/services/slackid"
        },
        "google-chat": {
            webhook_url: process.env.GOOGLE_CHAT_WEBHOOK_URL || "https://your-google-chat-webhook-url"
        }
        // Add configuration for other webhook providers as needed
    }
};

export default tongConfig;
