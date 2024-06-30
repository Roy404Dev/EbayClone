import { TypedSupabaseClient } from "@/utils/types";

function getSubCategories(
  client: TypedSupabaseClient,
  category_id: number,
) {
  console.log(category_id);
  return client.from("subCategories").select().eq("category_id", category_id);
}

export default getSubCategories;
