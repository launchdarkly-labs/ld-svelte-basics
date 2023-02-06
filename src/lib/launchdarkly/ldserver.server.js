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

export async function getFlagValue(key, context) {
  const client = await getClient();
  let flagValue;

  if (!context) {
    context = {
      key: "anonymous",
    };
  }
  flagValue = await client.variation(key, context, false);
  return flagValue;
}
