/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors - From Design
        primary: {
          DEFAULT: '#2F5D4E',
          light: '#E8F5F1',
          dark: '#1A3A2E',
          black: '#1A1A1A',
        },
        // Backgrounds - Light Gray from Design
        background: {
          light: '#F5F5F5',
          secondary: '#FAFAFA',
          tertiary: '#F0F0F0',
        },
        surface: '#FFFFFF',
        // Accent Colors - From Design
        accent: {
          mint: '#7DD3C0',
          'mint-light': '#A8E6D5',
          'mint-lighter': '#D4F4DD',
          purple: '#8B5CF6',
          indigo: '#6366F1',
          orange: '#F59E0B',
          red: '#EF4444',
          blue: '#3B82F6',
        },
        // Inventory Status Colors - From Properties Design
        status: {
          live: '#D4F4DD',
          'live-text': '#15803D',
          new: '#7DD3C0',
          'new-text': '#FFFFFF',
          review: '#FEF3C7',
          'review-text': '#B45309',
          delisted: '#FEE2E2',
          'delisted-text': '#DC2626',
        },
        // Requirement Status Colors - From Requirements Design
        requirement: {
          open: '#D4F4DD',
          'open-text': '#15803D',
          pending: '#FEF3C7',
          'pending-text': '#B45309',
          closed: '#E5E7EB',
          'closed-text': '#6B7280',
        },
        // Text Colors - From Design
        text: {
          primary: '#1A1A1A',
          secondary: '#6B7280',
          tertiary: '#9CA3AF',
          muted: '#D1D5DB',
          purple: '#8B5CF6',
        },
        // Borders - Subtle Grays
        border: {
          light: '#F3F4F6',
          DEFAULT: '#E5E7EB',
          dark: '#D1D5DB',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': ['11px', { lineHeight: '1.4' }],
        'sm': ['12px', { lineHeight: '1.5' }],
        'base': ['14px', { lineHeight: '1.5' }],
        'md': ['15px', { lineHeight: '1.5' }],
        'lg': ['16px', { lineHeight: '1.5' }],
        'xl': ['18px', { lineHeight: '1.4' }],
        '2xl': ['20px', { lineHeight: '1.3' }],
        '3xl': ['24px', { lineHeight: '1.2' }],
        '4xl': ['28px', { lineHeight: '1.1' }],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
      },
      borderRadius: {
        'sm': '6px',
        'DEFAULT': '8px',
        'md': '10px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        'full': '9999px',
      },
      boxShadow: {
        'xs': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'sm': '0 1px 3px rgba(0, 0, 0, 0.06)',
        'DEFAULT': '0 2px 4px rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.08)',
        'lg': '0 10px 20px -5px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}

