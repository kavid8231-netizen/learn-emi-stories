import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2 } from "lucide-react";

const BankInfo = () => {
  const [selectedLoanType, setSelectedLoanType] = useState("all");

  const loanTypes = ["all", "home", "personal", "auto", "education", "gold", "business"];

  const bankData = [
    {
      bank: "State Bank of India (SBI)",
      loanType: "home",
      interestRate: "6.8-8.0%",
      tenure: "10-30 years",
      processingFee: "0.35% of loan amount",
      features: "Diwali offer, Women borrowers get 0.05% discount"
    },
    {
      bank: "HDFC Bank",
      loanType: "personal",
      interestRate: "10.5-14%",
      tenure: "1-5 years",
      processingFee: "Up to 2.5% of loan amount",
      features: "No processing fee for salary account holders"
    },
    {
      bank: "ICICI Bank",
      loanType: "auto",
      interestRate: "7.5-11%",
      tenure: "1-7 years",
      processingFee: "Up to ₹5,000",
      features: "Instant approval, Pre-approved for existing customers"
    },
    {
      bank: "Axis Bank",
      loanType: "education",
      interestRate: "9-12%",
      tenure: "5-15 years",
      processingFee: "Up to 2% of loan amount",
      features: "Covers tuition + living expenses, Moratorium period available"
    },
    {
      bank: "Punjab National Bank (PNB)",
      loanType: "home",
      interestRate: "6.9-8.5%",
      tenure: "10-30 years",
      processingFee: "0.35% of loan amount",
      features: "Women borrowers get 0.05% discount, Lower rates for loan above ₹30 lakhs"
    },
    {
      bank: "Kotak Mahindra Bank",
      loanType: "personal",
      interestRate: "10-16%",
      tenure: "1-5 years",
      processingFee: "Up to 3% of loan amount",
      features: "Quick disbursal, Flexible repayment options"
    },
    {
      bank: "Bank of Baroda",
      loanType: "gold",
      interestRate: "7-10%",
      tenure: "1-3 years",
      processingFee: "0.5-1% of loan amount",
      features: "Up to 75% of gold value, Lowest gold purity accepted: 18 karat"
    },
    {
      bank: "IDFC First Bank",
      loanType: "business",
      interestRate: "12-18%",
      tenure: "1-10 years",
      processingFee: "Up to 3% of loan amount",
      features: "MSME focused, Collateral-free loans up to ₹50 lakhs"
    },
    {
      bank: "Union Bank of India",
      loanType: "education",
      interestRate: "8.5-11%",
      tenure: "5-15 years",
      processingFee: "Up to 1% of loan amount",
      features: "Covers domestic & international education, Co-borrower mandatory"
    },
    {
      bank: "YES Bank",
      loanType: "auto",
      interestRate: "8-12%",
      tenure: "1-7 years",
      processingFee: "Up to ₹10,000",
      features: "Finance up to 90% of vehicle value, Easy documentation"
    },
    {
      bank: "Canara Bank",
      loanType: "gold",
      interestRate: "7.5-11%",
      tenure: "1-3 years",
      processingFee: "0.5-1.5% of loan amount",
      features: "Agriculture gold loan schemes available, Quick disbursal"
    },
    {
      bank: "IndusInd Bank",
      loanType: "business",
      interestRate: "11-17%",
      tenure: "1-7 years",
      processingFee: "Up to 2.5% of loan amount",
      features: "Working capital & term loans, Overdraft facility available"
    }
  ];

  const filteredData = selectedLoanType === "all" 
    ? bankData 
    : bankData.filter(item => item.loanType === selectedLoanType);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-success/10 mb-4">
            <Building2 className="w-8 h-8 text-success" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Bank Loan Information</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compare interest rates, processing fees, and special features from different banks
          </p>
        </div>

        {/* Filter Buttons */}
        <Card className="p-4 mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {loanTypes.map((type) => (
              <Button
                key={type}
                variant={selectedLoanType === type ? "default" : "outline"}
                onClick={() => setSelectedLoanType(type)}
                className="capitalize"
              >
                {type === "all" ? "All Loans" : `${type} Loan`}
              </Button>
            ))}
          </div>
        </Card>

        {/* Bank Cards */}
        <div className="space-y-6">
          {filteredData.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.bank}</h3>
                      <Badge className="capitalize" variant="secondary">
                        {item.loanType} Loan
                      </Badge>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Interest Rate</div>
                      <div className="font-semibold text-lg text-primary">{item.interestRate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Tenure</div>
                      <div className="font-semibold">{item.tenure}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Processing Fee</div>
                      <div className="font-semibold">{item.processingFee}</div>
                    </div>
                  </div>

                  <div className="bg-secondary/50 p-3 rounded-lg">
                    <div className="text-sm font-semibold mb-1 text-success">Special Features</div>
                    <p className="text-sm text-muted-foreground">{item.features}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredData.length === 0 && (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">No banks found for the selected loan type</p>
          </Card>
        )}

        {/* Disclaimer */}
        <Card className="mt-8 p-6 bg-accent/5 border-accent/20">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> Interest rates, processing fees, and features mentioned are indicative and for educational purposes. 
            Actual rates may vary based on your credit score, income, and bank policies. Please verify with the respective banks 
            before making any decisions.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default BankInfo;
