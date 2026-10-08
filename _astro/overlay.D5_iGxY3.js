import{n as e,t}from"./scroll-lock.DzamYHMJ.js";var n=`Book a call with Velo Capital Funding`,r=`cubic-bezier(.165, .84, .44, 1)`,i=`cubic-bezier(.55, .055, .675, .19)`,a=`
.vbo{position:fixed;inset:0;width:100vw;height:100dvh;max-width:none;max-height:none;margin:0;padding:0;border:0;background:transparent;overflow:hidden;color:var(--c-body)}
.vbo::backdrop{background:var(--scrim);opacity:0;transition:opacity 240ms var(--ease-out)}
.vbo[data-state="open"]::backdrop{opacity:1}
.vbo[data-state="closing"]::backdrop{opacity:0;transition-duration:168ms}
.vbo__wrap{position:absolute;inset:0;display:grid;place-items:center;pointer-events:none}
.vbo__sheet{position:relative;pointer-events:auto;width:min(1120px,calc(100vw - 64px));height:min(88vh,860px);border-radius:var(--r-md);background:var(--c-white);border:1px solid var(--c-hairline);box-shadow:var(--e-pop);overflow:hidden;isolation:isolate}
@media (max-width:1023px){.vbo__sheet{width:94vw;height:92vh}}
.vbo__frame{display:block;width:100%;height:100%;border:0;background:var(--c-white);opacity:0;transition:opacity 200ms var(--ease-out)}
.vbo__frame[data-ready]{opacity:1}
.vbo__close{position:absolute;top:12px;right:12px;z-index:2;width:40px;height:40px;display:grid;place-items:center;border-radius:var(--r-btn);border:1px solid var(--c-hairline-strong);background:var(--c-white);color:var(--c-ink);cursor:pointer;transition:border-color 160ms var(--ease-out)}
.vbo__close::after{content:'';position:absolute;inset:-2px}
.vbo__close:hover{border-color:rgba(14,14,12,.36)}
.vbo__close:focus-visible{outline:2px solid var(--focus);outline-offset:2px}
.vbo__loading{position:absolute;inset:0;display:grid;place-items:center;pointer-events:none}
.vbo__loading[hidden]{display:none}
.vbo__dots{display:flex;gap:6px}
.vbo__dots i{width:6px;height:6px;border-radius:50%;background:var(--c-ink);opacity:.2;animation:vbo-dot 1.2s var(--ease-in-out) 4}
.vbo__dots i:nth-child(2){animation-delay:.12s}.vbo__dots i:nth-child(3){animation-delay:.24s}.vbo__dots i:nth-child(4){animation-delay:.36s}
@keyframes vbo-dot{0%,100%{opacity:.2}40%{opacity:.9}}
.vbo__confirm{position:absolute;inset:0;z-index:3;display:grid;place-items:center;padding:24px;background:color-mix(in srgb,var(--c-paper) 86%,transparent)}
.vbo__confirm[hidden]{display:none}
.vbo__card{width:min(400px,100%);padding:24px;border-radius:var(--r-card);background:var(--c-white);border:1px solid var(--c-hairline);box-shadow:var(--e-pop);display:grid;gap:8px}
.vbo__card h2{font-family:var(--ff-display);font-optical-sizing:auto;font-size:24px;line-height:1.15;font-weight:var(--fw-display);color:var(--c-ink);letter-spacing:-.01em}
.vbo__card p{font-size:var(--fs-small);color:var(--c-muted)}
.vbo__row{display:flex;justify-content:flex-end;gap:8px;margin-top:16px}
.vbo__btn{position:relative;height:40px;padding:0 16px;border-radius:var(--r-btn);font-family:var(--ff-sans);font-size:14px;font-weight:var(--fw-medium);cursor:pointer;border:1px solid var(--c-hairline-strong);background:var(--c-white);color:var(--c-ink)}
.vbo__btn::after{content:'';position:absolute;inset:-2px}
.vbo__btn:hover{border-color:rgba(14,14,12,.36)}
.vbo__btn--primary{background:var(--c-ink);border-color:var(--c-ink);color:var(--c-white)}
.vbo__btn--primary:hover{background:var(--c-ink-2);border-color:var(--c-ink-2)}
.vbo__btn:focus-visible{outline:2px solid var(--focus);outline-offset:2px}
@media (prefers-reduced-motion:reduce){.vbo::backdrop,.vbo__frame{transition-duration:150ms}.vbo__dots i{animation:none;opacity:.6}}
`,o=null,s,c=null,l,u,d,f=null,p=!1,m=!1,h=!1,g=()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;function _(){if(o)return;let e=document.createElement(`style`);e.textContent=a,document.head.append(e),o=document.createElement(`dialog`),o.className=`vbo`,o.setAttribute(`aria-label`,n),o.innerHTML=`
    <div class="vbo__wrap">
      <div class="vbo__sheet" data-vbo-sheet>
        <button type="button" class="vbo__close" aria-label="Close booking" data-vbo-close>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false"><path d="m4 4 8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
        </button>
        <div class="vbo__loading" data-vbo-loading role="status"><span class="vbo__dots" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">Loading booking</span></div>
        <div class="vbo__confirm" data-vbo-confirm hidden>
          <div class="vbo__card" role="alertdialog" aria-modal="true" aria-labelledby="vbo-confirm-title" aria-describedby="vbo-confirm-desc">
            <h2 id="vbo-confirm-title">Leave Booking?</h2>
            <p id="vbo-confirm-desc">Your details are saved.</p>
            <div class="vbo__row">
              <button type="button" class="vbo__btn" data-vbo-stay>Keep booking</button>
              <button type="button" class="vbo__btn vbo__btn--primary" data-vbo-leave>Leave</button>
            </div>
          </div>
        </div>
      </div>
    </div>`,document.body.append(o),s=o.querySelector(`[data-vbo-sheet]`),l=o.querySelector(`[data-vbo-close]`),u=o.querySelector(`[data-vbo-confirm]`),d=o.querySelector(`[data-vbo-loading]`),l.addEventListener(`click`,()=>C(`button`)),o.addEventListener(`cancel`,e=>{if(e.preventDefault(),!u.hidden)return S();C(`esc`)}),o.addEventListener(`click`,e=>{(e.target===o||e.target.classList.contains(`vbo__wrap`))&&C(`backdrop`)}),o.querySelector(`[data-vbo-stay]`).addEventListener(`click`,()=>S()),o.querySelector(`[data-vbo-leave]`).addEventListener(`click`,()=>{S(!1),w(history.state?.veloBook?`button`:`back`)}),window.addEventListener(`message`,v),window.addEventListener(`popstate`,y)}function v(e){if(e.origin!==location.origin||!c||e.source!==c.contentWindow)return;let t=e.data;if(t&&typeof t==`object`&&typeof t.type==`string`)switch(t.type){case`velo:book:close`:C(`esc`);break;case`velo:book:dirty`:m=!!t.dirty;break;case`velo:book:height`:break;case`velo:book:done`:m=!1,history.state?.veloBook?location.replace(`/book/confirmed/`):location.assign(`/book/confirmed/`)}}function y(e){if(p){if(h)return;if(m){history.pushState({veloBook:!0},``,b()),x();return}w(`back`);return}e.state?.veloBook&&location.pathname===`/book/`&&window.matchMedia(`(min-width: 768px)`).matches&&T(new URL(location.href),null,!1)}function b(){try{let e=new URL(c?.src??`/book/`,location.href);return e.searchParams.delete(`embed`),`/book/${e.search}`}catch{return`/book/`}}function x(){u.hidden=!1,c&&(c.inert=!0),l.inert=!0,u.querySelector(`[data-vbo-stay]`).focus()}function S(e=!0){u.hidden=!0,c&&(c.inert=!1),l.inert=!1,e&&(c?c.focus():l.focus())}function C(e){if(p&&!h){if(m){x();return}w(history.state?.veloBook?`button`:`back`)}}async function w(t){o&&p&&!h&&(h=!0,o.dataset.state=`closing`,g()?await s.animate([{opacity:1},{opacity:0}],{duration:120,fill:`forwards`}).finished.catch(()=>{}):await s.animate([{transform:`none`,opacity:1},{transform:`translateY(16px)`,opacity:0}],{duration:266,easing:i,fill:`forwards`}).finished.catch(()=>{}),o.close(),s.getAnimations().forEach(e=>e.cancel()),delete o.dataset.state,e(),p=!1,h=!1,m=!1,c?.remove(),c=null,t===`button`&&history.state?.veloBook&&history.back(),f&&f.isConnected&&f.focus({preventScroll:!0}),f=null)}function T(e,i,a){if(_(),!o||p)return;f=i??document.activeElement;let h=new URLSearchParams(e.search);h.delete(`embed`);let v=`/book/${h.toString()?`?${h}`:``}`,y=new URLSearchParams(h);y.set(`embed`,`1`),a&&history.pushState({veloBook:!0},``,v),p=!0,m=!1,d.hidden=!1,u.hidden=!0,c=document.createElement(`iframe`),c.className=`vbo__frame`,c.title=n,c.src=`/book/?${y}`;let b=c;b.addEventListener(`load`,()=>{if(p&&c===b){b.setAttribute(`data-ready`,``),d.hidden=!0,b.focus();try{b.contentWindow?.focus(),b.contentWindow?.postMessage({type:`velo:book:focus`},location.origin)}catch{}}}),s.insertBefore(b,u),o.dataset.state=`opening`,o.showModal(),t(),l.focus({preventScroll:!0}),requestAnimationFrame(()=>{o&&(o.dataset.state=`open`)}),g()?s.animate([{opacity:0},{opacity:1}],{duration:150,easing:`linear`}):s.animate([{transform:`translateY(24px)`,opacity:0},{transform:`none`,opacity:1}],{duration:380,easing:r})}function E(e,t){T(e,t,!0)}export{E as openBookingOverlay};