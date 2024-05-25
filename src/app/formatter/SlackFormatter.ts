export class SlackMessageFormatter {
    static formatInfoMessage(message: string): any {
        return { text: `:information_source: ${message}` }; // Hexacode for info message
    }

    static formatErrorMessage(message: string): any {
        return { text: `:x: ${message}` }; // Hexacode for error message
    }

    static formatWarningMessage(message: string): any {
        return { text: `:warning: ${message}` }; // Hexacode for warning message
    }
}
