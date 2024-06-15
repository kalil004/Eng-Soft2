document.addEventListener('DOMContentLoaded', () => {
    const langRadios = document.querySelectorAll('input[name="language"]');
    
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        document.querySelector(`input[value="${savedLanguage}"]`).checked = true;
        applyLanguage(savedLanguage);
    }

    langRadios.forEach(radio => {
        radio.addEventListener('change', (event) => {
            const selectedLanguage = event.target.value;
            localStorage.setItem('preferredLanguage', selectedLanguage);
            applyLanguage(selectedLanguage);
        });
    });

    function applyLanguage(lang) {
        const translations = {
            'pt': {
                'Idioma': 'Idioma',
                'pt': 'Português (Brasil)',
                'en': 'Inglês (EUA)',
                'en-uk': 'Inglês (Reino Unido)',
                'es': 'Espanhol',
                'de': 'Alemão',
                'fr': 'Francês',
                'da': 'Dinamarquês',
                'ru': 'Russo',
                'Voltar': 'Voltar'
            },
            'en': {
                'Idioma': 'Language',
                'pt': 'Portuguese (Brazil)',
                'en': 'English (USA)',
                'en-uk': 'English (UK)',
                'es': 'Spanish',
                'de': 'German',
                'fr': 'French',
                'da': 'Danish',
                'ru': 'Russian',
                'Voltar': 'Back'
            },
            'en-uk': {
                'Idioma': 'Language',
                'pt': 'Portuguese (Brazil)',
                'en': 'English (USA)',
                'en-uk': 'English (UK)',
                'es': 'Spanish',
                'de': 'German',
                'fr': 'French',
                'da': 'Danish',
                'ru': 'Russian',
                'Voltar': 'Back'
            },
            'es': {
                'Idioma': 'Idioma',
                'pt': 'Portugués (Brasil)',
                'en': 'Inglés (EUA)',
                'en-uk': 'Inglés (Reino Unido)',
                'es': 'Español',
                'de': 'Alemán',
                'fr': 'Francés',
                'da': 'Danés',
                'ru': 'Ruso',
                'Voltar': 'Volver'
            },
            'de': {
                'Idioma': 'Sprache',
                'pt': 'Portugiesisch (Brasilien)',
                'en': 'Englisch (USA)',
                'en-uk': 'Englisch (UK)',
                'es': 'Spanisch',
                'de': 'Deutsch',
                'fr': 'Französisch',
                'da': 'Dänisch',
                'ru': 'Russisch',
                'Voltar': 'Zurück'
            },
            'fr': {
                'Idioma': 'Langue',
                'pt': 'Portugais (Brésil)',
                'en': 'Anglais (USA)',
                'en-uk': 'Anglais (Royaume Uni)',
                'es': 'Espagnol',
                'de': 'Allemand',
                'fr': 'Français',
                'da': 'Danois',
                'ru': 'Russe',
                'Voltar': 'Retour'
            },
            'da': {
                'Idioma': 'Sprog',
                'pt': 'Portugisisk (Brasilien)',
                'en': 'Engelsk (USA)',
                'en-uk': 'Engelsk (UK)',
                'es': 'Spansk',
                'de': 'Tysk',
                'fr': 'Fransk',
                'da': 'Dansk',
                'ru': 'Russisk',
                'Voltar': 'Tilbage'
            },
            'ru': {
                'Idioma': 'Язык',
                'pt': 'Португальский (Бразилия)',
                'en': 'Английский (США)',
                'en-uk': 'Английский (Великобритания)',
                'es': 'Испанский',
                'de': 'Немецкий',
                'fr': 'Французский',
                'da': 'Датский',
                'ru': 'Русский',
                'Voltar': 'Назад'
            }
        };

        document.querySelector('h1').textContent = translations[lang]['Idioma'];
        document.querySelector('a img').setAttribute('alt', translations[lang]['Voltar']);

        document.querySelectorAll('.lang-item').forEach((langItem) => {
            const span = langItem.querySelector('span');
            const value = langItem.querySelector('input').value;
            span.textContent = translations[lang][value];
        });
    }
});
