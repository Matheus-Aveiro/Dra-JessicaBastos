import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primaryColor: 'var(--primary-color)',
                secondaryColor: 'var(--secondary-color)',
                tertiaryColor: 'var(--tertiary-color)',

                primaryButtonColor: 'var(--primary-button-color)',
                secondaryButtorColor: 'var(--secondary-button-color)',

                primaryBackgroundColor: 'var(--primary-background)',
                secondaryBackgroundColor: 'var(--secondary-background)',

                primaryTextColor: 'var(--primary-text-color)',
                secondaryTextColor: 'var(--secondary-text-color)',
            },
        },
    },
    plugins: [],
} satisfies Config;
