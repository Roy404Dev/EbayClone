import useSupabaseBrowser from "@/utils/supabase-browser";
import getBanners from "./get-banners";
import { useQuery } from "@tanstack/react-query";

export default function useBannersQuery() {
  const client = useSupabaseBrowser();
  const queryFn = async () => {
    return getBanners(client).then((result) => result.data);
  };
  return useQuery({
    queryKey: ["banners"],
    queryFn: queryFn,
    staleTime: 60 * 60 * 1000 * 24,
  });
}
