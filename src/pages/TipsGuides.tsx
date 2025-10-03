import { Card } from "@/components/ui/card";
import { BookOpen, TrendingDown, Calculator, ShieldCheck, Lightbulb, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TipsGuides = () => {
  const guides = [
    {
      icon: BookOpen,
      title: "What is EMI?",
      content: "EMI stands for Equated Monthly Installment. It's a fixed payment amount you make to the lender at a specified date each month. EMI consists of both principal and interest components. In the early months, the interest component is higher, but gradually the principal component increases.",
      tips: [
        "EMI = [P x R x (1+R)^N]/[(1+R)^N-1], where P = Principal, R = Rate of interest, N = Number of installments",
        "The EMI amount remains constant throughout the loan tenure",
        "You can use an EMI calculator to quickly compute your monthly payment"
      ]
    },
    {
      icon: TrendingDown,
      title: "How to Reduce Your EMI",
      content: "There are several strategies to reduce your EMI burden and save money on interest payments over the loan tenure.",
      tips: [
        "Make a larger down payment to reduce the principal amount",
        "Choose a longer tenure to reduce monthly EMI (but you'll pay more interest overall)",
        "Prepay when possible - even small prepayments can significantly reduce interest",
        "Consider balance transfer to a bank offering lower interest rates",
        "Negotiate with your bank for a better rate if you have a good credit score"
      ]
    },
    {
      icon: Calculator,
      title: "Fixed vs Floating Interest Rates",
      content: "Understanding the difference between fixed and floating interest rates is crucial for choosing the right loan.",
      tips: [
        "Fixed Rate: Interest rate remains constant throughout the loan tenure - predictable EMIs",
        "Floating Rate: Interest rate varies with market conditions - can go up or down",
        "Fixed rates are typically 1-2% higher than floating rates initially",
        "Choose fixed if you expect interest rates to rise, floating if you expect them to fall",
        "Many banks offer a combination of both (hybrid rates)"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Why Prepay a Loan?",
      content: "Prepaying your loan can save you a significant amount on interest and help you become debt-free faster.",
      tips: [
        "Prepayment reduces your outstanding principal, which reduces total interest paid",
        "Most banks allow prepayment on floating rate loans without penalty",
        "Fixed rate loans may have prepayment charges (typically 2-5% of outstanding amount)",
        "Even small prepayments can reduce your loan tenure by months or years",
        "Prioritize prepaying high-interest loans first"
      ]
    },
    {
      icon: Lightbulb,
      title: "Credit Score Impact",
      content: "Your credit score plays a vital role in loan approval and the interest rate you receive.",
      tips: [
        "Score above 750 is considered excellent - you'll get the best rates",
        "Score between 650-750 is good - you'll likely get approved with decent rates",
        "Score below 650 may lead to rejection or very high interest rates",
        "Pay all EMIs on time to maintain and improve your credit score",
        "Check your credit report annually for errors and dispute them"
      ]
    },
    {
      icon: Calculator,
      title: "Understanding Processing Fees",
      content: "Processing fees are one-time charges that banks levy for processing your loan application.",
      tips: [
        "Typically ranges from 0.5% to 2% of the loan amount",
        "Some banks offer zero processing fee during festive seasons",
        "Processing fees are usually non-refundable even if loan is rejected",
        "GST is applicable on processing fees (18% currently)",
        "Factor in processing fees when comparing loans from different banks"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <Button
          variant="ghost"
          className="mb-6"
          asChild
        >
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <BookOpen className="w-8 h-8 text-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Tips & Guides</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Essential information to help you make informed decisions about loans and EMI
          </p>
        </div>

        <div className="grid gap-6">
          {guides.map((guide, index) => {
            const Icon = guide.icon;
            return (
              <Card key={index} className="p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-3">{guide.title}</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {guide.content}
                    </p>
                    <div className="space-y-2">
                      {guide.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                          <p className="text-sm leading-relaxed">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="mt-8 p-6 md:p-8 bg-gradient-to-r from-primary/5 to-accent/5">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-primary" />
            Pro Tip
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Always read the fine print before signing any loan agreement. Look for hidden charges, 
            prepayment penalties, and understand the terms for missed payments. If something is unclear, 
            don't hesitate to ask the bank for clarification. A well-informed borrower makes better financial decisions.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default TipsGuides;
