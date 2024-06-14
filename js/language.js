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
                'Português (Brasil)': 'Português (Brasil)',
                'Inglês (EUA)': 'Inglês (EUA)',
                'Inglês (Reino Unido)': 'Inglês (Reino Unido)',
                'Espanhol': 'Espanhol',
                'Deutsch': 'Alemão',
                'Français': 'Francês',
                'Dansk': 'Dinamarquês',
                'Русский': 'Russo'
            },
            'en': {
                'Idioma': 'Language',
                'Português (Brasil)': 'Portuguese (Brazil)',
                'Inglês (EUA)': 'English (USA)',
                'Inglês (Reino Unido)': 'English (UK)',
                'Espanhol': 'Spanish',
                'Deutsch': 'German',
                'Français': 'French',
                'Dansk': 'Danish',
                'Русский': 'Russian'
            },
            'en-uk': {
                'Idioma': 'Language',
                'Português (Brasil)': 'Portuguese (Brazil)',
                'Inglês (EUA)': 'English (USA)',
                'Inglês (Reino Unido)': 'English (UK)',
                'Espanhol': 'Spanish',
                'Deutsch': 'German',
                'Français': 'French',
                'Dansk': 'Danish',
                'Русский': 'Russian'
            },
            'es': {
                'Idioma': 'Idioma',
                'Português (Brasil)': 'Portugués (Brasil)',
                'Inglês (EUA)': 'Inglés (EE.UU.)',
                'Inglês (Reino Unido)': 'Inglés (Reino Unido)',
                'Espanhol': 'Español',
                'Deutsch': 'Alemán',
                'Français': 'Francés',
                'Dansk': 'Danés',
                'Русский': 'Ruso'
            },
            'de': {
                'Idioma': 'Sprache',
                'Português (Brasil)': 'Portugiesisch (Brasilien)',
                'Inglês (EUA)': 'Englisch (USA)',
                'Inglês (Reino Unido)': 'Englisch (UK)',
                'Espanhol': 'Spanisch',
                'Deutsch': 'Deutsch',
                'Français': 'Französisch',
                'Dansk': 'Dänisch',
                'Русский': 'Russisch'
            },
            'fr': {
                'Idioma': 'Langue',
                'Português (Brasil)': 'Portugais (Brésil)',
                'Inglês (EUA)': 'Anglais (É.-U.)',
                'Inglês (Reino Unido)': 'Anglais (R.-U.)',
                'Espanhol': 'Espagnol',
                'Deutsch': 'Allemand',
                'Français': 'Français',
                'Dansk': 'Danois',
                'Русский': 'Russe'
            },
            'da': {
                'Idioma': 'Sprog',
                'Português (Brasil)': 'Portugisisk (Brasilien)',
                'Inglês (EUA)': 'Engelsk (USA)',
                'Inglês (Reino Unido)': 'Engelsk (UK)',
                'Espanhol': 'Spansk',
                'Deutsch': 'Tysk',
                'Français': 'Fransk',
                'Dansk': 'Dansk',
                'Русский': 'Russisk'
            },
            'ru': {
                'Idioma': 'Язык',
                'Português (Brasil)': 'Португальский (Бразилия)',
                'Inglês (EUA)': 'Английский (США)',
                'Inglês (Reino Unido)': 'Английский (Великобритания)',
                'Espanhol': 'Испанский',
                'Deutsch': 'Немецкий',
                'Français': 'Французский',
                'Dansk': 'Датский',
                'Русский': 'Русский'
            }
        };

        document.querySelector('h1').textContent = translations[lang]['Idioma'];
        document.querySelector('img[alt="Voltar"]').setAttribute('alt', translations[lang]['Voltar']);

        document.querySelectorAll('.lang-item span').forEach((span, index) => {
            const langKeys = Object.keys(translations[lang]);
            span.textContent = translations[lang][langKeys[index]];
        });
    }
});
