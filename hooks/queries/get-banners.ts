import { TypedSupabaseClient } from "@/utils/types";

export default function getBanners(client: TypedSupabaseClient) {
  return client.from("banners").select().throwOnError();
}
