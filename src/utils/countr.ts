import { endpoint } from "../environment";
import superagent from "superagent";

interface CountrApiResponse {
  shards: Record<string, { guilds: number }>;
}

export default function getCountrData(): Promise<CountrApiResponse | null> {
  return superagent(endpoint).send()
    .then(res => res.body as CountrApiResponse)
    .catch(() => null);
}
