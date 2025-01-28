//This file fetches directly from the repository and generates an array
//of Bitwire IPs on demand. This removes the need to store the json
//file in the repository while also getting the most up-to-date list
//(though it is advisable to maintain a fall back list somewhere)

const bitwireGithubList = "https://raw.githubusercontent.com/bitwire-it/ipblocklist/refs/heads/main/ip-list.txt";

async function bitwireIPs() {
    try {
        const response = await fetch(
          bitwireGithubList, 
          { method: "GET"}
        );
        return await response.text();
      } catch (error) {
        console.error("Error fetching Bitwire IP list: ", error);
      }
}

export async function bitwireBlocklist() {
    const bitwireIPBlocklist = await bitwireIPs();
    return bitwireIPBlocklist.split('\n');
}