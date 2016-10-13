// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__20159__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__20159__auto__){
return or__20159__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__20159__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__20159__auto__)){
return or__20159__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25308_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25308_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25313 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25314 = null;
var count__25315 = (0);
var i__25316 = (0);
while(true){
if((i__25316 < count__25315)){
var n = cljs.core._nth.call(null,chunk__25314,i__25316);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25317 = seq__25313;
var G__25318 = chunk__25314;
var G__25319 = count__25315;
var G__25320 = (i__25316 + (1));
seq__25313 = G__25317;
chunk__25314 = G__25318;
count__25315 = G__25319;
i__25316 = G__25320;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25313);
if(temp__4657__auto__){
var seq__25313__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25313__$1)){
var c__20970__auto__ = cljs.core.chunk_first.call(null,seq__25313__$1);
var G__25321 = cljs.core.chunk_rest.call(null,seq__25313__$1);
var G__25322 = c__20970__auto__;
var G__25323 = cljs.core.count.call(null,c__20970__auto__);
var G__25324 = (0);
seq__25313 = G__25321;
chunk__25314 = G__25322;
count__25315 = G__25323;
i__25316 = G__25324;
continue;
} else {
var n = cljs.core.first.call(null,seq__25313__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25325 = cljs.core.next.call(null,seq__25313__$1);
var G__25326 = null;
var G__25327 = (0);
var G__25328 = (0);
seq__25313 = G__25325;
chunk__25314 = G__25326;
count__25315 = G__25327;
i__25316 = G__25328;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25379_25390 = cljs.core.seq.call(null,deps);
var chunk__25380_25391 = null;
var count__25381_25392 = (0);
var i__25382_25393 = (0);
while(true){
if((i__25382_25393 < count__25381_25392)){
var dep_25394 = cljs.core._nth.call(null,chunk__25380_25391,i__25382_25393);
topo_sort_helper_STAR_.call(null,dep_25394,(depth + (1)),state);

var G__25395 = seq__25379_25390;
var G__25396 = chunk__25380_25391;
var G__25397 = count__25381_25392;
var G__25398 = (i__25382_25393 + (1));
seq__25379_25390 = G__25395;
chunk__25380_25391 = G__25396;
count__25381_25392 = G__25397;
i__25382_25393 = G__25398;
continue;
} else {
var temp__4657__auto___25399 = cljs.core.seq.call(null,seq__25379_25390);
if(temp__4657__auto___25399){
var seq__25379_25400__$1 = temp__4657__auto___25399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25379_25400__$1)){
var c__20970__auto___25401 = cljs.core.chunk_first.call(null,seq__25379_25400__$1);
var G__25402 = cljs.core.chunk_rest.call(null,seq__25379_25400__$1);
var G__25403 = c__20970__auto___25401;
var G__25404 = cljs.core.count.call(null,c__20970__auto___25401);
var G__25405 = (0);
seq__25379_25390 = G__25402;
chunk__25380_25391 = G__25403;
count__25381_25392 = G__25404;
i__25382_25393 = G__25405;
continue;
} else {
var dep_25406 = cljs.core.first.call(null,seq__25379_25400__$1);
topo_sort_helper_STAR_.call(null,dep_25406,(depth + (1)),state);

var G__25407 = cljs.core.next.call(null,seq__25379_25400__$1);
var G__25408 = null;
var G__25409 = (0);
var G__25410 = (0);
seq__25379_25390 = G__25407;
chunk__25380_25391 = G__25408;
count__25381_25392 = G__25409;
i__25382_25393 = G__25410;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25383){
var vec__25387 = p__25383;
var seq__25388 = cljs.core.seq.call(null,vec__25387);
var first__25389 = cljs.core.first.call(null,seq__25388);
var seq__25388__$1 = cljs.core.next.call(null,seq__25388);
var x = first__25389;
var xs = seq__25388__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25387,seq__25388,first__25389,seq__25388__$1,x,xs,get_deps__$1){
return (function (p1__25329_SHARP_){
return clojure.set.difference.call(null,p1__25329_SHARP_,x);
});})(vec__25387,seq__25388,first__25389,seq__25388__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25423 = cljs.core.seq.call(null,provides);
var chunk__25424 = null;
var count__25425 = (0);
var i__25426 = (0);
while(true){
if((i__25426 < count__25425)){
var prov = cljs.core._nth.call(null,chunk__25424,i__25426);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25427_25435 = cljs.core.seq.call(null,requires);
var chunk__25428_25436 = null;
var count__25429_25437 = (0);
var i__25430_25438 = (0);
while(true){
if((i__25430_25438 < count__25429_25437)){
var req_25439 = cljs.core._nth.call(null,chunk__25428_25436,i__25430_25438);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25439,prov);

var G__25440 = seq__25427_25435;
var G__25441 = chunk__25428_25436;
var G__25442 = count__25429_25437;
var G__25443 = (i__25430_25438 + (1));
seq__25427_25435 = G__25440;
chunk__25428_25436 = G__25441;
count__25429_25437 = G__25442;
i__25430_25438 = G__25443;
continue;
} else {
var temp__4657__auto___25444 = cljs.core.seq.call(null,seq__25427_25435);
if(temp__4657__auto___25444){
var seq__25427_25445__$1 = temp__4657__auto___25444;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25427_25445__$1)){
var c__20970__auto___25446 = cljs.core.chunk_first.call(null,seq__25427_25445__$1);
var G__25447 = cljs.core.chunk_rest.call(null,seq__25427_25445__$1);
var G__25448 = c__20970__auto___25446;
var G__25449 = cljs.core.count.call(null,c__20970__auto___25446);
var G__25450 = (0);
seq__25427_25435 = G__25447;
chunk__25428_25436 = G__25448;
count__25429_25437 = G__25449;
i__25430_25438 = G__25450;
continue;
} else {
var req_25451 = cljs.core.first.call(null,seq__25427_25445__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25451,prov);

var G__25452 = cljs.core.next.call(null,seq__25427_25445__$1);
var G__25453 = null;
var G__25454 = (0);
var G__25455 = (0);
seq__25427_25435 = G__25452;
chunk__25428_25436 = G__25453;
count__25429_25437 = G__25454;
i__25430_25438 = G__25455;
continue;
}
} else {
}
}
break;
}

var G__25456 = seq__25423;
var G__25457 = chunk__25424;
var G__25458 = count__25425;
var G__25459 = (i__25426 + (1));
seq__25423 = G__25456;
chunk__25424 = G__25457;
count__25425 = G__25458;
i__25426 = G__25459;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25423);
if(temp__4657__auto__){
var seq__25423__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25423__$1)){
var c__20970__auto__ = cljs.core.chunk_first.call(null,seq__25423__$1);
var G__25460 = cljs.core.chunk_rest.call(null,seq__25423__$1);
var G__25461 = c__20970__auto__;
var G__25462 = cljs.core.count.call(null,c__20970__auto__);
var G__25463 = (0);
seq__25423 = G__25460;
chunk__25424 = G__25461;
count__25425 = G__25462;
i__25426 = G__25463;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25423__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25431_25464 = cljs.core.seq.call(null,requires);
var chunk__25432_25465 = null;
var count__25433_25466 = (0);
var i__25434_25467 = (0);
while(true){
if((i__25434_25467 < count__25433_25466)){
var req_25468 = cljs.core._nth.call(null,chunk__25432_25465,i__25434_25467);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25468,prov);

var G__25469 = seq__25431_25464;
var G__25470 = chunk__25432_25465;
var G__25471 = count__25433_25466;
var G__25472 = (i__25434_25467 + (1));
seq__25431_25464 = G__25469;
chunk__25432_25465 = G__25470;
count__25433_25466 = G__25471;
i__25434_25467 = G__25472;
continue;
} else {
var temp__4657__auto___25473__$1 = cljs.core.seq.call(null,seq__25431_25464);
if(temp__4657__auto___25473__$1){
var seq__25431_25474__$1 = temp__4657__auto___25473__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25431_25474__$1)){
var c__20970__auto___25475 = cljs.core.chunk_first.call(null,seq__25431_25474__$1);
var G__25476 = cljs.core.chunk_rest.call(null,seq__25431_25474__$1);
var G__25477 = c__20970__auto___25475;
var G__25478 = cljs.core.count.call(null,c__20970__auto___25475);
var G__25479 = (0);
seq__25431_25464 = G__25476;
chunk__25432_25465 = G__25477;
count__25433_25466 = G__25478;
i__25434_25467 = G__25479;
continue;
} else {
var req_25480 = cljs.core.first.call(null,seq__25431_25474__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25480,prov);

var G__25481 = cljs.core.next.call(null,seq__25431_25474__$1);
var G__25482 = null;
var G__25483 = (0);
var G__25484 = (0);
seq__25431_25464 = G__25481;
chunk__25432_25465 = G__25482;
count__25433_25466 = G__25483;
i__25434_25467 = G__25484;
continue;
}
} else {
}
}
break;
}

