// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29806){
var map__29831 = p__29806;
var map__29831__$1 = ((((!((map__29831 == null)))?((((map__29831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29831):map__29831);
var m = map__29831__$1;
var n = cljs.core.get.call(null,map__29831__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29831__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29833_29855 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29834_29856 = null;
var count__29835_29857 = (0);
var i__29836_29858 = (0);
while(true){
if((i__29836_29858 < count__29835_29857)){
var f_29859 = cljs.core._nth.call(null,chunk__29834_29856,i__29836_29858);
cljs.core.println.call(null,"  ",f_29859);

var G__29860 = seq__29833_29855;
var G__29861 = chunk__29834_29856;
var G__29862 = count__29835_29857;
var G__29863 = (i__29836_29858 + (1));
seq__29833_29855 = G__29860;
chunk__29834_29856 = G__29861;
count__29835_29857 = G__29862;
i__29836_29858 = G__29863;
continue;
} else {
var temp__4657__auto___29864 = cljs.core.seq.call(null,seq__29833_29855);
if(temp__4657__auto___29864){
var seq__29833_29865__$1 = temp__4657__auto___29864;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29833_29865__$1)){
var c__20970__auto___29866 = cljs.core.chunk_first.call(null,seq__29833_29865__$1);
var G__29867 = cljs.core.chunk_rest.call(null,seq__29833_29865__$1);
var G__29868 = c__20970__auto___29866;
var G__29869 = cljs.core.count.call(null,c__20970__auto___29866);
var G__29870 = (0);
seq__29833_29855 = G__29867;
chunk__29834_29856 = G__29868;
count__29835_29857 = G__29869;
i__29836_29858 = G__29870;
continue;
} else {
var f_29871 = cljs.core.first.call(null,seq__29833_29865__$1);
cljs.core.println.call(null,"  ",f_29871);

var G__29872 = cljs.core.next.call(null,seq__29833_29865__$1);
var G__29873 = null;
var G__29874 = (0);
var G__29875 = (0);
seq__29833_29855 = G__29872;
chunk__29834_29856 = G__29873;
count__29835_29857 = G__29874;
i__29836_29858 = G__29875;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29876 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20159__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20159__auto__)){
return or__20159__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29876);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29876)))?cljs.core.second.call(null,arglists_29876):arglists_29876));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29837_29877 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29838_29878 = null;
var count__29839_29879 = (0);
var i__29840_29880 = (0);
while(true){
if((i__29840_29880 < count__29839_29879)){
var vec__29841_29881 = cljs.core._nth.call(null,chunk__29838_29878,i__29840_29880);
var name_29882 = cljs.core.nth.call(null,vec__29841_29881,(0),null);
var map__29844_29883 = cljs.core.nth.call(null,vec__29841_29881,(1),null);
var map__29844_29884__$1 = ((((!((map__29844_29883 == null)))?((((map__29844_29883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29844_29883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29844_29883):map__29844_29883);
var doc_29885 = cljs.core.get.call(null,map__29844_29884__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29886 = cljs.core.get.call(null,map__29844_29884__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29882);

cljs.core.println.call(null," ",arglists_29886);

if(cljs.core.truth_(doc_29885)){
cljs.core.println.call(null," ",doc_29885);
} else {
}

var G__29887 = seq__29837_29877;
var G__29888 = chunk__29838_29878;
var G__29889 = count__29839_29879;
var G__29890 = (i__29840_29880 + (1));
seq__29837_29877 = G__29887;
chunk__29838_29878 = G__29888;
count__29839_29879 = G__29889;
i__29840_29880 = G__29890;
continue;
} else {
var temp__4657__auto___29891 = cljs.core.seq.call(null,seq__29837_29877);
if(temp__4657__auto___29891){
var seq__29837_29892__$1 = temp__4657__auto___29891;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29837_29892__$1)){
var c__20970__auto___29893 = cljs.core.chunk_first.call(null,seq__29837_29892__$1);
var G__29894 = cljs.core.chunk_rest.call(null,seq__29837_29892__$1);
var G__29895 = c__20970__auto___29893;
var G__29896 = cljs.core.count.call(null,c__20970__auto___29893);
var G__29897 = (0);
seq__29837_29877 = G__29894;
chunk__29838_29878 = G__29895;
count__29839_29879 = G__29896;
i__29840_29880 = G__29897;
continue;
} else {
var vec__29846_29898 = cljs.core.first.call(null,seq__29837_29892__$1);
var name_29899 = cljs.core.nth.call(null,vec__29846_29898,(0),null);
var map__29849_29900 = cljs.core.nth.call(null,vec__29846_29898,(1),null);
var map__29849_29901__$1 = ((((!((map__29849_29900 == null)))?((((map__29849_29900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29849_29900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29849_29900):map__29849_29900);
var doc_29902 = cljs.core.get.call(null,map__29849_29901__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29903 = cljs.core.get.call(null,map__29849_29901__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29899);

cljs.core.println.call(null," ",arglists_29903);

if(cljs.core.truth_(doc_29902)){
cljs.core.println.call(null," ",doc_29902);
} else {
}

var G__29904 = cljs.core.next.call(null,seq__29837_29892__$1);
var G__29905 = null;
var G__29906 = (0);
var G__29907 = (0);
seq__29837_29877 = G__29904;
chunk__29838_29878 = G__29905;
count__29839_29879 = G__29906;
i__29840_29880 = G__29907;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__29851 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29852 = null;
var count__29853 = (0);
var i__29854 = (0);
while(true){
if((i__29854 < count__29853)){
var role = cljs.core._nth.call(null,chunk__29852,i__29854);
var temp__4657__auto___29908__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___29908__$1)){
var spec_29909 = temp__4657__auto___29908__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_29909));
} else {
}

var G__29910 = seq__29851;
var G__29911 = chunk__29852;
var G__29912 = count__29853;
var G__29913 = (i__29854 + (1));
seq__29851 = G__29910;
chunk__29852 = G__29911;
count__29853 = G__29912;
i__29854 = G__29913;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__29851);
if(temp__4657__auto____$1){
var seq__29851__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29851__$1)){
var c__20970__auto__ = cljs.core.chunk_first.call(null,seq__29851__$1);
var G__29914 = cljs.core.chunk_rest.call(null,seq__29851__$1);
var G__29915 = c__20970__auto__;
var G__29916 = cljs.core.count.call(null,c__20970__auto__);
var G__29917 = (0);
seq__29851 = G__29914;
chunk__29852 = G__29915;
count__29853 = G__29916;
i__29854 = G__29917;
continue;
} else {
var role = cljs.core.first.call(null,seq__29851__$1);
var temp__4657__auto___29918__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___29918__$2)){
var spec_29919 = temp__4657__auto___29918__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_29919));
} else {
}

var G__29920 = cljs.core.next.call(null,seq__29851__$1);
var G__29921 = null;
var G__29922 = (0);
var G__29923 = (0);
seq__29851 = G__29920;
chunk__29852 = G__29921;
count__29853 = G__29922;
i__29854 = G__29923;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map