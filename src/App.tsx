import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import DataDeletion from "@/pages/DataDeletion";
import KVKKCompliance from "@/pages/KVKKCompliance";
import DataSecurity from "@/pages/DataSecurity";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={TermsOfService} />
      <Route path="/data-deletion" component={DataDeletion} />
      <Route path="/kvkk" component={KVKKCompliance} />
      <Route path="/data-security" component={DataSecurity} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base="/">
      <ThemeProvider defaultTheme="light" storageKey="learnwords-theme">
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <AppRouter />
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </WouterRouter>
  );
}

export default App;