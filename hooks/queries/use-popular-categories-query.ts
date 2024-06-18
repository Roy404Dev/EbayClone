import useSupabaseBrowser from "@/utils/supabase-browser";
import { getPopularCategories } from "./getPopularCategories";
import { useQuery } from "@tanstack/react-query";
function usePopularCategoriesQuery() {
  const client = useSupabaseBrowser();
  const queryKey = ["popularCategories"];

  const queryFn = async () => {
    return getPopularCategories(client).then((result) => result.data);
  };

  return useQuery({ queryKey: queryKey, queryFn: queryFn, staleTime: 60 * 60 * 1000 * 24 });
}

export default usePopularCategoriesQuery;
