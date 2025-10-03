import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Calculator } from "lucide-react";

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenureYears, setTenureYears] = useState(5);

  // EMI Calculation
  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / 12 / 100;
    const tenureMonths = tenureYears * 12;
    
    const emi = (principal * ratePerMonth * Math.pow(1 + ratePerMonth, tenureMonths)) / 
                (Math.pow(1 + ratePerMonth, tenureMonths) - 1);
    
    const totalAmount = emi * tenureMonths;
    const totalInterest = totalAmount - principal;

    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      principal: principal
    };
  };

  const result = calculateEMI();

  const chartData = [
    { name: "Principal Amount", value: result.principal, color: "#FFC107" },
    { name: "Total Interest", value: result.totalInterest, color: "#2196F3" }
  ];

  // Generate amortization schedule for first 3 months
  const generateAmortization = () => {
    const schedule = [];
    let balance = loanAmount;
    const ratePerMonth = interestRate / 12 / 100;
    
    for (let i = 1; i <= 3; i++) {
      const interestPayment = balance * ratePerMonth;
      const principalPayment = result.emi - interestPayment;
      balance -= principalPayment;
      
      schedule.push({
        month: i,
        emi: result.emi,
        principal: Math.round(principalPayment),
        interest: Math.round(interestPayment),
        balance: Math.round(balance)
      });
    }
    return schedule;
  };

  const amortization = generateAmortization();

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <Calculator className="w-8 h-8 text-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">EMI Calculator</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Calculate your Equated Monthly Installment with detailed breakdown
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6">Loan Details</h2>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-base">Loan Amount (₹)</Label>
                <Input
                  id="amount"
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="text-lg h-12"
                />
                <input
                  type="range"
                  min="50000"
                  max="10000000"
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rate" className="text-base">Interest Rate (% per year)</Label>
                <Input
                  id="rate"
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="text-lg h-12"
                />
                <input
                  type="range"
                  min="5"
                  max="20"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tenure" className="text-base">Loan Tenure (Years)</Label>
                <Input
                  id="tenure"
                  type="number"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="text-lg h-12"
                />
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
            </div>
          </Card>

          {/* Results Section */}
          <div className="space-y-6">
            <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/10 to-accent/10">
              <h2 className="text-2xl font-semibold mb-6">Your EMI Breakdown</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-muted-foreground">Monthly EMI</span>
                  <span className="text-3xl font-bold text-primary">₹{result.emi.toLocaleString('en-IN')}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-muted-foreground">Principal Amount</span>
                  <span className="text-xl font-semibold">₹{result.principal.toLocaleString('en-IN')}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-muted-foreground">Total Interest</span>
                  <span className="text-xl font-semibold text-accent">₹{result.totalInterest.toLocaleString('en-IN')}</span>
                </div>
                
                <div className="flex justify-between items-center py-3">
                  <span className="text-muted-foreground">Total Amount</span>
                  <span className="text-xl font-semibold">₹{result.totalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </Card>

            {/* Pie Chart */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Payment Breakdown</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `₹${Number(value).toLocaleString('en-IN')}`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </div>

        {/* Amortization Schedule */}
        <Card className="mt-8 p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-6">Payment Schedule (First 3 Months)</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-3 px-4">Month</th>
                  <th className="text-right py-3 px-4">EMI</th>
                  <th className="text-right py-3 px-4">Principal</th>
                  <th className="text-right py-3 px-4">Interest</th>
                  <th className="text-right py-3 px-4">Balance</th>
                </tr>
              </thead>
              <tbody>
                {amortization.map((row) => (
                  <tr key={row.month} className="border-b hover:bg-secondary/50">
                    <td className="py-3 px-4 font-semibold">{row.month}</td>
                    <td className="text-right py-3 px-4">₹{row.emi.toLocaleString('en-IN')}</td>
                    <td className="text-right py-3 px-4 text-primary">₹{row.principal.toLocaleString('en-IN')}</td>
                    <td className="text-right py-3 px-4 text-accent">₹{row.interest.toLocaleString('en-IN')}</td>
                    <td className="text-right py-3 px-4 font-semibold">₹{row.balance.toLocaleString('en-IN')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            * This shows how your EMI is divided between principal and interest for the first 3 months
          </p>
        </Card>

        {/* Story Example */}
        <Card className="mt-8 p-6 md:p-8 bg-gradient-to-r from-secondary to-primary/5">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Understanding Your EMI
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Based on your inputs: If you take a loan of ₹{loanAmount.toLocaleString('en-IN')} at {interestRate}% interest 
            for {tenureYears} years, you'll pay ₹{result.emi.toLocaleString('en-IN')} every month. Over the entire loan period, 
            you'll pay ₹{result.totalInterest.toLocaleString('en-IN')} as interest. In the first month, 
            ₹{amortization[0].interest.toLocaleString('en-IN')} goes towards interest and 
            ₹{amortization[0].principal.toLocaleString('en-IN')} reduces your principal. As you continue paying, 
            more of your EMI will go towards principal and less towards interest.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default EmiCalculator;
