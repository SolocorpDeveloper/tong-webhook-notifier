# Ting Tong Notifier

Ting Tong Notifier is a simple TypeScript package for sending notifications to different messaging platforms like Slack and Google Chat.

## Installation

To install Ting Tong Notifier, simply run:

```bash
npm install ting-tong-notifier
```

## Usage

```typescript
import TongNotifier from 'ting-tong-notifier';

// Create an instance of TongNotifier
const tong = new TongNotifier();

// Now you can use the notifier instance to call the notify() method
tong.info("Ting Tong Info !");
tong.error("Ting Tong Error !");
tong.warning("Ting Tong Warning !");
```

## Configuration

Ting Tong Notifier requires configuration for different messaging platforms. By default, it uses Slack for notifications. You can configure other platforms like Google Chat by providing the webhook URL in the configuration. It's recommended to use environment variables for sensitive information like webhook URLs.

### Example Configuration using Environment Variables

Create environment variables for the webhook URLs:

```bash
export SLACK_WEBHOOK_URL="https://hooks.slack.com/services/slackid"
export GOOGLE_CHAT_WEBHOOK_URL="https://your-google-chat-webhook-url"
```

Then, you can use these environment variables in your configuration:

```typescript
import tongConfig from 'ting-tong-notifier/config/TongConfig';

const config = {
    default: "slack",
    config: {
        "slack": {
            webhook_url: process.env.SLACK_WEBHOOK_URL || "default_slack_webhook_url"
        },
        "google-chat": {
            webhook_url: process.env.GOOGLE_CHAT_WEBHOOK_URL || "default_google_chat_webhook_url"
        }
        // Add configuration for other webhook providers as needed
    }
};
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
