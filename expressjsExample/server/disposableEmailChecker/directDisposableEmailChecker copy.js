//This file fetches directly from the repository and generates an array
//of emails to check on demand. This removes the need to store the json
//file in the repository while also getting the most up-to-date list
//(though it is advisable to maintain a fall back list somewhere)

const disposableEmailBlocklistURL = "https://raw.githubusercontent.com/disposable-email-domains/disposable-email-domains/refs/heads/main/disposable_email_blocklist.conf";

async function getDisposableEmailList() {
    try {
        const response = await fetch(
          disposableEmailBlocklistURL, 
          { method: "GET"}
        );
        return await response.text();
      } catch (error) {
        console.error("Error fetching disposable email list: ", error);
      }
}

export async function isDisposableEmail(email) {
    const disposableEmails = await getDisposableEmailList();
    const disposableEmailsList = disposableEmails.split('\n');
    const emailDomain = email.split('@')[1];
    return disposableEmailsList.includes(emailDomain)
}