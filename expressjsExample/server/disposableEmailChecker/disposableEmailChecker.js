import disposableEmails from './disposableEmailList.json' with { type: "json" }

export function isDisposableEmail(email) {
    const disposableEmailsList = disposableEmails.disposableEmails
    const emailDomain = email.split('@')[1];
    return disposableEmailsList.includes(emailDomain)
}