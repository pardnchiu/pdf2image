!function(){const e="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js",t="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js",s="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js",n=window,a=document,r=Promise,l=Uint8Array,o=setTimeout,c=URL,d=console,p=Error,h="createElement",f="setAttribute",m="appendChild",u="script",g="link",w="head",j="body",$="href",b="dataset",y="percent",x="remove",v="file",k="width",_="height",T="catch",L="then",M="promise",P="error",U="message",D="numPages",z="length",A="type",C="replace",F="push",R="slice";(()=>{for(let e of["https://cdnjs.cloudflare.com"]){let t=a[h](g);t[f]("rel","preconnect"),t[$]=e,a[w][m](t)}for(let i of[e,t,s]){let e=a[h](g);e[f]("rel","preload"),e[f]("as",u),e[$]=i,a[w][m](e)}for(let t of[e,s]){let e=a[h](u);e.src=t,a[w][m](e)}let i=a[h](g);i[f]("rel","stylesheet"),i[$]="./dist/pdf2image.css",a[w][m](i)})();class E{constructor(){const e=a[h]("div");e.className="pdf2image-loading",e[b][y]=0;const t=a[h]("p");return t.innerText=this.#e(),e[m](t),this[j]=e,this}percent(e,t,s){const i=Math.round(e/t*100);this[j][b][y]=i,this[j].children[0].innerText=this.#e(i,s)}remove(){this[j][x]()}#e(e=0,t){return(t?"準備壓縮檔 ":"解析中 ")+e+"%"}}n.pdf2image=class{#t;#s;#i;#n;#a=[];constructor(e={}){this.#t=(e.filename||"").trim()[C](/\.pdf/,""),this.#s=e[v],this.#i={png:1,jpg:1,webp:1}[e[A]]?e[A]:"jpg",this.#n=e.scale||1.5}get images(){return this.#a}convert(){return new r(((e,s)=>{pdfjsLib.GlobalWorkerOptions.workerSrc=t,pdfjsLib.getDocument({data:new l(this.#s),cMapUrl:"//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/cmaps/",cMapPacked:!0,useWorkerFetch:!0,verbosity:0})[M][L]((async t=>{const s=new E;a[j][m](s[j]);try{const i=[],n=t[D];let l=0;for(let e=1;e<=t[D];e++)i[F]((async()=>{const i=await t.getPage(e),r=i.getViewport({scale:this.#n}),o=a[h]("canvas");o[k]=r[k],o[_]=r[_];const c=o.getContext("2d");await i.render({canvasContext:c,viewport:r})[M];const d=o.toDataURL(`image/${this.#i}`);this.#a[F](d),l+=1,s[y](l,n)})());await r.all(i),o((t=>{e(this.#a),s[x]()}),500)}catch(e){throw s[x](),new p(`${P} Page ${i} ${e[U]}`)}}))[T]((e=>{d[P](P,e),s(`${P} ${e[U]}`)}))}))}async download(){if(null==this.#s)return;this.#a[z]<1&&await this.convert();const e=new E;return a[j][m](e[j]),new r(((t,s)=>{const i=new JSZip,n=`${this.#t[z]<1?"image":this.#t[C](/\s/g,"_")}`,r=`${this.#t[z]<1?"pdf2image":this.#t[C](/\s/g,"_")}`;for(let e=0;e<this.#a[z];e++){const t=`${n} ${e}.`+this.#i,s=this.#a[e].split(",")[1];i[v](t,s,{base64:!0})}i.generateAsync({[A]:"blob",streamFiles:!0},(t=>{e[y](t.percent,100,!0)}))[L]((s=>{const i=new Date,n=i.getFullYear(),l=("0"+(i.getMonth()+1))[R](-2),d=("0"+i.getDate())[R](-2),p=("0"+i.getHours())[R](-2),f=("0"+i.getMinutes())[R](-2),u=a[h]("a");u[$]=c.createObjectURL(s),u.download=`${r}_${n}_${l}_${d}_${p}_${f}.zip`,a[j][m](u),o((s=>{t(),u.click(),u[x](),e[x]()}),500)}))[T]((e=>{d[P](P,e),s([])}))}))}}}("undefined"==typeof window?window={}:window);export const pdf2image = window.pdf2image;