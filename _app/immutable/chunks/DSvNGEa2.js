import"./DsnmJJEf.js";import"./69_IOA4Y.js";import{p as X,f as Y,g as c,e as t,_ as l,t as u,b as i,h as $,a as Z,s as ee,n as r,$ as a,d as R,u as n,V as O,i as te}from"./B62klROV.js";import{i as re}from"./CuBNyFeR.js";import{i as oe}from"./DhZfqzxk.js";import{l as le,s as ae}from"./BUr6unyB.js";import{A as se}from"./whMMtvhQ.js";import{v as g}from"./Cyeg8fIx.js";import{t as ie}from"./qUwwVM6i.js";import{S as f}from"./CCEqnSpU.js";import{O as _}from"./UwbdFAEa.js";var ne=R(`<section id="plausible"><!> <p>мы используем <!>, чтобы знать приблизительное
число активных пользователей кобальта, полностью анонимно. никакая
идентифицирующая информация о тебе или твоих запросах никогда не хранится. все
данные анонимизированы и агрегированы. мы сами хостим и управляем <!>, который использует кобальт.</p> <p>plausible не использует куки и полностью соответствует GDPR, CCPA и PECR.</p> <p>если ты хочешь отказаться от анонимной аналитики, то это можно сделать в <!>. после отказа скрипт
plausible не будет загружаться.</p> <p><!>.</p></section>`),pe=R(`<section id="general"><!> <p>политика конфиденциальности кобальта проста: мы ничего не собираем и не храним о
тебе. то, что ты делаешь, — это исключительно твоё дело, а не наше или чьё-либо
ещё.</p> <p>эти условия применяются только при использовании официального инстанса кобальта.
в других случаях, возможно, придётся обратиться к хостеру инстанса за точной
информацией.</p></section> <section id="local"><!> <p>инструменты, которые используют обработку на устройстве, работают офлайн,
локально и никогда никуда не отправляют обработанные данные. они явно помечены
как таковые, когда это применимо.</p></section> <section id="saving"><!> <p>при использовании функции сохранения, кобальту может понадобиться проксировать
или ремуксировать/транскодировать файлы. если это так, то для этой цели
создаётся временный туннель, и минимально необходимая информация о медиа
хранится в течение 90 секунд.</p> <p>на неизменённом и официальном инстансе кобальта <strong>все данные туннеля шифруются
ключом, к которому имеет доступ только конечный пользователь</strong>.</p> <p>зашифрованные данные туннеля могут включать:</p> <ul><li>название исходного сервиса.</li> <li>исходные ссылки на медиафайлы.</li> <li>необходимые внутренние аргументы для различения типов обработки.</li> <li>ключевые метаданные файла (сгенерированное имя, заголовок, автор, год
создания, данные об авторских правах).</li> <li>минимальная информация об исходном запросе, которая может быть использована
для восстановления туннеля после ошибки ссылки во время скачивания.</li></ul> <p>эти данные безвозвратно удаляются из оперативной памяти сервера через 90 секунд.
никто не имеет доступа к кэшированным данным туннеля, даже владельцы инстансов,
если исходный код кобальта не изменён.</p> <p>медиаданные из туннелей нигде не хранятся/кэшируются. всё обрабатывается в
реальном времени, даже при ремуксинге и транскодировании. туннели кобальта
работают как анонимный прокси.</p> <p>если твоё устройство поддерживает локальную обработку, то зашифрованный туннель
содержит намного меньше информации, потому что она возвращается клиенту.</p> <p>смотри <!>, чтобы
узнать больше о том, как это работает.</p></section> <section id="encryption"><!> <p>временно хранящиеся данные туннеля шифруются с использованием стандарта AES-256.
ключи расшифровки включены только в ссылку доступа и никогда не
логируются/кэшируются/хранятся где-либо. только конечный пользователь имеет
доступ к ссылке и ключам шифрования. ключи генерируются уникально для каждого
запрошенного туннеля.</p></section> <!> <section id="cloudflare"><!> <p>мы используем сервисы cloudflare для:</p> <ul><li>защиты от ddos и абьюза.</li> <li>защиты от ботов (cloudflare turnstile).</li> <li>хостинга и деплоя статического веб-приложения (cloudflare workers).</li></ul> <p>всё это необходимо для обеспечения лучшего опыта для всех. cloudflare — наиболее
приватный и надёжный провайдер всех упомянутых решений из всех известных нам
провайдеров.</p> <p>cloudflare полностью соответствует требованиям GDPR и HIPAA.</p> <p><!>.</p></section>`,1);function ye(G,A){const U=le(A,["children","$$slots","$$events","$$legacy"]);X(A,!1);const o=()=>te(ie,"$t",q),[q,z]=ee();oe(),se(G,ae(()=>U,{children:(N,de)=>{var I=pe(),h=Y(I),T=l(h);{let e=$(()=>(o(),n(()=>o()("about.heading.general"))));f(T,{get title(){return c(e)},sectionId:"general"})}r(4),a(h);var m=t(h,2),V=l(m);{let e=$(()=>(o(),n(()=>o()("about.heading.local"))));f(V,{get title(){return c(e)},sectionId:"local"})}r(2),a(m);var b=t(m,2),E=l(b);{let e=$(()=>(o(),n(()=>o()("about.heading.saving"))));f(E,{get title(){return c(e)},sectionId:"saving"})}var L=t(E,16),W=t(l(L));_(W,{href:"https://github.com/imputnet/cobalt/tree/main/api/src/stream",rel:"nofollow",children:(e,v)=>{r();var d=u(`соответствующий исходный код на
github`);i(e,d)},$$slots:{default:!0}}),r(),a(L),a(b);var P=t(b,2),j=l(P);{let e=$(()=>(o(),n(()=>o()("about.heading.encryption"))));f(j,{get title(){return c(e)},sectionId:"encryption"})}r(2),a(P);var S=t(P,2);{var F=e=>{var v=ne(),d=l(v);{let s=$(()=>(o(),n(()=>o()("about.heading.plausible"))));f(d,{get title(){return c(s)},sectionId:"plausible"})}var y=t(d,2),D=t(l(y));_(D,{href:"https://plausible.io/",rel:"nofollow",children:(s,x)=>{r();var p=u("plausible");i(s,p)},$$slots:{default:!0}});var K=t(D,2);_(K,{get href(){return`https://${O(g),n(()=>g.PLAUSIBLE_HOST)??""}/`},rel:"nofollow",children:(s,x)=>{r();var p=u(`инстансом
plausible`);i(s,p)},$$slots:{default:!0}}),r(),a(y);var w=t(y,4),M=t(l(w));_(M,{href:"/settings/privacy#analytics",children:(s,x)=>{r();var p=u("настройках приватности");i(s,p)},$$slots:{default:!0}}),r(),a(w);var H=t(w,2),Q=l(H);_(Q,{href:"https://plausible.io/privacy-focused-web-analytics",rel:"nofollow",children:(s,x)=>{r();var p=u(`узнай больше о преданности plausible к
приватности`);i(s,p)},$$slots:{default:!0}}),r(),a(H),a(v),i(e,v)};re(S,e=>{O(g),n(()=>g.PLAUSIBLE_ENABLED)&&e(F)})}var k=t(S,2),B=l(k);{let e=$(()=>(o(),n(()=>o()("about.heading.cloudflare"))));f(B,{get title(){return c(e)},sectionId:"cloudflare"})}var C=t(B,10),J=l(C);_(J,{href:"https://www.cloudflare.com/trust-hub/privacy-and-data-protection/",rel:"nofollow",children:(e,v)=>{r();var d=u(`узнай больше о преданности cloudflare к
приватности`);i(e,d)},$$slots:{default:!0}}),r(),a(C),a(k),i(N,I)},$$slots:{default:!0}})),Z(),z()}export{ye as default};
//# sourceMappingURL=DSvNGEa2.js.map
