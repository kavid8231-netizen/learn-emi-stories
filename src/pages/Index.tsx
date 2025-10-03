import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calculator, Building2, TrendingUp, BookOpen, Sparkles, Home } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Home,
      title: "Loan Types",
      description: "Explore different loan options - Personal, Home, Auto, Education & more",
      link: "/loan-types",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Calculator,
      title: "EMI Calculator",
      description: "Calculate your monthly EMI with interactive charts and amortization",
      link: "/emi-calculator",
      color: "bg-primary/10 text-foreground"
    },
    {
      icon: Building2,
      title: "Bank Loan Info",
      description: "Compare interest rates and features from different banks",
      link: "/bank-info",
      color: "bg-success/10 text-success"
    },
    {
      icon: TrendingUp,
      title: "Regional Insights",
      description: "State-wise loan interest rate comparisons and trends",
      link: "/regional-insights",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: BookOpen,
      title: "Learn with Stories",
      description: "Real-life examples and loan stories to help you understand better",
      link: "/examples",
      color: "bg-primary/10 text-foreground"
    },
    {
      icon: Sparkles,
      title: "Festival Offers",
      description: "Special loan offers during festivals and seasonal discounts",
      link: "/offers",
      color: "bg-success/10 text-success"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Understand Loans & EMI
              <span className="block text-primary mt-2">in Simple Words</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Your friendly guide to loans, EMI calculations, and smart financial decisions. 
              Learn with real stories, interactive tools, and multilingual support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-lg">
                <Link to="/emi-calculator">Calculate EMI Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link to="/loan-types">Explore Loan Types</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link}>
                <Card className="p-6 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border-2 hover:border-primary">
                  <div className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Learn About Loans?</h2>
            <p className="text-muted-foreground text-lg">
              Making informed financial decisions starts with understanding
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center bg-card">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <p className="text-sm text-muted-foreground">Types of Loans Explained</p>
            </Card>
            <Card className="p-6 text-center bg-card">
              <div className="text-4xl font-bold text-accent mb-2">10+</div>
              <p className="text-sm text-muted-foreground">Banks Compared</p>
            </Card>
            <Card className="p-6 text-center bg-card">
              <div className="text-4xl font-bold text-success mb-2">5</div>
              <p className="text-sm text-muted-foreground">Languages Supported</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
