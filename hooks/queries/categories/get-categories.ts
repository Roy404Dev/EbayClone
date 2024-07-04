import { TypedSupabaseClient } from "@/utils/types";

export default function getCategories(client: TypedSupabaseClient) {
  return client.from("categories").select().throwOnError();
}
