import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const Examples = () => {
  const examples = [
    {
      title: "Priya's Home Loan Journey",
      amount: "₹25,00,000",
      tenure: "20 years",
      rate: "7%",
      story: "Priya is a software engineer in Bangalore. She found her dream apartment and decided to take a home loan. After comparing banks, she chose a 20-year loan at 7% interest.",
      monthly: [
        { month: 1, emi: "₹19,382", interest: "₹14,583", principal: "₹4,799", balance: "₹24,95,201" },
        { month: 2, emi: "₹19,382", interest: "₹14,555", principal: "₹4,827", balance: "₹24,90,374" },
        { month: 3, emi: "₹19,382", interest: "₹14,527", principal: "₹4,855", balance: "₹24,85,519" },
      ],
      lesson: "In early years, most of your EMI goes towards interest. As you continue paying, more goes towards principal. Priya can also save on taxes through home loan deductions."
    },
    {
      title: "Amit's Car Purchase",
      amount: "₹5,00,000",
      tenure: "5 years",
      rate: "9%",
      story: "Amit wanted to buy a car for his growing family. He took an auto loan from his bank where he has a salary account, getting a preferential rate of 9%.",
      monthly: [
        { month: 1, emi: "₹10,377", interest: "₹3,750", principal: "₹6,627", balance: "₹4,93,373" },
        { month: 2, emi: "₹10,377", interest: "₹3,700", principal: "₹6,677", balance: "₹4,86,696" },
        { month: 3, emi: "₹10,377", interest: "₹3,650", principal: "₹6,727", balance: "₹4,79,969" },
      ],
      lesson: "Auto loans typically have shorter tenures. Amit chose 5 years to balance between affordable EMI and not paying too much interest. He also got insurance bundled at a discount."
    },
    {
      title: "Sneha's Education Abroad",
      amount: "₹10,00,000",
      tenure: "10 years",
      rate: "10%",
      story: "Sneha got admission to a Master's program in the UK. Her parents co-signed an education loan with a 1-year moratorium (no EMI during study period).",
      monthly: [
        { month: 1, emi: "₹0", interest: "Interest accrues", principal: "₹0", balance: "₹10,00,000" },
        { month: 13, emi: "₹13,215", interest: "₹9,167", principal: "₹4,048", balance: "₹10,95,952" },
        { month: 14, emi: "₹13,215", interest: "₹9,133", principal: "₹4,082", balance: "₹10,91,870" },
      ],
      lesson: "Education loans offer moratorium periods during study. Interest accrues but EMI starts only after course completion. Sneha can also claim tax benefits on interest paid."
    },
    {
      title: "Rajesh's Medical Emergency",
      amount: "₹2,00,000",
      tenure: "1 year",
      rate: "8%",
      story: "Rajesh needed immediate funds for his father's surgery. He pledged 50 grams of family gold jewelry and got a gold loan within hours at 8% interest.",
      monthly: [
        { month: 1, emi: "₹17,451", interest: "₹1,333", principal: "₹16,118", balance: "₹1,83,882" },
        { month: 2, emi: "₹17,451", interest: "₹1,226", principal: "₹16,225", balance: "₹1,67,657" },
        { month: 3, emi: "₹17,451", interest: "₹1,118", principal: "₹16,333", balance: "₹1,51,324" },
      ],
      lesson: "Gold loans provide quick liquidity in emergencies. Interest rates are lower than personal loans. Rajesh got his gold back safely after repaying the full loan amount."
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <BookOpen className="w-8 h-8 text-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Learn with Real Stories</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Understanding loans through real-life examples and detailed payment breakdowns
          </p>
        </div>

        <div className="space-y-8">
          {examples.map((example, index) => (
            <Card key={index} className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4">{example.title}</h2>
              
              <div className="bg-secondary/50 p-4 rounded-lg mb-6">
                <p className="text-muted-foreground leading-relaxed">{example.story}</p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-card rounded-lg border">
                  <div className="text-sm text-muted-foreground mb-1">Loan Amount</div>
                  <div className="text-xl font-bold text-primary">{example.amount}</div>
                </div>
                <div className="p-4 bg-card rounded-lg border">
                  <div className="text-sm text-muted-foreground mb-1">Tenure</div>
                  <div className="text-xl font-bold">{example.tenure}</div>
                </div>
                <div className="p-4 bg-card rounded-lg border">
                  <div className="text-sm text-muted-foreground mb-1">Interest Rate</div>
                  <div className="text-xl font-bold text-accent">{example.rate}</div>
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-4">Payment Breakdown (First 3 Months)</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2">
                      <th className="text-left py-3 px-2">Month</th>
                      <th className="text-right py-3 px-2">EMI</th>
                      <th className="text-right py-3 px-2">Interest</th>
                      <th className="text-right py-3 px-2">Principal</th>
                      <th className="text-right py-3 px-2">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {example.monthly.map((row, idx) => (
                      <tr key={idx} className="border-b hover:bg-secondary/50">
                        <td className="py-3 px-2 font-semibold">{row.month}</td>
                        <td className="text-right py-3 px-2">{row.emi}</td>
                        <td className="text-right py-3 px-2 text-accent">{row.interest}</td>
                        <td className="text-right py-3 px-2 text-primary">{row.principal}</td>
                        <td className="text-right py-3 px-2 font-semibold">{row.balance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-success/10 p-4 rounded-lg border-l-4 border-success">
                <h4 className="font-semibold mb-2 text-success">Key Lesson</h4>
                <p className="text-sm text-muted-foreground">{example.lesson}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Examples;
