(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"styles_profile__2xS0H",description:"styles_description__lYzK-",avatar:"styles_avatar__1tXeH",name:"styles_name__3ZhqF",tag:"styles_tag__2gMqH",location:"styles_location__1Dt7s",stats:"styles_stats__1wTBx",statsItem:"styles_statsItem__316r4",label:"styles_label__n4LAB",quantity:"styles_quantity__2WUDx"}},function(e,a,t){e.exports={statistics:"statistics_statistics__25zd-",title:"statistics_title__2GFOa",statList:"statistics_statList__rdGuf",item:"statistics_item__2fywc",label:"statistics_label__2gxoG",percentage:"statistics_percentage__2H-nE"}},function(e,a,t){e.exports={friendList:"friends_friendList__3Xk4W",itemFriends:"friends_itemFriends__1TPoI",avatar:"friends_avatar__qWjkW",statusIsOnline:"friends_statusIsOnline__23QA7",statusIsOffline:"friends_statusIsOffline__2Oefb",name:"friends_name__3ngfd"}},,,function(e,a,t){e.exports={transactionHistory:"transactions_transactionHistory__6qTz9"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(5),r=t.n(c),i=t(1),l=t.n(i);var m=function(e){var a=e.avatar,t=e.location,n=e.name,c=e.tag,r=e.stats,i=r.followers,m=r.views,o=r.likes;return s.a.createElement("div",{className:l.a.profile},s.a.createElement("div",{className:l.a.description},s.a.createElement("img",{src:a,alt:"userAvatar",className:l.a.avatar}),s.a.createElement("div",null,s.a.createElement("p",{className:l.a.name},n),s.a.createElement("p",{className:l.a.tag},"@",c),s.a.createElement("p",{className:l.a.location},t))),s.a.createElement("ul",{className:l.a.stats},s.a.createElement("li",{className:l.a.statsItem},s.a.createElement("p",{className:l.a.label},"followers"),s.a.createElement("p",{className:l.a.quantity},i)),s.a.createElement("li",{className:l.a.statsItem},s.a.createElement("p",{className:l.a.label},"views"),s.a.createElement("p",{className:l.a.quantity},m)),s.a.createElement("li",{className:l.a.statsItem},s.a.createElement("p",{className:l.a.label},"likes"),s.a.createElement("p",{className:l.a.quantity},o))))},o=t(6),d=t.n(o);var u=function(e){var a=e.items;return s.a.createElement("table",{className:d.a.transactionHistory},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Type"),s.a.createElement("th",null,"Amount"),s.a.createElement("th",null,"Currency"))),s.a.createElement("tbody",null,a.map((function(e){var a=e.id,t=e.type,n=e.amount,c=e.currency;return s.a.createElement("tr",{key:a},s.a.createElement("td",null,t),s.a.createElement("td",null,n),s.a.createElement("td",null,c))}))))},p=t(2),f=t.n(p);var y=function(e){var a=e.statiscticalData;return s.a.createElement("section",{className:f.a.statistics},s.a.createElement("h2",{className:f.a.title},"Upload stats"),s.a.createElement("ul",{className:f.a.statList},a.map((function(e){var a=e.id,t=e.label,n=e.percentage;return s.a.createElement("li",{className:f.a.item,style:{backgroundColor:"#"+Math.floor(16777215*Math.random()).toString(16)},key:a},s.a.createElement("span",{className:f.a.label},t),s.a.createElement("span",{className:f.a.percentage},n))}))))},b=t(3),_=t.n(b);var E=function(e){var a=e.friends;return s.a.createElement("ul",{className:_.a.friendList},a.map((function(e){var a=e.avatar,t=e.name,n=e.isOnline,c=e.id,r=n?_.a.statusIsOnline:_.a.statusIsOffline;return s.a.createElement("li",{className:_.a.itemFriends,key:c},s.a.createElement("span",{className:r}),s.a.createElement("img",{className:_.a.avatar,src:a,alt:"",width:"48"}),s.a.createElement("p",{className:_.a.name},t))})))},v=t(7),w=t(8),g=t(9),N=t(10);var h=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(m,v),s.a.createElement(y,{statiscticalData:g}),s.a.createElement(E,{friends:w}),s.a.createElement(u,{items:N}))};r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(h,null)),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.18ff91b2.chunk.js.map