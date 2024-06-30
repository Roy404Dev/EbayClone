import { TypedSupabaseClient } from "../../utils/types";

const getProducts = (client: TypedSupabaseClient) => {
  return client.from("products").select();
};

export default getProducts;
