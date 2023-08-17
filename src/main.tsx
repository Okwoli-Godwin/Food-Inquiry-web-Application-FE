import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from "react-redux/es/exports";
import { Store } from "./apis/Store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient();

let persistor = persistStore(Store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
