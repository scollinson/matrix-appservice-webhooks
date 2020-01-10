module.exports = (webhook, matrix) => {
    if (!webhook.text) return;

    if (!matrix.event.body)
        matrix.event.body = webhook.text;
};
