// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__26459__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26459 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26460__i = 0, G__26460__a = new Array(arguments.length -  0);
while (G__26460__i < G__26460__a.length) {G__26460__a[G__26460__i] = arguments[G__26460__i + 0]; ++G__26460__i;}
  args = new cljs.core.IndexedSeq(G__26460__a,0);
} 
return G__26459__delegate.call(this,args);};
G__26459.cljs$lang$maxFixedArity = 0;
G__26459.cljs$lang$applyTo = (function (arglist__26461){
var args = cljs.core.seq(arglist__26461);
return G__26459__delegate(args);
});
G__26459.cljs$core$IFn$_invoke$arity$variadic = G__26459__delegate;
return G__26459;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26462__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26462 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26463__i = 0, G__26463__a = new Array(arguments.length -  0);
while (G__26463__i < G__26463__a.length) {G__26463__a[G__26463__i] = arguments[G__26463__i + 0]; ++G__26463__i;}
  args = new cljs.core.IndexedSeq(G__26463__a,0);
} 
return G__26462__delegate.call(this,args);};
G__26462.cljs$lang$maxFixedArity = 0;
G__26462.cljs$lang$applyTo = (function (arglist__26464){
var args = cljs.core.seq(arglist__26464);
return G__26462__delegate(args);
});
G__26462.cljs$core$IFn$_invoke$arity$variadic = G__26462__delegate;
return G__26462;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map