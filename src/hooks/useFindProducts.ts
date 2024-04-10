import { api } from "@/services/api"
import { useQuery } from "react-query"

export default function useFindProducts() {

    const fetchProducts = async (
        // { page, rows }: { page: number; rows: number }
    ) => {
        const { data } = await api({
            url: "/products", params: {
                page: 1,
                rows: 1
            }
        })
        return data?.products
    }

    const query = useQuery({
        queryFn: fetchProducts,

    })

    return {

    }
}