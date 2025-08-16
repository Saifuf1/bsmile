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
				cyber: {
					blue: 'hsl(var(--cyber-blue))',
					purple: 'hsl(var(--cyber-purple))',
					pink: 'hsl(var(--cyber-pink))',
					teal: 'hsl(var(--cyber-teal))',
					green: 'hsl(var(--neon-green))',
				},
				glass: {
					bg: 'hsl(var(--glass-bg))',
					border: 'hsl(var(--glass-border))',
				},
				bsmile: {
					teal: 'hsl(var(--bsmile-teal))',
					navy: 'hsl(var(--bsmile-navy))',
					'light-teal': 'hsl(var(--bsmile-light-teal))',
					cream: 'hsl(var(--bsmile-cream))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'gradient-flow': {
					'0%, 100%': {
						'background-position': '0% 50%'
					},
					'50%': {
						'background-position': '100% 50%'
					}
				},
				'glass-shimmer': {
					'0%': {
						'background-position': '-200% 0'
					},
					'100%': {
						'background-position': '200% 0'
					}
				},
				'gradient-pulse': {
					'0%, 100%': {
						opacity: '0.4'
					},
					'50%': {
						opacity: '0.7'
					}
				},
				'fly-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-100px) scale(0.8)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0) scale(1)'
					}
				},
				'fly-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(100px) scale(0.8)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0) scale(1)'
					}
				},
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'glow-pulse': {
					'0%, 100%': { opacity: '1', transform: 'scale(1)' },
					'50%': { opacity: '0.8', transform: 'scale(1.05)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'neon-glow': {
					'0%, 100%': { filter: 'brightness(1) drop-shadow(0 0 10px hsl(var(--cyber-blue)))' },
					'50%': { filter: 'brightness(1.2) drop-shadow(0 0 20px hsl(var(--cyber-purple)))' }
				},
				'mask-split-horizontal': {
					'0%': { clipPath: 'inset(0 50% 0 50%)' },
					'100%': { clipPath: 'inset(0 0% 0 0%)' }
				},
				'mask-split-vertical': {
					'0%': { clipPath: 'inset(50% 0 50% 0)' },
					'100%': { clipPath: 'inset(0% 0 0% 0)' }
				},
				'text-split-reveal': {
					'0%': { clipPath: 'inset(0 100% 0 0)', opacity: '0' },
					'100%': { clipPath: 'inset(0 0% 0 0)', opacity: '1' }
				},
				'wipe-left-to-right': {
					'0%': { clipPath: 'inset(0 100% 0 0)' },
					'100%': { clipPath: 'inset(0 0% 0 0)' }
				},
				'wipe-top-to-bottom': {
					'0%': { clipPath: 'inset(100% 0 0 0)' },
					'100%': { clipPath: 'inset(0% 0 0 0)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-down': {
					'0%': { opacity: '0', transform: 'translateY(-30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-scale': {
					'0%': { opacity: '0', transform: 'scale(0.8)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				}
			},
			animation: {
				'gradient-flow': 'gradient-flow 8s ease-in-out infinite',
				'glass-shimmer': 'glass-shimmer 3s linear infinite',
				'gradient-pulse': 'gradient-pulse 4s ease-in-out infinite',
				'fly-in-left': 'fly-in-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'fly-in-right': 'fly-in-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'neon-glow': 'neon-glow 2s ease-in-out infinite alternate',
				'mask-split-horizontal': 'mask-split-horizontal 0.8s ease-out',
				'mask-split-vertical': 'mask-split-vertical 0.8s ease-out',
				'text-split-reveal': 'text-split-reveal 1s ease-out',
				'wipe-left-to-right': 'wipe-left-to-right 0.7s ease-out',
				'wipe-top-to-bottom': 'wipe-top-to-bottom 0.7s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'fade-in-down': 'fade-in-down 0.6s ease-out',
				'fade-in-left': 'fade-in-left 0.6s ease-out',
				'fade-in-right': 'fade-in-right 0.6s ease-out',
				'fade-in-scale': 'fade-in-scale 0.5s ease-out'
			},
			backdropBlur: {
				'glass': '16px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;