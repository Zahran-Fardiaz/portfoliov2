import { Space_Grotesk } from 'next/font/google';
import './globals.css';

// Initialize your custom font
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata = {
  title: 'Zahran | Portfolio',
  description: 'Machine Learning, Data Analytics, and Systems Engineering.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Import FontAwesome for your icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={spaceGrotesk.className}>
        {children}
      </body>
    </html>
  );
}