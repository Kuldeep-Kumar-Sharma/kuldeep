import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private translations: { [key: string]: { [key: string]: string } } = {
    en: {
      // English translations (default)
      greeting: "Hi, I'm",
      basedIn: 'based in',
      downloadCV: 'Download CV',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      email: 'Email',
      summary:
        'Full Stack .NET Developer with over 6 years of experience building enterprise applications. Specialized in C#, Angular, and Azure cloud solutions. Passionate about clean code and user-centered design.',
    },
    nl: {
      // Dutch translations
      greeting: 'Hallo, ik ben',
      basedIn: 'gevestigd in',
      downloadCV: 'Download CV',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      email: 'E-mail',
      summary:
        'Full Stack .NET Developer met meer dan 6 jaar ervaring in het bouwen van bedrijfsapplicaties. Gespecialiseerd in C#, Angular en Azure cloud-oplossingen. Gepassioneerd door schone code en gebruikersgerichte ontwerpen.',
    },
    fr: {
      // French translations
      greeting: 'Bonjour, je suis',
      basedIn: 'basé à',
      downloadCV: 'Télécharger CV',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      email: 'E-mail',
      summary:
        "Développeur Full Stack .NET avec plus de 6 ans d'expérience dans la création d'applications d'entreprise. Spécialisé en C#, Angular et solutions cloud Azure. Passionné par le code propre et la conception centrée sur l'utilisateur.",
    },
    hi: {
      // Hindi translations
      greeting: 'नमस्ते, मैं हूँ',
      basedIn: 'स्थित',
      downloadCV: 'सीवी डाउनलोड करें',
      linkedin: 'लिंक्डइन',
      github: 'गिटहब',
      email: 'ईमेल',
      summary:
        'फुल स्टैक .NET डेवलपर जिन्हें एंटरप्राइज़ एप्लिकेशन बनाने का 6 वर्ष से अधिक का अनुभव है। C#, Angular और Azure क्लाउड समाधानों में विशेषज्ञता। स्वच्छ कोड और उपयोगकर्ता-केंद्रित डिज़ाइन के प्रति उत्साही।',
    },
  };

  private currentLanguage = new BehaviorSubject<string>('en');
  currentLanguage$ = this.currentLanguage.asObservable();

  constructor() {}

  setLanguage(lang: string) {
    if (['en', 'nl', 'fr', 'hi'].includes(lang)) {
      this.currentLanguage.next(lang);
    }
  }

  translate(key: string): string {
    const lang = this.currentLanguage.value;

    // Use stored translation if available
    if (this.translations[lang] && this.translations[lang][key]) {
      return this.translations[lang][key];
    }

    // Fallback to English if translation not found
    if (this.translations['en'] && this.translations['en'][key]) {
      return this.translations['en'][key];
    }

    // Return the key itself if no translation found
    return key;
  }
}
