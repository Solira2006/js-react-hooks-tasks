import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// BEGIN (write your solution here)
const Factorial = ({ number }) => {
  const factorialFunc = (n) => {
    if (n <= 0) return 1;
    return n * factorialFunc(n - 1);
  };

  const result = factorialFunc(number);
  
  return (
    <div>
      Factorial of {number} is {result}
    </div>
  );
};

const LanguageSwitcher = ({ onLanguageChange, currentLanguage }) => {
  const { t } = useTranslation();
  
  const getClassName = (lang) => {
    return currentLanguage === lang ? 'btn btn-primary' : 'btn btn-outline-primary';
  };

  return (
    <div className="btn-group mb-3" role="group">
      <button
        type="button"
        data-testid="en"
        className={getClassName('en')}
        onClick={() => onLanguageChange('en')}
      >
        {t('languages.en')}
      </button>
      <button
        type="button"
        data-testid="ru"
        className={getClassName('ru')}
        onClick={() => onLanguageChange('ru')}
      >
        {t('languages.ru')}
      </button>
    </div>
  );
};

const FactorialButtons = ({ onValueChange, currentValue }) => {
  const { t } = useTranslation();
  
  return (
    <div className="btn-group mb-3" role="group">
      <button 
        type="button" 
        className="btn btn-outline-primary" 
        onClick={() => onValueChange(1)}
      >
        {`${t('factorial')} 1`}
      </button>
      <button 
        type="button" 
        className="btn btn-outline-primary" 
        onClick={() => onValueChange(5)}
      >
        {`${t('factorial')} 5`}
      </button>
      <button 
        type="button" 
        className="btn btn-outline-primary" 
        onClick={() => onValueChange(10)}
      >
        {`${t('factorial')} 10`}
      </button>
      <button 
        type="button" 
        className="btn btn-outline-primary" 
        onClick={() => onValueChange(20)}
      >
        {`${t('factorial')} 20`}
      </button>
    </div>
  );
};

const App = () => {
  const { i18n } = useTranslation();
  const [value, setValue] = useState(0);
  const [language, setLanguage] = useState(i18n.language);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="App">
      <LanguageSwitcher 
        currentLanguage={language} 
        onLanguageChange={handleLanguageChange} 
      />
      <br />
      <FactorialButtons 
        currentValue={value} 
        onValueChange={setValue} 
      />
      <Factorial number={value} />
    </div>
  );
};
// END

export default App;