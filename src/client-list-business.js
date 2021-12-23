import * as dataBusiness from "./data-business.js";
import * as clientBusiness from "./client-business.js";

function printClientsAccounts() {
    const clients = dataBusiness.getClients();
    const ul = document.createElement("ul");
    for (let client of clients) {
      const element = clientBusiness.getClientElement(client);
      ul.appendChild(element);
    }
  
    document.getElementById("root").appendChild(ul);
  }

  module.exports = {printClientsAccounts:printClientsAccounts};