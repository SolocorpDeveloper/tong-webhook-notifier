import tongConfig from '../config/TongConfig';
import { sendPostRequest } from '../services/Transporter';
import { SlackMessageFormatter } from '../app/formatter/SlackFormatter'

class TongNotifier {

    private webhookUrl: string;

    constructor() {
        this.webhookUrl = this.getWebhookUrl();
    }

    // Method to collect the webhook URL based on the specified provider or the default provider
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
    async sendNotification(message: string, format?: string, provider?: string): Promise<void> {
        // Get the webhook URL
        const webhookUrl = this.webhookUrl;
        
        // Format the message based on the specified format
        let formattedMessage;
        switch (format) {
            case 'info':
                formattedMessage = SlackMessageFormatter.formatInfoMessage(message);
                break;
            case 'error':
                formattedMessage = SlackMessageFormatter.formatErrorMessage(message);
                break;
            case 'warning':
                formattedMessage = SlackMessageFormatter.formatWarningMessage(message);
                break;
            default:
                formattedMessage = { text: message }; // Default format
                break;
        }
        
        // Send the notification
        try {
            await sendPostRequest(webhookUrl, formattedMessage);
        } catch (error) {
            throw new Error('Invalid configuration or webhook failed'); 
        }
    }
}

export default TongNotifier;
