import tongConfig from '../config/TongConfig';
import { sendPostRequest } from '../services/Transporter';
import { SlackMessageFormatter } from '../app/formatter/SlackFormatter';

class TongNotifier {

    // Method to retrieve the webhook URL based on the specified provider or the default provider
    private getWebhookUrl(provider?: string): string {
        // Read the default provider from the configuration
        const defaultProvider = tongConfig.default;

        // Get the webhook URL based on the specified provider or the default provider
        const webhookUrl = provider ? tongConfig.config[provider]?.webhook_url : tongConfig.config[defaultProvider]?.webhook_url;

        // If no webhook URL is found, throw an error
        if (!webhookUrl) {
            throw new Error('Webhook URL not found for the specified provider or default provider');
        }

        return webhookUrl;
    }

    // Method to send a notification
    private async notify(message: any, provider?: string): Promise<void> {
        try {
            // Get the webhook URL
            const webhookUrl = this.getWebhookUrl(provider);

            // Send the notification
            await sendPostRequest(webhookUrl, message);
        } catch (error) {
            // If an error occurs during notification sending, throw an error
            throw new Error('Invalid configuration or webhook failed');
        }
    }

    // Method to send an info notification
    public async info(message: string, provider?: string): Promise<void> {
        // Format the message as an info message
        const formattedMessage = SlackMessageFormatter.formatInfoMessage(message);

        // Send the formatted message
        await this.notify(formattedMessage, provider);
    }

    // Method to send an error notification
    public async error(message: string, provider?: string): Promise<void> {
        // Format the message as an error message
        const formattedMessage = SlackMessageFormatter.formatErrorMessage(message);

        // Send the formatted message
        await this.notify(formattedMessage, provider);
    }

    // Method to send a warning notification
    public async warning(message: string, provider?: string): Promise<void> {
        // Format the message as a warning message
        const formattedMessage = SlackMessageFormatter.formatWarningMessage(message);

        // Send the formatted message
        await this.notify(formattedMessage, provider);
    }
}

export default TongNotifier;
