import superagent from "superagent";
import { endpoint } from "../environment";

interface CountrApiResponse {
  shards: Record<string, { guilds: number }>;
}

export default function getCountrData(): Promise<CountrApiResponse> {
  return superagent(endpoint).send()
    .then(res => res.body as CountrApiResponse);
}
