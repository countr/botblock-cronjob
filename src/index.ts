import { manualPost, setLogging } from "blapi";
import { botId, keys } from "./environment";
import getCountrData from "./utils/countr";

setLogging({ extended: true });

void getCountrData()
  .then(data => {
    const shards = Object.values(data.shards).map(shard => shard.guilds);

    void manualPost(
      shards.reduce((a, b) => a + b),
      botId,
      keys,
      undefined as unknown as number, // eslint-disable-line no-undefined -- no other way to not specify the shard id
      shards.length,
      shards,
    );
  })
  .catch(err => {
    console.error("Failed to get Countr data:", err);
    process.exit(1);
  });
