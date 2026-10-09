import type {Config} from 'tailwindcss';
const config:Config={content:['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'],theme:{extend:{colors:{'orbit-navy':'#193150','orbit-red':'#A22725','orbit-surface':'#F8FAFC','orbit-body':'#475569'}}},plugins:[]};
export default config;
