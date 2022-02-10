import * as LaunchDarkly from "launchdarkly-js-client-sdk";

let launchDarklyClient;

async function initialize(user) {
  if (!user) {
    user = {
      key: "anonymous",
    };
  }
  const client = LaunchDarkly.initialize(
    import.meta.env.VITE_LAUNCHDARKLY_SDK_CLIENT,
    user
  );
  await client.waitForInitialization();
  return client;
}

async function getClient() {
  if (launchDarklyClient) return launchDarklyClient;
  return (launchDarklyClient = await initialize());
}

export async function getFlagValue(key, fnChangeListener) {
  const client = await getClient();
  let flagValue;

  flagValue = await client.variation(key, false);

  if (fnChangeListener) {
    client.on("change:" + key, fnChangeListener);
  }
  return flagValue;
}
