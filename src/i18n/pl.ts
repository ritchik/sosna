// src/i18n/pl.ts
export const pl = {
  translation: {
    // Common
    common: {
      viewAll: 'Zobacz wszystko',
      viewDetails: 'Zobacz szczegóły',
      learnMore: 'Dowiedz się więcej',
      logout: 'Wyloguj',
      login: 'Zaloguj się',
      language: 'Język',
      theme: 'Motyw',
      dark: 'Ciemny',
      light: 'Jasny',
      all: 'Wszystkie',
      positive: 'Pozytywne',
      negative: 'Negatywne',
      noData: 'Brak danych',
      loading: 'Ładowanie...',
      error: 'Błąd',
      save: 'Zapisz',
      cancel: 'Anuluj',
      back: 'Wróć',
      next: 'Dalej',
      previous: 'Poprzedni',
      pcs: 'szt.',
      currency: 'PLN',
    },

    // Auth
    auth: {
      title: 'Panel Sprzedawcy',
      subtitle: 'Zaloguj się do swojego konta',
      userIdLabel: 'Identyfikator użytkownika',
      userIdPlaceholder: 'Wprowadź swój identyfikator',
      signIn: 'Zaloguj się',
      invalidCredentials: 'Nieprawidłowy identyfikator użytkownika',
      welcome: 'Witaj',
    },

    // Navigation
    nav: {
      dashboard: 'Panel główny',
      orders: 'Zamówienia',
      quality: 'Jakość sprzedaży',
      reviews: 'Opinie kupujących',
      settings: 'Ustawienia',
    },

    // Dashboard
    dashboard: {
      title: 'Panel główny',
      welcome: 'Witaj w Panelu Sprzedawcy',
    },

    // Orders Widget
    orders: {
      title: 'Zamówienia',
      unpaid: 'Nieopłacone',
      notShipped: 'Niewysłane',
      returns: 'Zwroty',
      noOrders: 'Brak zamówień',
      noOrdersMessage: 'Nie masz jeszcze żadnych zamówień. Skorzystaj z naszych usług promocyjnych, aby zwiększyć widoczność swoich ofert!',
      promoteOffers: 'Promuj oferty',
      pageTitle: 'Zamówienia',
      category: 'Kategoria',
      showingCategory: 'Wyświetlanie zamówień z kategorii',
    },

    // Sales Quality Widget
    quality: {
      title: 'Jakość Sprzedaży',
      category: 'Kategoria jakości',
      score: 'Ocena jakości',
      maxScore: 'z {{max}}',
      areasToImprove: 'Aspekty do poprawy',
      noQuality: 'Jakość sprzedaży nie została jeszcze wyznaczona',
      noQualityMessage: 'Rozpocznij sprzedaż, aby otrzymać ocenę jakości.',
      pageTitle: 'Jakość sprzedaży',
      aspects: {
        shippingTime: 'Czas wysyłki',
        claims: 'Reklamacje',
        communication: 'Komunikacja',
        returns: 'Zwroty',
        cancellations: 'Anulowania',
        customerService: 'Obsługa klienta',
      },
    },

    // Customer Reviews Widget
    reviews: {
      title: 'Opinie kupujących',
      averageRating: 'Średnia ocena',
      noReviews: 'Brak opinii',
      noReviewsMessage: 'Nie masz jeszcze żadnych opinii od kupujących.',
      pageTitle: 'Opinie kupujących',
      filter: {
        all: 'Wszystkie',
        positive: 'Pozytywne',
        negative: 'Negatywne',
      },
    },

    // Product Ranking Widget
    ranking: {
      title: 'Ranking Ofert',
      mostPurchased: 'Najczęściej kupowane',
      leastPurchased: 'Najrzadziej kupowane',
      soldQuantity: 'Sprzedano',
      revenue: 'Obrót',
      views: 'Wyświetlenia',
      noProducts: 'Brak ofert',
      noProductsMessage: 'Nie masz jeszcze żadnych ofert do wyświetlenia.',
    },

    // Sales Chart Widget
    chart: {
      title: 'Wykres sprzedaży',
      measure: 'Miara',
      revenue: 'Obrót',
      unitsSold: 'Liczba sprzedanych sztuk',
      period: 'Okres',
      today: 'Dziś',
      currentWeek: 'Obecny tydzień',
      previousWeek: 'Poprzedni tydzień',
      chartType: 'Typ wykresu',
      bar: 'Słupkowy',
      line: 'Liniowy',
      comparePrevious: 'Porównaj z poprzednim okresem',
      current: 'Bieżący okres',
      previousPeriod: 'Poprzedni okres',
      incompleteData: 'Dane niepełne (okres w trakcie)',
    },

    // Sales Tips Widget
    tips: {
      title: 'Porady sprzedażowe',
      tip1: {
        title: 'Porady sprzedażowe',
        description: 'Dodaj więcej zdjęć do swoich ofert, aby zwiększyć konwersję średnio o 23%',
      },
      tip2: {
        title: 'Porady marketingowe',
        description: 'Wykorzystaj promocje sezonowe, aby zwiększyć sprzedaż w okresie świątecznym',
      },
      tip3: {
        title: 'Obsługa klienta',
        description: 'Odpowiadaj na zapytania klientów w ciągu 24 godzin, aby uzyskać lepsze oceny',
      },
    },

    // Account
    account: {
      selectAccount: 'Wybierz konto',
      mainAccount: 'Konto główne',
      switchAccount: 'Przełącz konto',
    },

    // Days of week
    days: {
      mon: 'Pon',
      tue: 'Wt',
      wed: 'Śr',
      thu: 'Czw',
      fri: 'Pt',
      sat: 'Sob',
      sun: 'Nie',
    },

    // Hours
    hours: {
      format: '{{hour}}:00',
    },

    // Time ago
    timeAgo: {
      justNow: 'przed chwilą',
      minutesAgo: '{{count}} min temu',
      hoursAgo: '{{count}} godz. temu',
      daysAgo: '{{count}} dni temu',
    },
  },
};
