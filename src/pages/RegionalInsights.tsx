import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const RegionalInsights = () => {
  const stateData = [
    { state: "Tamil Nadu", homeRate: 8.0, personalRate: 12.5, autoRate: 9.5 },
    { state: "Karnataka", homeRate: 8.2, personalRate: 12.8, autoRate: 9.8 },
    { state: "Maharashtra", homeRate: 7.8, personalRate: 12.0, autoRate: 9.2 },
    { state: "Delhi NCR", homeRate: 7.5, personalRate: 11.5, autoRate: 8.8 },
    { state: "Gujarat", homeRate: 7.9, personalRate: 12.3, autoRate: 9.4 },
    { state: "West Bengal", homeRate: 8.3, personalRate: 13.0, autoRate: 10.0 },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4">
            <TrendingUp className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Regional Loan Insights</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compare average interest rates across different states in India
          </p>
        </div>

        <Card className="p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">State-wise Interest Rate Comparison</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={stateData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="state" />
              <YAxis label={{ value: 'Interest Rate (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend />
              <Bar dataKey="homeRate" fill="#FFC107" name="Home Loan" />
              <Bar dataKey="personalRate" fill="#2196F3" name="Personal Loan" />
              <Bar dataKey="autoRate" fill="#4CAF50" name="Auto Loan" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Lowest Rates</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-success/10 rounded-lg">
                <span className="font-semibold">Home Loan</span>
                <span className="text-success">Delhi NCR - 7.5%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-success/10 rounded-lg">
                <span className="font-semibold">Personal Loan</span>
                <span className="text-success">Delhi NCR - 11.5%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-success/10 rounded-lg">
                <span className="font-semibold">Auto Loan</span>
                <span className="text-success">Delhi NCR - 8.8%</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Key Insights</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary mt-1.5"></span>
                Metro cities generally offer lower interest rates due to higher competition among banks
              </p>
              <p className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary mt-1.5"></span>
                Home loan rates are typically the lowest due to secured nature of the loan
              </p>
              <p className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary mt-1.5"></span>
                Personal loan rates are highest as they are unsecured loans
              </p>
              <p className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary mt-1.5"></span>
                Regional variations can be 0.5-1% depending on local economic conditions
              </p>
            </div>
          </Card>
        </div>

        <Card className="mt-8 p-6 bg-accent/5 border-accent/20">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> These are indicative average rates for educational purposes. Actual rates vary based on 
            individual credit profiles, bank policies, and current market conditions. Always compare multiple banks before 
            making a decision.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default RegionalInsights;
