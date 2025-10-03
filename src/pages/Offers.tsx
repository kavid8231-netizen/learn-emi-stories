import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Calendar } from "lucide-react";

const Offers = () => {
  const offers = [
    {
      bank: "State Bank of India",
      title: "Diwali Home Loan Festival",
      discount: "0.25% rate reduction",
      validUntil: "31st October 2024",
      details: "Special offer for women borrowers. Additional processing fee waiver for salaried customers.",
      loanType: "Home Loan",
      highlight: true
    },
    {
      bank: "HDFC Bank",
      title: "Back to School Education Loan",
      discount: "Processing fee waiver",
      validUntil: "30th September 2024",
      details: "Zero processing fee for education loans above ₹10 lakhs. Applicable for both domestic and international studies.",
      loanType: "Education Loan",
      highlight: false
    },
    {
      bank: "ICICI Bank",
      title: "Pre-approved Auto Loan Festival",
      discount: "Interest rate from 7.5%",
      validUntil: "15th November 2024",
      details: "Instant approval for existing customers. Up to 90% on-road financing available.",
      loanType: "Auto Loan",
      highlight: true
    },
    {
      bank: "Axis Bank",
      title: "Wedding Season Personal Loan",
      discount: "Up to ₹50,000 cashback",
      validUntil: "31st December 2024",
      details: "Special rates for wedding expenses. Flexible tenure options from 1-5 years.",
      loanType: "Personal Loan",
      highlight: false
    },
    {
      bank: "Punjab National Bank",
      title: "Harvest Festival Gold Loan",
      discount: "7% interest rate",
      validUntil: "30th October 2024",
      details: "Lowest rates for agricultural purposes. Quick disbursal within 24 hours.",
      loanType: "Gold Loan",
      highlight: true
    },
    {
      bank: "Kotak Mahindra Bank",
      title: "Business Growth MSME Loan",
      discount: "First 6 months interest free",
      validUntil: "15th October 2024",
      details: "Collateral-free loans up to ₹50 lakhs. Specially designed for small businesses.",
      loanType: "Business Loan",
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <Sparkles className="w-8 h-8 text-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Festival Loan Offers</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Special seasonal offers and discounts from banks across India
          </p>
        </div>

        <Card className="p-6 mb-8 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold">Limited Time Offers</h2>
          </div>
          <p className="text-muted-foreground">
            Take advantage of these seasonal offers before they expire. Always read terms and conditions carefully.
          </p>
        </Card>

        <div className="space-y-6">
          {offers.map((offer, index) => (
            <Card 
              key={index} 
              className={`p-6 hover:shadow-lg transition-all ${offer.highlight ? 'border-primary border-2' : ''}`}
            >
              {offer.highlight && (
                <Badge className="mb-4 bg-primary">
                  ⭐ Featured Offer
                </Badge>
              )}
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-1">{offer.title}</h3>
                    <p className="text-muted-foreground">{offer.bank}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="capitalize">
                        {offer.loanType}
                      </Badge>
                    </div>

                    <div className="p-4 bg-success/10 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Special Discount</div>
                      <div className="text-xl font-bold text-success">{offer.discount}</div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {offer.details}
                    </p>

                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">Valid until:</span>
                      <span className="font-semibold">{offer.validUntil}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-8 p-6 bg-accent/5 border-accent/20">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            Important Notes
          </h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>All offers are subject to bank approval and eligibility criteria</li>
            <li>Interest rates and processing fees may vary based on credit score</li>
            <li>Please verify current offers directly with the respective banks</li>
            <li>Terms and conditions apply - read all documents carefully before applying</li>
            <li>These offers are for educational purposes and may have expired</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Offers;
