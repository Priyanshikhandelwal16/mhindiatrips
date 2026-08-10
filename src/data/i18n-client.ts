"use client";

import { useParams } from 'next/navigation';
import { dictionaries } from './i18n';

export const useTranslation = () => {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const lang = (locale === 'es' || locale === 'pt') ? locale : 'en';
  return dictionaries[lang];
};
