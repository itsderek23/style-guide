// @flow strict

import React from 'react';
import SubjectIconM from '../../SubjectIcon';

export type IconTypeType =
  | 'accountancy'
  | 'administration'
  | 'agricultural'
  | 'algebra'
  | 'all'
  | 'arabic'
  | 'art'
  | 'artmusic'
  | 'astronomy'
  | 'belarus'
  | 'belarus-alt'
  | 'biology'
  | 'business'
  | 'catala'
  | 'chemistry'
  | 'chinese'
  | 'economics'
  | 'egzam'
  | 'english'
  | 'entrepreneurship'
  | 'environment'
  | 'ethics'
  | 'euskara'
  | 'first-aid'
  | 'french'
  | 'galego'
  | 'geography'
  | 'geology'
  | 'geometry'
  | 'german'
  | 'grammar'
  | 'health'
  | 'history'
  | 'india-lang'
  | 'indonesian-lang'
  | 'informatics'
  | 'italian'
  | 'japanese'
  | 'kazach'
  | 'kazach-alt'
  | 'kyrgyz'
  | 'korean'
  | 'language'
  | 'latin'
  | 'law'
  | 'life-science'
  | 'literature'
  | 'logic'
  | 'mathematics'
  | 'music'
  | 'nigerian-lang'
  | 'otherlanguages'
  | 'others'
  | 'pedagogics'
  | 'philosophy'
  | 'physical-education'
  | 'physics'
  | 'politics'
  | 'psychology'
  | 'religion'
  | 'rpa-lang'
  | 'russian'
  | 'russian-alt'
  | 'science'
  | 'security'
  | 'skills'
  | 'social-science'
  | 'sociology'
  | 'spanish'
  | 'statistics'
  | 'technology'
  | 'tourism'
  | 'traffic'
  | 'ukrainian'
  | 'ukrainian-alt'
  | 'ukrainian-literature'
  | 'uzbek'
  | 'wos';

export type SizeType = 'small' | 'medium' | 'normal';

export const TYPE = {
  ACCOUNTANCY: 'accountancy',
  ADMINISTRATION: 'administration',
  AGRICULTURAL: 'agricultural',
  ALGEBRA: 'algebra',
  ALL: 'all',
  ARABIC: 'arabic',
  ART: 'art',
  ARTMUSIC: 'artmusic',
  ASTRONOMY: 'astronomy',
  BELARUS: 'belarus',
  BELARUS_ALT: 'belarus-alt',
  BIOLOGY: 'biology',
  BUSINESS: 'business',
  CATALA: 'catala',
  CHEMISTRY: 'chemistry',
  CHINESE: 'chinese',
  ECONOMICS: 'economics',
  EGZAM: 'egzam',
  ENGLISH: 'english',
  ENTREPRENEURSHIP: 'entrepreneurship',
  ENVIRONMENT: 'environment',
  ETHICS: 'ethics',
  EUSKARA: 'euskara',
  FIRST_AID: 'first-aid',
  FRENCH: 'french',
  GALEGO: 'galego',
  GEOGRAPHY: 'geography',
  GEOLOGY: 'geology',
  GEOMETRY: 'geometry',
  GERMAN: 'german',
  GRAMMAR: 'grammar',
  HEALTH: 'health',
  HISTORY: 'history',
  INDIA_LANG: 'india-lang',
  INDONESIAN_LANG: 'indonesian-lang',
  INFORMATICS: 'informatics',
  ITALIAN: 'italian',
  JAPANESE: 'japanese',
  KAZACH: 'kazach',
  KAZACH_ALT: 'kazach-alt',
  KYRGYZ: 'kyrgyz',
  KOREAN: 'korean',
  LANGUAGE: 'language',
  LATIN: 'latin',
  LAW: 'law',
  LIFE_SCIENCE: 'life-science',
  LITERATURE: 'literature',
  LOGIC: 'logic',
  MATHEMATICS: 'mathematics',
  MUSIC: 'music',
  NIGERIAN_LANG: 'nigerian-lang',
  OTHERLANGUAGES: 'otherlanguages',
  OTHERS: 'others',
  PEDAGOGICS: 'pedagogics',
  PHILOSOPHY: 'philosophy',
  PHYSICAL_EDUCATION: 'physical-education',
  PHYSICS: 'physics',
  POLITICS: 'politics',
  PSYCHOLOGY: 'psychology',
  RELIGION: 'religion',
  RPA_LANG: 'rpa-lang',
  RUSSIAN: 'russian',
  RUSSIAN_ALT: 'russian-alt',
  SCIENCE: 'science',
  SECURITY: 'security',
  SKILLS: 'skills',
  SOCIAL_SCIENCE: 'social-science',
  SOCIOLOGY: 'sociology',
  SPANISH: 'spanish',
  STATISTICS: 'statistics',
  TECHNOLOGY: 'technology',
  TOURISM: 'tourism',
  TRAFFIC: 'traffic',
  UKRAINIAN: 'ukrainian',
  UKRAINIAN_ALT: 'ukrainian-alt',
  UKRAINIAN_LITERATURE: 'ukrainian-literature',
  UZBEK: 'uzbek',
  WOS: 'wos',
};

export const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  NORMAL: 'normal',
};

export type IconColorType =
  | 'adaptive'
  | 'blue'
  | 'dark'
  | 'gray'
  | 'gray-light'
  | 'gray-secondary'
  | 'lavender'
  | 'light'
  | 'mint'
  | 'mustard'
  | 'navy-blue'
  | 'peach';

type PropsType = {
  className?: string,
  type: IconTypeType,
  size?: SizeType,
  monoColor?: IconColorType,
  ...
};

const SubjectIcon = (props: PropsType) => {
  return <SubjectIconM {...props} />;
};

export default SubjectIcon;
