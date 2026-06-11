import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TerminalIcon } from "@/components/ui/TerminalIcon";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-center px-4">
      
      <div className="p-6 rounded-full bg-primary/10 mb-6 animate-pulse">
        <TerminalIcon className="h-12 w-12 text-primary" />
      </div>

      <h1 className="text-4xl font-bold mb-2 text-foreground">404</h1>
      
      <p className="text-xl text-muted-foreground mb-8 max-w-md">
        Oops! It seems that the path <span className="text-primary font-mono bg-primary/10 px-1 rounded">{location.pathname}</span> does not exist.
      </p>

      <Link to="/">
        <Button className="bg-primary hover:bg-primary/80 transition-all duration-300">
          Return to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;