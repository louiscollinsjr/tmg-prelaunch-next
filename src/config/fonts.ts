import { 
  Montserrat,
  Courier_Prime,
  Tiro_Bangla,
  Open_Sans,
  Lato,
  Roboto,
  Luckiest_Guy,
  Playfair_Display,
  Bebas_Neue
} from 'next/font/google'

// Font configurations
export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  preload: true,
})

export const courier = Courier_Prime({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-courier',
  display: 'swap',
  fallback: ['monospace'],
  preload: true,
})

export const tiroBangla = Tiro_Bangla({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-tiro-bangla',
  display: 'swap',
  fallback: ['serif'],
  preload: true,
})

export const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  preload: true,
})

export const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  preload: true,
})

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  preload: true,
})

export const luckiestGuy = Luckiest_Guy({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-luckiest-guy',
  display: 'swap',
  fallback: ['serif'],
  preload: true,
})

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
  fallback: ['serif'],
  preload: true,
})

export const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
  fallback: ['sans-serif'],
  preload: true,
})

// Combine all font variables into a single string
export const fontVariables = `${montserrat.variable} ${courier.variable} ${tiroBangla.variable} ${openSans.variable} ${lato.variable} ${roboto.variable} ${luckiestGuy.variable} ${playfairDisplay.variable} ${bebasNeue.variable}`
