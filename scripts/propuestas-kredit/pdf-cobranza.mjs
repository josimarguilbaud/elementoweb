import { chromium } from 'playwright';
import path from 'path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const f='file://'+ROOT+'/public/propuestas/kredit-cobranza-ia-19bfe5dc/index.html';
const b=await chromium.launch(); const p=await b.newPage({viewport:{width:1100,height:900}});
const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.goto(f,{waitUntil:'networkidle'}).catch(()=>p.goto(f));
await p.screenshot({path:'full.png',fullPage:true});
const svgs=await p.$$('svg'); let i=0; for(const s of svgs){await s.screenshot({path:`svg${i++}.png`});}
await p.emulateMedia({media:'print'});
await p.pdf({path:ROOT+'/public/propuestas/kredit-cobranza-ia-19bfe5dc/propuesta-kredit-cobranza-ia.pdf',format:'Letter',printBackground:true,preferCSSPageSize:true});
const m=await b.newPage({viewport:{width:390,height:800}}); await m.goto(f).catch(()=>{});
const ov=await m.evaluate(()=>document.documentElement.scrollWidth); console.log('mobile scrollWidth',ov,'errs',errs);
await b.close();
