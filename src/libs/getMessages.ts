export async function getMessages(locale: string) {
    const message = await import(`@/messages/${locale}.json`);
    return message.default;
}