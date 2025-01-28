//This file fetches directly from the repository and generates an array
//of know TOR exit node IPs on demand. This removes the need to store the json
//file in the repository while also getting the most up-to-date list
//(though it is advisable to maintain a fall back list somewhere)

const torExitNodeIPs = "https://raw.githubusercontent.com/platformbuilds/Tor-IP-Addresses/refs/heads/master/tor-exit-nodes.lst";

async function getKnownTorExitNodeIPs() {
    try {
        const response = await fetch(
          torExitNodeIPs, 
          { method: "GET"}
        );
        return await response.text();
      } catch (error) {
        console.error("Error fetching Tor exit node IP list: ", error);
      }
}

export async function knownTorExitNodeIPList() {
    const torExitNodeIPs = await getKnownTorExitNodeIPs();
    return torExitNodeIPs.split('\n');
}