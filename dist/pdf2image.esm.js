!function(){const e="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js",t="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js",s="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js",n=window,r=document,a=Promise,o=Uint8Array,l=setTimeout,c=URL,d=console,h=Error,p="createElement",f="setAttribute",m="appendChild",u="script",g="link",w="head",y="body",j="href",b="dataset",x="percent",D="remove",v="file",M="width",$="height",k="catch",T="then",L="promise",P="error",U="message",z="numPages",A="length",C="type",F="replace",R="push",E="slice";(()=>{for(let e of["https://cdnjs.cloudflare.com"]){let t=r[p](g);t[f]("rel","preconnect"),t[j]=e,r[w][m](t)}for(let n of[e,t,s]){let e=r[p](g);e[f]("rel","preload"),e[f]("as",u),e[j]=n,r[w][m](e)}for(let t of[e,s]){let e=r[p](u);e.src=t,r[w][m](e)}let n=r[p](g);n[f]("rel","stylesheet"),n[j]="./dist/pdf2image.css",r[w][m](n)})();class O{constructor(){const e=r[p]("div");e.className="pdf2image-loading",e[b][x]=0;const t=r[p]("p");return t.innerText=this.#e(),e[m](t),this[y]=e,this}percent(e,t,s){const n=Math.round(e/t*100);this[y][b][x]=n,this[y].children[0].innerText=this.#e(n,s)}remove(){this[y][D]()}#e(e=0,t){return(t?"準備壓縮檔 ":"解析中 ")+e+"%"}}n.pdf2image=class{#t;#s;#n;#i;#r=[];constructor(e={}){this.#t=(e.filename||"").trim()[F](/\.pdf/,""),this.#s=e[v],this.#n={png:1,jpg:1,webp:1}[e[C]]?e[C]:"jpg",this.#i=e.scale||1.5}get images(){return this.#r}convert(){return new a(((e,s)=>{pdfjsLib.GlobalWorkerOptions.workerSrc=t,pdfjsLib.getDocument({data:new o(this.#s),cMapUrl:"//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/cmaps/",cMapPacked:!0,useWorkerFetch:!0,verbosity:0})[L][T]((async t=>{const s=new O;r[y][m](s[y]);try{const n=[],i=t[z];let o=0;for(let e=1;e<=t[z];e++)n[R]((async()=>{const n=await t.getPage(e),a=n.getViewport({scale:this.#i}),l=r[p]("canvas");l[M]=a[M],l[$]=a[$];const c=l.getContext("2d");await n.render({canvasContext:c,viewport:a})[L];const d=l.toDataURL(`image/${this.#n}`);this.#r[R](d),o+=1,s[x](o,i)})());await a.all(n),l((t=>{e(this.#r),s[D]()}),500)}catch(e){throw s[D](),new h(`${P} Page ${i} ${e[U]}`)}}))[k]((e=>{d[P](P,e),s(`${P} ${e[U]}`)}))}))}#a(e){const t=new Date;return e[F](/yyyy|MM|DD|hh|mm/g,(e=>({yyyy:t.getFullYear(),MM:("0"+(t.getMonth()+1))[E](-2),DD:("0"+t.getDate())[E](-2),hh:("0"+t.getHours())[E](-2),mm:("0"+t.getMinutes())[E](-2)}[e])))}async download(){if(null==this.#s)return;this.#r[A]<1&&await this.convert();const e=new O;return r[y][m](e[y]),new a(((t,s)=>{const n=new JSZip,i=this.#a(this.#t);for(let e=0;e<this.#r[A];e++){const t=`${i} ${e}.`+this.#n,s=this.#r[e].split(",")[1];n[v](t,s,{base64:!0})}n.generateAsync({[C]:"blob",streamFiles:!0},(t=>{e[x](t.percent,100,!0)}))[T]((s=>{const n=r[p]("a");n[j]=c.createObjectURL(s),n.download=`${i}.zip`,r[y][m](n),l((s=>{t(),n.click(),n[D](),e[D]()}),500)}))[k]((e=>{d[P](P,e),s([])}))}))}}}("undefined"==typeof window?window={}:window);export const pdf2image = window.pdf2image;
