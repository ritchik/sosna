// src/i18n/en.ts
export const en = {
  translation: {
    // Common
    common: {
      viewAll: 'View all',
      viewDetails: 'View details',
      learnMore: 'Learn more',
      logout: 'Logout',
      login: 'Sign In',
      language: 'Language',
      theme: 'Theme',
      dark: 'Dark',
      light: 'Light',
      all: 'All',
      positive: 'Positive',
      negative: 'Negative',
      noData: 'No data',
      loading: 'Loading...',
      error: 'Error',
      save: 'Save',
      cancel: 'Cancel',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      pcs: 'pcs',
      currency: 'PLN',
    },

    // Auth
    auth: {
      title: 'Seller Panel',
      subtitle: 'Sign in to your account',
      userIdLabel: 'User ID',
      userIdPlaceholder: 'Enter your user ID',
      signIn: 'Sign In',
      invalidCredentials: 'Invalid user ID',
      welcome: 'Welcome',
    },

    // Navigation
    nav: {
      dashboard: 'Dashboard',
      orders: 'Orders',
      quality: 'Sales Quality',
      reviews: 'Customer Reviews',
      settings: 'Settings',
    },

    // Dashboard
    dashboard: {
      title: 'Dashboard',
      welcome: 'Welcome to Seller Panel',
    },

    // Orders Widget
    orders: {
      title: 'Orders',
      unpaid: 'Unpaid',
      notShipped: 'Not Shipped',
      returns: 'Returns',
      noOrders: 'No orders',
      noOrdersMessage: 'You don\'t have any orders yet. Use our promotional services to increase the visibility of your offers!',
      promoteOffers: 'Promote offers',
      pageTitle: 'Orders',
      category: 'Category',
      showingCategory: 'Showing orders in category',
    },

    // Sales Quality Widget
    quality: {
      title: 'Sales Quality',
      category: 'Quality Category',
      score: 'Quality Score',
      maxScore: 'out of {{max}}',
      areasToImprove: 'Areas to Improve',
      noQuality: 'Sales quality has not been determined yet',
      noQualityMessage: 'Start selling to receive a quality rating.',
      pageTitle: 'Sales Quality',
      aspects: {
        shippingTime: 'Shipping time',
        claims: 'Claims',
        communication: 'Communication',
        returns: 'Returns',
        cancellations: 'Cancellations',
        customerService: 'Customer service',
      },
    },

    // Customer Reviews Widget
    reviews: {
      title: 'Customer Reviews',
      averageRating: 'Average rating',
      noReviews: 'No reviews',
      noReviewsMessage: 'You don\'t have any customer reviews yet.',
      pageTitle: 'Customer Reviews',
      filter: {
        all: 'All',
        positive: 'Positive',
        negative: 'Negative',
      },
    },

    // Product Ranking Widget
    ranking: {
      title: 'Product Ranking',
      mostPurchased: 'Most purchased',
      leastPurchased: 'Least purchased',
      soldQuantity: 'Sold',
      revenue: 'Revenue',
      views: 'Views',
      noProducts: 'No products',
      noProductsMessage: 'You don\'t have any products to display yet.',
    },

    // Sales Chart Widget
    chart: {
      title: 'Sales Chart',
      measure: 'Measure',
      revenue: 'Revenue',
      unitsSold: 'Units sold',
      period: 'Period',
      today: 'Today',
      currentWeek: 'Current week',
      previousWeek: 'Previous week',
      chartType: 'Chart type',
      bar: 'Bar',
      line: 'Line',
      comparePrevious: 'Compare with previous period',
      current: 'Current period',
      previousPeriod: 'Previous period',
      incompleteData: 'Incomplete data (period in progress)',
    },

    // Sales Tips Widget
    tips: {
      title: 'Sales Tips',
      tip1: {
        title: 'Sales Tips',
        description: 'Add more photos to your listings to increase conversion by an average of 23%',
      },
      tip2: {
        title: 'Marketing Tips',
        description: 'Use seasonal promotions to boost sales during holidays',
      },
      tip3: {
        title: 'Customer Service',
        description: 'Respond to customer inquiries within 24 hours for better ratings',
      },
    },

    // Account
    account: {
      selectAccount: 'Select account',
      mainAccount: 'Main account',
      switchAccount: 'Switch account',
    },

    // Days of week
    days: {
      mon: 'Mon',
      tue: 'Tue',
      wed: 'Wed',
      thu: 'Thu',
      fri: 'Fri',
      sat: 'Sat',
      sun: 'Sun',
    },

    // Hours
    hours: {
      format: '{{hour}}:00',
    },

    // Time ago
    timeAgo: {
      justNow: 'just now',
      minutesAgo: '{{count}} min ago',
      hoursAgo: '{{count}} hours ago',
      daysAgo: '{{count}} days ago',
    },
  },
};
