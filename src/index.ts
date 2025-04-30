import { Api as GGApi } from "@top-gg/sdk";
import { manualPost, setLogging } from "blapi";
import { botId, keys, topgg } from "./environment";
import getCountrData from "./utils/countr";

// blapi
setLogging({ extended: true });

// @top-gg/sdk
const ggApi = new GGApi(topgg);

void getCountrData()
  .then(async data => {
    const shards = Object.values(data.shards).map(shard => shard.guilds);

    await manualPost(
      shards.reduce((a, b) => a + b),
      botId,
      keys,
      undefined as unknown as number, // eslint-disable-line no-undefined -- no other way to not specify the shard id
      shards.length,
      shards,
    );

    await ggApi.postStats({
      serverCount: shards.reduce((a, b) => a + b),
      shardCount: shards.length,
      shards,
    })
      .then(stats => {
        // eslint-disable-next-line no-console
        console.log(`Posted stats to Top.gg: ${JSON.stringify(stats)}`);
      });
  })
  .catch((err: unknown) => {
    // eslint-disable-next-line no-console
    console.error("Failed to get Countr data:", err);
    process.exit(1);
  });
