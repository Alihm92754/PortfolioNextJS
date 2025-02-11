/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	maxWidth: {
  		container: '1440px',
  		contentContainer: '1140px',
  		containerSmall: '1024px',
  		containerxs: '768px'
  	},
  	extend: {
  		screens: {
  			xs: '320px',
  			sm: '375px',
  			sml: '500px',
  			md: '667px',
  			mdl: '768px',
  			lg: '960px',
  			lgl: '1024px',
  			xl: '1280px'
  		},
  		colors: {
  			bodyColor: '#0A192F',
  			textGreen: '#64ffda',
  			textYellow: '#F4AF00',
  			textLight: '#ccd6f6',
  			textDark: '#8892b0',
  			hoverColor: 'rgba(255,255,0,0.1)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			bodyFont: [
  				'Montserrat',
  				'sans-serif'
  			],
  			titleFont: [
  				'Inter',
  				'sans-serif'
  			]
  		},
  		boxShadow: {
  			navbarShadow: ' 0 10px 30px -10px rgba(2,12,27,0.7)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwind-scrollbar"), require("tailwindcss-animate")],
};
