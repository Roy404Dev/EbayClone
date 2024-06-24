import { TypedSupabaseClient } from "@/utils/types";


const getGroups = (client: TypedSupabaseClient) => {
  return client.from("group").select().throwOnError();
}

export default getGroups;