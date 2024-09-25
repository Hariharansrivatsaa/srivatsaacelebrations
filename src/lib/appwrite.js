import { Client, Account, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66ef56610037dde019a4");

const account = new Account(client);

export { client, account, ID };
