"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

type ProvidersProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export default function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
