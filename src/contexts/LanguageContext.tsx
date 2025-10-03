import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ta' | 'hi' | 'kn' | 'te';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.loanTypes': 'Loan Types',
    'nav.emiCalculator': 'EMI Calculator',
    'nav.bankInfo': 'Bank Info',
    'nav.regionalInsights': 'Regional Insights',
    'nav.examples': 'Examples',
    'nav.offers': 'Offers',
    'nav.tipsGuides': 'Tips & Guides',
    'nav.compare': 'Compare Loans',
    
    // Homepage
    'home.title': 'Understand Loans & EMI in Simple Words',
    'home.subtitle': 'Learn about different types of loans, calculate your EMI, and make informed financial decisions',
    'home.loanTypes': 'Explore Loan Types',
    'home.loanTypesDesc': 'Learn about different types of loans',
    'home.emiCalc': 'EMI Calculator',
    'home.emiCalcDesc': 'Calculate your monthly installments',
    'home.bankInfo': 'Bank Information',
    'home.bankInfoDesc': 'Compare loans from different banks',
    'home.insights': 'Regional Insights',
    'home.insightsDesc': 'Understand loan trends in your state',
    
    // Loan Types
    'loan.personal': 'Personal Loan',
    'loan.home': 'Home Loan',
    'loan.auto': 'Auto Loan',
    'loan.education': 'Education Loan',
    'loan.gold': 'Gold Loan',
    'loan.business': 'Business Loan',
    
    // EMI Calculator
    'emi.title': 'EMI Calculator',
    'emi.subtitle': 'Calculate your Equated Monthly Installment with detailed breakdown',
    'emi.loanAmount': 'Loan Amount (₹)',
    'emi.interestRate': 'Interest Rate (% per year)',
    'emi.tenure': 'Loan Tenure (Years)',
    'emi.monthlyEmi': 'Monthly EMI',
    'emi.principal': 'Principal Amount',
    'emi.totalInterest': 'Total Interest',
    'emi.totalAmount': 'Total Amount',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.backToHome': 'Back to Home',
  },
  ta: {
    // Navigation
    'nav.home': 'முகப்பு',
    'nav.loanTypes': 'கடன் வகைகள்',
    'nav.emiCalculator': 'EMI கணிப்பான்',
    'nav.bankInfo': 'வங்கி தகவல்',
    'nav.regionalInsights': 'பிராந்திய நுண்ணறிவு',
    'nav.examples': 'உதாரணங்கள்',
    'nav.offers': 'சலுகைகள்',
    'nav.tipsGuides': 'உதவிக்குறிப்புகள்',
    'nav.compare': 'கடன்களை ஒப்பிடுக',
    
    // Homepage
    'home.title': 'எளிய வார்த்தைகளில் கடன் மற்றும் EMI ஐ புரிந்து கொள்ளுங்கள்',
    'home.subtitle': 'பல்வேறு வகையான கடன்களைப் பற்றி அறிந்து, உங்கள் EMI ஐ கணக்கிட்டு, தகவலறிந்த நிதி முடிவுகளை எடுக்கவும்',
    'home.loanTypes': 'கடன் வகைகளை ஆராயுங்கள்',
    'home.loanTypesDesc': 'பல்வேறு வகையான கடன்களைப் பற்றி அறியவும்',
    'home.emiCalc': 'EMI கணிப்பான்',
    'home.emiCalcDesc': 'உங்கள் மாதாந்திர தவணைகளை கணக்கிடுங்கள்',
    'home.bankInfo': 'வங்கி தகவல்',
    'home.bankInfoDesc': 'வெவ்வேறு வங்கிகளின் கடன்களை ஒப்பிடுக',
    'home.insights': 'பிராந்திய நுண்ணறிவு',
    'home.insightsDesc': 'உங்கள் மாநிலத்தில் கடன் போக்குகளை புரிந்து கொள்ளுங்கள்',
    
    // Loan Types
    'loan.personal': 'தனிப்பட்ட கடன்',
    'loan.home': 'வீட்டுக் கடன்',
    'loan.auto': 'வாகன கடன்',
    'loan.education': 'கல்விக் கடன்',
    'loan.gold': 'தங்க கடன்',
    'loan.business': 'வணிக கடன்',
    
    // EMI Calculator
    'emi.title': 'EMI கணிப்பான்',
    'emi.subtitle': 'விரிவான பிரிவுடன் உங்கள் சம மாதாந்திர தவணையை கணக்கிடுங்கள்',
    'emi.loanAmount': 'கடன் தொகை (₹)',
    'emi.interestRate': 'வட்டி விகிதம் (% ஆண்டுக்கு)',
    'emi.tenure': 'கடன் காலம் (ஆண்டுகள்)',
    'emi.monthlyEmi': 'மாதாந்திர EMI',
    'emi.principal': 'முதல் தொகை',
    'emi.totalInterest': 'மொத்த வட்டி',
    'emi.totalAmount': 'மொத்த தொகை',
    
    // Common
    'common.learnMore': 'மேலும் அறிக',
    'common.backToHome': 'முகப்புக்கு திரும்பு',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.loanTypes': 'ऋण प्रकार',
    'nav.emiCalculator': 'EMI कैलकुलेटर',
    'nav.bankInfo': 'बैंक जानकारी',
    'nav.regionalInsights': 'क्षेत्रीय जानकारी',
    'nav.examples': 'उदाहरण',
    'nav.offers': 'ऑफर',
    'nav.tipsGuides': 'सुझाव और गाइड',
    'nav.compare': 'ऋण तुलना करें',
    
    // Homepage
    'home.title': 'सरल शब्दों में ऋण और EMI को समझें',
    'home.subtitle': 'विभिन्न प्रकार के ऋणों के बारे में जानें, अपनी EMI की गणना करें और सूचित वित्तीय निर्णय लें',
    'home.loanTypes': 'ऋण प्रकार खोजें',
    'home.loanTypesDesc': 'विभिन्न प्रकार के ऋणों के बारे में जानें',
    'home.emiCalc': 'EMI कैलकुलेटर',
    'home.emiCalcDesc': 'अपनी मासिक किश्तों की गणना करें',
    'home.bankInfo': 'बैंक जानकारी',
    'home.bankInfoDesc': 'विभिन्न बैंकों के ऋणों की तुलना करें',
    'home.insights': 'क्षेत्रीय जानकारी',
    'home.insightsDesc': 'अपने राज्य में ऋण रुझानों को समझें',
    
    // Loan Types
    'loan.personal': 'व्यक्तिगत ऋण',
    'loan.home': 'गृह ऋण',
    'loan.auto': 'वाहन ऋण',
    'loan.education': 'शिक्षा ऋण',
    'loan.gold': 'स्वर्ण ऋण',
    'loan.business': 'व्यवसाय ऋण',
    
    // EMI Calculator
    'emi.title': 'EMI कैलकुलेटर',
    'emi.subtitle': 'विस्तृत विवरण के साथ अपनी समान मासिक किस्त की गणना करें',
    'emi.loanAmount': 'ऋण राशि (₹)',
    'emi.interestRate': 'ब्याज दर (% प्रति वर्ष)',
    'emi.tenure': 'ऋण अवधि (वर्ष)',
    'emi.monthlyEmi': 'मासिक EMI',
    'emi.principal': 'मूल राशि',
    'emi.totalInterest': 'कुल ब्याज',
    'emi.totalAmount': 'कुल राशि',
    
    // Common
    'common.learnMore': 'और जानें',
    'common.backToHome': 'होम पर वापस जाएं',
  },
  kn: {
    // Navigation
    'nav.home': 'ಮುಖಪುಟ',
    'nav.loanTypes': 'ಸಾಲದ ವಿಧಗಳು',
    'nav.emiCalculator': 'EMI ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    'nav.bankInfo': 'ಬ್ಯಾಂಕ್ ಮಾಹಿತಿ',
    'nav.regionalInsights': 'ಪ್ರಾದೇಶಿಕ ಒಳನೋಟಗಳು',
    'nav.examples': 'ಉದಾಹರಣೆಗಳು',
    'nav.offers': 'ಆಫರ್‌ಗಳು',
    'nav.tipsGuides': 'ಸಲಹೆಗಳು ಮತ್ತು ಮಾರ್ಗದರ್ಶಿಗಳು',
    'nav.compare': 'ಸಾಲಗಳನ್ನು ಹೋಲಿಸಿ',
    
    // Homepage
    'home.title': 'ಸರಳ ಪದಗಳಲ್ಲಿ ಸಾಲ ಮತ್ತು EMI ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ',
    'home.subtitle': 'ವಿವಿಧ ರೀತಿಯ ಸಾಲಗಳ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ, ನಿಮ್ಮ EMI ಅನ್ನು ಲೆಕ್ಕಹಾಕಿ ಮತ್ತು ತಿಳುವಳಿಕೆಯುಳ್ಳ ಹಣಕಾಸಿನ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ',
    'home.loanTypes': 'ಸಾಲದ ವಿಧಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
    'home.loanTypesDesc': 'ವಿವಿಧ ರೀತಿಯ ಸಾಲಗಳ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ',
    'home.emiCalc': 'EMI ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    'home.emiCalcDesc': 'ನಿಮ್ಮ ಮಾಸಿಕ ಕಂತುಗಳನ್ನು ಲೆಕ್ಕಹಾಕಿ',
    'home.bankInfo': 'ಬ್ಯಾಂಕ್ ಮಾಹಿತಿ',
    'home.bankInfoDesc': 'ವಿವಿಧ ಬ್ಯಾಂಕುಗಳಿಂದ ಸಾಲಗಳನ್ನು ಹೋಲಿಸಿ',
    'home.insights': 'ಪ್ರಾದೇಶಿಕ ಒಳನೋಟಗಳು',
    'home.insightsDesc': 'ನಿಮ್ಮ ರಾಜ್ಯದಲ್ಲಿ ಸಾಲದ ಪ್ರವೃತ್ತಿಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ',
    
    // Loan Types
    'loan.personal': 'ವೈಯಕ್ತಿಕ ಸಾಲ',
    'loan.home': 'ಮನೆ ಸಾಲ',
    'loan.auto': 'ವಾಹನ ಸಾಲ',
    'loan.education': 'ಶಿಕ್ಷಣ ಸಾಲ',
    'loan.gold': 'ಚಿನ್ನದ ಸಾಲ',
    'loan.business': 'ವ್ಯಾಪಾರ ಸಾಲ',
    
    // EMI Calculator
    'emi.title': 'EMI ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    'emi.subtitle': 'ವಿವರವಾದ ವಿಭಜನೆಯೊಂದಿಗೆ ನಿಮ್ಮ ಸಮಾನ ಮಾಸಿಕ ಕಂತನ್ನು ಲೆಕ್ಕಹಾಕಿ',
    'emi.loanAmount': 'ಸಾಲದ ಮೊತ್ತ (₹)',
    'emi.interestRate': 'ಬಡ್ಡಿ ದರ (% ವರ್ಷಕ್ಕೆ)',
    'emi.tenure': 'ಸಾಲದ ಅವಧಿ (ವರ್ಷಗಳು)',
    'emi.monthlyEmi': 'ಮಾಸಿಕ EMI',
    'emi.principal': 'ಮೂಲ ಮೊತ್ತ',
    'emi.totalInterest': 'ಒಟ್ಟು ಬಡ್ಡಿ',
    'emi.totalAmount': 'ಒಟ್ಟು ಮೊತ್ತ',
    
    // Common
    'common.learnMore': 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
    'common.backToHome': 'ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ',
  },
  te: {
    // Navigation
    'nav.home': 'హోమ్',
    'nav.loanTypes': 'రుణ రకాలు',
    'nav.emiCalculator': 'EMI కాలిక్యులేటర్',
    'nav.bankInfo': 'బ్యాంక్ సమాచారం',
    'nav.regionalInsights': 'ప్రాదేశిక అంతర్దృష్టులు',
    'nav.examples': 'ఉదాహరణలు',
    'nav.offers': 'ఆఫర్లు',
    'nav.tipsGuides': 'చిట్కాలు మరియు మార్గదర్శకాలు',
    'nav.compare': 'రుణాలను పోల్చండి',
    
    // Homepage
    'home.title': 'సాధారణ పదాలలో రుణాలు మరియు EMI ను అర్థం చేసుకోండి',
    'home.subtitle': 'వివిధ రకాల రుణాల గురించి తెలుసుకోండి, మీ EMI ను లెక్కించండి మరియు సమాచార ఆర్థిక నిర్ణయాలు తీసుకోండి',
    'home.loanTypes': 'రుణ రకాలను అన్వేషించండి',
    'home.loanTypesDesc': 'వివిధ రకాల రుణాల గురించి తెలుసుకోండి',
    'home.emiCalc': 'EMI కాలిక్యులేటర్',
    'home.emiCalcDesc': 'మీ నెలవారీ వాయిదాలను లెక్కించండి',
    'home.bankInfo': 'బ్యాంక్ సమాచారం',
    'home.bankInfoDesc': 'వివిధ బ్యాంకుల నుండి రుణాలను పోల్చండి',
    'home.insights': 'ప్రాదేశిక అంతర్దృష్టులు',
    'home.insightsDesc': 'మీ రాష్ట్రంలో రుణ ధోరణులను అర్థం చేసుకోండి',
    
    // Loan Types
    'loan.personal': 'వ్యక్తిగత రుణం',
    'loan.home': 'గృహ రుణం',
    'loan.auto': 'వాహన రుణం',
    'loan.education': 'విద్యా రుణం',
    'loan.gold': 'బంగారు రుణం',
    'loan.business': 'వ్యాపార రుణం',
    
    // EMI Calculator
    'emi.title': 'EMI కాలిక్యులేటర్',
    'emi.subtitle': 'వివరణాత్మక విభజనతో మీ సమాన నెలవారీ వాయిదాను లెక్కించండి',
    'emi.loanAmount': 'రుణ మొత్తం (₹)',
    'emi.interestRate': 'వడ్డీ రేటు (% సంవత్సరానికి)',
    'emi.tenure': 'రుణ వ్యవధి (సంవత్సరాలు)',
    'emi.monthlyEmi': 'నెలవారీ EMI',
    'emi.principal': 'ప్రధాన మొత్తం',
    'emi.totalInterest': 'మొత్తం వడ్డీ',
    'emi.totalAmount': 'మొత్తం మొత్తం',
    
    // Common
    'common.learnMore': 'మరింత తెలుసుకోండి',
    'common.backToHome': 'హోమ్‌కి తిరిగి వెళ్ళండి',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
