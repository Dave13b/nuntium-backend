module.exports = ({ env }) => ({
    email: {
        config: {
            provider: env("MAIL_PROVIDER"),
            providerOptions: {
              host: env("MAIL_HOST"),
              port: env.int("MAIL_PORT"),
              secure: env.bool("MAIL_SECURE", true),
              auth: {
                type: "login",
                user: env("MAIL_USER_NAME"),
                pass: env("MAIL_USER_PASS"),
              },
              rejectUnauthorized: env.bool("MAIL_REJECT_UNAUTHORIZED", false),
              requireTLS: env.bool("MAIL_REQUIRE_TLS", true),
              connectionTimeout: env.int("MAIL_CONNECTION_TIMEOUT", 1 * 60 * 1000),
            },
            settings: {
              from: env("MAIL_FROM"),
              replyTo: env("MAIL_REPLY_TO"),
              defaultFrom: env("MAIL_FROM"),
              defaultReplyTo: env("MAIL_REPLY_TO"),
            },
        },
    },
    ckeditor: {
        enabled: true,
        resolve: "./src/plugins/plugin-ckeditor"
    }
})