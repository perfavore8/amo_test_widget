define((function(){return function(){"use strict";var e={141:function(e,t,a){a.r(t),a.d(t,{default:function(){return St}});var i=a(242),l=a(396);const s={id:"myVue"};function n(e,t,a,i,n,o){const d=(0,l.up)("main-page");return(0,l.wg)(),(0,l.iD)("div",s,[(0,l.Wm)(d)])}var o=a(139);const d=e=>((0,l.dD)("data-v-c457f1cc"),e=e(),(0,l.Cn)(),e),u={class:"container"},r=d((()=>(0,l._)("div",{class:"header"},null,-1))),c={class:"content"},p={class:"top"},_={class:"btns"},h=d((()=>(0,l._)("label",{for:"grid"},null,-1))),v=d((()=>(0,l._)("div",{class:"icon"},null,-1))),m=[v],f={key:0,class:"bottom"},g={class:"links"},w=["onClick"],y={class:"grid"},b=["onClick"],k={class:"row"},x=d((()=>(0,l._)("div",{class:"name"},null,-1))),D={class:"value"},V={key:0,class:"grid"},C={key:0,class:"text"},q={class:"row"},E={class:"name"},O={class:"value"},F={class:"rows"},j={class:"name"},T={class:"value"},S={class:"card_footer"},I=["onClick"],H={class:"bottom"},U=["onClick"],Y=["onClick"],z=d((()=>(0,l._)("div",{class:"icon"},null,-1))),K=[z],W={key:0,class:"rows"},A={class:"name"},M=["onUpdate:modelValue"],Z=["onUpdate:modelValue"],P=["onUpdate:modelValue"],$={key:3,class:"value"},N=d((()=>(0,l._)("div",{class:"footer"},[(0,l._)("button",{class:"btn btn1"},"возврат")],-1))),R=d((()=>(0,l._)("div",{class:"footer"},null,-1)));function B(e,t,a,s,n,d){const v=(0,l.up)("selector-vue"),z=(0,l.up)("filters-modal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",{class:(0,o.C_)(["app",{disable:n.show_filters}])},[(0,l._)("div",u,[r,(0,l._)("div",c,[(0,l._)("div",p,[(0,l.Wm)(v,{options_props:n.available_data,onSelect:d.select,selected_option:{name:"Добавление (поиск на складе по названию или артикулу)..."}},null,8,["options_props","onSelect","selected_option"]),(0,l._)("div",_,[(0,l.wy)((0,l._)("input",{type:"checkbox",class:"checkbox","onUpdate:modelValue":t[0]||(t[0]=e=>n.show_cards=e),id:"grid"},null,512),[[i.e8,n.show_cards]]),h,(0,l._)("button",{class:"btn",onClick:t[1]||(t[1]=e=>n.show_filters=!0)},m)])]),(0,l.Wm)(i.uT,{name:"rows"},{default:(0,l.w5)((()=>[n.show_cards?((0,l.wg)(),(0,l.iD)("div",f,[(0,l._)("div",g,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.selected_categoryes,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:(0,o.C_)(["triangle",{triangle_last:n.path.length-1==t}]),key:e,onClick:e=>{n.sel_idx=t,n.selected_categoryes.splice(t)}},(0,o.zw)(n.path[t]),11,w)))),128))]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.path,((e,t)=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",{class:"path",key:e},[(0,l._)("div",y,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.categoryes[e],(e=>((0,l.wg)(),(0,l.iD)("div",{class:"card",key:e,onClick:t=>{n.selected_categoryes.push(e),n.sel_idx+=1}},[(0,l._)("div",k,[x,(0,l._)("div",D,(0,o.zw)(e),1)])],8,b)))),128))])])),[[i.F8,n.sel_idx==t&&n.show_categoryes]]))),128)),n.show_categoryes&&n.path.length!=n.selected_categoryes.length?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",V,[0==d.paginatedData.length?((0,l.wg)(),(0,l.iD)("label",C," Ничего не найдено ")):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.paginatedData,(t=>((0,l.wg)(),(0,l.iD)("div",{class:"card",key:t},[(0,l._)("div",q,[(0,l._)("div",E,(0,o.zw)(e.params[1])+" :",1),(0,l._)("div",O,(0,o.zw)(t[0]),1)]),(0,l._)("div",F,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t,((t,a)=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",{class:"row",key:t},[(0,l._)("div",j,(0,o.zw)(e.params[a+1])+" :",1),(0,l._)("div",T,(0,o.zw)(t),1)])),[[i.F8,0!=a]]))),128))]),(0,l._)("div",S,[(0,l._)("button",{class:"btn btn_del",onClick:e=>d.update_changeValue([t],[1])}," Добавить к сделке ",8,I)])])))),128))]))])):(0,l.kq)("",!0)])),_:1}),(0,l._)("div",H,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.rows,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:"row",key:e},[(0,l._)("div",{class:"row_title",onClick:e=>d.toShowData(t)},[(0,l._)("label",null,(0,o.zw)(d.short_value(e)),1),(0,l._)("button",{class:"btn",onClick:a=>d.handle_delete(e,t)},K,8,Y)],8,U),(0,l.Wm)(i.uT,{name:"rows"},{default:(0,l.w5)((()=>[n.show_data[t]?((0,l.wg)(),(0,l.iD)("div",W,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.fields,((a,s)=>((0,l.wg)(),(0,l.iD)("div",{class:"row",key:a},[(0,l._)("div",A,(0,o.zw)(a.name),1),0==s?(0,l.wy)(((0,l.wg)(),(0,l.iD)("input",{key:0,class:"input",type:"number","onUpdate:modelValue":e=>n.countes[t].count=e},null,8,M)),[[i.nr,n.countes[t].count]]):1==s?(0,l.wy)(((0,l.wg)(),(0,l.iD)("input",{key:1,class:"input","onUpdate:modelValue":e=>n.countes[t].company=e},null,8,Z)),[[i.nr,n.countes[t].company]]):a.change?(0,l.wy)(((0,l.wg)(),(0,l.iD)("input",{key:2,class:"input","onUpdate:modelValue":e=>n.rows[t][d.search_idx(a.name)]=e},null,8,P)),[[i.nr,n.rows[t][d.search_idx(a.name)]]]):((0,l.wg)(),(0,l.iD)("div",$,(0,o.zw)(d.search_value(a.name,e)),1))])))),128)),N])):(0,l.kq)("",!0)])),_:2},1024)])))),128))])]),R])],2),((0,l.wg)(),(0,l.j4)(l.lR,{to:"body"},[(0,l.Wm)(i.uT,{name:"rows"},{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.j4)(l.Ob,null,[n.show_filters?((0,l.wg)(),(0,l.j4)(z,{key:0,onClose:d.close_filters,onUpdate_changeValue:d.update_changeValue},null,8,["onClose","onUpdate_changeValue"])):(0,l.kq)("",!0)],1024))])),_:1})]))],64)}var G=a(65);const L={class:"v-select"},J={class:"options",key:"a1"},Q=["onClick"];function X(e,t,a,s,n,d){return(0,l.wg)(),(0,l.iD)("div",L,[(0,l._)("div",{class:(0,o.C_)(["title",{title_checked:s.show_options,disabled:a.disabled}]),onClick:t[0]||(t[0]=e=>s.open_close_options()),onFocusout:t[1]||(t[1]=(...e)=>s.handleFocusOut&&s.handleFocusOut(...e)),tabindex:"0"},[(0,l._)("p",null,(0,o.zw)(a.selected_option.name),1),a.disabled?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",{key:0,class:(0,o.C_)(["arrow",{rotate_arrow:s.show_options}])},null,2))],34),(0,l.Wm)(i.uT,{name:"list"},{default:(0,l.w5)((()=>[s.show_options?((0,l.wg)(),(0,l.iD)("div",J,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.options,(e=>((0,l.wg)(),(0,l.iD)("p",{key:e.value,onClick:t=>s.select_option(e)},(0,o.zw)(e.name),9,Q)))),128))])):(0,l.kq)("",!0)])),_:1})])}var ee=a(870),te={props:{options_props:{type:Array,default(){return[]},required:!0},selected_option:{type:Object,required:!0,default(){return{}}},disabled:{type:Boolean,required:!1,default:!1},idx:{type:Number,required:!1}},emits:{select:null},setup(e,{emit:t}){const a=(0,ee.iH)([]);(0,l.bv)((()=>{(0,l.Y3)((()=>{i()}))}));const i=()=>{a.value=[],e.options_props.forEach((e=>a.value.push(e)))};(0,l.YP)((()=>e.options_props),(()=>{i()}),{deep:!0});const s=(0,ee.iH)(!1),n=()=>{s.value=!1},o=()=>{e.disabled||(s.value=!s.value)},d=()=>{n()},u=a=>{t("select",a,e.idx),n()};return{open_close_options:o,handleFocusOut:d,show_options:s,options:a,select_option:u}}},ae=a(89);const ie=(0,ae.Z)(te,[["render",X],["__scopeId","data-v-64812f98"]]);var le=ie;const se=e=>((0,l.dD)("data-v-50e3d268"),e=e(),(0,l.Cn)(),e),ne={class:"app_modal"},oe={class:"container"},de={class:"header"},ue=se((()=>(0,l._)("label",null,"Filters Modal",-1))),re=se((()=>(0,l._)("div",{class:"icon"},null,-1))),ce=[re],pe={class:"content"},_e={class:"accept_btn"},he={class:"footer"},ve={class:"btns"};function me(e,t,a,i,s,n){const o=(0,l.up)("filters-list"),d=(0,l.up)("main-grid");return(0,l.wg)(),(0,l.iD)("div",ne,[(0,l._)("div",oe,[(0,l._)("div",de,[ue,(0,l._)("button",{class:"exit",onClick:t[0]||(t[0]=e=>i.close())},ce)]),(0,l._)("div",pe,[((0,l.wg)(),(0,l.j4)(l.Ob,null,[(0,l.Wm)(o,{show_filters:e.show_filters,dont_show_filters:e.dont_show_filters,onUpdateFiltersValue:i.updateFiltersValue,onAdd_filter:e.add_filter},null,8,["show_filters","dont_show_filters","onUpdateFiltersValue","onAdd_filter"])],1024)),(0,l._)("div",_e,[(0,l._)("button",{onClick:t[1]||(t[1]=t=>e.clean_filters()),class:"btn1 btn"},"Очистить"),(0,l._)("button",{onClick:t[2]||(t[2]=e=>i.feelFilters()),class:"btn2 btn"},"Применить")]),(0,l.Wm)(d,{class:"main_grid",data:i.data,collval:i.collval,onUpdate_changeValue:e.update_changeValue,onAccept:i.accept,onUpdate_countes:i.update_countes},null,8,["data","collval","onUpdate_changeValue","onAccept","onUpdate_countes"])]),(0,l._)("div",he,[(0,l._)("div",ve,[(0,l._)("button",{class:"btn btn1",onClick:t[3]||(t[3]=e=>i.close())},"Назад")])])])])}const fe={class:"filters"},ge={class:"item"},we={class:"title"};function ye(e,t,a,s,n,d){const u=(0,l.up)("selector-vue"),r=(0,l.up)("filter-number"),c=(0,l.up)("filter-text"),p=(0,l.up)("filter-list"),_=(0,l.up)("filter-date"),h=(0,l.up)("filter-flag");return(0,l.wg)(),(0,l.j4)(i.W3,{name:"mdl"},{default:(0,l.w5)((()=>[(0,l._)("div",fe,[(0,l._)("div",ge,[(0,l.Wm)(u,{options_props:n.dont_show_filters,selected_option:{name:"Добавить фильтр"},onSelect:d.add_filter},null,8,["options_props","onSelect"])]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.filtersValue,((t,s)=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",{class:"item",key:s},[(0,l._)("div",we,(0,o.zw)(e.params[s+1]),1),1==t.type||2==t.type?((0,l.wg)(),(0,l.j4)(r,{key:0,item:t,idx:s,onChange_filter_value:d.change_filter_value},null,8,["item","idx","onChange_filter_value"])):(0,l.kq)("",!0),3==t.type||4==t.type?((0,l.wg)(),(0,l.j4)(c,{key:1,item:t,idx:s,onChange_filter_value:d.change_filter_value},null,8,["item","idx","onChange_filter_value"])):(0,l.kq)("",!0),5==t.type||6==t.type?((0,l.wg)(),(0,l.j4)(p,{key:2,item:t,idx:s,selector_options:t.selector_options,onChange_filter_value:d.change_filter_value},null,8,["item","idx","selector_options","onChange_filter_value"])):(0,l.kq)("",!0),7==t.type||8==t.type?((0,l.wg)(),(0,l.j4)(_,{key:3,item:t,idx:s,onChange_filter_value:d.change_filter_value},null,8,["item","idx","onChange_filter_value"])):(0,l.kq)("",!0),9==t.type?((0,l.wg)(),(0,l.j4)(h,{key:4,item:t,idx:s,onChange_filter_value:d.change_filter_value},null,8,["item","idx","onChange_filter_value"])):(0,l.kq)("",!0)])),[[i.F8,a.show_filters[s]]]))),128))])])),_:1})}const be={class:"filter"};function ke(e,t,a,s,n,d){return(0,l.wg)(),(0,l.iD)("div",be,[(0,l._)("button",{onClick:t[0]||(t[0]=e=>5==n.option?n.option=1:n.option+=1)},[(0,l._)("div",{class:(0,o.C_)(["icon",{equal:1==n.option,more:2==n.option,more_or_equal:3==n.option,less:4==n.option,less_or_equal:5==n.option}])},null,2)]),(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>n.filterValue=e),type:"number"},null,512),[[i.nr,n.filterValue]])])}var xe={props:{item:{type:Object,required:!0},idx:{type:Number,required:!0}},data(){return{option:1,filterValue:null}},computed:{option_value(){return{option:this.option,value:this.filterValue}}},watch:{option_value:{handler(){this.emit_value()},deep:!0},item(){this.change_value()}},mounted(){this.change_value()},methods:{change_value(){(0,l.Y3)((()=>{this.option=this.item.option,this.filterValue=this.item.value}))},emit_value(){this.$emit("change_filter_value",this.option_value,this.idx)}}};const De=(0,ae.Z)(xe,[["render",ke],["__scopeId","data-v-74292d04"]]);var Ve=De;const Ce={class:"filter"};function qe(e,t,a,s,n,d){return(0,l.wg)(),(0,l.iD)("div",Ce,[(0,l._)("button",{onClick:t[0]||(t[0]=e=>2==n.option?n.option=1:n.option+=1)},[(0,l._)("div",{class:(0,o.C_)(["icon",{equal:1==n.option,tilde:2==n.option}])},null,2)]),(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>n.filterValue=e),type:"text"},null,512),[[i.nr,n.filterValue]])])}var Ee={props:{item:{type:Object,required:!0},idx:{type:Number,required:!0}},data(){return{option:1,filterValue:null}},computed:{option_value(){return{option:this.option,value:this.filterValue}}},watch:{option_value:{handler(){this.emit_value()},deep:!0},item(){this.change_value()}},mounted(){this.change_value()},methods:{change_value(){(0,l.Y3)((()=>{this.option=this.item.option,this.filterValue=this.item.value}))},emit_value(){this.$emit("change_filter_value",this.option_value,this.idx)}}};const Oe=(0,ae.Z)(Ee,[["render",qe],["__scopeId","data-v-530d9d52"]]);var Fe=Oe;const je={class:"filter"};function Te(e,t,a,i,s,n){const d=(0,l.up)("multi-selector");return(0,l.wg)(),(0,l.iD)("div",je,[(0,l._)("button",{onClick:t[0]||(t[0]=e=>n.open_selector())},[(0,l._)("div",{class:(0,o.C_)(["arrow",{rotate_arrow:s.show_selector}])},null,2)]),s.show_selector?((0,l.wg)(),(0,l.j4)(d,{key:0,class:"selector",id:"selector123",options_props:a.selector_options,onSelect:n.option_select_multi,selected_options:s.filterValue,onFocusout:n.handleFocusOut,tabindex:"1"},null,8,["options_props","onSelect","selected_options","onFocusout"])):(0,l.kq)("",!0)])}const Se={class:"multi_selector"},Ie=["onClick"];function He(e,t,a,i,s,n){return(0,l.wg)(),(0,l.iD)("div",Se,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.options_props,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:(0,o.C_)(["item",{selected:a.selected_options[t]}]),key:e.value,onClick:e=>i.select(t)},(0,o.zw)(e.name),11,Ie)))),128))])}var Ue={name:"MultiSelector",props:{options_props:{type:Array,required:!0,default(){return[]}},selected_options:{type:Array,required:!0,default(){return[!0]}}},emits:{select:null},setup(e,{emit:t}){let a=(0,ee.qj)([]);(0,l.bv)((()=>e.selected_options.forEach((e=>a.push(e)))));const i=e=>{0==e&&(a=(0,ee.qj)([])),1==a[0]&&(a[0]=!1),a[e]=!a[e],a.includes(!0)||(a[0]=!0),t("select",a)};return{options_value:a,select:i}}};const Ye=(0,ae.Z)(Ue,[["render",He],["__scopeId","data-v-6d2d0cf0"]]);var ze=Ye,Ke={components:{MultiSelector:ze},props:{item:{type:Object,required:!0},idx:{type:Number,required:!0},selector_options:{type:Array,required:!0}},data(){return{filterValue:[],show_selector:!1}},computed:{option_value(){return{value:this.filterValue}}},watch:{option_value:{handler(){this.emit_value()},deep:!0},item(){this.change_value()}},mounted(){this.change_value()},methods:{change_value(){(0,l.Y3)((()=>{this.filterValue=[],this.item.value.forEach(((e,t)=>{this.filterValue[t]=e}))}))},emit_value(){this.$emit("change_filter_value",this.option_value,this.idx)},option_select_multi(e){this.filterValue=e},open_selector(){this.show_selector=!0,(0,l.Y3)((()=>{this.show_selector&&document.getElementById("selector123").focus()}))},handleFocusOut(){setTimeout((()=>{(0,l.Y3)((()=>{this.show_selector=!1}))}),150)}}};const We=(0,ae.Z)(Ke,[["render",Te],["__scopeId","data-v-42d70668"]]);var Ae=We;const Me={key:0,class:"filter"},Ze={key:1,class:"filter"};function Pe(e,t,a,s,n,o){return(0,l.wg)(),(0,l.iD)(l.HY,null,[7==a.item.type?((0,l.wg)(),(0,l.iD)("div",Me,[(0,l.wy)((0,l._)("input",{type:"date","onUpdate:modelValue":t[0]||(t[0]=e=>n.date_start=e)},null,512),[[i.nr,n.date_start]]),(0,l.wy)((0,l._)("input",{type:"date","onUpdate:modelValue":t[1]||(t[1]=e=>n.date_end=e)},null,512),[[i.nr,n.date_end]])])):(0,l.kq)("",!0),8==a.item.type?((0,l.wg)(),(0,l.iD)("div",Ze,[(0,l.wy)((0,l._)("input",{type:"datetime-local","onUpdate:modelValue":t[2]||(t[2]=e=>n.date_start=e)},null,512),[[i.nr,n.date_start]]),(0,l.wy)((0,l._)("input",{type:"datetime-local","onUpdate:modelValue":t[3]||(t[3]=e=>n.date_end=e)},null,512),[[i.nr,n.date_end]])])):(0,l.kq)("",!0)],64)}var $e={props:{item:{type:Object,required:!0},idx:{type:Number,required:!0}},data(){return{date_start:"",date_end:""}},computed:{date(){return{value:this.date_start+"~"+this.date_end}}},watch:{date:{handler(){this.emit_value()},deep:!0},item(){this.change_value()}},mounted(){this.change_value()},emits:{change_filter_value:null},methods:{change_value(){(0,l.Y3)((()=>{if(null!=this.item.value){const e=this.item.value.split("~");this.date_start=e[0],this.date_end=e[1]}}))},emit_value(){this.$emit("change_filter_value",this.date,this.idx)}}};const Ne=(0,ae.Z)($e,[["render",Pe],["__scopeId","data-v-5332f71a"]]);var Re=Ne;const Be={class:"filter"};function Ge(e,t,a,i,s,n){const o=(0,l.up)("selector-vue");return(0,l.wg)(),(0,l.iD)("div",Be,[(0,l.Wm)(o,{options_props:s.options,onSelect:n.option_select,selected_option:s.options[s.filterValue-1]},null,8,["options_props","onSelect","selected_option"])])}var Le={components:{SelectorVue:le},props:{item:{type:Object,required:!0},idx:{type:Number,required:!0}},data(){return{options:[{name:"Все",value:1},{name:"Да",value:2},{name:"Нет",value:3}],filterValue:1}},computed:{option_value(){return{value:this.filterValue}}},watch:{option_value:{handler(){this.emit_value()},deep:!0},item(){this.change_value()}},mounted(){this.change_value()},methods:{change_value(){(0,l.Y3)((()=>{this.filterValue=this.item.value}))},emit_value(){this.$emit("change_filter_value",this.option_value,this.idx)},option_select(e){this.filterValue=e.value}}};const Je=(0,ae.Z)(Le,[["render",Ge],["__scopeId","data-v-12148177"]]);var Qe=Je,Xe={components:{SelectorVue:le,FilterNumber:Ve,FilterText:Fe,FilterList:Ae,FilterDate:Re,FilterFlag:Qe},props:{show_filters:{type:Array,required:!0,default(){return[]}}},emits:{updateFiltersValue:null,add_filter:null},data(){return{filtersValue:[],dont_show_filters:[]}},computed:{...(0,G.Se)(["fields","params"])},mounted(){this.feelFilters(),this.feelParams()},watch:{filtersValue:{handler:function(){this.$emit("updateFiltersValue",this.filtersValue)},deep:!0},show_filters:{handler:function(){this.feelParams()},deep:!0}},methods:{feelParams(){let e=[];this.params.forEach(((t,a)=>{if(!0!==this.show_filters[a-1]&&0!=a&&a!=this.params.length-1){const i={name:t,value:a};e.push(i)}})),this.dont_show_filters=e},add_filter(e){this.dont_show_filters.splice(this.dont_show_filters.indexOf(e.name),1),this.$emit("add_filter",e)},change_filter_value(e,t){Object.assign(this.filtersValue[t],e)},feelFilters(){this.params.forEach(((e,t)=>{if(0!=t&&t!=this.params.length-1){let t=null,a=[];this.fields.forEach((i=>i.field==e?(t=i.type.value,a=i.selector_options):null));let i=null;5!=t&&6!=t||(i=[!0]),9==t&&(i=1);const l={type:t,option:1,selector_options:a,value:i};this.filtersValue.push(l)}}))}}};const et=(0,ae.Z)(Xe,[["render",ye],["__scopeId","data-v-000e887a"]]);var tt=et;const at={class:"wrapper"},it={key:0,class:"text"},lt={class:"bar_row"},st={class:"bar_item_group"},nt={class:"item"},ot={key:0,class:"modal_form"},dt=["onUpdate:modelValue"],ut={class:"dublitem"},rt=["onClick"],ct=["onClick"],pt={class:"left"},_t={class:"span"},ht={class:"right"};function vt(e,t,a,s,n,d){const u=(0,l.up)("selector-vue");return(0,l.wg)(),(0,l.iD)("div",at,[0==d.paginatedData.length?((0,l.wg)(),(0,l.iD)("label",it," Ничего не найдено ")):(0,l.kq)("",!0),0!=d.paginatedData.length?((0,l.wg)(),(0,l.iD)("table",{class:(0,o.C_)(["table",{blur:e.show_edit_modal}]),key:n.updateKey},[(0,l._)("thead",null,[(0,l._)("tr",lt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.params,((t,s)=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("th",{class:"bar_item item",style:(0,o.j5)({minWidth:0===s?"17px":s===e.params.length-1?"20px":0!=d.width[s]?d.width[s]+"px":(d.collsCount>=8?100:d.collsCount>3?90:80)/d.collsCount+"%"}),key:t},[(0,l._)("div",st,[(0,l._)("div",null,(0,o.zw)(t),1)])],4)),[[i.F8,!1!==a.collval[s-1]&&s!=e.params.length-1]]))),128))])]),(0,l._)("tbody",null,[(0,l.Wm)(i.W3,{name:"rows"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.paginatedData,((t,s)=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("tr",{class:"row",key:t},[(0,l._)("td",nt,[n.duplicate[s+n.idxes[n.page-1][0]]||!n.duplicate[s+n.idxes[n.page-1][0]+1]?((0,l.wg)(),(0,l.iD)("div",ot,[(0,l.wy)((0,l._)("input",{type:"number",class:"input","onUpdate:modelValue":e=>n.countes[s]=e},null,8,dt),[[i.nr,n.countes[s]]])])):(0,l.kq)("",!0)]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(Object.entries(t),((t,u)=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("td",{class:(0,o.C_)([{open_dublitem:n.duplicate[s+n.idxes[n.page-1][0]]},"item"]),key:t},[(0,l._)("div",ut,[(0,l.Uk)((0,o.zw)(t[1])+" ",1),u==e.params.indexOf("Название")-1&&n.showduplicate[s+n.idxes[n.page-1][0]+1]&&!n.duplicate[s+n.idxes[n.page-1][0]]?((0,l.wg)(),(0,l.iD)("button",{key:0,onClick:e=>d.showduble(s+n.idxes[n.page-1][0]),class:"buttonDuwn btn"},null,8,rt)):(0,l.kq)("",!0),u!=e.params.indexOf("Название")-1||n.showduplicate[s+n.idxes[n.page-1][0]+1]||n.duplicate[s+n.idxes[n.page-1][0]]||!n.duplicate[s+n.idxes[n.page-1][0]+1]?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("button",{key:1,onClick:e=>d.hideduble(s+n.idxes[n.page-1][0]),class:"buttonUp btn"},null,8,ct))])],2)),[[i.F8,!1!==a.collval[u]]]))),128))])),[[i.F8,!n.showduplicate[s+n.idxes[n.page-1][0]]]]))),128))])),_:1})])],2)):(0,l.kq)("",!0),0!=d.paginatedData.length?((0,l.wg)(),(0,l.iD)("div",{key:2,class:(0,o.C_)(["bottom",{blur:e.show_edit_modal}])},[(0,l._)("div",pt,[n.page>1?((0,l.wg)(),(0,l.iD)("button",{key:0,onClick:t[0]||(t[0]=e=>n.page-=1),class:"btn previous"},(0,o.zw)("<"))):(0,l.kq)("",!0),(0,l._)("div",_t,(0,o.zw)(n.page),1),n.page*n.count<a.data.length-d.countHideRows?((0,l.wg)(),(0,l.iD)("button",{key:1,onClick:t[1]||(t[1]=e=>n.page+=1),class:"btn next"},(0,o.zw)(">"))):(0,l.kq)("",!0),(0,l.Wm)(u,{class:"count",options_props:n.count_values,selected_option:{name:n.count,value:Math.random()},onSelect:d.change_count},null,8,["options_props","selected_option","onSelect"])]),(0,l._)("div",ht,[(0,l._)("button",{class:"btn btn2",onClick:t[2]||(t[2]=e=>d.accept())},"Добавить к сделке")])],2)):(0,l.kq)("",!0)])}var mt={name:"MainGrid",components:{SelectorVue:le},props:{data:{type:Array,required:!0},collval:{type:Array,required:!0}},emits:{accept:null,update_countes:null},data(){return{count:5,count_values:[{name:"3",value:1},{name:"5",value:2},{name:"10",value:3},{name:"20",value:4}],page:1,filtersValue:[],updateKey:0,duplicate:[],showduplicate:[],startIdx:0,idxes:[[0,6]],countes:[]}},watch:{count(){this.startIdx=0,this.feelIdxes(),this.page=1},paginatedData:{handler:function(){this.updateKey+=1,this.countes=[]},deep:!0},countes:{handler:function(){this.$emit("update_countes",this.countes)},deep:!0},data:{handler:function(){this.calcDuplicate()},deep:!0},countHideRows:function(){this.feelIdxes()}},computed:{paginatedData(){if(void 0!=this.idxes[this.page-1]){const e=this.data.slice(this.idxes[this.page-1][0],this.idxes[this.page-1][1]);return e}return[]},collsCount(){let e=0;return this.collval.forEach((t=>t?e+=1:null)),e},countPage(){return this.count*(this.page-1)},countHideRows(){let e=0;return this.duplicate.forEach((t=>t?e+=1:null)),e},endidx(){return this.endId(this.startIdx)},width(){let e=[];return this.params.forEach((t=>{let a=0;this.fields.forEach((e=>{t===e.field&&(9==e.type.value&&(a=70),7!=e.type.value&&8!=e.type.value||(a=130))})),e.push(a)})),e},...(0,G.Se)(["fields"]),...(0,G.Se)(["data1"]),...(0,G.Se)(["params"])},mounted(){this.calcDuplicate(),this.feelIdxes()},deactivated(){this.countes=[]},methods:{change_count(e){this.count=e.name},accept(){this.$emit("accept")},calcDuplicate(){let e="",t="";this.duplicate=[],this.showduplicate=[];const a=this.params.indexOf("Название")-1,i=this.params.indexOf("Артикул")-1;this.data.forEach((l=>{l[a]==e&&l[i]==t?this.duplicate.push(!0):this.duplicate.push(!1),e=l[a],t=l[i]})),this.duplicate.forEach((e=>this.showduplicate.push(e)))},showduble(e){while(this.duplicate[e+1])this.showduplicate[e+1]=!1,e+=1},hideduble(e){while(this.duplicate[e+1])this.showduplicate[e+1]=!0,e+=1},endId(e){let t=0;while(t!=this.count)this.duplicate[e]||(t+=1),e+=1;while(this.duplicate[e])e+=1;return e},feelIdxes(){this.idxes=[];while(this.startIdx<this.data.length)this.idxes.push([this.startIdx,this.endId(this.startIdx)]),this.startIdx=this.endId(this.startIdx);this.startIdx=0}}};const ft=(0,ae.Z)(mt,[["render",vt],["__scopeId","data-v-0bc0d8a6"]]);var gt=ft;function wt(){const e=(0,G.oR)(),t=(0,l.Fl)((()=>e.getters.params)),a=(0,ee.iH)([]);return t.value.forEach((e=>{a.value.push(e)})),a.value.pop(),a.value.shift(),{params:a}}function yt(){const{params:e}=wt(),t=(0,ee.iH)([!0,!0,!0,!0,!0]),a=a=>{t.value[e.value.indexOf(a.name)]=!0},i=()=>t.value=[!0,!0,!0,!0,!0],l=(0,ee.iH)([]),s=e=>{l.value=e},n=(e,t,a)=>{const i=[];return e.forEach((e=>{e[a].split(" ").forEach((a=>{a.includes(t)&&i.push(e)}))})),i},o=(e,t,a)=>{const i=[];return e.forEach((e=>{e[a]==t&&i.push(e)})),i};return{show_filters:t,add_filter:a,filtersValue:l,updateFiltersValue:s,includes:n,eqval:o,clean_filters:i}}var bt={components:{FiltersList:tt,MainGrid:gt},emits:{close:null,update_changeValue:null},setup(e,{emit:t}){const{filtersValue:a,eqval:i,includes:s,updateFiltersValue:n}=yt(),o=(0,G.oR)(),d=()=>{t("close")},u=()=>{let e=[],a=[];f.value.forEach(((t,i)=>{void 0!=t&&""!=t&&(e.push(_.value[i]),a.push(f.value[i]))})),t("update_changeValue",e,a),d()},r=(0,l.Fl)((()=>o.getters.data)),c=(0,l.Fl)((()=>o.getters.service));let p=[];c.value.forEach((e=>p.push(e))),r.value.forEach((e=>p.push(e)));const _=(0,ee.iH)(p),h=()=>{_.value=[],p.forEach((e=>{_.value.push((0,ee.qj)(e))}))};_.value=_.value.sort(((e,t)=>e[0].localeCompare(t[0])));const v=[!0,!0,!1,!0,!1,!0,!0,!0,!0,!0,!1,!1,!0,!0,!1,!1,!1,!1,!1],m=()=>{h();const e=[0,1];e.forEach((e=>{if(""!=a.value[e].value&&null!=a.value[e].value&&void 0!=a.value[e].value){const t=[];_.value.forEach((e=>t.push(e))),_.value=[],1==a.value[e].option&&i(t,a.value[e].value,e).forEach((e=>_.value.push(e))),2==a.value[e].option&&s(t,a.value[e].value,e).forEach((e=>_.value.push(e)))}}))},f=(0,ee.iH)([]),g=e=>f.value=e;return{...yt(),updateFiltersValue:n,close:d,accept:u,data:_,collval:v,feelFilters:m,update_countes:g}}};const kt=(0,ae.Z)(bt,[["render",me],["__scopeId","data-v-50e3d268"]]);var xt=kt,Dt={components:{SelectorVue:le,FiltersModal:xt},data(){return{path:["Поступление","№ партии","НДС включен в цену"],selected_categoryes:[],sel_idx:0,show_categoryes:!0,categoryes:{},short_data:[],cat_for_short_dat:["Название","Артикул","№ партии"],rows:[],available_data:[],show_cards:!1,show_filters:!1,countes:[],show_data:[],fields:[{name:"Количество",change:!0},{name:"Поставщик",change:!0},{name:"Группа",change:!1},{name:"Артикул",change:!1},{name:"На складе",change:!1},{name:"В резерве",change:!1},{name:"Цена",change:!0},{name:"Себестоимость",change:!1},{name:"№ партии",change:!1},{name:"Описание",change:!0},{name:"Единицы измерений",change:!1},{name:"Поступление",change:!1},{name:"Сумма ₽",change:!1},{name:"Итого к оплате ₽",change:!1},{name:"Прибыль ₽",change:!1}]}},computed:{...(0,G.Se)(["data","params"]),paginatedData(){if(this.show_categoryes){let e=[];e=e.concat(this.data);let t=[];return e.forEach((e=>{let a=!0;this.path.forEach(((t,i)=>{const l=this.params.indexOf(t)-1;a=e[l]==this.selected_categoryes[i]&&a})),a&&t.push(e)})),t}return this.data}},mounted(){this.get_data_categoryes(),this.feel_available_data()},watch:{show_cards(){this.show_cards||(this.selected_categoryes=[],this.sel_idx=0)}},methods:{handle_delete(e,t){const a={name:this.short_value(e),data:e,value:Math.random()};this.available_data.push(a),this.rows.splice(t,1),this.countes.splice(t,1)},update_changeValue(e,t){e.forEach(((e,a)=>{if(!this.rows.includes(e)){let i=[];e.forEach((e=>i.push(e))),this.rows.push(i);let l=null;l=void 0==t[a]?0:t[a];const s={count:l,company:""};this.countes.push(s)}}))},close_filters(){this.show_filters=!1},select(e){this.available_data.forEach(((t,a)=>{t.data==e.data&&this.available_data.splice(a,1)})),this.rows.push(e.data);const t={count:1,company:""};this.countes.push(t)},get_data_categoryes(){function e(e){let t=[];for(let a of e)t.includes(a)||t.push(a);return t}this.categoryes={};const t={};let a=[];a=a.concat(this.params),a.pop(),a.shift(),a.forEach(((a,i)=>{t[a]=[];let l=[];this.data.forEach((e=>{l.push(e[i])})),t[a]=e(l)})),Object.assign(this.categoryes,t)},feel_available_data(){this.data.forEach(((e,t)=>{const a={name:this.short_value(e),data:e,value:t};this.available_data.push(a)}))},short_value(e){const t=e=>this.params.indexOf(e)-1;let a="";return this.cat_for_short_dat.forEach(((i,l)=>{a=0==l?a+e[t(i)]+" (":a+i+": "+e[t(i)]+" "})),a+=")",a},search_value(e,t){const a=this.search_idx(e);if(-2!=a)return t[a]},search_idx(e){const t=this.params.indexOf(e)-1;return t},toShowData(e){const t=this.show_data[e];this.show_data=[],this.show_data[e]=!t}}};const Vt=(0,ae.Z)(Dt,[["render",B],["__scopeId","data-v-c457f1cc"]]);var Ct=Vt,qt={name:"App",components:{MainPage:Ct},setup(){}};const Et=(0,ae.Z)(qt,[["render",n]]);var Ot=Et,Ft={state:{params:["","Название","Артикул","Себестоимость","Цена","Склад","На складе","Свободно для резерва","В резерве","№ партии","Поступление","НДС","Изменение","Единицы измерений","НДС %","НДС включен в цену","Менеджер может менять % НДС","Описание","Прибыль","Группа",""],data:[["Товар 1","1","500","509","Склад 1","509","50","51","1","2022-07-13","Да","2022-07-18T11:21","шт","3","Да","Да","123","Да","Группа 1"],["Товар 1","1","120","129","Склад 1","129","12","11","2","2022-07-13","Да","2022-07-18T11:21","шт","3","Нет","Да","123","Да","Группа 1"],["Товар 1","1","300","309","Склад 1","309","30","31","2","2022-07-13","Да","2022-07-18T11:21","шт","3","Нет","Да","123","Да","Группа 1"],["Товар 1","1","1500","1509","Склад 1","1509","150","151","3","2022-07-13","Да","2022-07-18T11:21","шт","3","Да","Да","123","Да","Группа 1"],["Товар 2","2","1800","1809","Склад 1","1809","180","181","1","2022-07-14","Да","2022-07-18T11:21","шт","3","Нет","Да","123","Да","Группа 1"],["Товар 3","3","13","19","Склад 1","19","1","1","2","2022-07-18","Да","2022-07-18T11:21","шт","3","Нет","Да","123","Да","Группа 1"],["Товар 4","4","117","119","Склад 1","119","11","11","3","2022-07-13","Да","2022-07-18T11:21","шт","3","Нет","Да","123","Да","Группа 1"],["Товар 5","5","4356","4359","Склад 2","4359","435","431","2","2022-07-18","Да","2022-07-18T11:21","шт","3","Да","Да","123","Да","Группа 2"],["Товар 6","6","67589","67589","Склад 2","67589","6758","6751","2","2022-07-11","Да","2022-07-18T11:21","шт","3","Нет","Да","123","Да","Группа 2"],["Товар 7","7","123","129","Склад 2","129","12","11","1","2022-07-11","Да","2022-07-18T11:21","шт","3","Нет","Да","123","Да","Группа 2"],["Товар 8","8","123","129","Склад 2","129","12","11","1","2022-07-18","Да","2022-07-18T11:21","шт","3","Нет","Да","123","Да","Группа 2"],["Товар 9","9","123","129","Склад 2","129","12","11","2","2022-07-11","Да","2022-07-18T11:21","шт","3","Нет","Да","123","Да","Группа 2"],["Товар 9","9","123","129","Склад 2","129","12","11","3","2022-07-28","Да","2022-07-18T11:21","шт","3","Да","Да","123","Да","Группа 2"],["Товар 10","10","123","129","Склад 2","129","12","11","3","2022-07-16","Да","2022-07-18T11:21","шт","3","Нет","Да","123","Да","Группа 2"]],service:[["Услуга 1","1","1500","1509","","","","","","2022-07-18","Да","2022-07-18T11:21","","3","Нет","Да","123","Да","Группа 1"],["Продажа","1","1500","1509","","","","","","2022-07-18","Да","2022-07-18T11:21","","3","Нет","Да","123","Да","Группа 1"],["Услуга 2","2","1800","1809","","","","","","2022-07-18","Да","2022-07-18T11:21","","3","Нет","Да","123","Да","Группа 1"],["Услуга 3","3","13","19","","","","","","2022-07-18","Да","2022-07-18T11:21","","3","Нет","Да","123","Да","Группа 1"],["Услуга 1","1","1500","1509","","","","","","2022-07-18","Да","2022-07-18T11:21","","3","Нет","Да","1234","Да","Группа 2"],["Услуга 1","1","1500","1509","","","","","","2022-07-18","Да","2022-07-18T11:21","","3","Нет","Да","123","Да","Группа 2"]],types:[{name:"Число целое",value:1},{name:"Дробное число",value:2},{name:"Строка",value:3},{name:"Текст",value:4},{name:"Список",value:5},{name:"Мильтисписок",value:6},{name:"Дата",value:7},{name:"Дата-Время",value:8},{name:"Флаг",value:9}],fields:[{id:1,field:"Название",type:{name:"Строка",value:3},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0},{id:2,field:"Артикул",type:{name:"Строка",value:3},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0},{id:3,field:"Себестоимость",type:{name:"Дробное число",value:2},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0},{id:4,field:"Цена",type:{name:"Дробное число",value:2},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0},{id:5,field:"Склад",type:{name:"Список",value:5},selector_options:[{name:"Не выбрано",value:1},{name:"Склад 1",value:2},{name:"Склад 2",value:3}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!1},{id:6,field:"На складе",type:{name:"Число целое",value:1},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!1},{id:7,field:"Свободно для резерва",type:{name:"Число целое",value:1},selector_options:[{name:"",value:1}],disable_change_type:!1,visibility:!0,edit:!1,editing:!1,delete:!0,available_to_services:!1},{id:8,field:"В резерве",type:{name:"Число целое",value:1},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!1},{id:9,field:"№ партии",type:{name:"Число целое",value:1},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!1},{id:10,field:"Поступление",type:{name:"Дата",value:7},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0},{id:11,field:"НДС",type:{name:"Флаг",value:9},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0},{id:12,field:"Изменение",type:{name:"Дата-Время",value:8},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0},{id:13,field:"Единицы измерений",type:{name:"Список",value:5},selector_options:[{name:"Не выбрано",value:1},{name:"шт",value:2},{name:"л (литры)",value:3},{name:"м3 (кубические метры)",value:4},{name:"кг (килограммы)",value:5},{name:"т (тонны)",value:6},{name:"комплект",value:7},{name:"услуга",value:8}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!1},{id:14,field:"НДС %",type:{name:"Дробное число",value:2},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0},{id:15,field:"НДС включен в цену",type:{name:"Флаг",value:9},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0},{id:16,field:"Менеджер может менять % НДС",type:{name:"Флаг",value:9},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0},{id:17,field:"Описание",type:{name:"Текст",value:4},selector_options:[{name:"",value:1}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0},{id:18,field:"Прибыль",type:{name:"Флаг",value:9},selector_options:[{name:"",value:1}],disable_change_type:!1,visibility:!1,edit:!1,editing:!1,delete:!0,available_to_services:!0},{id:19,field:"Группа",type:{name:"Мильтисписок",value:6},selector_options:[{name:"Не выбрано",value:1},{name:"Группа 1",value:2},{name:"Группа 2",value:3},{name:"Группа 3",value:4},{name:"Группа 4",value:5}],disable_change_type:!0,visibility:!0,edit:!1,editing:!1,delete:!1,available_to_services:!0}]},getters:{data(e){return e.data},data1(e){return e.data},get_data_storage(e){const t=e.params.indexOf("Склад")-1,a={};let i=[],l=null;return e.fields.forEach((e=>{"Склад"==e.field&&(l=e.id-1)})),e.fields[l].selector_options.forEach((e=>{i.push(e.name)})),i.shift(),i.forEach((e=>{a[e]=[]})),i.forEach((i=>{e.data.forEach((e=>{e[t]==i&&a[i].push(e)}))})),a},service(e){return e.service},params(e){return e.params},types(e){return e.types},fields(e){return e.fields},options_from_name:e=>{const t={};return e.fields.forEach((e=>{t[e.field]=e.selector_options})),t}},mutations:{update_data(e,t){e.data=t},update_data_idx(e,t){e.data[t.idx]=t.data},update_all_data(e,t){e.data.forEach(((a,i)=>{e.data[i].push(t)}))},add_new_data(e,t){let a=[];e.params.forEach((()=>a.push(""))),a.pop(),a.pop(),t.title.forEach(((i,l)=>{const s=e.params.indexOf(i)-1;s>=0&&(a[s]=t.new_data[l])})),e.data.push(a)},cancel_item_in_data(e,t){const a=e.params.indexOf(t.name)-1,i=e.data[t.idx][a];e.data[t.idx][a]=i-t.count},delete_data_idx(e,t){e.data.forEach(((a,i)=>{t.forEach((t=>{e.data[i].splice(t,1)}))}))},remove_data_idx(e,t){e.data.splice(t.idx,1)},add_data(e,t){e.data.push(t.data)},archive_data(e,t){t.forEach((t=>{e.archive.items.push(e.data[t]),e.archive.sourses.push(0)}));const a=t.reverse();a.forEach((t=>e.data.splice(t,1)))},update_params(e,t){e.params=t},update_fields(e,t){e.fields=t}},actions:{}},jt=(0,G.MT)({modules:{data:Ft}});console.debug(1),console.debug(2),console.debug(3),console.debug(4),console.debug(5);const Tt={render(e){return console.debug(6),e.showProductsSearch((e=>{const t=(0,i.ri)({render:()=>(0,l.h)(Ot)});t.use(jt),t.mount(e)})),!0},init(){return!0},bind_actions(){return!0},settings(){},onSave(){},destroy(){},contacts_selected(){},leads_selected(){},tasks_selected(){}};var St=Tt}},t={};function a(i){var l=t[i];if(void 0!==l)return l.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,i,l,s){if(!i){var n=1/0;for(r=0;r<e.length;r++){i=e[r][0],l=e[r][1],s=e[r][2];for(var o=!0,d=0;d<i.length;d++)(!1&s||n>=s)&&Object.keys(a.O).every((function(e){return a.O[e](i[d])}))?i.splice(d--,1):(o=!1,s<n&&(n=s));if(o){e.splice(r--,1);var u=l();void 0!==u&&(t=u)}}return t}s=s||0;for(var r=e.length;r>0&&e[r-1][2]>s;r--)e[r]=e[r-1];e[r]=[i,l,s]}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={179:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var l,s,n=i[0],o=i[1],d=i[2],u=0;if(n.some((function(t){return 0!==e[t]}))){for(l in o)a.o(o,l)&&(a.m[l]=o[l]);if(d)var r=d(a)}for(t&&t(i);u<n.length;u++)s=n[u],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(r)},i=self["webpackChunkwidget_test_3"]=self["webpackChunkwidget_test_3"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(141)}));return i=a.O(i),i}()}));
//# sourceMappingURL=main.js.map