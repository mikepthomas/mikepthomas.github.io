(self.webpackChunkprojects=self.webpackChunkprojects||[]).push([[573,444],{8537:function(e,t,i){"use strict";i.r(t);i(2791);var r=i(4164),n=i(9703),s=i(184);it("renders without crashing",(function(){var e=document.createElement("div");r.render((0,s.jsx)(n.default,{}),e),r.unmountComponentAtNode(e)}))},2951:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return o}});var r=i(1413),n=i(2791),s=i(9172),a=i(884),c=i(184);function o(){return(0,c.jsxs)(n.Fragment,{children:[(0,c.jsx)(s.Intro,{}),(0,c.jsx)(s.About,{}),(0,c.jsx)(s.Cards,{}),(0,c.jsx)(s.Timeline,(0,r.Z)({},a))]})}},3569:function(e,t,i){"use strict";i.r(t);var r=i(9439),n=i(2791),s=i(5850),a=i(9271),c=i(1523),o=i(6131),p=i(1162),d=i(1511),u=(i(8723),i(184));t.default=function(e){var t=(0,n.useState)("markdown"),g=(0,r.Z)(t,2),l=g[0],m=g[1],f=(0,n.useState)("file"),j=(0,r.Z)(f,2),b=j[0],x=j[1],h=(0,a.TH)();return n.useEffect((function(){var t,r=e.match.params.project;null!==(t=r=r.replaceAll("../",""))&&void 0!==t&&t.endsWith(".md")||(r+=".md");var n="data/markdown/"+r;n="localhost"===window.location.hostname?i(8116)("./"+n):"https://raw.githubusercontent.com/mikepthomas/mikepthomas.github.io/develop/src/"+n,b!==n&&(m("# Loading project..."),fetch(n).then((function(e){return e.text()})).then((function(e){window.scrollTo(0,0),m(e),x(n)})))}),[b,h,e]),(0,u.jsxs)(o.W2,{className:"nav-padding projects-page",children:[(0,u.jsxs)(o.X2,{children:[(0,u.jsx)(o.JX,{className:"markdown",md:"8",children:(0,u.jsx)(s.D,{children:l,components:(0,d.getComponents)(),remarkPlugins:[p.Z]})}),(0,u.jsx)(o.JX,{md:{size:4},children:(0,u.jsxs)("div",{className:"position-sticky",children:[(0,u.jsxs)("div",{className:"p-4 mb-3 bg-light rounded",children:[(0,u.jsx)("h2",{children:"About"}),(0,u.jsx)("p",{children:"Here you can find information about a select few projects I am currently working on."})]}),(0,u.jsxs)("div",{className:"p-4",children:[(0,u.jsx)("h3",{children:"Elsewhere"}),(0,u.jsxs)("ol",{className:"list-unstyled",children:[(0,u.jsxs)("li",{children:[(0,u.jsx)(c.rU,{to:"/projects/printer",children:"3D Printer"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/projects/printer-failures",children:"Failures"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/projects/printer-printed-upgrades",children:"3D Printed Upgrades"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/projects/printer-skr-upgrade",children:"SKR 1.4 Turbo Upgrade"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/projects/printer-filament",children:"3D Printer Filament"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/projects/printer-future-upgrades",children:"Future Upgrades"})})]})]}),(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/projects/openrc-f1",children:"OpenRC F1"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/projects/openrc-truggy",children:"OpenRC Truggy"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/projects/openrc-mini-quad",children:"OpenRC Mini Quad"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/projects/guitar",children:"Guitar"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/projects/red-rocket",children:"Red Rocket Truck Stop"})})]})]})]})})]}),(0,u.jsx)("hr",{})]})}},1511:function(e,t,i){"use strict";i.r(t),i.d(t,{getComponents:function(){return c}});i(2791);var r=i(6131),n=i(3495),s=i(9063),a=i(184);function c(){return{a:function(e){var t,i=Object.assign({},e);return null!==(t=i.href)&&void 0!==t&&t.match(/^(https?:)?\/\//)?(0,a.jsx)("a",{href:i.href,rel:"noopener noreferrer",target:"_blank",children:i.children}):(0,a.jsx)(n.fO,{scroll:function(e){return window.scroll({behavior:"smooth",top:e.offsetTop-52})},to:i.href||"",children:i.children})},blockquote:function(e){var t=Object.assign({},e);return(0,a.jsx)("blockquote",{className:"blockquote",children:t.children})},h1:function(e){var t=Object.assign({},e);return(0,a.jsx)("h1",{id:o(t.children.toString()),children:t.children})},h2:function(e){var t=Object.assign({},e);return(0,a.jsx)("h2",{id:o(t.children.toString()),children:t.children})},h3:function(e){var t=Object.assign({},e);return(0,a.jsx)("h3",{id:o(t.children.toString()),children:t.children})},img:function(e){var t=Object.assign({},e);return(0,a.jsx)(s.Z,{offset:-200,animation:"fadeIn",children:(0,a.jsx)("img",{className:"img-fluid img-thumbnail",alt:t.alt,src:t.src})})},table:function(e){var t=Object.assign({},e);return(0,a.jsx)(r.iA,{responsive:!0,children:t.children})}}}var o=function(e){return e.toLowerCase().replace(/[(|)|+]/g,"").replace(/\W/g,"-")}},4398:function(){},8723:function(e,t,i){"use strict";i.r(t),t.default={}},8116:function(e,t,i){var r={"./":7672,"./components":9172,"./components/":9172,"./components/About/About":9403,"./components/About/About.tsx":9403,"./components/App":9703,"./components/App.scss":5285,"./components/App.test":8537,"./components/App.test.tsx":8537,"./components/App.tsx":9703,"./components/Cards/Card":4366,"./components/Cards/Card.tsx":4366,"./components/Cards/Cards":6765,"./components/Cards/Cards.tsx":6765,"./components/Footer/Footer":6119,"./components/Footer/Footer.tsx":6119,"./components/Home":2951,"./components/Home.tsx":2951,"./components/Intro/Intro":2850,"./components/Intro/Intro.scss":8149,"./components/Intro/Intro.tsx":2850,"./components/Navigation/Navigation":1294,"./components/Navigation/Navigation.module.scss":5122,"./components/Navigation/Navigation.tsx":1294,"./components/Navigation/SocialLink":790,"./components/Navigation/SocialLink.tsx":790,"./components/Projects":3569,"./components/Projects.scss":8723,"./components/Projects.tsx":3569,"./components/Timeline/Timeline":3475,"./components/Timeline/Timeline.scss":6703,"./components/Timeline/Timeline.tsx":3475,"./components/Timeline/TimelinePanel":1182,"./components/Timeline/TimelinePanel.tsx":1182,"./components/index":9172,"./components/index.ts":9172,"./data/Experience":884,"./data/Experience.json":884,"./data/Navigation":8799,"./data/Navigation.json":8799,"./data/Social":2832,"./data/Social.json":2832,"./data/markdown/guitar.md":1572,"./data/markdown/openrc-f1.md":1869,"./data/markdown/openrc-mini-quad.md":9530,"./data/markdown/openrc-truggy.md":9073,"./data/markdown/printer-failures.md":3746,"./data/markdown/printer-filament.md":7523,"./data/markdown/printer-future-upgrades.md":2202,"./data/markdown/printer-printed-upgrades.md":6230,"./data/markdown/printer-skr-upgrade.md":4263,"./data/markdown/printer.md":5316,"./data/markdown/red-rocket.md":938,"./img/banner-md.jpg":1045,"./img/banner-sm.jpg":3928,"./img/banner.jpg":1118,"./img/guitar/01-sourcing-parts.jpg":1795,"./img/guitar/02-finished-sourcing.jpg":9259,"./img/guitar/03-first-part-front.jpg":8926,"./img/guitar/04-first-part-rear.jpg":1960,"./img/guitar/05-second-part.jpg":4963,"./img/guitar/06-tension-springs.jpg":8917,"./img/guitar/07-third-part-back.jpg":8488,"./img/guitar/08-third-part-front.jpg":8276,"./img/guitar/09-full-length.jpg":5913,"./img/guitar/10-sides.jpg":1335,"./img/guitar/11-sides-install.jpg":6232,"./img/guitar/12-almost-there.jpg":9803,"./img/guitar/13-sides-clamping.jpg":6927,"./img/guitar/14-body-finished.jpg":3578,"./img/guitar/15-electronics.jpg":9213,"./img/guitar/16-rear-cover.jpg":3498,"./img/guitar/17-finished.jpg":2132,"./img/guitar/guitar-hero.jpg":4953,"./img/openrc-f1/complete.jpg":4253,"./img/openrc-f1/openrc-hero.jpg":3013,"./img/openrc-mini-quad/mini-quad-hero.jpg":843,"./img/openrc-truggy/chassis-assembly.png":8409,"./img/openrc-truggy/differential-housing-assembly.png":2796,"./img/openrc-truggy/front-assembly.png":9355,"./img/openrc-truggy/front-c-hub-assembly.png":9616,"./img/openrc-truggy/rear-assembly.png":5217,"./img/openrc-truggy/steering-assembly.png":5117,"./img/openrc-truggy/truggy-complete.jpg":4811,"./img/openrc-truggy/truggy-hero.jpg":8179,"./img/printer-failures/cable-chain-melted.jpg":1554,"./img/printer-failures/cable-chain-weakened.jpg":9035,"./img/printer-failures/cable-chain.jpg":6740,"./img/printer-failures/cooling-fan-broken.jpg":5164,"./img/printer-failures/cooling-fan-noctua.jpg":3534,"./img/printer-failures/fan-duct-melted.jpg":2543,"./img/printer-failures/first-print.jpg":18,"./img/printer-failures/heater-wire-wear.jpg":1670,"./img/printer-failures/printer-failures-hero.jpg":4316,"./img/printer-failures/worn-belt.jpg":6619,"./img/printer-filament/filament-hero.jpg":1225,"./img/printer-future-upgrades/voron-frame.jpg":1141,"./img/printer-printed-upgrades/bed-upgrades.jpg":8650,"./img/printer-printed-upgrades/cosmetic-upgrades.jpg":7731,"./img/printer-printed-upgrades/electronics-case-before-after.jpg":3789,"./img/printer-printed-upgrades/electronics-case.jpg":9240,"./img/printer-printed-upgrades/electronics-upgrades.jpg":3605,"./img/printer-printed-upgrades/extruder-upgrades.jpg":4081,"./img/printer-printed-upgrades/frame-brace.jpg":6752,"./img/printer-printed-upgrades/mosfet.jpg":4330,"./img/printer-printed-upgrades/motion-upgrades.jpg":8110,"./img/printer-printed-upgrades/original-fan-duct.jpg":8423,"./img/printer-printed-upgrades/printed-items.jpg":5836,"./img/printer-printed-upgrades/sd-card-extender.jpg":5382,"./img/printer-printed-upgrades/semi-circular-fan-duct.jpg":5058,"./img/printer-printed-upgrades/t-corner-installed.jpg":3877,"./img/printer-printed-upgrades/t-corner.jpg":2474,"./img/printer-printed-upgrades/x-axis-brackets.jpg":8484,"./img/printer-printed-upgrades/x-axis-chain-updated.jpg":8322,"./img/printer-printed-upgrades/x-axis-chain.jpg":7499,"./img/printer-printed-upgrades/y-belt-tensioner-updated.jpg":4799,"./img/printer-printed-upgrades/y-belt-tensioner.jpg":9296,"./img/printer-skr-upgrade/benchy.jpg":4782,"./img/printer-skr-upgrade/design.jpg":5088,"./img/printer-skr-upgrade/electronics-case.jpg":9670,"./img/printer-skr-upgrade/firmware.jpg":4048,"./img/printer-skr-upgrade/relay-mount.jpg":404,"./img/printer-skr-upgrade/skr-upgrade-hero.jpg":7591,"./img/printer-skr-upgrade/smart-filament-sensor.jpg":4474,"./img/printer-skr-upgrade/tft-mount.jpg":9510,"./img/printer-skr-upgrade/wiring.jpg":2837,"./img/printer/01-before-assembly.jpg":7076,"./img/printer/02-mid-frame.jpg":8989,"./img/printer/03-top-frame.jpg":1281,"./img/printer/04-y-axis-motor.jpg":9469,"./img/printer/05-rear-frame.jpg":3417,"./img/printer/06-y-axis-tensioner.jpg":8210,"./img/printer/07-y-axis-install.jpg":4888,"./img/printer/08-y-axis-rods.jpg":6195,"./img/printer/09-bed-carriage.jpg":1003,"./img/printer/10-bed-carriage-install.jpg":2716,"./img/printer/11-y-belt.jpg":3203,"./img/printer/12-heated-bed.jpg":9383,"./img/printer/13-z-axis-motors.jpg":2057,"./img/printer/14-z-axis-rods.jpg":1512,"./img/printer/15-lead-screws.jpg":1672,"./img/printer/16-x-axis-rods.jpg":3566,"./img/printer/17-extruder.jpg":7494,"./img/printer/18-x-axis-carriage.jpg":601,"./img/printer/19-extruder-install.jpg":5196,"./img/printer/20-part-cooling-fan.jpg":6452,"./img/printer/21-x-axis-motor.jpg":4541,"./img/printer/22-x-axis-complete.jpg":5955,"./img/printer/23-display.jpg":3425,"./img/printer/24-power-supply.jpg":2417,"./img/printer/25-control-board.jpg":1610,"./img/printer/26-wiring.jpg":8638,"./img/printer/27-initial-power-on.jpg":5521,"./img/printer/28-she-lives.jpg":5460,"./img/printer/29-wire-management.jpg":3543,"./img/printer/30-first-print.jpg":5767,"./img/printer/auto-level-sensor.jpg":9541,"./img/printer/printer-hero.jpg":8600,"./img/printer/safety-upgrades.jpg":9893,"./img/red-rocket/fallout-wasteland-warefare.jpg":7023,"./img/red-rocket/floor.jpg":7717,"./img/red-rocket/red-rocket-hero.jpg":9175,"./img/red-rocket/roof.jpg":1907,"./img/red-rocket/walls.jpg":8908,"./index":7672,"./index.tsx":7672,"./js/dateUtils":6732,"./js/dateUtils.ts":6732,"./js/markdownComponents":1511,"./js/markdownComponents.tsx":1511,"./js/serviceWorker":5735,"./js/serviceWorker.ts":5735,"./js/setupFontAwesome":2755,"./js/setupFontAwesome.ts":2755,"./react-app-env.d":4398,"./react-app-env.d.ts":4398};function n(e){var t=s(e);return i(t)}function s(e){if(!i.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id=8116},1572:function(e,t,i){"use strict";e.exports=i.p+"static/media/guitar.d2f5bb2e22020eb420be.md"},1869:function(e,t,i){"use strict";e.exports=i.p+"static/media/openrc-f1.d8ed16ef050b58a3e531.md"},9530:function(e,t,i){"use strict";e.exports=i.p+"static/media/openrc-mini-quad.196fa858c1e48531a40b.md"},9073:function(e,t,i){"use strict";e.exports=i.p+"static/media/openrc-truggy.cc2944863f439d2542a3.md"},3746:function(e,t,i){"use strict";e.exports=i.p+"static/media/printer-failures.a4cf587c4cfa6c13f304.md"},7523:function(e,t,i){"use strict";e.exports=i.p+"static/media/printer-filament.e0456622b0f0552268d9.md"},2202:function(e,t,i){"use strict";e.exports=i.p+"static/media/printer-future-upgrades.4c4d911493eaff4381af.md"},6230:function(e,t,i){"use strict";e.exports=i.p+"static/media/printer-printed-upgrades.4a309f03c91ab5f443cc.md"},4263:function(e,t,i){"use strict";e.exports=i.p+"static/media/printer-skr-upgrade.2d88e48f6b5797b9f77a.md"},5316:function(e,t,i){"use strict";e.exports=i.p+"static/media/printer.8a9e2c23b5e2c04e9158.md"},938:function(e,t,i){"use strict";e.exports=i.p+"static/media/red-rocket.35a63dd1898a1f68a8a6.md"},1045:function(e,t,i){"use strict";e.exports=i.p+"static/media/banner-md.eccdf1a20443ccb61dfe.jpg"},3928:function(e,t,i){"use strict";e.exports=i.p+"static/media/banner-sm.0aa1907f88c09d98e5ff.jpg"},1118:function(e,t,i){"use strict";e.exports=i.p+"static/media/banner.0914f974bce29ed2bffd.jpg"},1795:function(e,t,i){"use strict";e.exports=i.p+"static/media/01-sourcing-parts.3ad15bcb15f35d4788be.jpg"},9259:function(e,t,i){"use strict";e.exports=i.p+"static/media/02-finished-sourcing.fb4643786db59e60e9ff.jpg"},8926:function(e,t,i){"use strict";e.exports=i.p+"static/media/03-first-part-front.ffd22e9d3bcb841e6285.jpg"},1960:function(e,t,i){"use strict";e.exports=i.p+"static/media/04-first-part-rear.0fcc4f027318f15e030b.jpg"},4963:function(e,t,i){"use strict";e.exports=i.p+"static/media/05-second-part.445e49df16d524fdebc9.jpg"},8917:function(e,t,i){"use strict";e.exports=i.p+"static/media/06-tension-springs.c2b2c81664ae99f588dc.jpg"},8488:function(e,t,i){"use strict";e.exports=i.p+"static/media/07-third-part-back.03debadd13c2fa23392d.jpg"},8276:function(e,t,i){"use strict";e.exports=i.p+"static/media/08-third-part-front.9119f2c761ff4529b820.jpg"},5913:function(e,t,i){"use strict";e.exports=i.p+"static/media/09-full-length.802d7f9f5b2e81e00c07.jpg"},1335:function(e,t,i){"use strict";e.exports=i.p+"static/media/10-sides.abd262fe511cab15c7ba.jpg"},6232:function(e,t,i){"use strict";e.exports=i.p+"static/media/11-sides-install.175673199798b261c4c2.jpg"},6927:function(e,t,i){"use strict";e.exports=i.p+"static/media/13-sides-clamping.a8d16c31e96e320a1731.jpg"},3578:function(e,t,i){"use strict";e.exports=i.p+"static/media/14-body-finished.50ba02b720a5afc7a844.jpg"},9213:function(e,t,i){"use strict";e.exports=i.p+"static/media/15-electronics.de342ae139ec1dab7fec.jpg"},3498:function(e,t,i){"use strict";e.exports=i.p+"static/media/16-rear-cover.d4bb05cb63fde3510c56.jpg"},2132:function(e,t,i){"use strict";e.exports=i.p+"static/media/17-finished.6dc687040981e7763d6c.jpg"},4953:function(e,t,i){"use strict";e.exports=i.p+"static/media/guitar-hero.abbb5c34bd2e79ea22cc.jpg"},4253:function(e,t,i){"use strict";e.exports=i.p+"static/media/complete.13602d0061d178e18fe2.jpg"},843:function(e,t,i){"use strict";e.exports=i.p+"static/media/mini-quad-hero.8cda04d16c1381a4ac1b.jpg"},8409:function(e,t,i){"use strict";e.exports=i.p+"static/media/chassis-assembly.2641174c41b76897d356.png"},2796:function(e,t,i){"use strict";e.exports=i.p+"static/media/differential-housing-assembly.5fbb433b8f34ae4ea2ce.png"},9355:function(e,t,i){"use strict";e.exports=i.p+"static/media/front-assembly.2bce3a6fc1b363c5cb65.png"},9616:function(e,t,i){"use strict";e.exports=i.p+"static/media/front-c-hub-assembly.c6b001742c46cf9d220d.png"},5217:function(e,t,i){"use strict";e.exports=i.p+"static/media/rear-assembly.48d3f27fb7c521d82476.png"},5117:function(e,t,i){"use strict";e.exports=i.p+"static/media/steering-assembly.3f01b137b2b2d18c5922.png"},4811:function(e,t,i){"use strict";e.exports=i.p+"static/media/truggy-complete.5c9fb1532e15c2eb6321.jpg"},1554:function(e,t,i){"use strict";e.exports=i.p+"static/media/cable-chain-melted.acc81d62c9bc532fef74.jpg"},9035:function(e,t,i){"use strict";e.exports=i.p+"static/media/cable-chain-weakened.534a6c35e63ff8050826.jpg"},6740:function(e,t,i){"use strict";e.exports=i.p+"static/media/cable-chain.7405c88b43c6e401f5ee.jpg"},5164:function(e,t,i){"use strict";e.exports=i.p+"static/media/cooling-fan-broken.0984a73ba00a8e2f5e62.jpg"},3534:function(e,t,i){"use strict";e.exports=i.p+"static/media/cooling-fan-noctua.50b9eee6a775b9665e20.jpg"},2543:function(e,t,i){"use strict";e.exports=i.p+"static/media/fan-duct-melted.782e67a71dc23880afcb.jpg"},18:function(e,t,i){"use strict";e.exports=i.p+"static/media/first-print.d555bb24addc9e69d4cc.jpg"},1670:function(e,t,i){"use strict";e.exports=i.p+"static/media/heater-wire-wear.8899496142f9d71580d3.jpg"},4316:function(e,t,i){"use strict";e.exports=i.p+"static/media/printer-failures-hero.3e723406eb98e5a9e685.jpg"},6619:function(e,t,i){"use strict";e.exports=i.p+"static/media/worn-belt.f14952564c8b208fbb6f.jpg"},1225:function(e,t,i){"use strict";e.exports=i.p+"static/media/filament-hero.a1eba81d921a0319e724.jpg"},1141:function(e,t,i){"use strict";e.exports=i.p+"static/media/voron-frame.8d3818a56a5f2aa65af8.jpg"},8650:function(e,t,i){"use strict";e.exports=i.p+"static/media/bed-upgrades.34fd7bf4028f53665d15.jpg"},7731:function(e,t,i){"use strict";e.exports=i.p+"static/media/cosmetic-upgrades.93f372965cb1ed363289.jpg"},3789:function(e,t,i){"use strict";e.exports=i.p+"static/media/electronics-case-before-after.84adc30e38c42859849c.jpg"},9240:function(e,t,i){"use strict";e.exports=i.p+"static/media/electronics-case.edc65a345fe1c34fc46d.jpg"},3605:function(e,t,i){"use strict";e.exports=i.p+"static/media/electronics-upgrades.1b5b297ac825289cb11c.jpg"},4081:function(e,t,i){"use strict";e.exports=i.p+"static/media/extruder-upgrades.5a4d0ebbdfb21af2f86e.jpg"},6752:function(e,t,i){"use strict";e.exports=i.p+"static/media/frame-brace.c69cc01e586461289bb3.jpg"},4330:function(e,t,i){"use strict";e.exports=i.p+"static/media/mosfet.9535ff57f01dca76f54b.jpg"},8110:function(e,t,i){"use strict";e.exports=i.p+"static/media/motion-upgrades.8e80f3fa56b54f522030.jpg"},8423:function(e,t,i){"use strict";e.exports=i.p+"static/media/original-fan-duct.26fc42b6e513817a1365.jpg"},5382:function(e,t,i){"use strict";e.exports=i.p+"static/media/sd-card-extender.98226cc9375cd46d11d2.jpg"},5058:function(e,t,i){"use strict";e.exports=i.p+"static/media/semi-circular-fan-duct.c96c23a06d28047b3593.jpg"},3877:function(e,t,i){"use strict";e.exports=i.p+"static/media/t-corner-installed.b0822713b020c77cb84e.jpg"},2474:function(e,t,i){"use strict";e.exports=i.p+"static/media/t-corner.0ab5aa8f45a008eccfd9.jpg"},8484:function(e,t,i){"use strict";e.exports=i.p+"static/media/x-axis-brackets.6cc8491b544ae9c56ab5.jpg"},8322:function(e,t,i){"use strict";e.exports=i.p+"static/media/x-axis-chain-updated.edc3fe49bb7204d818b0.jpg"},7499:function(e,t,i){"use strict";e.exports=i.p+"static/media/x-axis-chain.3ec381356cc129e77c62.jpg"},4799:function(e,t,i){"use strict";e.exports=i.p+"static/media/y-belt-tensioner-updated.c8b78e9d269b26fe7023.jpg"},9296:function(e,t,i){"use strict";e.exports=i.p+"static/media/y-belt-tensioner.c79309f1ac6788ffc279.jpg"},4782:function(e,t,i){"use strict";e.exports=i.p+"static/media/benchy.c05a3dd841adf8aba77c.jpg"},5088:function(e,t,i){"use strict";e.exports=i.p+"static/media/design.1ecdd44514d23c48c7ce.jpg"},9670:function(e,t,i){"use strict";e.exports=i.p+"static/media/electronics-case.c978b1816c3869517092.jpg"},4048:function(e,t,i){"use strict";e.exports=i.p+"static/media/firmware.7848c4141db3841ed359.jpg"},404:function(e,t,i){"use strict";e.exports=i.p+"static/media/relay-mount.763349f977c5a01b1b10.jpg"},7591:function(e,t,i){"use strict";e.exports=i.p+"static/media/skr-upgrade-hero.58a997807b26b876971a.jpg"},4474:function(e,t,i){"use strict";e.exports=i.p+"static/media/smart-filament-sensor.a55bd586bf4d76b70a67.jpg"},9510:function(e,t,i){"use strict";e.exports=i.p+"static/media/tft-mount.94f8d5a87a36b7ee91fa.jpg"},2837:function(e,t,i){"use strict";e.exports=i.p+"static/media/wiring.ab72ce225283ab5c06d1.jpg"},7076:function(e,t,i){"use strict";e.exports=i.p+"static/media/01-before-assembly.ebe6040c87e49a0fcf83.jpg"},8989:function(e,t,i){"use strict";e.exports=i.p+"static/media/02-mid-frame.909cdc3145a4ee313f9e.jpg"},1281:function(e,t,i){"use strict";e.exports=i.p+"static/media/03-top-frame.153ce9fec3ac20085989.jpg"},9469:function(e,t,i){"use strict";e.exports=i.p+"static/media/04-y-axis-motor.dedee87261a219ef2e64.jpg"},3417:function(e,t,i){"use strict";e.exports=i.p+"static/media/05-rear-frame.3e57e2e34ee3e69ec309.jpg"},8210:function(e,t,i){"use strict";e.exports=i.p+"static/media/06-y-axis-tensioner.1fc6ec566375e0240754.jpg"},4888:function(e,t,i){"use strict";e.exports=i.p+"static/media/07-y-axis-install.f1a6c2269013a4193484.jpg"},6195:function(e,t,i){"use strict";e.exports=i.p+"static/media/08-y-axis-rods.b563f1f6707584620473.jpg"},1003:function(e,t,i){"use strict";e.exports=i.p+"static/media/09-bed-carriage.9d3680461e39a260a78c.jpg"},2716:function(e,t,i){"use strict";e.exports=i.p+"static/media/10-bed-carriage-install.507877143bff910fb1f9.jpg"},3203:function(e,t,i){"use strict";e.exports=i.p+"static/media/11-y-belt.37d94b5eed5e6c72b0c3.jpg"},9383:function(e,t,i){"use strict";e.exports=i.p+"static/media/12-heated-bed.6927901973198b3b5b0f.jpg"},2057:function(e,t,i){"use strict";e.exports=i.p+"static/media/13-z-axis-motors.a3614917ecc3ca28c7b3.jpg"},1512:function(e,t,i){"use strict";e.exports=i.p+"static/media/14-z-axis-rods.56aabc575b2ac569f8a2.jpg"},1672:function(e,t,i){"use strict";e.exports=i.p+"static/media/15-lead-screws.9d084e1bd122ce40feb6.jpg"},3566:function(e,t,i){"use strict";e.exports=i.p+"static/media/16-x-axis-rods.73a356717a0518f67b03.jpg"},7494:function(e,t,i){"use strict";e.exports=i.p+"static/media/17-extruder.41837fea0793fe190b97.jpg"},601:function(e,t,i){"use strict";e.exports=i.p+"static/media/18-x-axis-carriage.583804bc59c677e1d7f6.jpg"},5196:function(e,t,i){"use strict";e.exports=i.p+"static/media/19-extruder-install.c646154632695fc21d0f.jpg"},6452:function(e,t,i){"use strict";e.exports=i.p+"static/media/20-part-cooling-fan.54beee308971696b6290.jpg"},4541:function(e,t,i){"use strict";e.exports=i.p+"static/media/21-x-axis-motor.2cb90757c1f9c6b2d568.jpg"},5955:function(e,t,i){"use strict";e.exports=i.p+"static/media/22-x-axis-complete.86f81ca7bc2f039318ae.jpg"},3425:function(e,t,i){"use strict";e.exports=i.p+"static/media/23-display.a7589a7f857c54f311fd.jpg"},2417:function(e,t,i){"use strict";e.exports=i.p+"static/media/24-power-supply.0cc0baf6fd53f48fc06c.jpg"},1610:function(e,t,i){"use strict";e.exports=i.p+"static/media/25-control-board.676fa3dcfb6b83c9b5da.jpg"},8638:function(e,t,i){"use strict";e.exports=i.p+"static/media/26-wiring.c70e69c80f19f604e525.jpg"},5521:function(e,t,i){"use strict";e.exports=i.p+"static/media/27-initial-power-on.13d088c6f8070078389e.jpg"},5460:function(e,t,i){"use strict";e.exports=i.p+"static/media/28-she-lives.5559db6433af1d37bd7e.jpg"},3543:function(e,t,i){"use strict";e.exports=i.p+"static/media/29-wire-management.27dc6d1db7f90de88c28.jpg"},5767:function(e,t,i){"use strict";e.exports=i.p+"static/media/30-first-print.ae1a394beb1c5d6e63df.jpg"},9541:function(e,t,i){"use strict";e.exports=i.p+"static/media/auto-level-sensor.3ec381356cc129e77c62.jpg"},8600:function(e,t,i){"use strict";e.exports=i.p+"static/media/printer-hero.da8964a9994de2f96508.jpg"},9893:function(e,t,i){"use strict";e.exports=i.p+"static/media/safety-upgrades.64951f078b4ffd7d2db6.jpg"},7023:function(e,t,i){"use strict";e.exports=i.p+"static/media/fallout-wasteland-warefare.5c6042e9f78df6a52ea5.jpg"},7717:function(e,t,i){"use strict";e.exports=i.p+"static/media/floor.96ae32cb423fa077d38a.jpg"},9175:function(e,t,i){"use strict";e.exports=i.p+"static/media/red-rocket-hero.daac5c5ea4dfb55706d1.jpg"},1907:function(e,t,i){"use strict";e.exports=i.p+"static/media/roof.7dbdb5873485f87c3aa1.jpg"},8908:function(e,t,i){"use strict";e.exports=i.p+"static/media/walls.fe06f50594f9e1cdd132.jpg"},884:function(e){"use strict";e.exports=JSON.parse('{"experience":[{"title":"Senior Software Engineer","startDate":"2018-02-19T00:00:00.000Z","city":"Cardiff","location":"The British Broadcasting Corporation","url":"http://www.bbc.co.uk","color":"primary","icon":"laptop-code"},{"title":"Senior Java Developer","startDate":"2014-03-01T00:00:00.000Z","endDate":"2018-02-09T00:00:00.000Z","city":"Bristol","location":"Unite Students","url":"http://www.unitestudents.com","description":"<p>\\n    Supporting Student and Group websites utilising\\n    Oracle Fusion Middleware. Projects include\\n    visual redesign of Corporate website to use new\\n    corporate branding and the launch of brand new\\n    responsive Students website. Current projects\\n    include integrating website with new back-end\\n    booking system and migrating current systems to\\n    new hardware.\\n</p>","color":"primary","icon":"laptop-code"},{"title":"Reservist","startDate":"2014-02-01T00:00:00.000Z","endDate":"2015-12-01T00:00:00.000Z","city":"Bristol","location":"Royal Navy","url":"http://www.royalnavy.mod.uk","color":"info","icon":"anchor","inverted":true},{"title":"Software Developer","startDate":"2012-08-01T00:00:00.000Z","endDate":"2014-02-01T00:00:00.000Z","city":"Bristol","location":"Quote Exchange, Brightside Group","url":"http://www.quoteexchange.co.uk","description":"<p>\\n    Responsible for developing well designed and\\n    documented, highly scalable, highly available\\n    web based systems as well as providing\\n    day-to-day operational support and development.\\n    Current projects include creating an insurance\\n    comparison website using Java frameworks (Struts\\n    2 and Spring) with Relational Databases (SQL\\n    Server and MySQL) and developing supporting\\n    websites to collect risk data for third party\\n    insurance companies. Previous project was to\\n    create a distributed regression test tool using\\n    Selenium Grid to automate the testing of\\n    websites.\\n</p>","color":"primary","icon":"laptop-code"},{"title":"Third Year BSc (Hons) Software Engineering","startDate":"2011-09-01T00:00:00.000Z","endDate":"2012-07-01T00:00:00.000Z","city":"Bristol","location":"University of the West of England","url":"http://www.uwe.ac.uk","description":"<ul>\\n    <li>Advanced Topics in Web Development [54%]</li>\\n    <li>Components and Services [50%]</li>\\n    <li>Computing Project [60%]</li>\\n    <li>Embedded Systems Development [67%]</li>\\n    <li>Professional, Legal &amp; Commercial Issues [52%]</li>\\n    <li>Requirements Engineering [64%]</li>\\n</ul>","color":"success","icon":"user-graduate","inverted":true},{"title":"Information Systems Technical Support","startDate":"2010-07-01T00:00:00.000Z","endDate":"2011-08-01T00:00:00.000Z","city":"Bristol","location":"University of the West of England","url":"http://www.uwe.ac.uk","description":"<p>\\n    Administrator for the one of the Faculty of\\n    Environment and Technology\u2019s Databases (FOLD);\\n    Duties included supporting administration staff\\n    with database queries and HTML reports, writing\\n    technical documentation using the Docbook\\n    documentation standard, updating look and feel\\n    of publicly accessible pages to be more in-line\\n    with main University website and a member of the\\n    design team for the new SQL Server database and\\n    started translation and migration of existing\\n    data to the new .Net based system.\\n</p>","color":"primary","icon":"laptop-code"},{"title":"Back of House Specialist","startDate":"2009-12-01T00:00:00.000Z","endDate":"2012-08-01T00:00:00.000Z","city":"Bristol","location":"Apple Retail","url":"http://www.apple.co.uk","description":"<p>\\n    Inventory control for a large technology\\n    retailer. Main Duties include the timely and\\n    accurate receiving, tracking and maintenance of\\n    store merchandise in the store and stock room\\n    and to support the front of house team so that\\n    they can meet and exceed the customers\' needs.\\n</p>","color":"info","icon":["fab","apple"],"inverted":true},{"title":"Second Year BSc (Hons) Software Engineering","startDate":"2009-09-01T00:00:00.000Z","endDate":"2010-07-01T00:00:00.000Z","city":"Bristol","location":"University of the West of England","url":"http://www.uwe.ac.uk","description":"<ul>\\n    <li>Client-Server Programming [79%]</li>\\n    <li>Computer Networks and Operating Systems [71%]</li>\\n    <li>Data, Schemas and Applications [74%]</li>\\n    <li>Project Management [70%]</li>\\n    <li>Software Design [83%]</li>\\n    <li>Software Engineering [53%]</li>\\n</ul>","color":"success","icon":"user-graduate","inverted":true},{"title":"Supervisor Security Officer","startDate":"2009-06-01T00:00:00.000Z","endDate":"2009-09-01T00:00:00.000Z","city":"Bristol","location":"RMB & Associates Ltd","description":"<p>\\n    Retail Security Officer working in stores such\\n    as Topshop and Outfit. Responsibilities involved\\n    dye tag density checks, incident reporting, bag\\n    checking and store patrols.\\n</p>","color":"danger","icon":"id-card-alt"},{"title":"First Year BSc (Hons) Software Engineering","startDate":"2008-09-01T00:00:00.000Z","endDate":"2009-07-01T00:00:00.000Z","city":"Bristol","location":"University of the West of England","url":"http://www.uwe.ac.uk","description":"<ul>\\n    <li>Analytical Modelling [87%]</li>\\n    <li>Computer Science Concepts [80%]</li>\\n    <li>Computer Systems [65%]</li>\\n    <li>Information Systems Application Contexts [59%]</li>\\n    <li>Introduction to Program Development [92%]</li>\\n    <li>Systems Development [72%]</li>\\n</ul>","color":"success","icon":"user-graduate","inverted":true},{"title":"Contract Support Officer","startDate":"2007-08-01T00:00:00.000Z","endDate":"2008-05-01T00:00:00.000Z","city":"Milford Haven","location":"Securitas Security Services","url":"http://www.securitas.uk.com","description":"<p>\\n    Static Security Officer during the construction\\n    of South Hook LNG, Milford Haven, one of the\\n    largest Liquefied Natural Gas re-gasification\\n    Terminal in Europe. Responsibilities included\\n    physical security of the facility, access\\n    control, site patrols and vehicle searches.\\n</p>","color":"danger","icon":"id-card-alt"},{"title":"Parts Advisor","endDate":"2007-08-01T00:00:00.000Z","startDate":"2004-07-01T00:00:00.000Z","color":"warning","city":"Slebech","location":"Green Bower Garages","description":"<p>\\n    Duties included stock control, satisfying all\\n    customer requirements and increasing all aspects\\n    of the BMW car parts and accessories business\\n    through direct selling, vehicle workshop and\\n    body shop.\\n</p>","icon":"warehouse"},{"title":"Advanced Level Qualifications","startDate":"2002-09-01T00:00:00.000Z","endDate":"2004-07-01T00:00:00.000Z","city":"Haverfordwest","location":"Pembrokeshire College","url":"http://www.pembrokeshire.ac.uk","description":"<ul>\\n    <li>Double Award AVCE in ICT [B,B]</li>\\n    <li>Advanced Subsidiary Physics [E]</li>\\n</ul>","icon":"chalkboard-teacher","inverted":true},{"title":"General Certificate of Secondary Education Qualifications","startDate":"1997-09-01T00:00:00.000Z","endDate":"2002-07-01T00:00:00.000Z","city":"Haverfordwest","location":"Sir Thomas Picton School","description":"<ul>\\n    <li>Eight Full Course [Seven Grade C and Above]</li>\\n    <li>Two Short Course [A and B]</li>\\n</ul>","icon":"chalkboard-teacher","inverted":true}]}')}}]);
//# sourceMappingURL=573.c14a8d5f.chunk.js.map