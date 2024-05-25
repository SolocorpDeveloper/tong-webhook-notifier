import { TongConfig } from '../interface/TongConfig';

const tongConfig: TongConfig = {
    default: "slack",
    config: {
        "slack": {
            webhook_url: "https://hooks.slack.com/services/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"
            // Add other Slack webhook configuration options if needed
        },
        "google-chat": {
            webhook_url: "https://your-google-chat-webhook-url"
            // Add other Google Chat webhook configuration options if needed
        }
        // Add configuration for other webhook providers as needed
    }
};

export default tongConfig;
