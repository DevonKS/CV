// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-5";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args30372 = [];
var len__21234__auto___30375 = arguments.length;
var i__21235__auto___30376 = (0);
while(true){
if((i__21235__auto___30376 < len__21234__auto___30375)){
args30372.push((arguments[i__21235__auto___30376]));

var G__30377 = (i__21235__auto___30376 + (1));
i__21235__auto___30376 = G__30377;
continue;
} else {
}
break;
}

var G__30374 = args30372.length;
switch (G__30374) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30372.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__21241__auto__ = [];
var len__21234__auto___30380 = arguments.length;
var i__21235__auto___30381 = (0);
while(true){
if((i__21235__auto___30381 < len__21234__auto___30380)){
args__21241__auto__.push((arguments[i__21235__auto___30381]));

var G__30382 = (i__21235__auto___30381 + (1));
i__21235__auto___30381 = G__30382;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30379){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30379));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__21241__auto__ = [];
var len__21234__auto___30384 = arguments.length;
var i__21235__auto___30385 = (0);
while(true){
if((i__21235__auto___30385 < len__21234__auto___30384)){
args__21241__auto__.push((arguments[i__21235__auto___30385]));

var G__30386 = (i__21235__auto___30385 + (1));
i__21235__auto___30385 = G__30386;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30383){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30383));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__30387 = cljs.core._EQ_;
var expr__30388 = (function (){var or__20159__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e30391){if((e30391 instanceof Error)){
var e = e30391;
return false;
} else {
throw e30391;

}
}})();
if(cljs.core.truth_(or__20159__auto__)){
return or__20159__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__30387.call(null,"true",expr__30388))){
return true;
} else {
if(cljs.core.truth_(pred__30387.call(null,"false",expr__30388))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30388)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e30393){if((e30393 instanceof Error)){
var e = e30393;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e30393;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30394){
var map__30397 = p__30394;
var map__30397__$1 = ((((!((map__30397 == null)))?((((map__30397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30397):map__30397);
var message = cljs.core.get.call(null,map__30397__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30397__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__20159__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20159__auto__)){
return or__20159__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__20147__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__20147__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__20147__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22331__auto___30559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto___30559,ch){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto___30559,ch){
return (function (state_30528){
var state_val_30529 = (state_30528[(1)]);
if((state_val_30529 === (7))){
var inst_30524 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
var statearr_30530_30560 = state_30528__$1;
(statearr_30530_30560[(2)] = inst_30524);

(statearr_30530_30560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (1))){
var state_30528__$1 = state_30528;
var statearr_30531_30561 = state_30528__$1;
(statearr_30531_30561[(2)] = null);

(statearr_30531_30561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (4))){
var inst_30481 = (state_30528[(7)]);
var inst_30481__$1 = (state_30528[(2)]);
var state_30528__$1 = (function (){var statearr_30532 = state_30528;
(statearr_30532[(7)] = inst_30481__$1);

return statearr_30532;
})();
if(cljs.core.truth_(inst_30481__$1)){
var statearr_30533_30562 = state_30528__$1;
(statearr_30533_30562[(1)] = (5));

} else {
var statearr_30534_30563 = state_30528__$1;
(statearr_30534_30563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (15))){
var inst_30488 = (state_30528[(8)]);
var inst_30503 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30488);
var inst_30504 = cljs.core.first.call(null,inst_30503);
var inst_30505 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30504);
var inst_30506 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_30505)].join('');
var inst_30507 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30506);
var state_30528__$1 = state_30528;
var statearr_30535_30564 = state_30528__$1;
(statearr_30535_30564[(2)] = inst_30507);

(statearr_30535_30564[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (13))){
var inst_30512 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
var statearr_30536_30565 = state_30528__$1;
(statearr_30536_30565[(2)] = inst_30512);

(statearr_30536_30565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (6))){
var state_30528__$1 = state_30528;
var statearr_30537_30566 = state_30528__$1;
(statearr_30537_30566[(2)] = null);

(statearr_30537_30566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (17))){
var inst_30510 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
var statearr_30538_30567 = state_30528__$1;
(statearr_30538_30567[(2)] = inst_30510);

(statearr_30538_30567[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (3))){
var inst_30526 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30528__$1,inst_30526);
} else {
if((state_val_30529 === (12))){
var inst_30487 = (state_30528[(9)]);
var inst_30501 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30487,opts);
var state_30528__$1 = state_30528;
if(cljs.core.truth_(inst_30501)){
var statearr_30539_30568 = state_30528__$1;
(statearr_30539_30568[(1)] = (15));

} else {
var statearr_30540_30569 = state_30528__$1;
(statearr_30540_30569[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (2))){
var state_30528__$1 = state_30528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30528__$1,(4),ch);
} else {
if((state_val_30529 === (11))){
var inst_30488 = (state_30528[(8)]);
var inst_30493 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30494 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30488);
var inst_30495 = cljs.core.async.timeout.call(null,(1000));
var inst_30496 = [inst_30494,inst_30495];
var inst_30497 = (new cljs.core.PersistentVector(null,2,(5),inst_30493,inst_30496,null));
var state_30528__$1 = state_30528;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30528__$1,(14),inst_30497);
} else {
if((state_val_30529 === (9))){
var inst_30488 = (state_30528[(8)]);
var inst_30514 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30515 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30488);
var inst_30516 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30515);
var inst_30517 = [cljs.core.str("Not loading: "),cljs.core.str(inst_30516)].join('');
var inst_30518 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30517);
var state_30528__$1 = (function (){var statearr_30541 = state_30528;
(statearr_30541[(10)] = inst_30514);

return statearr_30541;
})();
var statearr_30542_30570 = state_30528__$1;
(statearr_30542_30570[(2)] = inst_30518);

(statearr_30542_30570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (5))){
var inst_30481 = (state_30528[(7)]);
var inst_30483 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30484 = (new cljs.core.PersistentArrayMap(null,2,inst_30483,null));
var inst_30485 = (new cljs.core.PersistentHashSet(null,inst_30484,null));
var inst_30486 = figwheel.client.focus_msgs.call(null,inst_30485,inst_30481);
var inst_30487 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30486);
var inst_30488 = cljs.core.first.call(null,inst_30486);
var inst_30489 = figwheel.client.autoload_QMARK_.call(null);
var state_30528__$1 = (function (){var statearr_30543 = state_30528;
(statearr_30543[(8)] = inst_30488);

(statearr_30543[(9)] = inst_30487);

return statearr_30543;
})();
if(cljs.core.truth_(inst_30489)){
var statearr_30544_30571 = state_30528__$1;
(statearr_30544_30571[(1)] = (8));

} else {
var statearr_30545_30572 = state_30528__$1;
(statearr_30545_30572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (14))){
var inst_30499 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
var statearr_30546_30573 = state_30528__$1;
(statearr_30546_30573[(2)] = inst_30499);

(statearr_30546_30573[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (16))){
var state_30528__$1 = state_30528;
var statearr_30547_30574 = state_30528__$1;
(statearr_30547_30574[(2)] = null);

(statearr_30547_30574[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (10))){
var inst_30520 = (state_30528[(2)]);
var state_30528__$1 = (function (){var statearr_30548 = state_30528;
(statearr_30548[(11)] = inst_30520);

return statearr_30548;
})();
var statearr_30549_30575 = state_30528__$1;
(statearr_30549_30575[(2)] = null);

(statearr_30549_30575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (8))){
var inst_30487 = (state_30528[(9)]);
var inst_30491 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30487,opts);
var state_30528__$1 = state_30528;
if(cljs.core.truth_(inst_30491)){
var statearr_30550_30576 = state_30528__$1;
(statearr_30550_30576[(1)] = (11));

} else {
var statearr_30551_30577 = state_30528__$1;
(statearr_30551_30577[(1)] = (12));

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
});})(c__22331__auto___30559,ch))
;
return ((function (switch__22219__auto__,c__22331__auto___30559,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22220__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22220__auto____0 = (function (){
var statearr_30555 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30555[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22220__auto__);

(statearr_30555[(1)] = (1));

return statearr_30555;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22220__auto____1 = (function (state_30528){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_30528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e30556){if((e30556 instanceof Object)){
var ex__22223__auto__ = e30556;
var statearr_30557_30578 = state_30528;
(statearr_30557_30578[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30579 = state_30528;
state_30528 = G__30579;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22220__auto__ = function(state_30528){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22220__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22220__auto____1.call(this,state_30528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22220__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22220__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto___30559,ch))
})();
var state__22333__auto__ = (function (){var statearr_30558 = f__22332__auto__.call(null);
(statearr_30558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto___30559);

return statearr_30558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto___30559,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30580_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30580_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30583 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30583){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e30582){if((e30582 instanceof Error)){
var e = e30582;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30583], null));
} else {
var e = e30582;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_30583))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30584){
var map__30593 = p__30584;
var map__30593__$1 = ((((!((map__30593 == null)))?((((map__30593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30593):map__30593);
var opts = map__30593__$1;
var build_id = cljs.core.get.call(null,map__30593__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30593,map__30593__$1,opts,build_id){
return (function (p__30595){
var vec__30596 = p__30595;
var seq__30597 = cljs.core.seq.call(null,vec__30596);
var first__30598 = cljs.core.first.call(null,seq__30597);
var seq__30597__$1 = cljs.core.next.call(null,seq__30597);
var map__30599 = first__30598;
var map__30599__$1 = ((((!((map__30599 == null)))?((((map__30599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30599):map__30599);
var msg = map__30599__$1;
var msg_name = cljs.core.get.call(null,map__30599__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30597__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30596,seq__30597,first__30598,seq__30597__$1,map__30599,map__30599__$1,msg,msg_name,_,map__30593,map__30593__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30596,seq__30597,first__30598,seq__30597__$1,map__30599,map__30599__$1,msg,msg_name,_,map__30593,map__30593__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30593,map__30593__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30607){
var vec__30608 = p__30607;
var seq__30609 = cljs.core.seq.call(null,vec__30608);
var first__30610 = cljs.core.first.call(null,seq__30609);
var seq__30609__$1 = cljs.core.next.call(null,seq__30609);
var map__30611 = first__30610;
var map__30611__$1 = ((((!((map__30611 == null)))?((((map__30611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30611):map__30611);
var msg = map__30611__$1;
var msg_name = cljs.core.get.call(null,map__30611__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30609__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30613){
var map__30625 = p__30613;
var map__30625__$1 = ((((!((map__30625 == null)))?((((map__30625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30625):map__30625);
var on_compile_warning = cljs.core.get.call(null,map__30625__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30625__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30625,map__30625__$1,on_compile_warning,on_compile_fail){
return (function (p__30627){
var vec__30628 = p__30627;
var seq__30629 = cljs.core.seq.call(null,vec__30628);
var first__30630 = cljs.core.first.call(null,seq__30629);
var seq__30629__$1 = cljs.core.next.call(null,seq__30629);
var map__30631 = first__30630;
var map__30631__$1 = ((((!((map__30631 == null)))?((((map__30631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30631):map__30631);
var msg = map__30631__$1;
var msg_name = cljs.core.get.call(null,map__30631__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30629__$1;
var pred__30633 = cljs.core._EQ_;
var expr__30634 = msg_name;
if(cljs.core.truth_(pred__30633.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30634))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30633.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30634))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30625,map__30625__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto__,msg_hist,msg_names,msg){
return (function (state_30842){
var state_val_30843 = (state_30842[(1)]);
if((state_val_30843 === (7))){
var inst_30770 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
if(cljs.core.truth_(inst_30770)){
var statearr_30844_30890 = state_30842__$1;
(statearr_30844_30890[(1)] = (8));

} else {
var statearr_30845_30891 = state_30842__$1;
(statearr_30845_30891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (20))){
var inst_30836 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30846_30892 = state_30842__$1;
(statearr_30846_30892[(2)] = inst_30836);

(statearr_30846_30892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (27))){
var inst_30832 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30847_30893 = state_30842__$1;
(statearr_30847_30893[(2)] = inst_30832);

(statearr_30847_30893[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (1))){
var inst_30763 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30842__$1 = state_30842;
if(cljs.core.truth_(inst_30763)){
var statearr_30848_30894 = state_30842__$1;
(statearr_30848_30894[(1)] = (2));

} else {
var statearr_30849_30895 = state_30842__$1;
(statearr_30849_30895[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (24))){
var inst_30834 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30850_30896 = state_30842__$1;
(statearr_30850_30896[(2)] = inst_30834);

(statearr_30850_30896[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (4))){
var inst_30840 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30842__$1,inst_30840);
} else {
if((state_val_30843 === (15))){
var inst_30838 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30851_30897 = state_30842__$1;
(statearr_30851_30897[(2)] = inst_30838);

(statearr_30851_30897[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (21))){
var inst_30797 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30852_30898 = state_30842__$1;
(statearr_30852_30898[(2)] = inst_30797);

(statearr_30852_30898[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (31))){
var inst_30821 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30842__$1 = state_30842;
if(cljs.core.truth_(inst_30821)){
var statearr_30853_30899 = state_30842__$1;
(statearr_30853_30899[(1)] = (34));

} else {
var statearr_30854_30900 = state_30842__$1;
(statearr_30854_30900[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (32))){
var inst_30830 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30855_30901 = state_30842__$1;
(statearr_30855_30901[(2)] = inst_30830);

(statearr_30855_30901[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (33))){
var inst_30819 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30856_30902 = state_30842__$1;
(statearr_30856_30902[(2)] = inst_30819);

(statearr_30856_30902[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (13))){
var inst_30784 = figwheel.client.heads_up.clear.call(null);
var state_30842__$1 = state_30842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30842__$1,(16),inst_30784);
} else {
if((state_val_30843 === (22))){
var inst_30801 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30802 = figwheel.client.heads_up.append_warning_message.call(null,inst_30801);
var state_30842__$1 = state_30842;
var statearr_30857_30903 = state_30842__$1;
(statearr_30857_30903[(2)] = inst_30802);

(statearr_30857_30903[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (36))){
var inst_30828 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30858_30904 = state_30842__$1;
(statearr_30858_30904[(2)] = inst_30828);

(statearr_30858_30904[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (29))){
var inst_30812 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30859_30905 = state_30842__$1;
(statearr_30859_30905[(2)] = inst_30812);

(statearr_30859_30905[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (6))){
var inst_30765 = (state_30842[(7)]);
var state_30842__$1 = state_30842;
var statearr_30860_30906 = state_30842__$1;
(statearr_30860_30906[(2)] = inst_30765);

(statearr_30860_30906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (28))){
var inst_30808 = (state_30842[(2)]);
var inst_30809 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30810 = figwheel.client.heads_up.display_warning.call(null,inst_30809);
var state_30842__$1 = (function (){var statearr_30861 = state_30842;
(statearr_30861[(8)] = inst_30808);

return statearr_30861;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30842__$1,(29),inst_30810);
} else {
if((state_val_30843 === (25))){
var inst_30806 = figwheel.client.heads_up.clear.call(null);
var state_30842__$1 = state_30842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30842__$1,(28),inst_30806);
} else {
if((state_val_30843 === (34))){
var inst_30823 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30842__$1 = state_30842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30842__$1,(37),inst_30823);
} else {
if((state_val_30843 === (17))){
var inst_30790 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30862_30907 = state_30842__$1;
(statearr_30862_30907[(2)] = inst_30790);

(statearr_30862_30907[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (3))){
var inst_30782 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30842__$1 = state_30842;
if(cljs.core.truth_(inst_30782)){
var statearr_30863_30908 = state_30842__$1;
(statearr_30863_30908[(1)] = (13));

} else {
var statearr_30864_30909 = state_30842__$1;
(statearr_30864_30909[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (12))){
var inst_30778 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30865_30910 = state_30842__$1;
(statearr_30865_30910[(2)] = inst_30778);

(statearr_30865_30910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (2))){
var inst_30765 = (state_30842[(7)]);
var inst_30765__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30842__$1 = (function (){var statearr_30866 = state_30842;
(statearr_30866[(7)] = inst_30765__$1);

return statearr_30866;
})();
if(cljs.core.truth_(inst_30765__$1)){
var statearr_30867_30911 = state_30842__$1;
(statearr_30867_30911[(1)] = (5));

} else {
var statearr_30868_30912 = state_30842__$1;
(statearr_30868_30912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (23))){
var inst_30804 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30842__$1 = state_30842;
if(cljs.core.truth_(inst_30804)){
var statearr_30869_30913 = state_30842__$1;
(statearr_30869_30913[(1)] = (25));

} else {
var statearr_30870_30914 = state_30842__$1;
(statearr_30870_30914[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (35))){
var state_30842__$1 = state_30842;
var statearr_30871_30915 = state_30842__$1;
(statearr_30871_30915[(2)] = null);

(statearr_30871_30915[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (19))){
var inst_30799 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30842__$1 = state_30842;
if(cljs.core.truth_(inst_30799)){
var statearr_30872_30916 = state_30842__$1;
(statearr_30872_30916[(1)] = (22));

} else {
var statearr_30873_30917 = state_30842__$1;
(statearr_30873_30917[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (11))){
var inst_30774 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30874_30918 = state_30842__$1;
(statearr_30874_30918[(2)] = inst_30774);

(statearr_30874_30918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (9))){
var inst_30776 = figwheel.client.heads_up.clear.call(null);
var state_30842__$1 = state_30842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30842__$1,(12),inst_30776);
} else {
if((state_val_30843 === (5))){
var inst_30767 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30842__$1 = state_30842;
var statearr_30875_30919 = state_30842__$1;
(statearr_30875_30919[(2)] = inst_30767);

(statearr_30875_30919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (14))){
var inst_30792 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30842__$1 = state_30842;
if(cljs.core.truth_(inst_30792)){
var statearr_30876_30920 = state_30842__$1;
(statearr_30876_30920[(1)] = (18));

} else {
var statearr_30877_30921 = state_30842__$1;
(statearr_30877_30921[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (26))){
var inst_30814 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30842__$1 = state_30842;
if(cljs.core.truth_(inst_30814)){
var statearr_30878_30922 = state_30842__$1;
(statearr_30878_30922[(1)] = (30));

} else {
var statearr_30879_30923 = state_30842__$1;
(statearr_30879_30923[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (16))){
var inst_30786 = (state_30842[(2)]);
var inst_30787 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30788 = figwheel.client.heads_up.display_exception.call(null,inst_30787);
var state_30842__$1 = (function (){var statearr_30880 = state_30842;
(statearr_30880[(9)] = inst_30786);

return statearr_30880;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30842__$1,(17),inst_30788);
} else {
if((state_val_30843 === (30))){
var inst_30816 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30817 = figwheel.client.heads_up.display_warning.call(null,inst_30816);
var state_30842__$1 = state_30842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30842__$1,(33),inst_30817);
} else {
if((state_val_30843 === (10))){
var inst_30780 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30881_30924 = state_30842__$1;
(statearr_30881_30924[(2)] = inst_30780);

(statearr_30881_30924[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (18))){
var inst_30794 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30795 = figwheel.client.heads_up.display_exception.call(null,inst_30794);
var state_30842__$1 = state_30842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30842__$1,(21),inst_30795);
} else {
if((state_val_30843 === (37))){
var inst_30825 = (state_30842[(2)]);
var state_30842__$1 = state_30842;
var statearr_30882_30925 = state_30842__$1;
(statearr_30882_30925[(2)] = inst_30825);

(statearr_30882_30925[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30843 === (8))){
var inst_30772 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30842__$1 = state_30842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30842__$1,(11),inst_30772);
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
});})(c__22331__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22219__auto__,c__22331__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22220__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22220__auto____0 = (function (){
var statearr_30886 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30886[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22220__auto__);

(statearr_30886[(1)] = (1));

return statearr_30886;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22220__auto____1 = (function (state_30842){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_30842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e30887){if((e30887 instanceof Object)){
var ex__22223__auto__ = e30887;
var statearr_30888_30926 = state_30842;
(statearr_30888_30926[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30927 = state_30842;
state_30842 = G__30927;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22220__auto__ = function(state_30842){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22220__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22220__auto____1.call(this,state_30842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22220__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22220__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto__,msg_hist,msg_names,msg))
})();
var state__22333__auto__ = (function (){var statearr_30889 = f__22332__auto__.call(null);
(statearr_30889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto__);

return statearr_30889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto__,msg_hist,msg_names,msg))
);

return c__22331__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22331__auto___30990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto___30990,ch){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto___30990,ch){
return (function (state_30973){
var state_val_30974 = (state_30973[(1)]);
if((state_val_30974 === (1))){
var state_30973__$1 = state_30973;
var statearr_30975_30991 = state_30973__$1;
(statearr_30975_30991[(2)] = null);

(statearr_30975_30991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (2))){
var state_30973__$1 = state_30973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30973__$1,(4),ch);
} else {
if((state_val_30974 === (3))){
var inst_30971 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30973__$1,inst_30971);
} else {
if((state_val_30974 === (4))){
var inst_30961 = (state_30973[(7)]);
var inst_30961__$1 = (state_30973[(2)]);
var state_30973__$1 = (function (){var statearr_30976 = state_30973;
(statearr_30976[(7)] = inst_30961__$1);

return statearr_30976;
})();
if(cljs.core.truth_(inst_30961__$1)){
var statearr_30977_30992 = state_30973__$1;
(statearr_30977_30992[(1)] = (5));

} else {
var statearr_30978_30993 = state_30973__$1;
(statearr_30978_30993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (5))){
var inst_30961 = (state_30973[(7)]);
var inst_30963 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30961);
var state_30973__$1 = state_30973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30973__$1,(8),inst_30963);
} else {
if((state_val_30974 === (6))){
var state_30973__$1 = state_30973;
var statearr_30979_30994 = state_30973__$1;
(statearr_30979_30994[(2)] = null);

(statearr_30979_30994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (7))){
var inst_30969 = (state_30973[(2)]);
var state_30973__$1 = state_30973;
var statearr_30980_30995 = state_30973__$1;
(statearr_30980_30995[(2)] = inst_30969);

(statearr_30980_30995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30974 === (8))){
var inst_30965 = (state_30973[(2)]);
var state_30973__$1 = (function (){var statearr_30981 = state_30973;
(statearr_30981[(8)] = inst_30965);

return statearr_30981;
})();
var statearr_30982_30996 = state_30973__$1;
(statearr_30982_30996[(2)] = null);

(statearr_30982_30996[(1)] = (2));


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
});})(c__22331__auto___30990,ch))
;
return ((function (switch__22219__auto__,c__22331__auto___30990,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22220__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22220__auto____0 = (function (){
var statearr_30986 = [null,null,null,null,null,null,null,null,null];
(statearr_30986[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22220__auto__);

(statearr_30986[(1)] = (1));

return statearr_30986;
});
var figwheel$client$heads_up_plugin_$_state_machine__22220__auto____1 = (function (state_30973){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_30973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e30987){if((e30987 instanceof Object)){
var ex__22223__auto__ = e30987;
var statearr_30988_30997 = state_30973;
(statearr_30988_30997[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30998 = state_30973;
state_30973 = G__30998;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22220__auto__ = function(state_30973){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22220__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22220__auto____1.call(this,state_30973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22220__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22220__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto___30990,ch))
})();
var state__22333__auto__ = (function (){var statearr_30989 = f__22332__auto__.call(null);
(statearr_30989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto___30990);

return statearr_30989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto___30990,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto__){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto__){
return (function (state_31019){
var state_val_31020 = (state_31019[(1)]);
if((state_val_31020 === (1))){
var inst_31014 = cljs.core.async.timeout.call(null,(3000));
var state_31019__$1 = state_31019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31019__$1,(2),inst_31014);
} else {
if((state_val_31020 === (2))){
var inst_31016 = (state_31019[(2)]);
var inst_31017 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31019__$1 = (function (){var statearr_31021 = state_31019;
(statearr_31021[(7)] = inst_31016);

return statearr_31021;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31019__$1,inst_31017);
} else {
return null;
}
}
});})(c__22331__auto__))
;
return ((function (switch__22219__auto__,c__22331__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22220__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22220__auto____0 = (function (){
var statearr_31025 = [null,null,null,null,null,null,null,null];
(statearr_31025[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22220__auto__);

(statearr_31025[(1)] = (1));

return statearr_31025;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22220__auto____1 = (function (state_31019){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_31019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e31026){if((e31026 instanceof Object)){
var ex__22223__auto__ = e31026;
var statearr_31027_31029 = state_31019;
(statearr_31027_31029[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31030 = state_31019;
state_31019 = G__31030;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22220__auto__ = function(state_31019){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22220__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22220__auto____1.call(this,state_31019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22220__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22220__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto__))
})();
var state__22333__auto__ = (function (){var statearr_31028 = f__22332__auto__.call(null);
(statearr_31028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto__);

return statearr_31028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto__))
);

return c__22331__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto__,figwheel_version,temp__4657__auto__){
return (function (state_31053){
var state_val_31054 = (state_31053[(1)]);
if((state_val_31054 === (1))){
var inst_31047 = cljs.core.async.timeout.call(null,(2000));
var state_31053__$1 = state_31053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31053__$1,(2),inst_31047);
} else {
if((state_val_31054 === (2))){
var inst_31049 = (state_31053[(2)]);
var inst_31050 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_31051 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31050);
var state_31053__$1 = (function (){var statearr_31055 = state_31053;
(statearr_31055[(7)] = inst_31049);

return statearr_31055;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31053__$1,inst_31051);
} else {
return null;
}
}
});})(c__22331__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__22219__auto__,c__22331__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22220__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22220__auto____0 = (function (){
var statearr_31059 = [null,null,null,null,null,null,null,null];
(statearr_31059[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22220__auto__);

(statearr_31059[(1)] = (1));

return statearr_31059;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22220__auto____1 = (function (state_31053){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_31053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e31060){if((e31060 instanceof Object)){
var ex__22223__auto__ = e31060;
var statearr_31061_31063 = state_31053;
(statearr_31061_31063[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31064 = state_31053;
state_31053 = G__31064;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22220__auto__ = function(state_31053){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22220__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22220__auto____1.call(this,state_31053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22220__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22220__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto__,figwheel_version,temp__4657__auto__))
})();
var state__22333__auto__ = (function (){var statearr_31062 = f__22332__auto__.call(null);
(statearr_31062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto__);

return statearr_31062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto__,figwheel_version,temp__4657__auto__))
);

return c__22331__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31065){
var map__31069 = p__31065;
var map__31069__$1 = ((((!((map__31069 == null)))?((((map__31069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31069):map__31069);
var file = cljs.core.get.call(null,map__31069__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31069__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31069__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31071 = "";
var G__31071__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__31071),cljs.core.str("file "),cljs.core.str(file)].join(''):G__31071);
var G__31071__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__31071__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__31071__$1);
if(cljs.core.truth_((function (){var and__20147__auto__ = line;
if(cljs.core.truth_(and__20147__auto__)){
return column;
} else {
return and__20147__auto__;
}
})())){
return [cljs.core.str(G__31071__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__31071__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31072){
var map__31079 = p__31072;
var map__31079__$1 = ((((!((map__31079 == null)))?((((map__31079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31079):map__31079);
var ed = map__31079__$1;
var formatted_exception = cljs.core.get.call(null,map__31079__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31079__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31079__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31081_31085 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31082_31086 = null;
var count__31083_31087 = (0);
var i__31084_31088 = (0);
while(true){
if((i__31084_31088 < count__31083_31087)){
var msg_31089 = cljs.core._nth.call(null,chunk__31082_31086,i__31084_31088);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31089);

var G__31090 = seq__31081_31085;
var G__31091 = chunk__31082_31086;
var G__31092 = count__31083_31087;
var G__31093 = (i__31084_31088 + (1));
seq__31081_31085 = G__31090;
chunk__31082_31086 = G__31091;
count__31083_31087 = G__31092;
i__31084_31088 = G__31093;
continue;
} else {
var temp__4657__auto___31094 = cljs.core.seq.call(null,seq__31081_31085);
if(temp__4657__auto___31094){
var seq__31081_31095__$1 = temp__4657__auto___31094;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31081_31095__$1)){
var c__20970__auto___31096 = cljs.core.chunk_first.call(null,seq__31081_31095__$1);
var G__31097 = cljs.core.chunk_rest.call(null,seq__31081_31095__$1);
var G__31098 = c__20970__auto___31096;
var G__31099 = cljs.core.count.call(null,c__20970__auto___31096);
var G__31100 = (0);
seq__31081_31085 = G__31097;
chunk__31082_31086 = G__31098;
count__31083_31087 = G__31099;
i__31084_31088 = G__31100;
continue;
} else {
var msg_31101 = cljs.core.first.call(null,seq__31081_31095__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31101);

var G__31102 = cljs.core.next.call(null,seq__31081_31095__$1);
var G__31103 = null;
var G__31104 = (0);
var G__31105 = (0);
seq__31081_31085 = G__31102;
chunk__31082_31086 = G__31103;
count__31083_31087 = G__31104;
i__31084_31088 = G__31105;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31106){
var map__31109 = p__31106;
var map__31109__$1 = ((((!((map__31109 == null)))?((((map__31109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31109):map__31109);
var w = map__31109__$1;
var message = cljs.core.get.call(null,map__31109__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__20147__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__20147__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__20147__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31121 = cljs.core.seq.call(null,plugins);
var chunk__31122 = null;
var count__31123 = (0);
var i__31124 = (0);
while(true){
if((i__31124 < count__31123)){
var vec__31125 = cljs.core._nth.call(null,chunk__31122,i__31124);
var k = cljs.core.nth.call(null,vec__31125,(0),null);
var plugin = cljs.core.nth.call(null,vec__31125,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31131 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31121,chunk__31122,count__31123,i__31124,pl_31131,vec__31125,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31131.call(null,msg_hist);
});})(seq__31121,chunk__31122,count__31123,i__31124,pl_31131,vec__31125,k,plugin))
);
} else {
}

var G__31132 = seq__31121;
var G__31133 = chunk__31122;
var G__31134 = count__31123;
var G__31135 = (i__31124 + (1));
seq__31121 = G__31132;
chunk__31122 = G__31133;
count__31123 = G__31134;
i__31124 = G__31135;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31121);
if(temp__4657__auto__){
var seq__31121__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31121__$1)){
var c__20970__auto__ = cljs.core.chunk_first.call(null,seq__31121__$1);
var G__31136 = cljs.core.chunk_rest.call(null,seq__31121__$1);
var G__31137 = c__20970__auto__;
var G__31138 = cljs.core.count.call(null,c__20970__auto__);
var G__31139 = (0);
seq__31121 = G__31136;
chunk__31122 = G__31137;
count__31123 = G__31138;
i__31124 = G__31139;
continue;
} else {
var vec__31128 = cljs.core.first.call(null,seq__31121__$1);
var k = cljs.core.nth.call(null,vec__31128,(0),null);
var plugin = cljs.core.nth.call(null,vec__31128,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31140 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31121,chunk__31122,count__31123,i__31124,pl_31140,vec__31128,k,plugin,seq__31121__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31140.call(null,msg_hist);
});})(seq__31121,chunk__31122,count__31123,i__31124,pl_31140,vec__31128,k,plugin,seq__31121__$1,temp__4657__auto__))
);
} else {
}

var G__31141 = cljs.core.next.call(null,seq__31121__$1);
var G__31142 = null;
var G__31143 = (0);
var G__31144 = (0);
seq__31121 = G__31141;
chunk__31122 = G__31142;
count__31123 = G__31143;
i__31124 = G__31144;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args31145 = [];
var len__21234__auto___31152 = arguments.length;
var i__21235__auto___31153 = (0);
while(true){
if((i__21235__auto___31153 < len__21234__auto___31152)){
args31145.push((arguments[i__21235__auto___31153]));

var G__31154 = (i__21235__auto___31153 + (1));
i__21235__auto___31153 = G__31154;
continue;
} else {
}
break;
}

var G__31147 = args31145.length;
switch (G__31147) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31145.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31148_31156 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31149_31157 = null;
var count__31150_31158 = (0);
var i__31151_31159 = (0);
while(true){
if((i__31151_31159 < count__31150_31158)){
var msg_31160 = cljs.core._nth.call(null,chunk__31149_31157,i__31151_31159);
figwheel.client.socket.handle_incoming_message.call(null,msg_31160);

var G__31161 = seq__31148_31156;
var G__31162 = chunk__31149_31157;
var G__31163 = count__31150_31158;
var G__31164 = (i__31151_31159 + (1));
seq__31148_31156 = G__31161;
chunk__31149_31157 = G__31162;
count__31150_31158 = G__31163;
i__31151_31159 = G__31164;
continue;
} else {
var temp__4657__auto___31165 = cljs.core.seq.call(null,seq__31148_31156);
if(temp__4657__auto___31165){
var seq__31148_31166__$1 = temp__4657__auto___31165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31148_31166__$1)){
var c__20970__auto___31167 = cljs.core.chunk_first.call(null,seq__31148_31166__$1);
var G__31168 = cljs.core.chunk_rest.call(null,seq__31148_31166__$1);
var G__31169 = c__20970__auto___31167;
var G__31170 = cljs.core.count.call(null,c__20970__auto___31167);
var G__31171 = (0);
seq__31148_31156 = G__31168;
chunk__31149_31157 = G__31169;
count__31150_31158 = G__31170;
i__31151_31159 = G__31171;
continue;
} else {
var msg_31172 = cljs.core.first.call(null,seq__31148_31166__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31172);

var G__31173 = cljs.core.next.call(null,seq__31148_31166__$1);
var G__31174 = null;
var G__31175 = (0);
var G__31176 = (0);
seq__31148_31156 = G__31173;
chunk__31149_31157 = G__31174;
count__31150_31158 = G__31175;
i__31151_31159 = G__31176;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__21241__auto__ = [];
var len__21234__auto___31181 = arguments.length;
var i__21235__auto___31182 = (0);
while(true){
if((i__21235__auto___31182 < len__21234__auto___31181)){
args__21241__auto__.push((arguments[i__21235__auto___31182]));

var G__31183 = (i__21235__auto___31182 + (1));
i__21235__auto___31182 = G__31183;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31178){
var map__31179 = p__31178;
var map__31179__$1 = ((((!((map__31179 == null)))?((((map__31179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31179):map__31179);
var opts = map__31179__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31177){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31177));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31185){if((e31185 instanceof Error)){
var e = e31185;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31185;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31189){
var map__31190 = p__31189;
var map__31190__$1 = ((((!((map__31190 == null)))?((((map__31190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31190):map__31190);
var msg_name = cljs.core.get.call(null,map__31190__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map