import LaunchDarkly from "launchdarkly-node-server-sdk";

let launchDarklyClient;

async function initialize() {
  const client = LaunchDarkly.init(import.meta.env.VITE_LAUNCHDARKLY_SDK_KEY);
  await client.waitForInitialization();
  return client;
}

async function getClient() {
  if (launchDarklyClient) return launchDarklyClient;
  return (launchDarklyClient = await initialize());
}

export async function getFlagValue(key, user) {
  const client = await getClient();
  let flagValue;

  if (!user) {
    user = {
      key: "anonymous",
    };
  }
  flagValue = await client.variation(key, user, false);
  return flagValue;
}
