import { Card } from "@/components/ui/card";
import { Home, User, Car, GraduationCap, Coins, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const LoanTypes = () => {
  const loanTypes = [
    {
      icon: User,
      title: "Personal Loan",
      description: "Unsecured loan for personal needs like weddings, medical expenses, or travel",
      interest: "10-14%",
      tenure: "1-5 years",
      eligibility: "Salaried/Self-employed, Good credit score",
      example: {
        amount: "₹1,00,000",
        tenure: "2 years",
        rate: "12%",
        emi: "₹4,707",
        totalInterest: "₹12,968",
        story: "Ravi needs funds for his sister's wedding. He takes a ₹1,00,000 personal loan for 2 years at 12% interest. His monthly EMI is ₹4,707. Total amount repaid: ₹1,12,968 (includes ₹12,968 interest)."
      },
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Home,
      title: "Home Loan",
      description: "Loan to purchase, construct, or renovate your dream home",
      interest: "6.8-9%",
      tenure: "10-30 years",
      eligibility: "Stable income, Property documents, Age 21-65",
      example: {
        amount: "₹25,00,000",
        tenure: "20 years",
        rate: "7%",
        emi: "₹19,382",
        totalInterest: "₹21,51,793",
        story: "Priya wants to buy her first home. She takes a ₹25,00,000 home loan for 20 years at 7% interest. Her monthly EMI is ₹19,382. Total amount repaid: ₹46,51,793 (includes ₹21,51,793 interest). She can also claim tax benefits on interest paid."
      },
      color: "bg-primary/10 text-foreground"
    },
    {
      icon: Car,
      title: "Auto Loan",
      description: "Finance your car or two-wheeler purchase with easy EMIs",
      interest: "7-12%",
      tenure: "1-7 years",
      eligibility: "Age 21-65, Stable income, Valid license",
      example: {
        amount: "₹5,00,000",
        tenure: "5 years",
        rate: "9%",
        emi: "₹10,377",
        totalInterest: "₹1,22,620",
        story: "Amit wants to buy a car for his family. He takes a ₹5,00,000 auto loan for 5 years at 9% interest. His monthly EMI is ₹10,377. Total amount repaid: ₹6,22,620 (includes ₹1,22,620 interest)."
      },
      color: "bg-success/10 text-success"
    },
    {
      icon: GraduationCap,
      title: "Education Loan",
      description: "Fund your higher education in India or abroad",
      interest: "8-12%",
      tenure: "5-15 years",
      eligibility: "Admission confirmed, Co-borrower required",
      example: {
        amount: "₹10,00,000",
        tenure: "10 years",
        rate: "10%",
        emi: "₹13,215",
        totalInterest: "₹5,85,800",
        story: "Sneha wants to pursue her Master's degree abroad. She takes a ₹10,00,000 education loan for 10 years at 10% interest. After a 1-year moratorium, her monthly EMI is ₹13,215. Total amount repaid: ₹15,85,800 (includes ₹5,85,800 interest)."
      },
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Coins,
      title: "Gold Loan",
      description: "Quick loan against your gold jewelry at attractive rates",
      interest: "7-12%",
      tenure: "1-3 years",
      eligibility: "Gold jewelry, ID proof, Address proof",
      example: {
        amount: "₹2,00,000",
        tenure: "1 year",
        rate: "8%",
        emi: "₹17,451",
        totalInterest: "₹9,412",
        story: "Rajesh needs immediate funds for medical treatment. He pledges 50 grams of gold and gets a ₹2,00,000 gold loan for 1 year at 8% interest. His monthly EMI is ₹17,451. Total amount repaid: ₹2,09,412 (includes ₹9,412 interest). He gets his gold back after full repayment."
      },
      color: "bg-primary/10 text-foreground"
    },
    {
      icon: Briefcase,
      title: "Business/SME Loan",
      description: "Capital for starting or expanding your business",
      interest: "9-15%",
      tenure: "1-10 years",
      eligibility: "Business vintage 2+ years, ITR, Bank statements",
      example: {
        amount: "₹15,00,000",
        tenure: "5 years",
        rate: "12%",
        emi: "₹33,367",
        totalInterest: "₹5,02,020",
        story: "Meena runs a small manufacturing unit and wants to buy new machinery. She takes a ₹15,00,000 business loan for 5 years at 12% interest. Her monthly EMI is ₹33,367. Total amount repaid: ₹20,02,020 (includes ₹5,02,020 interest)."
      },
      color: "bg-success/10 text-success"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Types of Loans</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Understanding different loan options helps you make the right financial decision
          </p>
        </div>

        <div className="space-y-8">
          {loanTypes.map((loan, index) => (
            <Card key={index} className="p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <div className={`w-16 h-16 rounded-2xl ${loan.color} flex items-center justify-center flex-shrink-0`}>
                  <loan.icon className="w-8 h-8" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{loan.title}</h2>
                    <p className="text-muted-foreground">{loan.description}</p>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 py-4 border-y">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Interest Rate</div>
                      <div className="font-semibold">{loan.interest}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Tenure</div>
                      <div className="font-semibold">{loan.tenure}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Example EMI</div>
                      <div className="font-semibold">{loan.example.emi}/month</div>
                    </div>
                  </div>

                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Real Example Story
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {loan.example.story}
                    </p>
                  </div>

                  <div>
                    <div className="text-sm font-semibold mb-2">Basic Eligibility:</div>
                    <p className="text-sm text-muted-foreground">{loan.eligibility}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10">
            <h3 className="text-xl font-semibold mb-2">Ready to Calculate Your EMI?</h3>
            <p className="text-muted-foreground mb-4">
              Use our interactive calculator to understand your monthly payments
            </p>
            <Link 
              to="/emi-calculator"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Go to EMI Calculator
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoanTypes;
