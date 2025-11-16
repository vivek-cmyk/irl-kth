import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="max-w-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">IRL Assessment Tool</CardTitle>
          <CardDescription>
            Quickly assess your startup using the KTH Innovation Readiness Level framework
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            Evaluate your startup across six dimensions and get immediate insights on your bottlenecks and next steps.
          </p>
          <Link to="/irl">
            <Button size="lg" className="w-full">
              Start Assessment
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
