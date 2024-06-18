import { TypedSupabaseClient } from "../../utils/types";

const getProducts = (client: TypedSupabaseClient) => {
  return client.from("product").select();
};

export default getProducts;
