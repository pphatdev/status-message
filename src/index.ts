interface MessageOptions {
    icon?: string;
    title?: string;
}

export const messages: Record<number, (option?: { icon: string; title: string }) => MessageOptions> = {
    // 1xx Informational
    100: (option = { icon: "info", title: "Continue." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    101: (option = { icon: "info", title: "Switching Protocols." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    102: (option = { icon: "info", title: "Processing." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    103: (option = { icon: "info", title: "Early Hints." }) => ({
        icon: option.icon,
        title: option.title,
    }),

    // 2xx Success
    200: (option = { icon: "success", title: "Request Successful." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    201: (option = { icon: "success", title: "Created Successfully." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    202: (option = { icon: "success", title: "Accepted." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    203: (option = { icon: "success", title: "Non-Authoritative Information." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    204: (option = { icon: "success", title: "No Content." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    205: (option = { icon: "success", title: "Reset Content." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    206: (option = { icon: "success", title: "Partial Content." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    207: (option = { icon: "success", title: "Multi-Status." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    208: (option = { icon: "success", title: "Already Reported." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    226: (option = { icon: "success", title: "IM Used." }) => ({
        icon: option.icon,
        title: option.title,
    }),

    // 3xx Redirection
    300: (option = { icon: "warning", title: "Multiple Choices." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    301: (option = { icon: "warning", title: "Moved Permanently." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    302: (option = { icon: "warning", title: "Found." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    303: (option = { icon: "warning", title: "See Other." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    304: (option = { icon: "warning", title: "Not Modified." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    305: (option = { icon: "warning", title: "Use Proxy." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    307: (option = { icon: "warning", title: "Temporary Redirect." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    308: (option = { icon: "warning", title: "Permanent Redirect." }) => ({
        icon: option.icon,
        title: option.title,
    }),

    // 4xx Client Error
    400: (option = { icon: "error", title: "Bad Request." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    401: (option = { icon: "error", title: "Unauthorized." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    402: (option = { icon: "error", title: "Payment Required." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    403: (option = { icon: "error", title: "Forbidden." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    404: (option = { icon: "error", title: "Not Found." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    405: (option = { icon: "error", title: "Method Not Allowed." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    406: (option = { icon: "error", title: "Not Acceptable." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    407: (option = { icon: "error", title: "Proxy Authentication Required." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    408: (option = { icon: "error", title: "Request Timeout." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    409: (option = { icon: "error", title: "Conflict." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    410: (option = { icon: "error", title: "Gone." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    411: (option = { icon: "error", title: "Length Required." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    412: (option = { icon: "error", title: "Precondition Failed." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    413: (option = { icon: "error", title: "Payload Too Large." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    414: (option = { icon: "error", title: "URI Too Long." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    415: (option = { icon: "error", title: "Unsupported Media Type." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    416: (option = { icon: "error", title: "Range Not Satisfiable." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    417: (option = { icon: "error", title: "Expectation Failed." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    418: (option = { icon: "error", title: "I'm a teapot." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    421: (option = { icon: "error", title: "Misdirected Request." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    422: (option = { icon: "error", title: "Unprocessable Entity." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    423: (option = { icon: "error", title: "Locked." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    424: (option = { icon: "error", title: "Failed Dependency." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    425: (option = { icon: "error", title: "Too Early." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    426: (option = { icon: "error", title: "Upgrade Required." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    428: (option = { icon: "error", title: "Precondition Required." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    429: (option = { icon: "error", title: "Too Many Requests." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    431: (option = { icon: "error", title: "Request Header Fields Too Large." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    451: (option = { icon: "error", title: "Unavailable For Legal Reasons." }) => ({
        icon: option.icon,
        title: option.title,
    }),

    // 5xx Server Error
    500: (option = { icon: "error", title: "Internal Server Error." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    501: (option = { icon: "error", title: "Not Implemented." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    502: (option = { icon: "error", title: "Bad Gateway." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    503: (option = { icon: "error", title: "Service Unavailable." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    504: (option = { icon: "error", title: "Gateway Timeout." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    505: (option = { icon: "error", title: "HTTP Version Not Supported." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    506: (option = { icon: "error", title: "Variant Also Negotiates." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    507: (option = { icon: "error", title: "Insufficient Storage." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    508: (option = { icon: "error", title: "Loop Detected." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    510: (option = { icon: "error", title: "Not Extended." }) => ({
        icon: option.icon,
        title: option.title,
    }),
    511: (option = { icon: "error", title: "Network Authentication Required." }) => ({
        icon: option.icon,
        title: option.title,
    }),
};