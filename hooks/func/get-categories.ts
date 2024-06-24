import { TypedSupabaseClient } from "../../utils/types";

const getCategories = (client: TypedSupabaseClient) => {
  return client.from("categories").select().throwOnError().single();
};

export default getCategories;
