
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'roboto': ['Roboto', 'sans-serif'],
				'roboto-light': ['Roboto', 'sans-serif'],
				'roboto-regular': ['Roboto', 'sans-serif'],
				'roboto-medium': ['Roboto', 'sans-serif'],
				'roboto-bold': ['Roboto', 'sans-serif'],
			},
			fontWeight: {
				'light': '300',
				'regular': '400',
				'medium': '500',
				'bold': '700',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Firebase Studio inspired colors
				'firebase-orange': '#FF6B35',
				'firebase-yellow': '#FFA726',
				'firebase-blue': '#1976D2',
				'firebase-purple': '#7B1FA2',
				'firebase-dark': '#0F1419',
				'firebase-gray': '#37474F',
				'firebase-light-gray': '#ECEFF1',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)'
					},
					'50%': { 
						opacity: '0.8',
						boxShadow: '0 0 40px rgba(255, 107, 53, 0.6)'
					}
				},
				'slide-in-right': {
					'0%': { 
						transform: 'translateX(100%)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'fade-in-up': {
					'0%': {
						transform: 'translateY(60px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'news-flow': {
					'0%': { transform: 'translateX(-100%) rotate(0deg)' },
					'100%': { transform: 'translateX(100vw) rotate(360deg)' }
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'slide-in-right': 'slide-in-right 0.8s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'news-flow': 'news-flow 20s linear infinite',
				'gradient-shift': 'gradient-shift 3s ease infinite'
			},
			backgroundSize: {
				'400%': '400% 400%'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
