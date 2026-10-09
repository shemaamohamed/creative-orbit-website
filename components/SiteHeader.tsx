'use client';
import {useState} from 'react';
import Image from 'next/image';
import {useLocale} from 'next-intl';
import {usePathname,useRouter} from '@/lib/navigation';
import {Link} from '@/lib/navigation';
import {ArrowUpRight,Menu,X} from 'lucide-react';
export default function SiteHeader(){
 const locale=useLocale();const pathname=usePathname();const router=useRouter();const [open,setOpen]=useState(false);const ar=locale==='ar';
 const nav=[['home','/'],['about','/about'],['services','/services'],['opportunities','/opportunities'],['partners','/partners'],['experience','/experience']];
 const labels=ar?['الرئيسية','من نحن','خدماتنا','الفرص والشراكات','شركاؤنا','الخبرات']:['Home','About','Services','Opportunities','Partners','Experience'];
 function switchLocale(){router.replace(pathname,{locale:ar?'en':'ar'});setOpen(false);}
 return <header className="site-header"><div className="wrap nav-wrap"><Link href="/" className="brand" aria-label="Creative Orbit home"><span className="brand-icon"><Image src="/favicon.jpeg" width={48} height={48} alt=""/></span><span className="brand-wordmark"><strong>Creative Orbit</strong><small>MARKETING CO.</small></span></Link><nav className={`main-nav ${open?'is-open':''}`} aria-label={ar?'التنقل الرئيسي':'Main navigation'}>{nav.map(([key,url],i)=><Link key={key} href={url} onClick={()=>setOpen(false)} aria-current={pathname===url?'page':undefined}>{labels[i]}</Link>)}<Link className="mobile-contact" href="/contact" onClick={()=>setOpen(false)}>{ar?'تواصل معنا':'Contact'} <ArrowUpRight size={15}/></Link></nav><div className="nav-actions"><button className="language-toggle" type="button" onClick={switchLocale} aria-label={ar?'Switch to English':'التبديل إلى العربية'}>{ar?'EN':'عربي'}</button><Link className="nav-cta" href="/contact">{ar?'ناقش فرصتك':'Discuss an opportunity'} <ArrowUpRight size={15}/></Link><button className="menu-toggle" type="button" aria-label={open?(ar?'إغلاق القائمة':'Close menu'):(ar?'فتح القائمة':'Open menu')} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X size={21}/>:<Menu size={21}/>}</button></div></div></header>
}
