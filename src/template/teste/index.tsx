"use-client"

import Card from "@/components/card";
import { Header, Main, Footer } from "@/components/ui";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient()

export default function Teste() {
    return (
        <QueryClientProvider client={client}>
            <Header />
            <Main>
                <Card />
            </Main>
            <Footer />
        </QueryClientProvider>
    )
}