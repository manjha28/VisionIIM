import { useState } from 'react';
import { Icon } from '../assets/icons.jsx';
import { faqs } from './data';
export default function FAQ(){const [open,setOpen]=useState(0);return <section className="section faq"><div className="center-head"><span className="pill light"><i/>FAQ’S</span><h2>Frequently asked questions</h2><p>Answers to common questions about our platform and services.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><article className={open===i?'faq-item open':'faq-item'} key={q}><button onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}><span>{q}</span><Icon name={open===i?'up':'down'}/></button>{open===i&&<p>{a}</p>}</article>)}</div></section>}
