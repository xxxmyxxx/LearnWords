import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  const goHome = () => {
    window.location.href = "/";
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-slate-900">
      <Card className="w-full max-w-md mx-4 shadow-xl border-0 dark:bg-slate-800">
        <CardContent className="pt-10 pb-8 flex flex-col items-center">
          <AlertCircle className="h-16 w-16 text-red-500 mb-4 animate-bounce" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">404 - Page Not Found</h1>
          <p className="mt-2 text-base text-gray-600 dark:text-gray-300 text-center">
            Sorry, the page you are looking for could not be found or may have been removed.<br />
            You can return to the homepage to continue browsing.
          </p>
          <button
            onClick={goHome}
            className="mt-6 bg-primary text-white px-6 py-2 rounded-lg font-medium shadow hover:bg-primary/90 transition"
          >
            Go to Homepage
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
