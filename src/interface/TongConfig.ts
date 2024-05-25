import { WebhookConfig } from './WebhookConfig';

interface TongConfig {
    default: string; // Default webhook provider
    config: { [provider: string]: WebhookConfig };
}

export { TongConfig };