var G__25485 = cljs.core.next.call(null,seq__25423__$1);
var G__25486 = null;
var G__25487 = (0);
var G__25488 = (0);
seq__25423 = G__25485;
chunk__25424 = G__25486;
count__25425 = G__25487;
i__25426 = G__25488;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25493_25497 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25494_25498 = null;
var count__25495_25499 = (0);
var i__25496_25500 = (0);
while(true){
if((i__25496_25500 < count__25495_25499)){
var ns_25501 = cljs.core._nth.call(null,chunk__25494_25498,i__25496_25500);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25501);

var G__25502 = seq__25493_25497;
var G__25503 = chunk__25494_25498;
var G__25504 = count__25495_25499;
var G__25505 = (i__25496_25500 + (1));
seq__25493_25497 = G__25502;
chunk__25494_25498 = G__25503;
count__25495_25499 = G__25504;
i__25496_25500 = G__25505;
continue;
} else {
var temp__4657__auto___25506 = cljs.core.seq.call(null,seq__25493_25497);
if(temp__4657__auto___25506){
var seq__25493_25507__$1 = temp__4657__auto___25506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25493_25507__$1)){
var c__20970__auto___25508 = cljs.core.chunk_first.call(null,seq__25493_25507__$1);
var G__25509 = cljs.core.chunk_rest.call(null,seq__25493_25507__$1);
var G__25510 = c__20970__auto___25508;
var G__25511 = cljs.core.count.call(null,c__20970__auto___25508);
var G__25512 = (0);
seq__25493_25497 = G__25509;
chunk__25494_25498 = G__25510;
count__25495_25499 = G__25511;
i__25496_25500 = G__25512;
continue;
} else {
var ns_25513 = cljs.core.first.call(null,seq__25493_25507__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25513);

var G__25514 = cljs.core.next.call(null,seq__25493_25507__$1);
var G__25515 = null;
var G__25516 = (0);
var G__25517 = (0);
seq__25493_25497 = G__25514;
chunk__25494_25498 = G__25515;
count__25495_25499 = G__25516;
i__25496_25500 = G__25517;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__20159__auto__ = goog.require__;
if(cljs.core.truth_(or__20159__auto__)){
return or__20159__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25518__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25518 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25519__i = 0, G__25519__a = new Array(arguments.length -  0);
while (G__25519__i < G__25519__a.length) {G__25519__a[G__25519__i] = arguments[G__25519__i + 0]; ++G__25519__i;}
  args = new cljs.core.IndexedSeq(G__25519__a,0);
} 
return G__25518__delegate.call(this,args);};
G__25518.cljs$lang$maxFixedArity = 0;
G__25518.cljs$lang$applyTo = (function (arglist__25520){
var args = cljs.core.seq(arglist__25520);
return G__25518__delegate(args);
});
G__25518.cljs$core$IFn$_invoke$arity$variadic = G__25518__delegate;
return G__25518;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25522 = cljs.core._EQ_;
var expr__25523 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25522.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25523))){
var path_parts = ((function (pred__25522,expr__25523){
return (function (p1__25521_SHARP_){
return clojure.string.split.call(null,p1__25521_SHARP_,/[\/\\]/);
});})(pred__25522,expr__25523))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25522,expr__25523){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25525){if((e25525 instanceof Error)){
var e = e25525;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25525;

}
}})());
});
;})(path_parts,sep,root,pred__25522,expr__25523))
} else {
if(cljs.core.truth_(pred__25522.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25523))){
return ((function (pred__25522,expr__25523){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__25522,expr__25523){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25522,expr__25523))
);

return deferred.addErrback(((function (deferred,pred__25522,expr__25523){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25522,expr__25523))
);
});
;})(pred__25522,expr__25523))
} else {
return ((function (pred__25522,expr__25523){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25522,expr__25523))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25526,callback){
var map__25529 = p__25526;
var map__25529__$1 = ((((!((map__25529 == null)))?((((map__25529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25529):map__25529);
var file_msg = map__25529__$1;
var request_url = cljs.core.get.call(null,map__25529__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25529,map__25529__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25529,map__25529__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto__){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto__){
return (function (state_25553){
var state_val_25554 = (state_25553[(1)]);
if((state_val_25554 === (7))){
var inst_25549 = (state_25553[(2)]);
var state_25553__$1 = state_25553;
var statearr_25555_25575 = state_25553__$1;
(statearr_25555_25575[(2)] = inst_25549);

(statearr_25555_25575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (1))){
var state_25553__$1 = state_25553;
var statearr_25556_25576 = state_25553__$1;
(statearr_25556_25576[(2)] = null);

(statearr_25556_25576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (4))){
var inst_25533 = (state_25553[(7)]);
var inst_25533__$1 = (state_25553[(2)]);
var state_25553__$1 = (function (){var statearr_25557 = state_25553;
(statearr_25557[(7)] = inst_25533__$1);

return statearr_25557;
})();
if(cljs.core.truth_(inst_25533__$1)){
var statearr_25558_25577 = state_25553__$1;
(statearr_25558_25577[(1)] = (5));

} else {
var statearr_25559_25578 = state_25553__$1;
(statearr_25559_25578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (6))){
var state_25553__$1 = state_25553;
var statearr_25560_25579 = state_25553__$1;
(statearr_25560_25579[(2)] = null);

(statearr_25560_25579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (3))){
var inst_25551 = (state_25553[(2)]);
var state_25553__$1 = state_25553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25553__$1,inst_25551);
} else {
if((state_val_25554 === (2))){
var state_25553__$1 = state_25553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25553__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25554 === (11))){
var inst_25545 = (state_25553[(2)]);
var state_25553__$1 = (function (){var statearr_25561 = state_25553;
(statearr_25561[(8)] = inst_25545);

return statearr_25561;
})();
var statearr_25562_25580 = state_25553__$1;
(statearr_25562_25580[(2)] = null);

(statearr_25562_25580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (9))){
var inst_25537 = (state_25553[(9)]);
var inst_25539 = (state_25553[(10)]);
var inst_25541 = inst_25539.call(null,inst_25537);
var state_25553__$1 = state_25553;
var statearr_25563_25581 = state_25553__$1;
(statearr_25563_25581[(2)] = inst_25541);

(statearr_25563_25581[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (5))){
var inst_25533 = (state_25553[(7)]);
var inst_25535 = figwheel.client.file_reloading.blocking_load.call(null,inst_25533);
var state_25553__$1 = state_25553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25553__$1,(8),inst_25535);
} else {
if((state_val_25554 === (10))){
var inst_25537 = (state_25553[(9)]);
var inst_25543 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25537);
var state_25553__$1 = state_25553;
var statearr_25564_25582 = state_25553__$1;
(statearr_25564_25582[(2)] = inst_25543);

(statearr_25564_25582[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (8))){
var inst_25533 = (state_25553[(7)]);
var inst_25539 = (state_25553[(10)]);
var inst_25537 = (state_25553[(2)]);
var inst_25538 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25539__$1 = cljs.core.get.call(null,inst_25538,inst_25533);
var state_25553__$1 = (function (){var statearr_25565 = state_25553;
(statearr_25565[(9)] = inst_25537);

(statearr_25565[(10)] = inst_25539__$1);

return statearr_25565;
})();
if(cljs.core.truth_(inst_25539__$1)){
var statearr_25566_25583 = state_25553__$1;
(statearr_25566_25583[(1)] = (9));

} else {
var statearr_25567_25584 = state_25553__$1;
(statearr_25567_25584[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22331__auto__))
;
return ((function (switch__22219__auto__,c__22331__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22220__auto__ = null;
var figwheel$client$file_reloading$state_machine__22220__auto____0 = (function (){
var statearr_25571 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25571[(0)] = figwheel$client$file_reloading$state_machine__22220__auto__);

(statearr_25571[(1)] = (1));

return statearr_25571;
});
var figwheel$client$file_reloading$state_machine__22220__auto____1 = (function (state_25553){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_25553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e25572){if((e25572 instanceof Object)){
var ex__22223__auto__ = e25572;
var statearr_25573_25585 = state_25553;
(statearr_25573_25585[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25586 = state_25553;
state_25553 = G__25586;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22220__auto__ = function(state_25553){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22220__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22220__auto____1.call(this,state_25553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22220__auto____0;
figwheel$client$file_reloading$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22220__auto____1;
return figwheel$client$file_reloading$state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto__))
})();
var state__22333__auto__ = (function (){var statearr_25574 = f__22332__auto__.call(null);
(statearr_25574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto__);

return statearr_25574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto__))
);

return c__22331__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25587,callback){
var map__25590 = p__25587;
var map__25590__$1 = ((((!((map__25590 == null)))?((((map__25590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25590):map__25590);
var file_msg = map__25590__$1;
var namespace = cljs.core.get.call(null,map__25590__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25590,map__25590__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25590,map__25590__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25592){
var map__25595 = p__25592;
var map__25595__$1 = ((((!((map__25595 == null)))?((((map__25595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25595):map__25595);
var file_msg = map__25595__$1;
var namespace = cljs.core.get.call(null,map__25595__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__20147__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__20147__auto__){
var or__20159__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20159__auto__)){
return or__20159__auto__;
} else {
var or__20159__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20159__auto____$1)){
return or__20159__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__20147__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25597,callback){
var map__25600 = p__25597;
var map__25600__$1 = ((((!((map__25600 == null)))?((((map__25600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25600):map__25600);
var file_msg = map__25600__$1;
var request_url = cljs.core.get.call(null,map__25600__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25600__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22331__auto___25704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto___25704,out){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto___25704,out){
return (function (state_25686){
var state_val_25687 = (state_25686[(1)]);
if((state_val_25687 === (1))){
var inst_25660 = cljs.core.seq.call(null,files);
var inst_25661 = cljs.core.first.call(null,inst_25660);
var inst_25662 = cljs.core.next.call(null,inst_25660);
var inst_25663 = files;
var state_25686__$1 = (function (){var statearr_25688 = state_25686;
(statearr_25688[(7)] = inst_25662);

(statearr_25688[(8)] = inst_25663);

(statearr_25688[(9)] = inst_25661);

return statearr_25688;
})();
var statearr_25689_25705 = state_25686__$1;
(statearr_25689_25705[(2)] = null);

(statearr_25689_25705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (2))){
var inst_25663 = (state_25686[(8)]);
var inst_25669 = (state_25686[(10)]);
var inst_25668 = cljs.core.seq.call(null,inst_25663);
var inst_25669__$1 = cljs.core.first.call(null,inst_25668);
var inst_25670 = cljs.core.next.call(null,inst_25668);
var inst_25671 = (inst_25669__$1 == null);
var inst_25672 = cljs.core.not.call(null,inst_25671);
var state_25686__$1 = (function (){var statearr_25690 = state_25686;
(statearr_25690[(10)] = inst_25669__$1);

(statearr_25690[(11)] = inst_25670);

return statearr_25690;
})();
if(inst_25672){
var statearr_25691_25706 = state_25686__$1;
(statearr_25691_25706[(1)] = (4));

} else {
var statearr_25692_25707 = state_25686__$1;
(statearr_25692_25707[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (3))){
var inst_25684 = (state_25686[(2)]);
var state_25686__$1 = state_25686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25686__$1,inst_25684);
} else {
if((state_val_25687 === (4))){
var inst_25669 = (state_25686[(10)]);
var inst_25674 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25669);
var state_25686__$1 = state_25686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25686__$1,(7),inst_25674);
} else {
if((state_val_25687 === (5))){
var inst_25680 = cljs.core.async.close_BANG_.call(null,out);
var state_25686__$1 = state_25686;
var statearr_25693_25708 = state_25686__$1;
(statearr_25693_25708[(2)] = inst_25680);

(statearr_25693_25708[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (6))){
var inst_25682 = (state_25686[(2)]);
var state_25686__$1 = state_25686;
var statearr_25694_25709 = state_25686__$1;
(statearr_25694_25709[(2)] = inst_25682);

(statearr_25694_25709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (7))){
var inst_25670 = (state_25686[(11)]);
var inst_25676 = (state_25686[(2)]);
var inst_25677 = cljs.core.async.put_BANG_.call(null,out,inst_25676);
var inst_25663 = inst_25670;
var state_25686__$1 = (function (){var statearr_25695 = state_25686;
(statearr_25695[(12)] = inst_25677);

(statearr_25695[(8)] = inst_25663);

return statearr_25695;
})();
var statearr_25696_25710 = state_25686__$1;
(statearr_25696_25710[(2)] = null);

(statearr_25696_25710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__22331__auto___25704,out))
;
return ((function (switch__22219__auto__,c__22331__auto___25704,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22220__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22220__auto____0 = (function (){
var statearr_25700 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25700[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22220__auto__);

(statearr_25700[(1)] = (1));

return statearr_25700;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22220__auto____1 = (function (state_25686){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_25686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e25701){if((e25701 instanceof Object)){
var ex__22223__auto__ = e25701;
var statearr_25702_25711 = state_25686;
(statearr_25702_25711[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25712 = state_25686;
state_25686 = G__25712;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22220__auto__ = function(state_25686){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22220__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22220__auto____1.call(this,state_25686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22220__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22220__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto___25704,out))
})();
var state__22333__auto__ = (function (){var statearr_25703 = f__22332__auto__.call(null);
(statearr_25703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto___25704);

return statearr_25703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto___25704,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25713,opts){
var map__25717 = p__25713;
var map__25717__$1 = ((((!((map__25717 == null)))?((((map__25717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25717):map__25717);
var eval_body__$1 = cljs.core.get.call(null,map__25717__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25717__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__20147__auto__ = eval_body__$1;
if(cljs.core.truth_(and__20147__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__20147__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25719){var e = e25719;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25720_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25720_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25729){
var vec__25730 = p__25729;
var k = cljs.core.nth.call(null,vec__25730,(0),null);
var v = cljs.core.nth.call(null,vec__25730,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25733){
var vec__25734 = p__25733;
var k = cljs.core.nth.call(null,vec__25734,(0),null);
var v = cljs.core.nth.call(null,vec__25734,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25740,p__25741){
var map__25988 = p__25740;
var map__25988__$1 = ((((!((map__25988 == null)))?((((map__25988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25988):map__25988);
var opts = map__25988__$1;
var before_jsload = cljs.core.get.call(null,map__25988__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25988__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25988__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25989 = p__25741;
var map__25989__$1 = ((((!((map__25989 == null)))?((((map__25989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25989):map__25989);
var msg = map__25989__$1;
var files = cljs.core.get.call(null,map__25989__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25989__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25989__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto__,map__25988,map__25988__$1,opts,before_jsload,on_jsload,reload_dependents,map__25989,map__25989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto__,map__25988,map__25988__$1,opts,before_jsload,on_jsload,reload_dependents,map__25989,map__25989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26142){
var state_val_26143 = (state_26142[(1)]);
if((state_val_26143 === (7))){
var inst_26005 = (state_26142[(7)]);
var inst_26006 = (state_26142[(8)]);
var inst_26003 = (state_26142[(9)]);
var inst_26004 = (state_26142[(10)]);
var inst_26011 = cljs.core._nth.call(null,inst_26004,inst_26006);
var inst_26012 = figwheel.client.file_reloading.eval_body.call(null,inst_26011,opts);
var inst_26013 = (inst_26006 + (1));
var tmp26144 = inst_26005;
var tmp26145 = inst_26003;
var tmp26146 = inst_26004;
var inst_26003__$1 = tmp26145;
var inst_26004__$1 = tmp26146;
var inst_26005__$1 = tmp26144;
var inst_26006__$1 = inst_26013;
var state_26142__$1 = (function (){var statearr_26147 = state_26142;
(statearr_26147[(7)] = inst_26005__$1);

(statearr_26147[(8)] = inst_26006__$1);

(statearr_26147[(11)] = inst_26012);

(statearr_26147[(9)] = inst_26003__$1);

(statearr_26147[(10)] = inst_26004__$1);

return statearr_26147;
})();
var statearr_26148_26234 = state_26142__$1;
(statearr_26148_26234[(2)] = null);

(statearr_26148_26234[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (20))){
var inst_26046 = (state_26142[(12)]);
var inst_26054 = figwheel.client.file_reloading.sort_files.call(null,inst_26046);
var state_26142__$1 = state_26142;
var statearr_26149_26235 = state_26142__$1;
(statearr_26149_26235[(2)] = inst_26054);

(statearr_26149_26235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (27))){
var state_26142__$1 = state_26142;
var statearr_26150_26236 = state_26142__$1;
(statearr_26150_26236[(2)] = null);

(statearr_26150_26236[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (1))){
var inst_25995 = (state_26142[(13)]);
var inst_25992 = before_jsload.call(null,files);
var inst_25993 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25994 = (function (){return ((function (inst_25995,inst_25992,inst_25993,state_val_26143,c__22331__auto__,map__25988,map__25988__$1,opts,before_jsload,on_jsload,reload_dependents,map__25989,map__25989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25737_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25737_SHARP_);
});
;})(inst_25995,inst_25992,inst_25993,state_val_26143,c__22331__auto__,map__25988,map__25988__$1,opts,before_jsload,on_jsload,reload_dependents,map__25989,map__25989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25995__$1 = cljs.core.filter.call(null,inst_25994,files);
var inst_25996 = cljs.core.not_empty.call(null,inst_25995__$1);
var state_26142__$1 = (function (){var statearr_26151 = state_26142;
(statearr_26151[(14)] = inst_25992);

(statearr_26151[(13)] = inst_25995__$1);

(statearr_26151[(15)] = inst_25993);

return statearr_26151;
})();
if(cljs.core.truth_(inst_25996)){
var statearr_26152_26237 = state_26142__$1;
(statearr_26152_26237[(1)] = (2));

} else {
var statearr_26153_26238 = state_26142__$1;
(statearr_26153_26238[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (24))){
var state_26142__$1 = state_26142;
var statearr_26154_26239 = state_26142__$1;
(statearr_26154_26239[(2)] = null);

(statearr_26154_26239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (39))){
var inst_26096 = (state_26142[(16)]);
var state_26142__$1 = state_26142;
var statearr_26155_26240 = state_26142__$1;
(statearr_26155_26240[(2)] = inst_26096);

(statearr_26155_26240[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (46))){
var inst_26137 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
var statearr_26156_26241 = state_26142__$1;
(statearr_26156_26241[(2)] = inst_26137);

(statearr_26156_26241[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (4))){
var inst_26040 = (state_26142[(2)]);
var inst_26041 = cljs.core.List.EMPTY;
var inst_26042 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26041);
var inst_26043 = (function (){return ((function (inst_26040,inst_26041,inst_26042,state_val_26143,c__22331__auto__,map__25988,map__25988__$1,opts,before_jsload,on_jsload,reload_dependents,map__25989,map__25989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25738_SHARP_){
var and__20147__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25738_SHARP_);
if(cljs.core.truth_(and__20147__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25738_SHARP_));
} else {
return and__20147__auto__;
}
});
;})(inst_26040,inst_26041,inst_26042,state_val_26143,c__22331__auto__,map__25988,map__25988__$1,opts,before_jsload,on_jsload,reload_dependents,map__25989,map__25989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26044 = cljs.core.filter.call(null,inst_26043,files);
var inst_26045 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26046 = cljs.core.concat.call(null,inst_26044,inst_26045);
var state_26142__$1 = (function (){var statearr_26157 = state_26142;
(statearr_26157[(17)] = inst_26040);

(statearr_26157[(18)] = inst_26042);

(statearr_26157[(12)] = inst_26046);

return statearr_26157;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26158_26242 = state_26142__$1;
(statearr_26158_26242[(1)] = (16));

} else {
var statearr_26159_26243 = state_26142__$1;
(statearr_26159_26243[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (15))){
var inst_26030 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
var statearr_26160_26244 = state_26142__$1;
(statearr_26160_26244[(2)] = inst_26030);

(statearr_26160_26244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (21))){
var inst_26056 = (state_26142[(19)]);
var inst_26056__$1 = (state_26142[(2)]);
var inst_26057 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26056__$1);
var state_26142__$1 = (function (){var statearr_26161 = state_26142;
(statearr_26161[(19)] = inst_26056__$1);

return statearr_26161;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26142__$1,(22),inst_26057);
} else {
if((state_val_26143 === (31))){
var inst_26140 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26142__$1,inst_26140);
} else {
if((state_val_26143 === (32))){
var inst_26096 = (state_26142[(16)]);
var inst_26101 = inst_26096.cljs$lang$protocol_mask$partition0$;
var inst_26102 = (inst_26101 & (64));
var inst_26103 = inst_26096.cljs$core$ISeq$;
var inst_26104 = (inst_26102) || (inst_26103);
var state_26142__$1 = state_26142;
if(cljs.core.truth_(inst_26104)){
var statearr_26162_26245 = state_26142__$1;
(statearr_26162_26245[(1)] = (35));

} else {
var statearr_26163_26246 = state_26142__$1;
(statearr_26163_26246[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (40))){
var inst_26117 = (state_26142[(20)]);
var inst_26116 = (state_26142[(2)]);
var inst_26117__$1 = cljs.core.get.call(null,inst_26116,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26118 = cljs.core.get.call(null,inst_26116,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26119 = cljs.core.not_empty.call(null,inst_26117__$1);
var state_26142__$1 = (function (){var statearr_26164 = state_26142;
(statearr_26164[(21)] = inst_26118);

(statearr_26164[(20)] = inst_26117__$1);

return statearr_26164;
})();
if(cljs.core.truth_(inst_26119)){
var statearr_26165_26247 = state_26142__$1;
(statearr_26165_26247[(1)] = (41));

} else {
var statearr_26166_26248 = state_26142__$1;
(statearr_26166_26248[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (33))){
var state_26142__$1 = state_26142;
var statearr_26167_26249 = state_26142__$1;
(statearr_26167_26249[(2)] = false);

(statearr_26167_26249[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (13))){
var inst_26016 = (state_26142[(22)]);
var inst_26020 = cljs.core.chunk_first.call(null,inst_26016);
var inst_26021 = cljs.core.chunk_rest.call(null,inst_26016);
var inst_26022 = cljs.core.count.call(null,inst_26020);
var inst_26003 = inst_26021;
var inst_26004 = inst_26020;
var inst_26005 = inst_26022;
var inst_26006 = (0);
var state_26142__$1 = (function (){var statearr_26168 = state_26142;
(statearr_26168[(7)] = inst_26005);

(statearr_26168[(8)] = inst_26006);

(statearr_26168[(9)] = inst_26003);

(statearr_26168[(10)] = inst_26004);

return statearr_26168;
})();
var statearr_26169_26250 = state_26142__$1;
(statearr_26169_26250[(2)] = null);

(statearr_26169_26250[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (22))){
var inst_26060 = (state_26142[(23)]);
var inst_26056 = (state_26142[(19)]);
var inst_26059 = (state_26142[(24)]);
var inst_26064 = (state_26142[(25)]);
var inst_26059__$1 = (state_26142[(2)]);
var inst_26060__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26059__$1);
var inst_26061 = (function (){var all_files = inst_26056;
var res_SINGLEQUOTE_ = inst_26059__$1;
var res = inst_26060__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26060,inst_26056,inst_26059,inst_26064,inst_26059__$1,inst_26060__$1,state_val_26143,c__22331__auto__,map__25988,map__25988__$1,opts,before_jsload,on_jsload,reload_dependents,map__25989,map__25989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25739_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25739_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26060,inst_26056,inst_26059,inst_26064,inst_26059__$1,inst_26060__$1,state_val_26143,c__22331__auto__,map__25988,map__25988__$1,opts,before_jsload,on_jsload,reload_dependents,map__25989,map__25989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26062 = cljs.core.filter.call(null,inst_26061,inst_26059__$1);
var inst_26063 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26064__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26063);
var inst_26065 = cljs.core.not_empty.call(null,inst_26064__$1);
var state_26142__$1 = (function (){var statearr_26170 = state_26142;
(statearr_26170[(23)] = inst_26060__$1);

(statearr_26170[(26)] = inst_26062);

(statearr_26170[(24)] = inst_26059__$1);

(statearr_26170[(25)] = inst_26064__$1);

return statearr_26170;
})();
if(cljs.core.truth_(inst_26065)){
var statearr_26171_26251 = state_26142__$1;
(statearr_26171_26251[(1)] = (23));

} else {
var statearr_26172_26252 = state_26142__$1;
(statearr_26172_26252[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (36))){
var state_26142__$1 = state_26142;
var statearr_26173_26253 = state_26142__$1;
(statearr_26173_26253[(2)] = false);

(statearr_26173_26253[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (41))){
var inst_26117 = (state_26142[(20)]);
var inst_26121 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26122 = cljs.core.map.call(null,inst_26121,inst_26117);
var inst_26123 = cljs.core.pr_str.call(null,inst_26122);
var inst_26124 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26123)].join('');
var inst_26125 = figwheel.client.utils.log.call(null,inst_26124);
var state_26142__$1 = state_26142;
var statearr_26174_26254 = state_26142__$1;
(statearr_26174_26254[(2)] = inst_26125);

(statearr_26174_26254[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (43))){
var inst_26118 = (state_26142[(21)]);
var inst_26128 = (state_26142[(2)]);
var inst_26129 = cljs.core.not_empty.call(null,inst_26118);
var state_26142__$1 = (function (){var statearr_26175 = state_26142;
(statearr_26175[(27)] = inst_26128);

return statearr_26175;
})();
if(cljs.core.truth_(inst_26129)){
var statearr_26176_26255 = state_26142__$1;
(statearr_26176_26255[(1)] = (44));

} else {
var statearr_26177_26256 = state_26142__$1;
(statearr_26177_26256[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (29))){
var inst_26060 = (state_26142[(23)]);
var inst_26096 = (state_26142[(16)]);
var inst_26056 = (state_26142[(19)]);
var inst_26062 = (state_26142[(26)]);
var inst_26059 = (state_26142[(24)]);
var inst_26064 = (state_26142[(25)]);
var inst_26092 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26095 = (function (){var all_files = inst_26056;
var res_SINGLEQUOTE_ = inst_26059;
var res = inst_26060;
var files_not_loaded = inst_26062;
var dependencies_that_loaded = inst_26064;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26060,inst_26096,inst_26056,inst_26062,inst_26059,inst_26064,inst_26092,state_val_26143,c__22331__auto__,map__25988,map__25988__$1,opts,before_jsload,on_jsload,reload_dependents,map__25989,map__25989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26094){
var map__26178 = p__26094;
var map__26178__$1 = ((((!((map__26178 == null)))?((((map__26178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26178):map__26178);
var namespace = cljs.core.get.call(null,map__26178__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26060,inst_26096,inst_26056,inst_26062,inst_26059,inst_26064,inst_26092,state_val_26143,c__22331__auto__,map__25988,map__25988__$1,opts,before_jsload,on_jsload,reload_dependents,map__25989,map__25989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26096__$1 = cljs.core.group_by.call(null,inst_26095,inst_26062);
var inst_26098 = (inst_26096__$1 == null);
var inst_26099 = cljs.core.not.call(null,inst_26098);
var state_26142__$1 = (function (){var statearr_26180 = state_26142;
(statearr_26180[(16)] = inst_26096__$1);

(statearr_26180[(28)] = inst_26092);

return statearr_26180;
})();
if(inst_26099){
var statearr_26181_26257 = state_26142__$1;
(statearr_26181_26257[(1)] = (32));

} else {
var statearr_26182_26258 = state_26142__$1;
(statearr_26182_26258[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (44))){
var inst_26118 = (state_26142[(21)]);
var inst_26131 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26118);
var inst_26132 = cljs.core.pr_str.call(null,inst_26131);
var inst_26133 = [cljs.core.str("not required: "),cljs.core.str(inst_26132)].join('');
var inst_26134 = figwheel.client.utils.log.call(null,inst_26133);
var state_26142__$1 = state_26142;
var statearr_26183_26259 = state_26142__$1;
(statearr_26183_26259[(2)] = inst_26134);

(statearr_26183_26259[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (6))){
var inst_26037 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
var statearr_26184_26260 = state_26142__$1;
(statearr_26184_26260[(2)] = inst_26037);

(statearr_26184_26260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (28))){
var inst_26062 = (state_26142[(26)]);
var inst_26089 = (state_26142[(2)]);
var inst_26090 = cljs.core.not_empty.call(null,inst_26062);
var state_26142__$1 = (function (){var statearr_26185 = state_26142;
(statearr_26185[(29)] = inst_26089);

return statearr_26185;
})();
if(cljs.core.truth_(inst_26090)){
var statearr_26186_26261 = state_26142__$1;
(statearr_26186_26261[(1)] = (29));

} else {
var statearr_26187_26262 = state_26142__$1;
(statearr_26187_26262[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (25))){
var inst_26060 = (state_26142[(23)]);
var inst_26076 = (state_26142[(2)]);
var inst_26077 = cljs.core.not_empty.call(null,inst_26060);
var state_26142__$1 = (function (){var statearr_26188 = state_26142;
(statearr_26188[(30)] = inst_26076);

return statearr_26188;
})();
if(cljs.core.truth_(inst_26077)){
var statearr_26189_26263 = state_26142__$1;
(statearr_26189_26263[(1)] = (26));

} else {
var statearr_26190_26264 = state_26142__$1;
(statearr_26190_26264[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (34))){
var inst_26111 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
if(cljs.core.truth_(inst_26111)){
var statearr_26191_26265 = state_26142__$1;
(statearr_26191_26265[(1)] = (38));

} else {
var statearr_26192_26266 = state_26142__$1;
(statearr_26192_26266[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (17))){
var state_26142__$1 = state_26142;
var statearr_26193_26267 = state_26142__$1;
(statearr_26193_26267[(2)] = recompile_dependents);

(statearr_26193_26267[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (3))){
var state_26142__$1 = state_26142;
var statearr_26194_26268 = state_26142__$1;
(statearr_26194_26268[(2)] = null);

(statearr_26194_26268[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (12))){
var inst_26033 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
var statearr_26195_26269 = state_26142__$1;
(statearr_26195_26269[(2)] = inst_26033);

(statearr_26195_26269[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (2))){
var inst_25995 = (state_26142[(13)]);
var inst_26002 = cljs.core.seq.call(null,inst_25995);
var inst_26003 = inst_26002;
var inst_26004 = null;
var inst_26005 = (0);
var inst_26006 = (0);
var state_26142__$1 = (function (){var statearr_26196 = state_26142;
(statearr_26196[(7)] = inst_26005);

(statearr_26196[(8)] = inst_26006);

(statearr_26196[(9)] = inst_26003);

(statearr_26196[(10)] = inst_26004);

return statearr_26196;
})();
var statearr_26197_26270 = state_26142__$1;
(statearr_26197_26270[(2)] = null);

(statearr_26197_26270[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (23))){
var inst_26060 = (state_26142[(23)]);
var inst_26056 = (state_26142[(19)]);
var inst_26062 = (state_26142[(26)]);
var inst_26059 = (state_26142[(24)]);
var inst_26064 = (state_26142[(25)]);
var inst_26067 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26069 = (function (){var all_files = inst_26056;
var res_SINGLEQUOTE_ = inst_26059;
var res = inst_26060;
var files_not_loaded = inst_26062;
var dependencies_that_loaded = inst_26064;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26060,inst_26056,inst_26062,inst_26059,inst_26064,inst_26067,state_val_26143,c__22331__auto__,map__25988,map__25988__$1,opts,before_jsload,on_jsload,reload_dependents,map__25989,map__25989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26068){
var map__26198 = p__26068;
var map__26198__$1 = ((((!((map__26198 == null)))?((((map__26198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26198):map__26198);
var request_url = cljs.core.get.call(null,map__26198__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26060,inst_26056,inst_26062,inst_26059,inst_26064,inst_26067,state_val_26143,c__22331__auto__,map__25988,map__25988__$1,opts,before_jsload,on_jsload,reload_dependents,map__25989,map__25989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26070 = cljs.core.reverse.call(null,inst_26064);
var inst_26071 = cljs.core.map.call(null,inst_26069,inst_26070);
var inst_26072 = cljs.core.pr_str.call(null,inst_26071);
var inst_26073 = figwheel.client.utils.log.call(null,inst_26072);
var state_26142__$1 = (function (){var statearr_26200 = state_26142;
(statearr_26200[(31)] = inst_26067);

return statearr_26200;
})();
var statearr_26201_26271 = state_26142__$1;
(statearr_26201_26271[(2)] = inst_26073);

(statearr_26201_26271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (35))){
var state_26142__$1 = state_26142;
var statearr_26202_26272 = state_26142__$1;
(statearr_26202_26272[(2)] = true);

(statearr_26202_26272[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (19))){
var inst_26046 = (state_26142[(12)]);
var inst_26052 = figwheel.client.file_reloading.expand_files.call(null,inst_26046);
var state_26142__$1 = state_26142;
var statearr_26203_26273 = state_26142__$1;
(statearr_26203_26273[(2)] = inst_26052);

(statearr_26203_26273[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (11))){
var state_26142__$1 = state_26142;
var statearr_26204_26274 = state_26142__$1;
(statearr_26204_26274[(2)] = null);

(statearr_26204_26274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (9))){
var inst_26035 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
var statearr_26205_26275 = state_26142__$1;
(statearr_26205_26275[(2)] = inst_26035);

(statearr_26205_26275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (5))){
var inst_26005 = (state_26142[(7)]);
var inst_26006 = (state_26142[(8)]);
var inst_26008 = (inst_26006 < inst_26005);
var inst_26009 = inst_26008;
var state_26142__$1 = state_26142;
if(cljs.core.truth_(inst_26009)){
var statearr_26206_26276 = state_26142__$1;
(statearr_26206_26276[(1)] = (7));

} else {
var statearr_26207_26277 = state_26142__$1;
(statearr_26207_26277[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (14))){
var inst_26016 = (state_26142[(22)]);
var inst_26025 = cljs.core.first.call(null,inst_26016);
var inst_26026 = figwheel.client.file_reloading.eval_body.call(null,inst_26025,opts);
var inst_26027 = cljs.core.next.call(null,inst_26016);
var inst_26003 = inst_26027;
var inst_26004 = null;
var inst_26005 = (0);
var inst_26006 = (0);
var state_26142__$1 = (function (){var statearr_26208 = state_26142;
(statearr_26208[(7)] = inst_26005);

(statearr_26208[(8)] = inst_26006);

(statearr_26208[(32)] = inst_26026);

(statearr_26208[(9)] = inst_26003);

(statearr_26208[(10)] = inst_26004);

return statearr_26208;
})();
var statearr_26209_26278 = state_26142__$1;
(statearr_26209_26278[(2)] = null);

(statearr_26209_26278[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (45))){
var state_26142__$1 = state_26142;
var statearr_26210_26279 = state_26142__$1;
(statearr_26210_26279[(2)] = null);

(statearr_26210_26279[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (26))){
var inst_26060 = (state_26142[(23)]);
var inst_26056 = (state_26142[(19)]);
var inst_26062 = (state_26142[(26)]);
var inst_26059 = (state_26142[(24)]);
var inst_26064 = (state_26142[(25)]);
var inst_26079 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26081 = (function (){var all_files = inst_26056;
var res_SINGLEQUOTE_ = inst_26059;
var res = inst_26060;
var files_not_loaded = inst_26062;
var dependencies_that_loaded = inst_26064;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26060,inst_26056,inst_26062,inst_26059,inst_26064,inst_26079,state_val_26143,c__22331__auto__,map__25988,map__25988__$1,opts,before_jsload,on_jsload,reload_dependents,map__25989,map__25989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26080){
var map__26211 = p__26080;
var map__26211__$1 = ((((!((map__26211 == null)))?((((map__26211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26211):map__26211);
var namespace = cljs.core.get.call(null,map__26211__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26211__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26060,inst_26056,inst_26062,inst_26059,inst_26064,inst_26079,state_val_26143,c__22331__auto__,map__25988,map__25988__$1,opts,before_jsload,on_jsload,reload_dependents,map__25989,map__25989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26082 = cljs.core.map.call(null,inst_26081,inst_26060);
var inst_26083 = cljs.core.pr_str.call(null,inst_26082);
var inst_26084 = figwheel.client.utils.log.call(null,inst_26083);
var inst_26085 = (function (){var all_files = inst_26056;
var res_SINGLEQUOTE_ = inst_26059;
var res = inst_26060;
var files_not_loaded = inst_26062;
var dependencies_that_loaded = inst_26064;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26060,inst_26056,inst_26062,inst_26059,inst_26064,inst_26079,inst_26081,inst_26082,inst_26083,inst_26084,state_val_26143,c__22331__auto__,map__25988,map__25988__$1,opts,before_jsload,on_jsload,reload_dependents,map__25989,map__25989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26060,inst_26056,inst_26062,inst_26059,inst_26064,inst_26079,inst_26081,inst_26082,inst_26083,inst_26084,state_val_26143,c__22331__auto__,map__25988,map__25988__$1,opts,before_jsload,on_jsload,reload_dependents,map__25989,map__25989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26086 = setTimeout(inst_26085,(10));
var state_26142__$1 = (function (){var statearr_26213 = state_26142;
(statearr_26213[(33)] = inst_26084);

(statearr_26213[(34)] = inst_26079);

return statearr_26213;
})();
var statearr_26214_26280 = state_26142__$1;
(statearr_26214_26280[(2)] = inst_26086);

(statearr_26214_26280[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (16))){
var state_26142__$1 = state_26142;
var statearr_26215_26281 = state_26142__$1;
(statearr_26215_26281[(2)] = reload_dependents);

(statearr_26215_26281[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (38))){
var inst_26096 = (state_26142[(16)]);
var inst_26113 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26096);
var state_26142__$1 = state_26142;
var statearr_26216_26282 = state_26142__$1;
(statearr_26216_26282[(2)] = inst_26113);

(statearr_26216_26282[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (30))){
var state_26142__$1 = state_26142;
var statearr_26217_26283 = state_26142__$1;
(statearr_26217_26283[(2)] = null);

(statearr_26217_26283[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (10))){
var inst_26016 = (state_26142[(22)]);
var inst_26018 = cljs.core.chunked_seq_QMARK_.call(null,inst_26016);
var state_26142__$1 = state_26142;
if(inst_26018){
var statearr_26218_26284 = state_26142__$1;
(statearr_26218_26284[(1)] = (13));

} else {
var statearr_26219_26285 = state_26142__$1;
(statearr_26219_26285[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (18))){
var inst_26050 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
if(cljs.core.truth_(inst_26050)){
var statearr_26220_26286 = state_26142__$1;
(statearr_26220_26286[(1)] = (19));

} else {
var statearr_26221_26287 = state_26142__$1;
(statearr_26221_26287[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (42))){
var state_26142__$1 = state_26142;
var statearr_26222_26288 = state_26142__$1;
(statearr_26222_26288[(2)] = null);

(statearr_26222_26288[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (37))){
var inst_26108 = (state_26142[(2)]);
var state_26142__$1 = state_26142;
var statearr_26223_26289 = state_26142__$1;
(statearr_26223_26289[(2)] = inst_26108);

(statearr_26223_26289[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26143 === (8))){
var inst_26003 = (state_26142[(9)]);
var inst_26016 = (state_26142[(22)]);
var inst_26016__$1 = cljs.core.seq.call(null,inst_26003);
var state_26142__$1 = (function (){var statearr_26224 = state_26142;
(statearr_26224[(22)] = inst_26016__$1);

return statearr_26224;
})();
if(inst_26016__$1){
var statearr_26225_26290 = state_26142__$1;
(statearr_26225_26290[(1)] = (10));

} else {
var statearr_26226_26291 = state_26142__$1;
(statearr_26226_26291[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22331__auto__,map__25988,map__25988__$1,opts,before_jsload,on_jsload,reload_dependents,map__25989,map__25989__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22219__auto__,c__22331__auto__,map__25988,map__25988__$1,opts,before_jsload,on_jsload,reload_dependents,map__25989,map__25989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22220__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22220__auto____0 = (function (){
var statearr_26230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26230[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22220__auto__);

(statearr_26230[(1)] = (1));

return statearr_26230;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22220__auto____1 = (function (state_26142){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_26142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e26231){if((e26231 instanceof Object)){
var ex__22223__auto__ = e26231;
var statearr_26232_26292 = state_26142;
(statearr_26232_26292[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26293 = state_26142;
state_26142 = G__26293;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22220__auto__ = function(state_26142){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22220__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22220__auto____1.call(this,state_26142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22220__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22220__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto__,map__25988,map__25988__$1,opts,before_jsload,on_jsload,reload_dependents,map__25989,map__25989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22333__auto__ = (function (){var statearr_26233 = f__22332__auto__.call(null);
(statearr_26233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto__);

return statearr_26233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto__,map__25988,map__25988__$1,opts,before_jsload,on_jsload,reload_dependents,map__25989,map__25989__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22331__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26296,link){
var map__26299 = p__26296;
var map__26299__$1 = ((((!((map__26299 == null)))?((((map__26299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26299):map__26299);
var file = cljs.core.get.call(null,map__26299__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__26299,map__26299__$1,file){
return (function (p1__26294_SHARP_,p2__26295_SHARP_){
if(cljs.core._EQ_.call(null,p1__26294_SHARP_,p2__26295_SHARP_)){
return p1__26294_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__26299,map__26299__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26305){
var map__26306 = p__26305;
var map__26306__$1 = ((((!((map__26306 == null)))?((((map__26306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26306):map__26306);
var match_length = cljs.core.get.call(null,map__26306__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26306__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26301_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26301_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args26308 = [];
var len__21234__auto___26311 = arguments.length;
var i__21235__auto___26312 = (0);
while(true){
if((i__21235__auto___26312 < len__21234__auto___26311)){
args26308.push((arguments[i__21235__auto___26312]));

var G__26313 = (i__21235__auto___26312 + (1));
i__21235__auto___26312 = G__26313;
continue;
} else {
}
break;
}

var G__26310 = args26308.length;
switch (G__26310) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26308.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26315_SHARP_,p2__26316_SHARP_){
return cljs.core.assoc.call(null,p1__26315_SHARP_,cljs.core.get.call(null,p2__26316_SHARP_,key),p2__26316_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26317){
var map__26320 = p__26317;
var map__26320__$1 = ((((!((map__26320 == null)))?((((map__26320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26320):map__26320);
var f_data = map__26320__$1;
var file = cljs.core.get.call(null,map__26320__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26322,files_msg){
var map__26329 = p__26322;
var map__26329__$1 = ((((!((map__26329 == null)))?((((map__26329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26329):map__26329);
var opts = map__26329__$1;
var on_cssload = cljs.core.get.call(null,map__26329__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26331_26335 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26332_26336 = null;
var count__26333_26337 = (0);
var i__26334_26338 = (0);
while(true){
if((i__26334_26338 < count__26333_26337)){
var f_26339 = cljs.core._nth.call(null,chunk__26332_26336,i__26334_26338);
figwheel.client.file_reloading.reload_css_file.call(null,f_26339);

var G__26340 = seq__26331_26335;
var G__26341 = chunk__26332_26336;
var G__26342 = count__26333_26337;
var G__26343 = (i__26334_26338 + (1));
seq__26331_26335 = G__26340;
chunk__26332_26336 = G__26341;
count__26333_26337 = G__26342;
i__26334_26338 = G__26343;
continue;
} else {
var temp__4657__auto___26344 = cljs.core.seq.call(null,seq__26331_26335);
if(temp__4657__auto___26344){
var seq__26331_26345__$1 = temp__4657__auto___26344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26331_26345__$1)){
var c__20970__auto___26346 = cljs.core.chunk_first.call(null,seq__26331_26345__$1);
var G__26347 = cljs.core.chunk_rest.call(null,seq__26331_26345__$1);
var G__26348 = c__20970__auto___26346;
var G__26349 = cljs.core.count.call(null,c__20970__auto___26346);
var G__26350 = (0);
seq__26331_26335 = G__26347;
chunk__26332_26336 = G__26348;
count__26333_26337 = G__26349;
i__26334_26338 = G__26350;
continue;
} else {
var f_26351 = cljs.core.first.call(null,seq__26331_26345__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26351);

var G__26352 = cljs.core.next.call(null,seq__26331_26345__$1);
var G__26353 = null;
var G__26354 = (0);
var G__26355 = (0);
seq__26331_26335 = G__26352;
chunk__26332_26336 = G__26353;
count__26333_26337 = G__26354;
i__26334_26338 = G__26355;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26329,map__26329__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26329,map__26329__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map