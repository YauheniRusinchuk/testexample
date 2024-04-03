import{c as N,r as K,w as q,o as c,a as I,u as e,n as P,b as U,d as ye,e as te,f as ve,g as _e,h,S as ge,i as G,j as w,p as z,A as Y,k as Ve,F as De,l as E,m as a,t as T,q as ee,T as he,s as J,v as Ne,x as Oe,y as be,z as D,B as fe,C as xe,D as Be,E as Le,G as qe,H as de,I as Ue,J as ue,K as Fe,L as ze,P as M,M as Ge,N as Z,O as je}from"./gpb-new.3d7b750a.js";import{u as He,_ as Ye,a as Ke,b as Je,D as We,M as Xe,c as Qe,d as Ze,V as et,U as tt,J as at}from"./FormHeader.77c79ab5.js";import{_ as nt}from"./angle-right_blue.3c01ebe8.js";import{u as Pe}from"./useLoader.7f9e5dbf.js";import{_ as ke,o as ot,D as st,a as it}from"./Dialog.b08ee629.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";import lt from"./Loader.b4e8c0e5.js";var rt="assets/question.47741165.svg";const ct={props:{errors:{type:Object,default:{}},minPanLength:{type:Number}},setup(u){const n=u,r=N(()=>({required:!0,pan:[{minPanLength:n.minPanLength}]}));return(m,t)=>{const y=K("maska");return q((c(),I(ke,{name:"pan",rules:e(r),type:"tel",label:m.$t("ui.input.pan.label"),class:P({invalid:n.errors.pan})},null,8,["rules","label","class"])),[[y,"#### #### #### #### ###"]])}}},pt={props:{data:Object,type:String,isCombined:{type:Boolean,default:!1},errors:{type:Object,default:{}}},setup(u){const n=u,r=N(()=>{var m,t;return{required:!0,[n.type]:[{isExpiredCardsAllowed:!!((t=(m=n.data)==null?void 0:m.options)!=null&&t.expiredCardsAllowed),isCombined:n.isCombined}]}});return(m,t)=>{const y=K("maska");return q((c(),I(ke,{type:"tel",name:u.type,class:P({invalid:n.errors[n.type]}),rules:e(r),label:m.$t(`ui.input.${n.type}.label`)},null,8,["name","class","rules","label"])),[[y,"##"]])}}};const dt={props:{data:Object},setup(u){const{fastPaymentMethod:n,timeoutApiErrorHandlerCb:r}=U(),{apiErrorHandlerOn:m,apiErrorHandlerOff:t}=ye(),{globalLoaderShow:y}=te();return ve(async()=>await m(r)),_e(()=>t()),(b,_)=>(c(),h("button",{class:"gpp-button btn",onClick:_[0]||(_[0]=C=>{var l,i;return e(n)(e(ge).gazprom_pay,(i=(l=u.data)==null?void 0:l.options)==null?void 0:i.customerReceiptAreaEnabled,e(y))})}))}};var ut=j(dt,[["__scopeId","data-v-7a613df2"]]);const me={props:{data:Object},setup(u){const n=u,{initPayment:r,checkPaymentState:m}=U(),{startGooglePayment:t}=z(),{globalLoaderShow:y}=Pe(),b=G().hash.slice(1),{googlePay:_}=window.settings,C="TEST";let l=new google.payments.api.PaymentsClient({environment:_.googlePayEnvironment||C});const i={isPaymentRequest:!1,googlePayClient:l};let s=V();i.isPaymentRequest=!0,l.isReadyToPay(s).then(function(o){o.result?(l.createButton({buttonColor:"white",buttonType:"short",onClick:k}),O(n.data)):console.log("Google Pay is not available")}).catch(function(o){console.error(o)});function V(){var o=["PAN_ONLY","CRYPTOGRAM_3DS"],v=["MASTERCARD","VISA"];return{apiVersion:2,apiVersionMinor:0,allowedPaymentMethods:[{type:"CARD",parameters:{allowedAuthMethods:_.googlePayAllowedCardAuthMethods||o,allowedCardNetworks:_.googlePayAllowedCardNetworks||v}}]}}function A(o){let v=Object.assign({},V()),x=_.googlePayRequestType||"PAYMENT_GATEWAY";return v.allowedPaymentMethods[0].tokenizationSpecification={type:x},x=="DIRECT"?(v.allowedPaymentMethods[0].tokenizationSpecification={parameters:{protocolVersion:"ECv2",publicKey:o.options.googlePayMerchantPublicKey}},v.merchantInfo={merchantId:o.options.googlePayMerchantId}):v.allowedPaymentMethods[0].tokenizationSpecification.parameters={gateway:o.options.googlePayGatewayId,gatewayMerchantId:o.options.googlePayGatewayMerchantId},v.merchantInfo={merchantName:o.options.googlePayMerchantName,merchantOrigin:o.options.googlePayMerchantOrigin,merchantId:o.options.googlePayGatewayMerchantId},v.transactionInfo={countryCode:"RU",currencyCode:o.currency,totalPriceStatus:"FINAL",totalPrice:(o.amount/100).toFixed(2).toString()},v}function O(o){var v=A(o);v.transactionInfo={totalPriceStatus:"NOT_CURRENTLY_KNOWN",currencyCode:o.currency},i.googlePayClient.prefetchPaymentData(v)}function k(){let o=A(n.data);i.googlePayClient.loadPaymentData(o).then(function(v){let x=v.paymentMethodData.tokenizationData.token;y(),t(b,x).then(W=>m(W,b)).catch(()=>r())}).catch(function(v){console.error(v)})}return(o,v)=>i.isPaymentRequest?(c(),h("button",{key:0,type:"button","aria-label":"Google Pay",class:"btn gpay-button black short en",onClick:k})):w("",!0)}};const mt={props:{data:Object},setup(u){const n=G().hash.slice(1),{initPayment:r,checkPaymentState:m}=U(),{getApplePaySession:t,startApplePayPayment:y}=z(),_=ApplePaySession.supportsVersion(Y.eleven)?Y.eleven:Y.one;function C(l,i,s){var V={countryCode:"RU",currencyCode:i.currency,total:{label:i.merchant.name,amount:De.amountMinorToAmount(i.amount)},supportedNetworks:["masterCard","visa"],merchantCapabilities:["supports3DS"]};s===Y.eleven&&V.supportedNetworks.push("mir");const A=new ApplePaySession(s,V);l.applePaySession=A,A.onvalidatemerchant=function(O){const k=O.validationURL;l.appleValidationRes?A.completeMerchantValidation(l.appleValidationRes):t(n,k).then(o=>{o.epochTimestamp=Number(o.epochTimestamp),o.expiresAt=Number(o.expiresAt),l.appleValidationRes=o,A.completeMerchantValidation(o)}).catch(()=>r())},A.onpaymentauthorized=function(O){const k=O.payment;k.token&&k.token.paymentMethod&&!k.token.paymentMethod.type&&(k.token.paymentMethod.type="unknown"),y(n,k).then(o=>m(o,n)).catch(()=>r())},A.begin()}return(l,i)=>{const s=Ve("apple-pay-button");return c(),I(s,{buttonstyle:"black",type:"plain",locale:"en-US",class:"apple-pay-button btn",onClick:i[0]||(i[0]=V=>C({},u.data,e(_)))})}}};var yt=j(mt,[["__scopeId","data-v-3d0120f9"]]),vt="assets/mir_pay.bae7ec04.svg",_t="assets/mir_pay_form.3f8b3bd8.svg";const gt=u=>(Ne("data-v-3745a420"),u=u(),Oe(),u),ht={key:0,class:"modalMir"},bt={class:"mirForm"},ft=gt(()=>a("div",{class:"loaderMir"},[a("div",{class:"lds-ellipsis"},[a("div"),a("div"),a("div"),a("div")])],-1)),Pt={class:"mirForm-top-text"},kt=["src"],wt={class:"mirForm-text"},Ct={href:"https://play.google.com/store/apps/details?id=ru.nspk.mirpay"},Tt=["src"],At={props:{data:Object},setup(u){const n=u,r=G(),m=E(!1),{startMirPayPayment:t}=z(),{checkPaymentState:y}=U();let b=r.hash.slice(1);async function _(){location.href=r.query.back_url_f}async function C(){window.location.href=n.data.options.mirPayLink,m.value=!0;const l=await t(b);y(l,b)}return(l,i)=>(c(),h(J,null,[(c(),I(he,{to:"body"},[m.value?(c(),h("div",ht,[a("div",bt,[ft,a("div",Pt,T(l.$t("pages.main.mirPay.mirPayTopText")),1),a("img",{src:e(_t),class:"mirForm-logo"},null,8,kt),a("div",wt,[ee(T(l.$t("pages.main.mirPay.mirPayTextStart"))+" ",1),a("a",Ct,T(l.$t("pages.main.mirPay.mirPayUrl")),1),ee(" "+T(l.$t("pages.main.mirPay.mirPayTextEnd")),1)]),a("a",{class:"mirForm-btn",onClick:_},T(l.$t("pages.main.mirPay.mirPayBtn")),1)])])):w("",!0)])),a("button",{class:"mir-button btn",onClick:C},[a("img",{src:e(vt),alt:""},null,8,Tt)])],64))}};var Rt=j(At,[["__scopeId","data-v-3745a420"]]);const Et={props:{data:Object},setup(u){const{fastPaymentMethod:n}=U(),{globalLoaderShow:r}=te();return(m,t)=>(c(),h("button",{class:"btn sbp-button",onClick:t[0]||(t[0]=y=>{var b,_;return e(n)("sbp",(_=(b=u.data)==null?void 0:b.options)==null?void 0:_.customerReceiptAreaEnabled,e(r))})}))}};var St=j(Et,[["__scopeId","data-v-7144b588"]]),$t="assets/angle-down-black.d4c0b535.svg";const we={props:{modelValue:{type:Boolean,required:!0}},setup(u){return(n,r)=>(c(),h("img",{class:P(["angle-down",{open:u.modelValue}]),src:$t,onClick:r[0]||(r[0]=be(m=>n.$emit("update:modelValue",!u.modelValue),["stop"]))},null,2))}};const It={class:"sbp-title"},Mt={class:"paymentButtons"},Vt={props:{data:Object},setup(u){const n=u,r=[],{googlePay:m}=window.settings,t=G().query.gpay||m.gpay,y=E(!1),{isToggleButtonEnabled:b,mirPayDesktopShow:_}=window.settings;if(t&&window.PaymentRequest&&n.data.options&&(n.data.options.googlePayMerchantPublicKey||m.googlePayRequestType!="DIRECT"&&n.data.options.googlePayGatewayId)&&r.push(me),window.ApplePaySession&&n.data.options.applePayMerchantIdentifier){let C=n.data.options.applePayMerchantIdentifier;window.ApplePaySession.canMakePaymentsWithActiveCard(C).then(function(i){i&&r.push(yt)})}return n.data.options&&n.data.options.sbpEnabled&&r.push(St),n.data.options&&n.data.options.mirPayLink&&(/Android/i.test(navigator.userAgent)||_)&&r.push(Rt),(C,l)=>r.length?(c(),h("div",{key:0,class:P({"toggleable-content":e(b)&&!y.value,"toggleable-content visible":e(b)&&y.value})},[e(b)?(c(),h("div",{key:0,class:"sbp-title-container",onClick:l[1]||(l[1]=i=>y.value=!y.value)},[a("h4",It,T(C.$t("pages.main.sbpTitle")),1),D(we,{modelValue:y.value,"onUpdate:modelValue":l[0]||(l[0]=i=>y.value=i)},null,8,["modelValue"])])):w("",!0),a("div",Mt,[(c(),h(J,null,fe(r,i=>a("div",{key:i,class:"paymentButtons_item"},[(c(),I(xe(i),{data:u.data,class:P({"white long":i===me})},null,8,["data","class"]))])),64))])],2)):w("",!0)}};var Dt=j(Vt,[["__scopeId","data-v-7266d1a6"]]);const Nt=a("div",{id:"acs"},null,-1),Ot={key:1,class:"content-wrapper"},xt={key:1,class:"gaz-prom-pay"},Bt={class:"gaz-prom-pay__description-container"},Lt={class:"gaz-prom-pay__description"},qt={class:"help-tooltip__title"},Ut={class:"help-tooltip__description"},Ft={class:"pay-title"},zt={class:"icons-container"},Gt={key:0,class:"card-brand"},jt=["src"],Ht=a("div",{class:"cvc-logo"},[a("img",{src:Je,alt:"CVC"})],-1),Yt={key:1,class:"checkbox-container"},Kt={class:"pay-btn-container"},Jt=["disabled"],Wt={class:"back-to-merchant-container"},Xt=a("img",{class:"angle-right",src:nt},null,-1),sa={setup(u){const{initPayment:n,checkRegistrationToken:r,checkPaymentState:m,paymentState:t,replaceRoute:y,requestPaymentState:b}=U(),{start:_,accept:C,decline:l}=z(),i=G(),{card:s,getSrcCardParams:V,getDstCardParams:A,getCardParams:O}=He(),k=E(!1),o=E(!1),{localeLoaderShow:v,globalLoaderShow:x,hideLoaders:W}=Pe(o),ae=E(!1),{iframeHandler:Ce,apiErrorHandlerOn:ne,apiErrorHandlerOff:oe}=ye(),{requestProcessing:se}=te(),{cardRegistrationPage:S}=window.settings,Te=E(!1),Ae=E(!1),Re=E(!1),F=E(!1),ie=E(null),B=E(!1),{isToggleButtonEnabled:X}=window.settings,{t:le}=Be(),{setTabTitle:re}=Le(),Q=N(()=>{var p,d,R;return((p=t.value)==null?void 0:p.paymentId)!==M.AFT&&((d=t.value)==null?void 0:d.paymentId)!==M.OCT&&((R=t.value)==null?void 0:R.paymentId)!==M.TRANSP_DEBT&&!S}),ce=N(()=>s.pan?Ge(s.pan,{MIR:Xe,MASTERCARD:Qe,MAESTRO:Ze,VISA:et,UPI:tt,JCB:at},We):""),Ee=N(()=>{let p=!0;return(t.value.paymentId===M.OCT&&s.pan||s.pan&&s.pan.length>Z.PAN&&s.cvc&&s.cvc.length>Z.CVC&&s.expiry&&s.expiry.length>Z.EXPIRY)&&(p=!1),p}),Se=N(()=>t.value.paymentId!==M.OCT),$e=N(()=>{var p;return(!t.value.paymentId||t.value.paymentId===M.TRANSP_DEBT)&&((p=t.value.src)==null?void 0:p.addToProfileEnabled)}),pe=N(()=>S?"continue":t.value.paymentId===M.OCT?"transferToCard":t.value.paymentId===M.AFT?"transferToAccount":"pay");ot(ie,()=>{F.value=!1});async function Ie(p,d){var f;se();let R=i.hash.slice(1),L,$;S?$=O(s):t.value.paymentId===M.OCT&&!S?(v(),$=A(s.pan)):$=V(s),(f=t.value.options)!=null&&f.customerReceiptAreaEnabled&&Object.assign($,{"customer.receiptUrl":location.origin+"/"+window.location.hash});const H=async g=>{g.error===je.UNEXPECTED_REQUEST?await b(t):d.setFieldError("pan",le(`errors.api.${g.error}`))};if(oe(),ne(H),S){const{token:g}=await z().token();R=g,await y(R),$.returnUrl=window.location.href,L=await _(R,$)}else L=await C(R,$);v(),k.value=!0,await m(L,R)}async function Me(){se();const p=i.hash.slice(1);try{await l(p)}catch(d){console.log(d)}finally{location.href=i.query.back_url_f}}return qe(i,p=>{p.query["src.type"]===ge.gazprom_pay&&p.name==="main"?document.title=le("tabTitle.processing"):re()}),ve(async()=>{var p,d;window.frameElement?console.log("frame"):(Ce(ae),ne(),x(),S?await r():await n(),((p=t.value)==null?void 0:p.state)!==de.REDIRECT&&((d=t.value)==null?void 0:d.state)!==de.RESULT&&(W(),re()))}),_e(()=>{oe()}),(p,d)=>{var $;const R=K("maska"),L=K("focus-next");return c(),h(J,null,[(c(),I(he,{to:"body"},[q(D(st,null,{default:ue(()=>[Nt]),_:1},512),[[Ue,ae.value]])])),o.value?(c(),I(lt,{key:0})):w("",!0),e(t)&&!k.value&&!o.value?(c(),h("div",Ot,[e(S)?w("",!0):(c(),I(Ye,{key:0,data:e(t)},null,8,["data"])),(($=e(t).options)==null?void 0:$.gazpromPayEnabled)&&!e(S)?(c(),h("div",xt,[a("div",Bt,[a("p",Lt,T(p.$t("pages.main.gazpromPay")),1),a("img",{class:P(["help-icon",{disable:F.value}]),src:rt,onClick:d[0]||(d[0]=H=>F.value=!F.value)},null,2),a("div",{ref_key:"tooltipRef",ref:ie,class:P(["help-tooltip",{visible:F.value}])},[a("h4",qt,T(p.$t("pages.main.helpTooltip.title")),1),a("p",Ut,T(p.$t("pages.main.helpTooltip.description")),1)],2)]),D(ut,{data:e(t)},null,8,["data"])])):w("",!0),D(e(ze),{onSubmit:Ie,onKeydown:d[7]||(d[7]=Fe(be(()=>{},["prevent"]),["enter"]))},{default:ue(({isSubmitting:H,errors:f})=>[a("div",{class:P(["main-form",{"toggleable-content":e(X)&&!B.value&&e(Q),"toggleable-content visible":e(X)&&B.value&&e(Q)}])},[a("div",{class:"pay-title-container",onClick:d[2]||(d[2]=g=>B.value=!B.value)},[a("h4",Ft,T(p.$t(`pages.main.payTitle.${e(pe)}`)),1),e(X)&&e(Q)?(c(),I(we,{key:0,modelValue:B.value,"onUpdate:modelValue":d[1]||(d[1]=g=>B.value=g)},null,8,["modelValue"])):w("",!0)]),a("div",{class:P(["pan-input-container",{invalid:f.pan,active:Te.value&&!f.pan}])},[q(D(ct,{modelValue:e(s).pan,"onUpdate:modelValue":d[3]||(d[3]=g=>e(s).pan=g),class:P(["clear-icon-visible",{"none-empty-input":e(s).pan}]),errors:f},null,8,["modelValue","class","errors"]),[[R,["####","#### ####","#### #### ####","#### #### #### ####","#### #### #### #### ###"]]]),a("div",zt,[e(ce).length?(c(),h("div",Gt,[(c(!0),h(J,null,fe(e(ce),g=>(c(),h("img",{key:g,src:g,alt:"Brand"},null,8,jt))),128))])):w("",!0)])],2),e(Se)?(c(),h("div",{key:0,class:P(["expiry-cvc-input-container",{invalid:f.expiry||f.cvc}])},[a("div",{class:P(["expiry-input-group",{invalid:f.expiry,active:Ae.value&&!f.expiry}])},[q(D(pt,{modelValue:e(s).expiry,"onUpdate:modelValue":d[4]||(d[4]=g=>e(s).expiry=g),data:e(t),class:P({"none-empty-input":e(s).expiry}),type:"expiry","is-Combined":"",errors:f},null,8,["modelValue","data","class","errors"]),[[L,{length:7,target:"cvc"}],[R,"## / ##"]])],2),a("div",{class:P(["cvc-input-group",{invalid:f.cvc,active:Re.value&&!f.cvc}])},[q(D(Ke,{modelValue:e(s).cvc,"onUpdate:modelValue":d[5]||(d[5]=g=>e(s).cvc=g),class:P({"none-empty-input":e(s).cvc}),errors:f},null,8,["modelValue","class","errors"]),[[L,{length:3,target:"addToProfile"}]]),Ht],2)],2)):w("",!0),e($e)&&!e(S)?(c(),h("div",Yt,[D(it,{modelValue:e(s).save,"onUpdate:modelValue":d[6]||(d[6]=g=>e(s).save=g),name:"addToProfile",class:"addToProfile",label:p.$t("ui.input.saveCard.label")},null,8,["modelValue","label"])])):w("",!0),a("div",Kt,[a("button",{id:"submitBtn",disabled:H||Object.keys(f).length||e(Ee),class:"btn btn-primary"},T(p.$t(`ui.btn.${e(pe)}`)),9,Jt)])],2)]),_:1}),e(S)?w("",!0):(c(),I(Dt,{key:2,data:e(t)},null,8,["data"])),a("div",Wt,[a("button",{class:"btn back-to-merchant",onClick:Me},[ee(T(p.$t("ui.btn.goToMerchant"))+" ",1),Xt])])])):w("",!0)],64)}}};export{sa as default};