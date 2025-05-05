'use client';

import LanguageChanger from './LanguageChanger';
import { useTranslation } from 'react-i18next';

export default function ExampleClientComponent() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center min-h-[200px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg p-8">
      <div className="flex flex-col md:flex-row items-center gap-6 backdrop-blur-sm bg-white/10 p-6 rounded-xl">
        <div className="relative">
          <LanguageChanger />
        </div>
        <p className="text-white text-lg md:text-xl font-medium tracking-wide">
          {t('home.welcome_message')}
        </p>
      </div>
    </div>
  );
}