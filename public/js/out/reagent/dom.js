// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__20159__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__20159__auto__)){
return or__20159__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_26803 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_26803){
return (function (){
var _STAR_always_update_STAR_26804 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_26804;
}});})(_STAR_always_update_STAR_26803))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_26803;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args26805 = [];
var len__21234__auto___26808 = arguments.length;
var i__21235__auto___26809 = (0);
while(true){
if((i__21235__auto___26809 < len__21234__auto___26808)){
args26805.push((arguments[i__21235__auto___26809]));

var G__26810 = (i__21235__auto___26809 + (1));
i__21235__auto___26809 = G__26810;
continue;
} else {
}
break;
}

var G__26807 = args26805.length;
switch (G__26807) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26805.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__26816_26820 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__26817_26821 = null;
var count__26818_26822 = (0);
var i__26819_26823 = (0);
while(true){
if((i__26819_26823 < count__26818_26822)){
var v_26824 = cljs.core._nth.call(null,chunk__26817_26821,i__26819_26823);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_26824);

var G__26825 = seq__26816_26820;
var G__26826 = chunk__26817_26821;
var G__26827 = count__26818_26822;
var G__26828 = (i__26819_26823 + (1));
seq__26816_26820 = G__26825;
chunk__26817_26821 = G__26826;
count__26818_26822 = G__26827;
i__26819_26823 = G__26828;
continue;
} else {
var temp__4657__auto___26829 = cljs.core.seq.call(null,seq__26816_26820);
if(temp__4657__auto___26829){
var seq__26816_26830__$1 = temp__4657__auto___26829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26816_26830__$1)){
var c__20970__auto___26831 = cljs.core.chunk_first.call(null,seq__26816_26830__$1);
var G__26832 = cljs.core.chunk_rest.call(null,seq__26816_26830__$1);
var G__26833 = c__20970__auto___26831;
var G__26834 = cljs.core.count.call(null,c__20970__auto___26831);
var G__26835 = (0);
seq__26816_26820 = G__26832;
chunk__26817_26821 = G__26833;
count__26818_26822 = G__26834;
i__26819_26823 = G__26835;
continue;
} else {
var v_26836 = cljs.core.first.call(null,seq__26816_26830__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_26836);

var G__26837 = cljs.core.next.call(null,seq__26816_26830__$1);
var G__26838 = null;
var G__26839 = (0);
var G__26840 = (0);
seq__26816_26820 = G__26837;
chunk__26817_26821 = G__26838;
count__26818_26822 = G__26839;
i__26819_26823 = G__26840;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map