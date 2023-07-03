"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function queryProviders({ children }: React.PropsWithChildren) {
  const [client] = React.useState(new QueryClient());

  return (
    <QueryClientProvider client={client} contextSharing={true}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default queryProviders;
