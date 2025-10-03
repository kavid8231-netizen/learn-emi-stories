import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { GitCompare, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CompareLoan = () => {
  const [loan1, setLoan1] = useState({
    amount: 500000,
    rate: 10,
    tenure: 5
  });

  const [loan2, setLoan2] = useState({
    amount: 500000,
    rate: 11,
    tenure: 5
  });

  const calculateEMI = (principal: number, rate: number, years: number) => {
    const ratePerMonth = rate / 12 / 100;
    const tenureMonths = years * 12;
    const emi = (principal * ratePerMonth * Math.pow(1 + ratePerMonth, tenureMonths)) / 
                (Math.pow(1 + ratePerMonth, tenureMonths) - 1);
    const totalAmount = emi * tenureMonths;
    const totalInterest = totalAmount - principal;
    
    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest)
    };
  };

  const result1 = calculateEMI(loan1.amount, loan1.rate, loan1.tenure);
  const result2 = calculateEMI(loan2.amount, loan2.rate, loan2.tenure);

  const difference = {
    emi: result2.emi - result1.emi,
    totalInterest: result2.totalInterest - result1.totalInterest,
    totalAmount: result2.totalAmount - result1.totalAmount
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-7xl">
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
            <GitCompare className="w-8 h-8 text-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Compare Loans</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compare two loan options side by side to make the best decision
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Loan 1 */}
          <Card className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Loan Option 1</h2>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-sm font-medium">
                Option A
              </span>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="amount1" className="text-base">Loan Amount (₹)</Label>
                <Input
                  id="amount1"
                  type="number"
                  value={loan1.amount}
                  onChange={(e) => setLoan1({...loan1, amount: Number(e.target.value)})}
                  className="text-lg h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rate1" className="text-base">Interest Rate (% per year)</Label>
                <Input
                  id="rate1"
                  type="number"
                  step="0.1"
                  value={loan1.rate}
                  onChange={(e) => setLoan1({...loan1, rate: Number(e.target.value)})}
                  className="text-lg h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tenure1" className="text-base">Loan Tenure (Years)</Label>
                <Input
                  id="tenure1"
                  type="number"
                  value={loan1.tenure}
                  onChange={(e) => setLoan1({...loan1, tenure: Number(e.target.value)})}
                  className="text-lg h-12"
                />
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Monthly EMI</span>
                  <span className="text-2xl font-bold text-primary">₹{result1.emi.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Interest</span>
                  <span className="text-lg font-semibold">₹{result1.totalInterest.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Payment</span>
                  <span className="text-lg font-semibold">₹{result1.totalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Loan 2 */}
          <Card className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Loan Option 2</h2>
              <span className="px-3 py-1 rounded-full bg-accent/10 text-sm font-medium">
                Option B
              </span>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="amount2" className="text-base">Loan Amount (₹)</Label>
                <Input
                  id="amount2"
                  type="number"
                  value={loan2.amount}
                  onChange={(e) => setLoan2({...loan2, amount: Number(e.target.value)})}
                  className="text-lg h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rate2" className="text-base">Interest Rate (% per year)</Label>
                <Input
                  id="rate2"
                  type="number"
                  step="0.1"
                  value={loan2.rate}
                  onChange={(e) => setLoan2({...loan2, rate: Number(e.target.value)})}
                  className="text-lg h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tenure2" className="text-base">Loan Tenure (Years)</Label>
                <Input
                  id="tenure2"
                  type="number"
                  value={loan2.tenure}
                  onChange={(e) => setLoan2({...loan2, tenure: Number(e.target.value)})}
                  className="text-lg h-12"
                />
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Monthly EMI</span>
                  <span className="text-2xl font-bold text-primary">₹{result2.emi.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Interest</span>
                  <span className="text-lg font-semibold">₹{result2.totalInterest.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Payment</span>
                  <span className="text-lg font-semibold">₹{result2.totalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Comparison Result */}
        <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/10 to-accent/10">
          <h2 className="text-2xl font-semibold mb-6 text-center">Comparison Results</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-xl bg-card">
              <p className="text-muted-foreground mb-2">EMI Difference</p>
              <p className={`text-2xl font-bold ${difference.emi > 0 ? 'text-red-500' : 'text-green-500'}`}>
                {difference.emi > 0 ? '+' : ''}₹{Math.abs(difference.emi).toLocaleString('en-IN')}
              </p>
              <p className="text-xs text-muted-foreground mt-1">per month</p>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-card">
              <p className="text-muted-foreground mb-2">Interest Difference</p>
              <p className={`text-2xl font-bold ${difference.totalInterest > 0 ? 'text-red-500' : 'text-green-500'}`}>
                {difference.totalInterest > 0 ? '+' : ''}₹{Math.abs(difference.totalInterest).toLocaleString('en-IN')}
              </p>
              <p className="text-xs text-muted-foreground mt-1">over loan tenure</p>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-card">
              <p className="text-muted-foreground mb-2">Total Cost Difference</p>
              <p className={`text-2xl font-bold ${difference.totalAmount > 0 ? 'text-red-500' : 'text-green-500'}`}>
                {difference.totalAmount > 0 ? '+' : ''}₹{Math.abs(difference.totalAmount).toLocaleString('en-IN')}
              </p>
              <p className="text-xs text-muted-foreground mt-1">total payment</p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-card">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Recommendation
            </h3>
            <p className="text-muted-foreground">
              {difference.totalAmount < 0 
                ? "Option B (Loan 2) will save you money overall. Consider this option if the terms are favorable."
                : difference.totalAmount > 0
                ? "Option A (Loan 1) is more economical with lower total costs. This appears to be the better choice."
                : "Both loans have identical costs. Choose based on other factors like bank reputation and service quality."}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CompareLoan;
