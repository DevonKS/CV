// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args22376 = [];
var len__21234__auto___22382 = arguments.length;
var i__21235__auto___22383 = (0);
while(true){
if((i__21235__auto___22383 < len__21234__auto___22382)){
args22376.push((arguments[i__21235__auto___22383]));

var G__22384 = (i__21235__auto___22383 + (1));
i__21235__auto___22383 = G__22384;
continue;
} else {
}
break;
}

var G__22378 = args22376.length;
switch (G__22378) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22376.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22379 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22379 = (function (f,blockable,meta22380){
this.f = f;
this.blockable = blockable;
this.meta22380 = meta22380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22381,meta22380__$1){
var self__ = this;
var _22381__$1 = this;
return (new cljs.core.async.t_cljs$core$async22379(self__.f,self__.blockable,meta22380__$1));
});

cljs.core.async.t_cljs$core$async22379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22381){
var self__ = this;
var _22381__$1 = this;
return self__.meta22380;
});

cljs.core.async.t_cljs$core$async22379.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22379.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22379.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22379.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22380","meta22380",-268124767,null)], null);
});

cljs.core.async.t_cljs$core$async22379.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22379";

cljs.core.async.t_cljs$core$async22379.cljs$lang$ctorPrWriter = (function (this__20765__auto__,writer__20766__auto__,opt__20767__auto__){
return cljs.core._write.call(null,writer__20766__auto__,"cljs.core.async/t_cljs$core$async22379");
});

cljs.core.async.__GT_t_cljs$core$async22379 = (function cljs$core$async$__GT_t_cljs$core$async22379(f__$1,blockable__$1,meta22380){
return (new cljs.core.async.t_cljs$core$async22379(f__$1,blockable__$1,meta22380));
});

}

return (new cljs.core.async.t_cljs$core$async22379(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args22388 = [];
var len__21234__auto___22391 = arguments.length;
var i__21235__auto___22392 = (0);
while(true){
if((i__21235__auto___22392 < len__21234__auto___22391)){
args22388.push((arguments[i__21235__auto___22392]));

var G__22393 = (i__21235__auto___22392 + (1));
i__21235__auto___22392 = G__22393;
continue;
} else {
}
break;
}

var G__22390 = args22388.length;
switch (G__22390) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22388.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args22395 = [];
var len__21234__auto___22398 = arguments.length;
var i__21235__auto___22399 = (0);
while(true){
if((i__21235__auto___22399 < len__21234__auto___22398)){
args22395.push((arguments[i__21235__auto___22399]));

var G__22400 = (i__21235__auto___22399 + (1));
i__21235__auto___22399 = G__22400;
continue;
} else {
}
break;
}

var G__22397 = args22395.length;
switch (G__22397) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22395.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args22402 = [];
var len__21234__auto___22405 = arguments.length;
var i__21235__auto___22406 = (0);
while(true){
if((i__21235__auto___22406 < len__21234__auto___22405)){
args22402.push((arguments[i__21235__auto___22406]));

var G__22407 = (i__21235__auto___22406 + (1));
i__21235__auto___22406 = G__22407;
continue;
} else {
}
break;
}

var G__22404 = args22402.length;
switch (G__22404) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22402.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22409 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22409);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22409,ret){
return (function (){
return fn1.call(null,val_22409);
});})(val_22409,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args22410 = [];
var len__21234__auto___22413 = arguments.length;
var i__21235__auto___22414 = (0);
while(true){
if((i__21235__auto___22414 < len__21234__auto___22413)){
args22410.push((arguments[i__21235__auto___22414]));

var G__22415 = (i__21235__auto___22414 + (1));
i__21235__auto___22414 = G__22415;
continue;
} else {
}
break;
}

var G__22412 = args22410.length;
switch (G__22412) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22410.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__21074__auto___22417 = n;
var x_22418 = (0);
while(true){
if((x_22418 < n__21074__auto___22417)){
(a[x_22418] = (0));

var G__22419 = (x_22418 + (1));
x_22418 = G__22419;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22420 = (i + (1));
i = G__22420;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22424 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22424 = (function (alt_flag,flag,meta22425){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22425 = meta22425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22426,meta22425__$1){
var self__ = this;
var _22426__$1 = this;
return (new cljs.core.async.t_cljs$core$async22424(self__.alt_flag,self__.flag,meta22425__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22426){
var self__ = this;
var _22426__$1 = this;
return self__.meta22425;
});})(flag))
;

cljs.core.async.t_cljs$core$async22424.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22424.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22424.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22424.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22424.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22425","meta22425",1662227505,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22424.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22424";

cljs.core.async.t_cljs$core$async22424.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20765__auto__,writer__20766__auto__,opt__20767__auto__){
return cljs.core._write.call(null,writer__20766__auto__,"cljs.core.async/t_cljs$core$async22424");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22424 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22424(alt_flag__$1,flag__$1,meta22425){
return (new cljs.core.async.t_cljs$core$async22424(alt_flag__$1,flag__$1,meta22425));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22424(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22430 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22430 = (function (alt_handler,flag,cb,meta22431){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22431 = meta22431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22432,meta22431__$1){
var self__ = this;
var _22432__$1 = this;
return (new cljs.core.async.t_cljs$core$async22430(self__.alt_handler,self__.flag,self__.cb,meta22431__$1));
});

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22432){
var self__ = this;
var _22432__$1 = this;
return self__.meta22431;
});

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22430.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22431","meta22431",1833563350,null)], null);
});

cljs.core.async.t_cljs$core$async22430.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22430";

cljs.core.async.t_cljs$core$async22430.cljs$lang$ctorPrWriter = (function (this__20765__auto__,writer__20766__auto__,opt__20767__auto__){
return cljs.core._write.call(null,writer__20766__auto__,"cljs.core.async/t_cljs$core$async22430");
});

cljs.core.async.__GT_t_cljs$core$async22430 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22430(alt_handler__$1,flag__$1,cb__$1,meta22431){
return (new cljs.core.async.t_cljs$core$async22430(alt_handler__$1,flag__$1,cb__$1,meta22431));
});

}

return (new cljs.core.async.t_cljs$core$async22430(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22433_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22433_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22434_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22434_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20159__auto__ = wport;
if(cljs.core.truth_(or__20159__auto__)){
return or__20159__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22435 = (i + (1));
i = G__22435;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20159__auto__ = ret;
if(cljs.core.truth_(or__20159__auto__)){
return or__20159__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__20147__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20147__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20147__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__21241__auto__ = [];
var len__21234__auto___22441 = arguments.length;
var i__21235__auto___22442 = (0);
while(true){
if((i__21235__auto___22442 < len__21234__auto___22441)){
args__21241__auto__.push((arguments[i__21235__auto___22442]));

var G__22443 = (i__21235__auto___22442 + (1));
i__21235__auto___22442 = G__22443;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((1) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21242__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22438){
var map__22439 = p__22438;
var map__22439__$1 = ((((!((map__22439 == null)))?((((map__22439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22439):map__22439);
var opts = map__22439__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22436){
var G__22437 = cljs.core.first.call(null,seq22436);
var seq22436__$1 = cljs.core.next.call(null,seq22436);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22437,seq22436__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22444 = [];
var len__21234__auto___22494 = arguments.length;
var i__21235__auto___22495 = (0);
while(true){
if((i__21235__auto___22495 < len__21234__auto___22494)){
args22444.push((arguments[i__21235__auto___22495]));

var G__22496 = (i__21235__auto___22495 + (1));
i__21235__auto___22495 = G__22496;
continue;
} else {
}
break;
}

var G__22446 = args22444.length;
switch (G__22446) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22444.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22331__auto___22498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto___22498){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto___22498){
return (function (state_22470){
var state_val_22471 = (state_22470[(1)]);
if((state_val_22471 === (7))){
var inst_22466 = (state_22470[(2)]);
var state_22470__$1 = state_22470;
var statearr_22472_22499 = state_22470__$1;
(statearr_22472_22499[(2)] = inst_22466);

(statearr_22472_22499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (1))){
var state_22470__$1 = state_22470;
var statearr_22473_22500 = state_22470__$1;
(statearr_22473_22500[(2)] = null);

(statearr_22473_22500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (4))){
var inst_22449 = (state_22470[(7)]);
var inst_22449__$1 = (state_22470[(2)]);
var inst_22450 = (inst_22449__$1 == null);
var state_22470__$1 = (function (){var statearr_22474 = state_22470;
(statearr_22474[(7)] = inst_22449__$1);

return statearr_22474;
})();
if(cljs.core.truth_(inst_22450)){
var statearr_22475_22501 = state_22470__$1;
(statearr_22475_22501[(1)] = (5));

} else {
var statearr_22476_22502 = state_22470__$1;
(statearr_22476_22502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (13))){
var state_22470__$1 = state_22470;
var statearr_22477_22503 = state_22470__$1;
(statearr_22477_22503[(2)] = null);

(statearr_22477_22503[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (6))){
var inst_22449 = (state_22470[(7)]);
var state_22470__$1 = state_22470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22470__$1,(11),to,inst_22449);
} else {
if((state_val_22471 === (3))){
var inst_22468 = (state_22470[(2)]);
var state_22470__$1 = state_22470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22470__$1,inst_22468);
} else {
if((state_val_22471 === (12))){
var state_22470__$1 = state_22470;
var statearr_22478_22504 = state_22470__$1;
(statearr_22478_22504[(2)] = null);

(statearr_22478_22504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (2))){
var state_22470__$1 = state_22470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22470__$1,(4),from);
} else {
if((state_val_22471 === (11))){
var inst_22459 = (state_22470[(2)]);
var state_22470__$1 = state_22470;
if(cljs.core.truth_(inst_22459)){
var statearr_22479_22505 = state_22470__$1;
(statearr_22479_22505[(1)] = (12));

} else {
var statearr_22480_22506 = state_22470__$1;
(statearr_22480_22506[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (9))){
var state_22470__$1 = state_22470;
var statearr_22481_22507 = state_22470__$1;
(statearr_22481_22507[(2)] = null);

(statearr_22481_22507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (5))){
var state_22470__$1 = state_22470;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22482_22508 = state_22470__$1;
(statearr_22482_22508[(1)] = (8));

} else {
var statearr_22483_22509 = state_22470__$1;
(statearr_22483_22509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (14))){
var inst_22464 = (state_22470[(2)]);
var state_22470__$1 = state_22470;
var statearr_22484_22510 = state_22470__$1;
(statearr_22484_22510[(2)] = inst_22464);

(statearr_22484_22510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (10))){
var inst_22456 = (state_22470[(2)]);
var state_22470__$1 = state_22470;
var statearr_22485_22511 = state_22470__$1;
(statearr_22485_22511[(2)] = inst_22456);

(statearr_22485_22511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (8))){
var inst_22453 = cljs.core.async.close_BANG_.call(null,to);
var state_22470__$1 = state_22470;
var statearr_22486_22512 = state_22470__$1;
(statearr_22486_22512[(2)] = inst_22453);

(statearr_22486_22512[(1)] = (10));


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
});})(c__22331__auto___22498))
;
return ((function (switch__22219__auto__,c__22331__auto___22498){
return (function() {
var cljs$core$async$state_machine__22220__auto__ = null;
var cljs$core$async$state_machine__22220__auto____0 = (function (){
var statearr_22490 = [null,null,null,null,null,null,null,null];
(statearr_22490[(0)] = cljs$core$async$state_machine__22220__auto__);

(statearr_22490[(1)] = (1));

return statearr_22490;
});
var cljs$core$async$state_machine__22220__auto____1 = (function (state_22470){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_22470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e22491){if((e22491 instanceof Object)){
var ex__22223__auto__ = e22491;
var statearr_22492_22513 = state_22470;
(statearr_22492_22513[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22514 = state_22470;
state_22470 = G__22514;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
cljs$core$async$state_machine__22220__auto__ = function(state_22470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22220__auto____1.call(this,state_22470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22220__auto____0;
cljs$core$async$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22220__auto____1;
return cljs$core$async$state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto___22498))
})();
var state__22333__auto__ = (function (){var statearr_22493 = f__22332__auto__.call(null);
(statearr_22493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto___22498);

return statearr_22493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto___22498))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22702){
var vec__22703 = p__22702;
var v = cljs.core.nth.call(null,vec__22703,(0),null);
var p = cljs.core.nth.call(null,vec__22703,(1),null);
var job = vec__22703;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22331__auto___22889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto___22889,res,vec__22703,v,p,job,jobs,results){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto___22889,res,vec__22703,v,p,job,jobs,results){
return (function (state_22710){
var state_val_22711 = (state_22710[(1)]);
if((state_val_22711 === (1))){
var state_22710__$1 = state_22710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22710__$1,(2),res,v);
} else {
if((state_val_22711 === (2))){
var inst_22707 = (state_22710[(2)]);
var inst_22708 = cljs.core.async.close_BANG_.call(null,res);
var state_22710__$1 = (function (){var statearr_22712 = state_22710;
(statearr_22712[(7)] = inst_22707);

return statearr_22712;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22710__$1,inst_22708);
} else {
return null;
}
}
});})(c__22331__auto___22889,res,vec__22703,v,p,job,jobs,results))
;
return ((function (switch__22219__auto__,c__22331__auto___22889,res,vec__22703,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____0 = (function (){
var statearr_22716 = [null,null,null,null,null,null,null,null];
(statearr_22716[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__);

(statearr_22716[(1)] = (1));

return statearr_22716;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____1 = (function (state_22710){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_22710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e22717){if((e22717 instanceof Object)){
var ex__22223__auto__ = e22717;
var statearr_22718_22890 = state_22710;
(statearr_22718_22890[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22891 = state_22710;
state_22710 = G__22891;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__ = function(state_22710){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____1.call(this,state_22710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto___22889,res,vec__22703,v,p,job,jobs,results))
})();
var state__22333__auto__ = (function (){var statearr_22719 = f__22332__auto__.call(null);
(statearr_22719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto___22889);

return statearr_22719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto___22889,res,vec__22703,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22720){
var vec__22721 = p__22720;
var v = cljs.core.nth.call(null,vec__22721,(0),null);
var p = cljs.core.nth.call(null,vec__22721,(1),null);
var job = vec__22721;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__21074__auto___22892 = n;
var __22893 = (0);
while(true){
if((__22893 < n__21074__auto___22892)){
var G__22724_22894 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22724_22894) {
case "compute":
var c__22331__auto___22896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22893,c__22331__auto___22896,G__22724_22894,n__21074__auto___22892,jobs,results,process,async){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (__22893,c__22331__auto___22896,G__22724_22894,n__21074__auto___22892,jobs,results,process,async){
return (function (state_22737){
var state_val_22738 = (state_22737[(1)]);
if((state_val_22738 === (1))){
var state_22737__$1 = state_22737;
var statearr_22739_22897 = state_22737__$1;
(statearr_22739_22897[(2)] = null);

(statearr_22739_22897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (2))){
var state_22737__$1 = state_22737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22737__$1,(4),jobs);
} else {
if((state_val_22738 === (3))){
var inst_22735 = (state_22737[(2)]);
var state_22737__$1 = state_22737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22737__$1,inst_22735);
} else {
if((state_val_22738 === (4))){
var inst_22727 = (state_22737[(2)]);
var inst_22728 = process.call(null,inst_22727);
var state_22737__$1 = state_22737;
if(cljs.core.truth_(inst_22728)){
var statearr_22740_22898 = state_22737__$1;
(statearr_22740_22898[(1)] = (5));

} else {
var statearr_22741_22899 = state_22737__$1;
(statearr_22741_22899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (5))){
var state_22737__$1 = state_22737;
var statearr_22742_22900 = state_22737__$1;
(statearr_22742_22900[(2)] = null);

(statearr_22742_22900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (6))){
var state_22737__$1 = state_22737;
var statearr_22743_22901 = state_22737__$1;
(statearr_22743_22901[(2)] = null);

(statearr_22743_22901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22738 === (7))){
var inst_22733 = (state_22737[(2)]);
var state_22737__$1 = state_22737;
var statearr_22744_22902 = state_22737__$1;
(statearr_22744_22902[(2)] = inst_22733);

(statearr_22744_22902[(1)] = (3));


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
});})(__22893,c__22331__auto___22896,G__22724_22894,n__21074__auto___22892,jobs,results,process,async))
;
return ((function (__22893,switch__22219__auto__,c__22331__auto___22896,G__22724_22894,n__21074__auto___22892,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____0 = (function (){
var statearr_22748 = [null,null,null,null,null,null,null];
(statearr_22748[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__);

(statearr_22748[(1)] = (1));

return statearr_22748;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____1 = (function (state_22737){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_22737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e22749){if((e22749 instanceof Object)){
var ex__22223__auto__ = e22749;
var statearr_22750_22903 = state_22737;
(statearr_22750_22903[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22904 = state_22737;
state_22737 = G__22904;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__ = function(state_22737){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____1.call(this,state_22737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__;
})()
;})(__22893,switch__22219__auto__,c__22331__auto___22896,G__22724_22894,n__21074__auto___22892,jobs,results,process,async))
})();
var state__22333__auto__ = (function (){var statearr_22751 = f__22332__auto__.call(null);
(statearr_22751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto___22896);

return statearr_22751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(__22893,c__22331__auto___22896,G__22724_22894,n__21074__auto___22892,jobs,results,process,async))
);


break;
case "async":
var c__22331__auto___22905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22893,c__22331__auto___22905,G__22724_22894,n__21074__auto___22892,jobs,results,process,async){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (__22893,c__22331__auto___22905,G__22724_22894,n__21074__auto___22892,jobs,results,process,async){
return (function (state_22764){
var state_val_22765 = (state_22764[(1)]);
if((state_val_22765 === (1))){
var state_22764__$1 = state_22764;
var statearr_22766_22906 = state_22764__$1;
(statearr_22766_22906[(2)] = null);

(statearr_22766_22906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22765 === (2))){
var state_22764__$1 = state_22764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22764__$1,(4),jobs);
} else {
if((state_val_22765 === (3))){
var inst_22762 = (state_22764[(2)]);
var state_22764__$1 = state_22764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22764__$1,inst_22762);
} else {
if((state_val_22765 === (4))){
var inst_22754 = (state_22764[(2)]);
var inst_22755 = async.call(null,inst_22754);
var state_22764__$1 = state_22764;
if(cljs.core.truth_(inst_22755)){
var statearr_22767_22907 = state_22764__$1;
(statearr_22767_22907[(1)] = (5));

} else {
var statearr_22768_22908 = state_22764__$1;
(statearr_22768_22908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22765 === (5))){
var state_22764__$1 = state_22764;
var statearr_22769_22909 = state_22764__$1;
(statearr_22769_22909[(2)] = null);

(statearr_22769_22909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22765 === (6))){
var state_22764__$1 = state_22764;
var statearr_22770_22910 = state_22764__$1;
(statearr_22770_22910[(2)] = null);

(statearr_22770_22910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22765 === (7))){
var inst_22760 = (state_22764[(2)]);
var state_22764__$1 = state_22764;
var statearr_22771_22911 = state_22764__$1;
(statearr_22771_22911[(2)] = inst_22760);

(statearr_22771_22911[(1)] = (3));


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
});})(__22893,c__22331__auto___22905,G__22724_22894,n__21074__auto___22892,jobs,results,process,async))
;
return ((function (__22893,switch__22219__auto__,c__22331__auto___22905,G__22724_22894,n__21074__auto___22892,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____0 = (function (){
var statearr_22775 = [null,null,null,null,null,null,null];
(statearr_22775[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__);

(statearr_22775[(1)] = (1));

return statearr_22775;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____1 = (function (state_22764){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_22764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e22776){if((e22776 instanceof Object)){
var ex__22223__auto__ = e22776;
var statearr_22777_22912 = state_22764;
(statearr_22777_22912[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22913 = state_22764;
state_22764 = G__22913;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__ = function(state_22764){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____1.call(this,state_22764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__;
})()
;})(__22893,switch__22219__auto__,c__22331__auto___22905,G__22724_22894,n__21074__auto___22892,jobs,results,process,async))
})();
var state__22333__auto__ = (function (){var statearr_22778 = f__22332__auto__.call(null);
(statearr_22778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto___22905);

return statearr_22778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(__22893,c__22331__auto___22905,G__22724_22894,n__21074__auto___22892,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22914 = (__22893 + (1));
__22893 = G__22914;
continue;
} else {
}
break;
}

var c__22331__auto___22915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto___22915,jobs,results,process,async){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto___22915,jobs,results,process,async){
return (function (state_22800){
var state_val_22801 = (state_22800[(1)]);
if((state_val_22801 === (1))){
var state_22800__$1 = state_22800;
var statearr_22802_22916 = state_22800__$1;
(statearr_22802_22916[(2)] = null);

(statearr_22802_22916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (2))){
var state_22800__$1 = state_22800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22800__$1,(4),from);
} else {
if((state_val_22801 === (3))){
var inst_22798 = (state_22800[(2)]);
var state_22800__$1 = state_22800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22800__$1,inst_22798);
} else {
if((state_val_22801 === (4))){
var inst_22781 = (state_22800[(7)]);
var inst_22781__$1 = (state_22800[(2)]);
var inst_22782 = (inst_22781__$1 == null);
var state_22800__$1 = (function (){var statearr_22803 = state_22800;
(statearr_22803[(7)] = inst_22781__$1);

return statearr_22803;
})();
if(cljs.core.truth_(inst_22782)){
var statearr_22804_22917 = state_22800__$1;
(statearr_22804_22917[(1)] = (5));

} else {
var statearr_22805_22918 = state_22800__$1;
(statearr_22805_22918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (5))){
var inst_22784 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22800__$1 = state_22800;
var statearr_22806_22919 = state_22800__$1;
(statearr_22806_22919[(2)] = inst_22784);

(statearr_22806_22919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (6))){
var inst_22786 = (state_22800[(8)]);
var inst_22781 = (state_22800[(7)]);
var inst_22786__$1 = cljs.core.async.chan.call(null,(1));
var inst_22787 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22788 = [inst_22781,inst_22786__$1];
var inst_22789 = (new cljs.core.PersistentVector(null,2,(5),inst_22787,inst_22788,null));
var state_22800__$1 = (function (){var statearr_22807 = state_22800;
(statearr_22807[(8)] = inst_22786__$1);

return statearr_22807;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22800__$1,(8),jobs,inst_22789);
} else {
if((state_val_22801 === (7))){
var inst_22796 = (state_22800[(2)]);
var state_22800__$1 = state_22800;
var statearr_22808_22920 = state_22800__$1;
(statearr_22808_22920[(2)] = inst_22796);

(statearr_22808_22920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (8))){
var inst_22786 = (state_22800[(8)]);
var inst_22791 = (state_22800[(2)]);
var state_22800__$1 = (function (){var statearr_22809 = state_22800;
(statearr_22809[(9)] = inst_22791);

return statearr_22809;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22800__$1,(9),results,inst_22786);
} else {
if((state_val_22801 === (9))){
var inst_22793 = (state_22800[(2)]);
var state_22800__$1 = (function (){var statearr_22810 = state_22800;
(statearr_22810[(10)] = inst_22793);

return statearr_22810;
})();
var statearr_22811_22921 = state_22800__$1;
(statearr_22811_22921[(2)] = null);

(statearr_22811_22921[(1)] = (2));


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
});})(c__22331__auto___22915,jobs,results,process,async))
;
return ((function (switch__22219__auto__,c__22331__auto___22915,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____0 = (function (){
var statearr_22815 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22815[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__);

(statearr_22815[(1)] = (1));

return statearr_22815;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____1 = (function (state_22800){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_22800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e22816){if((e22816 instanceof Object)){
var ex__22223__auto__ = e22816;
var statearr_22817_22922 = state_22800;
(statearr_22817_22922[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22923 = state_22800;
state_22800 = G__22923;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__ = function(state_22800){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____1.call(this,state_22800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto___22915,jobs,results,process,async))
})();
var state__22333__auto__ = (function (){var statearr_22818 = f__22332__auto__.call(null);
(statearr_22818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto___22915);

return statearr_22818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto___22915,jobs,results,process,async))
);


var c__22331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto__,jobs,results,process,async){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto__,jobs,results,process,async){
return (function (state_22856){
var state_val_22857 = (state_22856[(1)]);
if((state_val_22857 === (7))){
var inst_22852 = (state_22856[(2)]);
var state_22856__$1 = state_22856;
var statearr_22858_22924 = state_22856__$1;
(statearr_22858_22924[(2)] = inst_22852);

(statearr_22858_22924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22857 === (20))){
var state_22856__$1 = state_22856;
var statearr_22859_22925 = state_22856__$1;
(statearr_22859_22925[(2)] = null);

(statearr_22859_22925[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22857 === (1))){
var state_22856__$1 = state_22856;
var statearr_22860_22926 = state_22856__$1;
(statearr_22860_22926[(2)] = null);

(statearr_22860_22926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22857 === (4))){
var inst_22821 = (state_22856[(7)]);
var inst_22821__$1 = (state_22856[(2)]);
var inst_22822 = (inst_22821__$1 == null);
var state_22856__$1 = (function (){var statearr_22861 = state_22856;
(statearr_22861[(7)] = inst_22821__$1);

return statearr_22861;
})();
if(cljs.core.truth_(inst_22822)){
var statearr_22862_22927 = state_22856__$1;
(statearr_22862_22927[(1)] = (5));

} else {
var statearr_22863_22928 = state_22856__$1;
(statearr_22863_22928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22857 === (15))){
var inst_22834 = (state_22856[(8)]);
var state_22856__$1 = state_22856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22856__$1,(18),to,inst_22834);
} else {
if((state_val_22857 === (21))){
var inst_22847 = (state_22856[(2)]);
var state_22856__$1 = state_22856;
var statearr_22864_22929 = state_22856__$1;
(statearr_22864_22929[(2)] = inst_22847);

(statearr_22864_22929[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22857 === (13))){
var inst_22849 = (state_22856[(2)]);
var state_22856__$1 = (function (){var statearr_22865 = state_22856;
(statearr_22865[(9)] = inst_22849);

return statearr_22865;
})();
var statearr_22866_22930 = state_22856__$1;
(statearr_22866_22930[(2)] = null);

(statearr_22866_22930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22857 === (6))){
var inst_22821 = (state_22856[(7)]);
var state_22856__$1 = state_22856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22856__$1,(11),inst_22821);
} else {
if((state_val_22857 === (17))){
var inst_22842 = (state_22856[(2)]);
var state_22856__$1 = state_22856;
if(cljs.core.truth_(inst_22842)){
var statearr_22867_22931 = state_22856__$1;
(statearr_22867_22931[(1)] = (19));

} else {
var statearr_22868_22932 = state_22856__$1;
(statearr_22868_22932[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22857 === (3))){
var inst_22854 = (state_22856[(2)]);
var state_22856__$1 = state_22856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22856__$1,inst_22854);
} else {
if((state_val_22857 === (12))){
var inst_22831 = (state_22856[(10)]);
var state_22856__$1 = state_22856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22856__$1,(14),inst_22831);
} else {
if((state_val_22857 === (2))){
var state_22856__$1 = state_22856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22856__$1,(4),results);
} else {
if((state_val_22857 === (19))){
var state_22856__$1 = state_22856;
var statearr_22869_22933 = state_22856__$1;
(statearr_22869_22933[(2)] = null);

(statearr_22869_22933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22857 === (11))){
var inst_22831 = (state_22856[(2)]);
var state_22856__$1 = (function (){var statearr_22870 = state_22856;
(statearr_22870[(10)] = inst_22831);

return statearr_22870;
})();
var statearr_22871_22934 = state_22856__$1;
(statearr_22871_22934[(2)] = null);

(statearr_22871_22934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22857 === (9))){
var state_22856__$1 = state_22856;
var statearr_22872_22935 = state_22856__$1;
(statearr_22872_22935[(2)] = null);

(statearr_22872_22935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22857 === (5))){
var state_22856__$1 = state_22856;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22873_22936 = state_22856__$1;
(statearr_22873_22936[(1)] = (8));

} else {
var statearr_22874_22937 = state_22856__$1;
(statearr_22874_22937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22857 === (14))){
var inst_22836 = (state_22856[(11)]);
var inst_22834 = (state_22856[(8)]);
var inst_22834__$1 = (state_22856[(2)]);
var inst_22835 = (inst_22834__$1 == null);
var inst_22836__$1 = cljs.core.not.call(null,inst_22835);
var state_22856__$1 = (function (){var statearr_22875 = state_22856;
(statearr_22875[(11)] = inst_22836__$1);

(statearr_22875[(8)] = inst_22834__$1);

return statearr_22875;
})();
if(inst_22836__$1){
var statearr_22876_22938 = state_22856__$1;
(statearr_22876_22938[(1)] = (15));

} else {
var statearr_22877_22939 = state_22856__$1;
(statearr_22877_22939[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22857 === (16))){
var inst_22836 = (state_22856[(11)]);
var state_22856__$1 = state_22856;
var statearr_22878_22940 = state_22856__$1;
(statearr_22878_22940[(2)] = inst_22836);

(statearr_22878_22940[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22857 === (10))){
var inst_22828 = (state_22856[(2)]);
var state_22856__$1 = state_22856;
var statearr_22879_22941 = state_22856__$1;
(statearr_22879_22941[(2)] = inst_22828);

(statearr_22879_22941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22857 === (18))){
var inst_22839 = (state_22856[(2)]);
var state_22856__$1 = state_22856;
var statearr_22880_22942 = state_22856__$1;
(statearr_22880_22942[(2)] = inst_22839);

(statearr_22880_22942[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22857 === (8))){
var inst_22825 = cljs.core.async.close_BANG_.call(null,to);
var state_22856__$1 = state_22856;
var statearr_22881_22943 = state_22856__$1;
(statearr_22881_22943[(2)] = inst_22825);

(statearr_22881_22943[(1)] = (10));


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
});})(c__22331__auto__,jobs,results,process,async))
;
return ((function (switch__22219__auto__,c__22331__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____0 = (function (){
var statearr_22885 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22885[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__);

(statearr_22885[(1)] = (1));

return statearr_22885;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____1 = (function (state_22856){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_22856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e22886){if((e22886 instanceof Object)){
var ex__22223__auto__ = e22886;
var statearr_22887_22944 = state_22856;
(statearr_22887_22944[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22945 = state_22856;
state_22856 = G__22945;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__ = function(state_22856){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____1.call(this,state_22856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto__,jobs,results,process,async))
})();
var state__22333__auto__ = (function (){var statearr_22888 = f__22332__auto__.call(null);
(statearr_22888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto__);

return statearr_22888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto__,jobs,results,process,async))
);

return c__22331__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args22946 = [];
var len__21234__auto___22949 = arguments.length;
var i__21235__auto___22950 = (0);
while(true){
if((i__21235__auto___22950 < len__21234__auto___22949)){
args22946.push((arguments[i__21235__auto___22950]));

var G__22951 = (i__21235__auto___22950 + (1));
i__21235__auto___22950 = G__22951;
continue;
} else {
}
break;
}

var G__22948 = args22946.length;
switch (G__22948) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22946.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args22953 = [];
var len__21234__auto___22956 = arguments.length;
var i__21235__auto___22957 = (0);
while(true){
if((i__21235__auto___22957 < len__21234__auto___22956)){
args22953.push((arguments[i__21235__auto___22957]));

var G__22958 = (i__21235__auto___22957 + (1));
i__21235__auto___22957 = G__22958;
continue;
} else {
}
break;
}

var G__22955 = args22953.length;
switch (G__22955) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22953.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args22960 = [];
var len__21234__auto___23013 = arguments.length;
var i__21235__auto___23014 = (0);
while(true){
if((i__21235__auto___23014 < len__21234__auto___23013)){
args22960.push((arguments[i__21235__auto___23014]));

var G__23015 = (i__21235__auto___23014 + (1));
i__21235__auto___23014 = G__23015;
continue;
} else {
}
break;
}

var G__22962 = args22960.length;
switch (G__22962) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22960.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22331__auto___23017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto___23017,tc,fc){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto___23017,tc,fc){
return (function (state_22988){
var state_val_22989 = (state_22988[(1)]);
if((state_val_22989 === (7))){
var inst_22984 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
var statearr_22990_23018 = state_22988__$1;
(statearr_22990_23018[(2)] = inst_22984);

(statearr_22990_23018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (1))){
var state_22988__$1 = state_22988;
var statearr_22991_23019 = state_22988__$1;
(statearr_22991_23019[(2)] = null);

(statearr_22991_23019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (4))){
var inst_22965 = (state_22988[(7)]);
var inst_22965__$1 = (state_22988[(2)]);
var inst_22966 = (inst_22965__$1 == null);
var state_22988__$1 = (function (){var statearr_22992 = state_22988;
(statearr_22992[(7)] = inst_22965__$1);

return statearr_22992;
})();
if(cljs.core.truth_(inst_22966)){
var statearr_22993_23020 = state_22988__$1;
(statearr_22993_23020[(1)] = (5));

} else {
var statearr_22994_23021 = state_22988__$1;
(statearr_22994_23021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (13))){
var state_22988__$1 = state_22988;
var statearr_22995_23022 = state_22988__$1;
(statearr_22995_23022[(2)] = null);

(statearr_22995_23022[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (6))){
var inst_22965 = (state_22988[(7)]);
var inst_22971 = p.call(null,inst_22965);
var state_22988__$1 = state_22988;
if(cljs.core.truth_(inst_22971)){
var statearr_22996_23023 = state_22988__$1;
(statearr_22996_23023[(1)] = (9));

} else {
var statearr_22997_23024 = state_22988__$1;
(statearr_22997_23024[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (3))){
var inst_22986 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22988__$1,inst_22986);
} else {
if((state_val_22989 === (12))){
var state_22988__$1 = state_22988;
var statearr_22998_23025 = state_22988__$1;
(statearr_22998_23025[(2)] = null);

(statearr_22998_23025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (2))){
var state_22988__$1 = state_22988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22988__$1,(4),ch);
} else {
if((state_val_22989 === (11))){
var inst_22965 = (state_22988[(7)]);
var inst_22975 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22988__$1,(8),inst_22975,inst_22965);
} else {
if((state_val_22989 === (9))){
var state_22988__$1 = state_22988;
var statearr_22999_23026 = state_22988__$1;
(statearr_22999_23026[(2)] = tc);

(statearr_22999_23026[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (5))){
var inst_22968 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22969 = cljs.core.async.close_BANG_.call(null,fc);
var state_22988__$1 = (function (){var statearr_23000 = state_22988;
(statearr_23000[(8)] = inst_22968);

return statearr_23000;
})();
var statearr_23001_23027 = state_22988__$1;
(statearr_23001_23027[(2)] = inst_22969);

(statearr_23001_23027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (14))){
var inst_22982 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
var statearr_23002_23028 = state_22988__$1;
(statearr_23002_23028[(2)] = inst_22982);

(statearr_23002_23028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (10))){
var state_22988__$1 = state_22988;
var statearr_23003_23029 = state_22988__$1;
(statearr_23003_23029[(2)] = fc);

(statearr_23003_23029[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (8))){
var inst_22977 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
if(cljs.core.truth_(inst_22977)){
var statearr_23004_23030 = state_22988__$1;
(statearr_23004_23030[(1)] = (12));

} else {
var statearr_23005_23031 = state_22988__$1;
(statearr_23005_23031[(1)] = (13));

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
});})(c__22331__auto___23017,tc,fc))
;
return ((function (switch__22219__auto__,c__22331__auto___23017,tc,fc){
return (function() {
var cljs$core$async$state_machine__22220__auto__ = null;
var cljs$core$async$state_machine__22220__auto____0 = (function (){
var statearr_23009 = [null,null,null,null,null,null,null,null,null];
(statearr_23009[(0)] = cljs$core$async$state_machine__22220__auto__);

(statearr_23009[(1)] = (1));

return statearr_23009;
});
var cljs$core$async$state_machine__22220__auto____1 = (function (state_22988){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_22988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e23010){if((e23010 instanceof Object)){
var ex__22223__auto__ = e23010;
var statearr_23011_23032 = state_22988;
(statearr_23011_23032[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23033 = state_22988;
state_22988 = G__23033;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
cljs$core$async$state_machine__22220__auto__ = function(state_22988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22220__auto____1.call(this,state_22988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22220__auto____0;
cljs$core$async$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22220__auto____1;
return cljs$core$async$state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto___23017,tc,fc))
})();
var state__22333__auto__ = (function (){var statearr_23012 = f__22332__auto__.call(null);
(statearr_23012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto___23017);

return statearr_23012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto___23017,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto__){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto__){
return (function (state_23097){
var state_val_23098 = (state_23097[(1)]);
if((state_val_23098 === (7))){
var inst_23093 = (state_23097[(2)]);
var state_23097__$1 = state_23097;
var statearr_23099_23120 = state_23097__$1;
(statearr_23099_23120[(2)] = inst_23093);

(statearr_23099_23120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23098 === (1))){
var inst_23077 = init;
var state_23097__$1 = (function (){var statearr_23100 = state_23097;
(statearr_23100[(7)] = inst_23077);

return statearr_23100;
})();
var statearr_23101_23121 = state_23097__$1;
(statearr_23101_23121[(2)] = null);

(statearr_23101_23121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23098 === (4))){
var inst_23080 = (state_23097[(8)]);
var inst_23080__$1 = (state_23097[(2)]);
var inst_23081 = (inst_23080__$1 == null);
var state_23097__$1 = (function (){var statearr_23102 = state_23097;
(statearr_23102[(8)] = inst_23080__$1);

return statearr_23102;
})();
if(cljs.core.truth_(inst_23081)){
var statearr_23103_23122 = state_23097__$1;
(statearr_23103_23122[(1)] = (5));

} else {
var statearr_23104_23123 = state_23097__$1;
(statearr_23104_23123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23098 === (6))){
var inst_23080 = (state_23097[(8)]);
var inst_23077 = (state_23097[(7)]);
var inst_23084 = (state_23097[(9)]);
var inst_23084__$1 = f.call(null,inst_23077,inst_23080);
var inst_23085 = cljs.core.reduced_QMARK_.call(null,inst_23084__$1);
var state_23097__$1 = (function (){var statearr_23105 = state_23097;
(statearr_23105[(9)] = inst_23084__$1);

return statearr_23105;
})();
if(inst_23085){
var statearr_23106_23124 = state_23097__$1;
(statearr_23106_23124[(1)] = (8));

} else {
var statearr_23107_23125 = state_23097__$1;
(statearr_23107_23125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23098 === (3))){
var inst_23095 = (state_23097[(2)]);
var state_23097__$1 = state_23097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23097__$1,inst_23095);
} else {
if((state_val_23098 === (2))){
var state_23097__$1 = state_23097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23097__$1,(4),ch);
} else {
if((state_val_23098 === (9))){
var inst_23084 = (state_23097[(9)]);
var inst_23077 = inst_23084;
var state_23097__$1 = (function (){var statearr_23108 = state_23097;
(statearr_23108[(7)] = inst_23077);

return statearr_23108;
})();
var statearr_23109_23126 = state_23097__$1;
(statearr_23109_23126[(2)] = null);

(statearr_23109_23126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23098 === (5))){
var inst_23077 = (state_23097[(7)]);
var state_23097__$1 = state_23097;
var statearr_23110_23127 = state_23097__$1;
(statearr_23110_23127[(2)] = inst_23077);

(statearr_23110_23127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23098 === (10))){
var inst_23091 = (state_23097[(2)]);
var state_23097__$1 = state_23097;
var statearr_23111_23128 = state_23097__$1;
(statearr_23111_23128[(2)] = inst_23091);

(statearr_23111_23128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23098 === (8))){
var inst_23084 = (state_23097[(9)]);
var inst_23087 = cljs.core.deref.call(null,inst_23084);
var state_23097__$1 = state_23097;
var statearr_23112_23129 = state_23097__$1;
(statearr_23112_23129[(2)] = inst_23087);

(statearr_23112_23129[(1)] = (10));


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
});})(c__22331__auto__))
;
return ((function (switch__22219__auto__,c__22331__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22220__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22220__auto____0 = (function (){
var statearr_23116 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23116[(0)] = cljs$core$async$reduce_$_state_machine__22220__auto__);

(statearr_23116[(1)] = (1));

return statearr_23116;
});
var cljs$core$async$reduce_$_state_machine__22220__auto____1 = (function (state_23097){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_23097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e23117){if((e23117 instanceof Object)){
var ex__22223__auto__ = e23117;
var statearr_23118_23130 = state_23097;
(statearr_23118_23130[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23131 = state_23097;
state_23097 = G__23131;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22220__auto__ = function(state_23097){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22220__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22220__auto____1.call(this,state_23097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22220__auto____0;
cljs$core$async$reduce_$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22220__auto____1;
return cljs$core$async$reduce_$_state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto__))
})();
var state__22333__auto__ = (function (){var statearr_23119 = f__22332__auto__.call(null);
(statearr_23119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto__);

return statearr_23119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto__))
);

return c__22331__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args23132 = [];
var len__21234__auto___23184 = arguments.length;
var i__21235__auto___23185 = (0);
while(true){
if((i__21235__auto___23185 < len__21234__auto___23184)){
args23132.push((arguments[i__21235__auto___23185]));

var G__23186 = (i__21235__auto___23185 + (1));
i__21235__auto___23185 = G__23186;
continue;
} else {
}
break;
}

var G__23134 = args23132.length;
switch (G__23134) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23132.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto__){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto__){
return (function (state_23159){
var state_val_23160 = (state_23159[(1)]);
if((state_val_23160 === (7))){
var inst_23141 = (state_23159[(2)]);
var state_23159__$1 = state_23159;
var statearr_23161_23188 = state_23159__$1;
(statearr_23161_23188[(2)] = inst_23141);

(statearr_23161_23188[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23160 === (1))){
var inst_23135 = cljs.core.seq.call(null,coll);
var inst_23136 = inst_23135;
var state_23159__$1 = (function (){var statearr_23162 = state_23159;
(statearr_23162[(7)] = inst_23136);

return statearr_23162;
})();
var statearr_23163_23189 = state_23159__$1;
(statearr_23163_23189[(2)] = null);

(statearr_23163_23189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23160 === (4))){
var inst_23136 = (state_23159[(7)]);
var inst_23139 = cljs.core.first.call(null,inst_23136);
var state_23159__$1 = state_23159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23159__$1,(7),ch,inst_23139);
} else {
if((state_val_23160 === (13))){
var inst_23153 = (state_23159[(2)]);
var state_23159__$1 = state_23159;
var statearr_23164_23190 = state_23159__$1;
(statearr_23164_23190[(2)] = inst_23153);

(statearr_23164_23190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23160 === (6))){
var inst_23144 = (state_23159[(2)]);
var state_23159__$1 = state_23159;
if(cljs.core.truth_(inst_23144)){
var statearr_23165_23191 = state_23159__$1;
(statearr_23165_23191[(1)] = (8));

} else {
var statearr_23166_23192 = state_23159__$1;
(statearr_23166_23192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23160 === (3))){
var inst_23157 = (state_23159[(2)]);
var state_23159__$1 = state_23159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23159__$1,inst_23157);
} else {
if((state_val_23160 === (12))){
var state_23159__$1 = state_23159;
var statearr_23167_23193 = state_23159__$1;
(statearr_23167_23193[(2)] = null);

(statearr_23167_23193[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23160 === (2))){
var inst_23136 = (state_23159[(7)]);
var state_23159__$1 = state_23159;
if(cljs.core.truth_(inst_23136)){
var statearr_23168_23194 = state_23159__$1;
(statearr_23168_23194[(1)] = (4));

} else {
var statearr_23169_23195 = state_23159__$1;
(statearr_23169_23195[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23160 === (11))){
var inst_23150 = cljs.core.async.close_BANG_.call(null,ch);
var state_23159__$1 = state_23159;
var statearr_23170_23196 = state_23159__$1;
(statearr_23170_23196[(2)] = inst_23150);

(statearr_23170_23196[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23160 === (9))){
var state_23159__$1 = state_23159;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23171_23197 = state_23159__$1;
(statearr_23171_23197[(1)] = (11));

} else {
var statearr_23172_23198 = state_23159__$1;
(statearr_23172_23198[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23160 === (5))){
var inst_23136 = (state_23159[(7)]);
var state_23159__$1 = state_23159;
var statearr_23173_23199 = state_23159__$1;
(statearr_23173_23199[(2)] = inst_23136);

(statearr_23173_23199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23160 === (10))){
var inst_23155 = (state_23159[(2)]);
var state_23159__$1 = state_23159;
var statearr_23174_23200 = state_23159__$1;
(statearr_23174_23200[(2)] = inst_23155);

(statearr_23174_23200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23160 === (8))){
var inst_23136 = (state_23159[(7)]);
var inst_23146 = cljs.core.next.call(null,inst_23136);
var inst_23136__$1 = inst_23146;
var state_23159__$1 = (function (){var statearr_23175 = state_23159;
(statearr_23175[(7)] = inst_23136__$1);

return statearr_23175;
})();
var statearr_23176_23201 = state_23159__$1;
(statearr_23176_23201[(2)] = null);

(statearr_23176_23201[(1)] = (2));


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
});})(c__22331__auto__))
;
return ((function (switch__22219__auto__,c__22331__auto__){
return (function() {
var cljs$core$async$state_machine__22220__auto__ = null;
var cljs$core$async$state_machine__22220__auto____0 = (function (){
var statearr_23180 = [null,null,null,null,null,null,null,null];
(statearr_23180[(0)] = cljs$core$async$state_machine__22220__auto__);

(statearr_23180[(1)] = (1));

return statearr_23180;
});
var cljs$core$async$state_machine__22220__auto____1 = (function (state_23159){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_23159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e23181){if((e23181 instanceof Object)){
var ex__22223__auto__ = e23181;
var statearr_23182_23202 = state_23159;
(statearr_23182_23202[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23203 = state_23159;
state_23159 = G__23203;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
cljs$core$async$state_machine__22220__auto__ = function(state_23159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22220__auto____1.call(this,state_23159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22220__auto____0;
cljs$core$async$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22220__auto____1;
return cljs$core$async$state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto__))
})();
var state__22333__auto__ = (function (){var statearr_23183 = f__22332__auto__.call(null);
(statearr_23183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto__);

return statearr_23183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto__))
);

return c__22331__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__20822__auto__ = (((_ == null))?null:_);
var m__20823__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,_);
} else {
var m__20823__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__20822__auto__ = (((m == null))?null:m);
var m__20823__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20823__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__20822__auto__ = (((m == null))?null:m);
var m__20823__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,m,ch);
} else {
var m__20823__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__20822__auto__ = (((m == null))?null:m);
var m__20823__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,m);
} else {
var m__20823__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23429 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23429 = (function (mult,ch,cs,meta23430){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23430 = meta23430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23431,meta23430__$1){
var self__ = this;
var _23431__$1 = this;
return (new cljs.core.async.t_cljs$core$async23429(self__.mult,self__.ch,self__.cs,meta23430__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23429.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23431){
var self__ = this;
var _23431__$1 = this;
return self__.meta23430;
});})(cs))
;

cljs.core.async.t_cljs$core$async23429.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23429.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23429.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23429.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23429.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23429.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23429.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23430","meta23430",74335198,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23429";

cljs.core.async.t_cljs$core$async23429.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20765__auto__,writer__20766__auto__,opt__20767__auto__){
return cljs.core._write.call(null,writer__20766__auto__,"cljs.core.async/t_cljs$core$async23429");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23429 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23429(mult__$1,ch__$1,cs__$1,meta23430){
return (new cljs.core.async.t_cljs$core$async23429(mult__$1,ch__$1,cs__$1,meta23430));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23429(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22331__auto___23654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto___23654,cs,m,dchan,dctr,done){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto___23654,cs,m,dchan,dctr,done){
return (function (state_23566){
var state_val_23567 = (state_23566[(1)]);
if((state_val_23567 === (7))){
var inst_23562 = (state_23566[(2)]);
var state_23566__$1 = state_23566;
var statearr_23568_23655 = state_23566__$1;
(statearr_23568_23655[(2)] = inst_23562);

(statearr_23568_23655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (20))){
var inst_23465 = (state_23566[(7)]);
var inst_23477 = cljs.core.first.call(null,inst_23465);
var inst_23478 = cljs.core.nth.call(null,inst_23477,(0),null);
var inst_23479 = cljs.core.nth.call(null,inst_23477,(1),null);
var state_23566__$1 = (function (){var statearr_23569 = state_23566;
(statearr_23569[(8)] = inst_23478);

return statearr_23569;
})();
if(cljs.core.truth_(inst_23479)){
var statearr_23570_23656 = state_23566__$1;
(statearr_23570_23656[(1)] = (22));

} else {
var statearr_23571_23657 = state_23566__$1;
(statearr_23571_23657[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (27))){
var inst_23514 = (state_23566[(9)]);
var inst_23507 = (state_23566[(10)]);
var inst_23509 = (state_23566[(11)]);
var inst_23434 = (state_23566[(12)]);
var inst_23514__$1 = cljs.core._nth.call(null,inst_23507,inst_23509);
var inst_23515 = cljs.core.async.put_BANG_.call(null,inst_23514__$1,inst_23434,done);
var state_23566__$1 = (function (){var statearr_23572 = state_23566;
(statearr_23572[(9)] = inst_23514__$1);

return statearr_23572;
})();
if(cljs.core.truth_(inst_23515)){
var statearr_23573_23658 = state_23566__$1;
(statearr_23573_23658[(1)] = (30));

} else {
var statearr_23574_23659 = state_23566__$1;
(statearr_23574_23659[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (1))){
var state_23566__$1 = state_23566;
var statearr_23575_23660 = state_23566__$1;
(statearr_23575_23660[(2)] = null);

(statearr_23575_23660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (24))){
var inst_23465 = (state_23566[(7)]);
var inst_23484 = (state_23566[(2)]);
var inst_23485 = cljs.core.next.call(null,inst_23465);
var inst_23443 = inst_23485;
var inst_23444 = null;
var inst_23445 = (0);
var inst_23446 = (0);
var state_23566__$1 = (function (){var statearr_23576 = state_23566;
(statearr_23576[(13)] = inst_23444);

(statearr_23576[(14)] = inst_23443);

(statearr_23576[(15)] = inst_23446);

(statearr_23576[(16)] = inst_23445);

(statearr_23576[(17)] = inst_23484);

return statearr_23576;
})();
var statearr_23577_23661 = state_23566__$1;
(statearr_23577_23661[(2)] = null);

(statearr_23577_23661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (39))){
var state_23566__$1 = state_23566;
var statearr_23581_23662 = state_23566__$1;
(statearr_23581_23662[(2)] = null);

(statearr_23581_23662[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (4))){
var inst_23434 = (state_23566[(12)]);
var inst_23434__$1 = (state_23566[(2)]);
var inst_23435 = (inst_23434__$1 == null);
var state_23566__$1 = (function (){var statearr_23582 = state_23566;
(statearr_23582[(12)] = inst_23434__$1);

return statearr_23582;
})();
if(cljs.core.truth_(inst_23435)){
var statearr_23583_23663 = state_23566__$1;
(statearr_23583_23663[(1)] = (5));

} else {
var statearr_23584_23664 = state_23566__$1;
(statearr_23584_23664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (15))){
var inst_23444 = (state_23566[(13)]);
var inst_23443 = (state_23566[(14)]);
var inst_23446 = (state_23566[(15)]);
var inst_23445 = (state_23566[(16)]);
var inst_23461 = (state_23566[(2)]);
var inst_23462 = (inst_23446 + (1));
var tmp23578 = inst_23444;
var tmp23579 = inst_23443;
var tmp23580 = inst_23445;
var inst_23443__$1 = tmp23579;
var inst_23444__$1 = tmp23578;
var inst_23445__$1 = tmp23580;
var inst_23446__$1 = inst_23462;
var state_23566__$1 = (function (){var statearr_23585 = state_23566;
(statearr_23585[(13)] = inst_23444__$1);

(statearr_23585[(14)] = inst_23443__$1);

(statearr_23585[(18)] = inst_23461);

(statearr_23585[(15)] = inst_23446__$1);

(statearr_23585[(16)] = inst_23445__$1);

return statearr_23585;
})();
var statearr_23586_23665 = state_23566__$1;
(statearr_23586_23665[(2)] = null);

(statearr_23586_23665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (21))){
var inst_23488 = (state_23566[(2)]);
var state_23566__$1 = state_23566;
var statearr_23590_23666 = state_23566__$1;
(statearr_23590_23666[(2)] = inst_23488);

(statearr_23590_23666[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (31))){
var inst_23514 = (state_23566[(9)]);
var inst_23518 = done.call(null,null);
var inst_23519 = cljs.core.async.untap_STAR_.call(null,m,inst_23514);
var state_23566__$1 = (function (){var statearr_23591 = state_23566;
(statearr_23591[(19)] = inst_23518);

return statearr_23591;
})();
var statearr_23592_23667 = state_23566__$1;
(statearr_23592_23667[(2)] = inst_23519);

(statearr_23592_23667[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (32))){
var inst_23506 = (state_23566[(20)]);
var inst_23507 = (state_23566[(10)]);
var inst_23509 = (state_23566[(11)]);
var inst_23508 = (state_23566[(21)]);
var inst_23521 = (state_23566[(2)]);
var inst_23522 = (inst_23509 + (1));
var tmp23587 = inst_23506;
var tmp23588 = inst_23507;
var tmp23589 = inst_23508;
var inst_23506__$1 = tmp23587;
var inst_23507__$1 = tmp23588;
var inst_23508__$1 = tmp23589;
var inst_23509__$1 = inst_23522;
var state_23566__$1 = (function (){var statearr_23593 = state_23566;
(statearr_23593[(20)] = inst_23506__$1);

(statearr_23593[(10)] = inst_23507__$1);

(statearr_23593[(11)] = inst_23509__$1);

(statearr_23593[(21)] = inst_23508__$1);

(statearr_23593[(22)] = inst_23521);

return statearr_23593;
})();
var statearr_23594_23668 = state_23566__$1;
(statearr_23594_23668[(2)] = null);

(statearr_23594_23668[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (40))){
var inst_23534 = (state_23566[(23)]);
var inst_23538 = done.call(null,null);
var inst_23539 = cljs.core.async.untap_STAR_.call(null,m,inst_23534);
var state_23566__$1 = (function (){var statearr_23595 = state_23566;
(statearr_23595[(24)] = inst_23538);

return statearr_23595;
})();
var statearr_23596_23669 = state_23566__$1;
(statearr_23596_23669[(2)] = inst_23539);

(statearr_23596_23669[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (33))){
var inst_23525 = (state_23566[(25)]);
var inst_23527 = cljs.core.chunked_seq_QMARK_.call(null,inst_23525);
var state_23566__$1 = state_23566;
if(inst_23527){
var statearr_23597_23670 = state_23566__$1;
(statearr_23597_23670[(1)] = (36));

} else {
var statearr_23598_23671 = state_23566__$1;
(statearr_23598_23671[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (13))){
var inst_23455 = (state_23566[(26)]);
var inst_23458 = cljs.core.async.close_BANG_.call(null,inst_23455);
var state_23566__$1 = state_23566;
var statearr_23599_23672 = state_23566__$1;
(statearr_23599_23672[(2)] = inst_23458);

(statearr_23599_23672[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (22))){
var inst_23478 = (state_23566[(8)]);
var inst_23481 = cljs.core.async.close_BANG_.call(null,inst_23478);
var state_23566__$1 = state_23566;
var statearr_23600_23673 = state_23566__$1;
(statearr_23600_23673[(2)] = inst_23481);

(statearr_23600_23673[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (36))){
var inst_23525 = (state_23566[(25)]);
var inst_23529 = cljs.core.chunk_first.call(null,inst_23525);
var inst_23530 = cljs.core.chunk_rest.call(null,inst_23525);
var inst_23531 = cljs.core.count.call(null,inst_23529);
var inst_23506 = inst_23530;
var inst_23507 = inst_23529;
var inst_23508 = inst_23531;
var inst_23509 = (0);
var state_23566__$1 = (function (){var statearr_23601 = state_23566;
(statearr_23601[(20)] = inst_23506);

(statearr_23601[(10)] = inst_23507);

(statearr_23601[(11)] = inst_23509);

(statearr_23601[(21)] = inst_23508);

return statearr_23601;
})();
var statearr_23602_23674 = state_23566__$1;
(statearr_23602_23674[(2)] = null);

(statearr_23602_23674[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (41))){
var inst_23525 = (state_23566[(25)]);
var inst_23541 = (state_23566[(2)]);
var inst_23542 = cljs.core.next.call(null,inst_23525);
var inst_23506 = inst_23542;
var inst_23507 = null;
var inst_23508 = (0);
var inst_23509 = (0);
var state_23566__$1 = (function (){var statearr_23603 = state_23566;
(statearr_23603[(20)] = inst_23506);

(statearr_23603[(10)] = inst_23507);

(statearr_23603[(27)] = inst_23541);

(statearr_23603[(11)] = inst_23509);

(statearr_23603[(21)] = inst_23508);

return statearr_23603;
})();
var statearr_23604_23675 = state_23566__$1;
(statearr_23604_23675[(2)] = null);

(statearr_23604_23675[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (43))){
var state_23566__$1 = state_23566;
var statearr_23605_23676 = state_23566__$1;
(statearr_23605_23676[(2)] = null);

(statearr_23605_23676[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (29))){
var inst_23550 = (state_23566[(2)]);
var state_23566__$1 = state_23566;
var statearr_23606_23677 = state_23566__$1;
(statearr_23606_23677[(2)] = inst_23550);

(statearr_23606_23677[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (44))){
var inst_23559 = (state_23566[(2)]);
var state_23566__$1 = (function (){var statearr_23607 = state_23566;
(statearr_23607[(28)] = inst_23559);

return statearr_23607;
})();
var statearr_23608_23678 = state_23566__$1;
(statearr_23608_23678[(2)] = null);

(statearr_23608_23678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (6))){
var inst_23498 = (state_23566[(29)]);
var inst_23497 = cljs.core.deref.call(null,cs);
var inst_23498__$1 = cljs.core.keys.call(null,inst_23497);
var inst_23499 = cljs.core.count.call(null,inst_23498__$1);
var inst_23500 = cljs.core.reset_BANG_.call(null,dctr,inst_23499);
var inst_23505 = cljs.core.seq.call(null,inst_23498__$1);
var inst_23506 = inst_23505;
var inst_23507 = null;
var inst_23508 = (0);
var inst_23509 = (0);
var state_23566__$1 = (function (){var statearr_23609 = state_23566;
(statearr_23609[(20)] = inst_23506);

(statearr_23609[(10)] = inst_23507);

(statearr_23609[(11)] = inst_23509);

(statearr_23609[(21)] = inst_23508);

(statearr_23609[(30)] = inst_23500);

(statearr_23609[(29)] = inst_23498__$1);

return statearr_23609;
})();
var statearr_23610_23679 = state_23566__$1;
(statearr_23610_23679[(2)] = null);

(statearr_23610_23679[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (28))){
var inst_23506 = (state_23566[(20)]);
var inst_23525 = (state_23566[(25)]);
var inst_23525__$1 = cljs.core.seq.call(null,inst_23506);
var state_23566__$1 = (function (){var statearr_23611 = state_23566;
(statearr_23611[(25)] = inst_23525__$1);

return statearr_23611;
})();
if(inst_23525__$1){
var statearr_23612_23680 = state_23566__$1;
(statearr_23612_23680[(1)] = (33));

} else {
var statearr_23613_23681 = state_23566__$1;
(statearr_23613_23681[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (25))){
var inst_23509 = (state_23566[(11)]);
var inst_23508 = (state_23566[(21)]);
var inst_23511 = (inst_23509 < inst_23508);
var inst_23512 = inst_23511;
var state_23566__$1 = state_23566;
if(cljs.core.truth_(inst_23512)){
var statearr_23614_23682 = state_23566__$1;
(statearr_23614_23682[(1)] = (27));

} else {
var statearr_23615_23683 = state_23566__$1;
(statearr_23615_23683[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (34))){
var state_23566__$1 = state_23566;
var statearr_23616_23684 = state_23566__$1;
(statearr_23616_23684[(2)] = null);

(statearr_23616_23684[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (17))){
var state_23566__$1 = state_23566;
var statearr_23617_23685 = state_23566__$1;
(statearr_23617_23685[(2)] = null);

(statearr_23617_23685[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (3))){
var inst_23564 = (state_23566[(2)]);
var state_23566__$1 = state_23566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23566__$1,inst_23564);
} else {
if((state_val_23567 === (12))){
var inst_23493 = (state_23566[(2)]);
var state_23566__$1 = state_23566;
var statearr_23618_23686 = state_23566__$1;
(statearr_23618_23686[(2)] = inst_23493);

(statearr_23618_23686[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (2))){
var state_23566__$1 = state_23566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23566__$1,(4),ch);
} else {
if((state_val_23567 === (23))){
var state_23566__$1 = state_23566;
var statearr_23619_23687 = state_23566__$1;
(statearr_23619_23687[(2)] = null);

(statearr_23619_23687[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (35))){
var inst_23548 = (state_23566[(2)]);
var state_23566__$1 = state_23566;
var statearr_23620_23688 = state_23566__$1;
(statearr_23620_23688[(2)] = inst_23548);

(statearr_23620_23688[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (19))){
var inst_23465 = (state_23566[(7)]);
var inst_23469 = cljs.core.chunk_first.call(null,inst_23465);
var inst_23470 = cljs.core.chunk_rest.call(null,inst_23465);
var inst_23471 = cljs.core.count.call(null,inst_23469);
var inst_23443 = inst_23470;
var inst_23444 = inst_23469;
var inst_23445 = inst_23471;
var inst_23446 = (0);
var state_23566__$1 = (function (){var statearr_23621 = state_23566;
(statearr_23621[(13)] = inst_23444);

(statearr_23621[(14)] = inst_23443);

(statearr_23621[(15)] = inst_23446);

(statearr_23621[(16)] = inst_23445);

return statearr_23621;
})();
var statearr_23622_23689 = state_23566__$1;
(statearr_23622_23689[(2)] = null);

(statearr_23622_23689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (11))){
var inst_23443 = (state_23566[(14)]);
var inst_23465 = (state_23566[(7)]);
var inst_23465__$1 = cljs.core.seq.call(null,inst_23443);
var state_23566__$1 = (function (){var statearr_23623 = state_23566;
(statearr_23623[(7)] = inst_23465__$1);

return statearr_23623;
})();
if(inst_23465__$1){
var statearr_23624_23690 = state_23566__$1;
(statearr_23624_23690[(1)] = (16));

} else {
var statearr_23625_23691 = state_23566__$1;
(statearr_23625_23691[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (9))){
var inst_23495 = (state_23566[(2)]);
var state_23566__$1 = state_23566;
var statearr_23626_23692 = state_23566__$1;
(statearr_23626_23692[(2)] = inst_23495);

(statearr_23626_23692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (5))){
var inst_23441 = cljs.core.deref.call(null,cs);
var inst_23442 = cljs.core.seq.call(null,inst_23441);
var inst_23443 = inst_23442;
var inst_23444 = null;
var inst_23445 = (0);
var inst_23446 = (0);
var state_23566__$1 = (function (){var statearr_23627 = state_23566;
(statearr_23627[(13)] = inst_23444);

(statearr_23627[(14)] = inst_23443);

(statearr_23627[(15)] = inst_23446);

(statearr_23627[(16)] = inst_23445);

return statearr_23627;
})();
var statearr_23628_23693 = state_23566__$1;
(statearr_23628_23693[(2)] = null);

(statearr_23628_23693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (14))){
var state_23566__$1 = state_23566;
var statearr_23629_23694 = state_23566__$1;
(statearr_23629_23694[(2)] = null);

(statearr_23629_23694[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (45))){
var inst_23556 = (state_23566[(2)]);
var state_23566__$1 = state_23566;
var statearr_23630_23695 = state_23566__$1;
(statearr_23630_23695[(2)] = inst_23556);

(statearr_23630_23695[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (26))){
var inst_23498 = (state_23566[(29)]);
var inst_23552 = (state_23566[(2)]);
var inst_23553 = cljs.core.seq.call(null,inst_23498);
var state_23566__$1 = (function (){var statearr_23631 = state_23566;
(statearr_23631[(31)] = inst_23552);

return statearr_23631;
})();
if(inst_23553){
var statearr_23632_23696 = state_23566__$1;
(statearr_23632_23696[(1)] = (42));

} else {
var statearr_23633_23697 = state_23566__$1;
(statearr_23633_23697[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (16))){
var inst_23465 = (state_23566[(7)]);
var inst_23467 = cljs.core.chunked_seq_QMARK_.call(null,inst_23465);
var state_23566__$1 = state_23566;
if(inst_23467){
var statearr_23634_23698 = state_23566__$1;
(statearr_23634_23698[(1)] = (19));

} else {
var statearr_23635_23699 = state_23566__$1;
(statearr_23635_23699[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (38))){
var inst_23545 = (state_23566[(2)]);
var state_23566__$1 = state_23566;
var statearr_23636_23700 = state_23566__$1;
(statearr_23636_23700[(2)] = inst_23545);

(statearr_23636_23700[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (30))){
var state_23566__$1 = state_23566;
var statearr_23637_23701 = state_23566__$1;
(statearr_23637_23701[(2)] = null);

(statearr_23637_23701[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (10))){
var inst_23444 = (state_23566[(13)]);
var inst_23446 = (state_23566[(15)]);
var inst_23454 = cljs.core._nth.call(null,inst_23444,inst_23446);
var inst_23455 = cljs.core.nth.call(null,inst_23454,(0),null);
var inst_23456 = cljs.core.nth.call(null,inst_23454,(1),null);
var state_23566__$1 = (function (){var statearr_23638 = state_23566;
(statearr_23638[(26)] = inst_23455);

return statearr_23638;
})();
if(cljs.core.truth_(inst_23456)){
var statearr_23639_23702 = state_23566__$1;
(statearr_23639_23702[(1)] = (13));

} else {
var statearr_23640_23703 = state_23566__$1;
(statearr_23640_23703[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (18))){
var inst_23491 = (state_23566[(2)]);
var state_23566__$1 = state_23566;
var statearr_23641_23704 = state_23566__$1;
(statearr_23641_23704[(2)] = inst_23491);

(statearr_23641_23704[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (42))){
var state_23566__$1 = state_23566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23566__$1,(45),dchan);
} else {
if((state_val_23567 === (37))){
var inst_23434 = (state_23566[(12)]);
var inst_23525 = (state_23566[(25)]);
var inst_23534 = (state_23566[(23)]);
var inst_23534__$1 = cljs.core.first.call(null,inst_23525);
var inst_23535 = cljs.core.async.put_BANG_.call(null,inst_23534__$1,inst_23434,done);
var state_23566__$1 = (function (){var statearr_23642 = state_23566;
(statearr_23642[(23)] = inst_23534__$1);

return statearr_23642;
})();
if(cljs.core.truth_(inst_23535)){
var statearr_23643_23705 = state_23566__$1;
(statearr_23643_23705[(1)] = (39));

} else {
var statearr_23644_23706 = state_23566__$1;
(statearr_23644_23706[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23567 === (8))){
var inst_23446 = (state_23566[(15)]);
var inst_23445 = (state_23566[(16)]);
var inst_23448 = (inst_23446 < inst_23445);
var inst_23449 = inst_23448;
var state_23566__$1 = state_23566;
if(cljs.core.truth_(inst_23449)){
var statearr_23645_23707 = state_23566__$1;
(statearr_23645_23707[(1)] = (10));

} else {
var statearr_23646_23708 = state_23566__$1;
(statearr_23646_23708[(1)] = (11));

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
});})(c__22331__auto___23654,cs,m,dchan,dctr,done))
;
return ((function (switch__22219__auto__,c__22331__auto___23654,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22220__auto__ = null;
var cljs$core$async$mult_$_state_machine__22220__auto____0 = (function (){
var statearr_23650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23650[(0)] = cljs$core$async$mult_$_state_machine__22220__auto__);

(statearr_23650[(1)] = (1));

return statearr_23650;
});
var cljs$core$async$mult_$_state_machine__22220__auto____1 = (function (state_23566){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_23566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e23651){if((e23651 instanceof Object)){
var ex__22223__auto__ = e23651;
var statearr_23652_23709 = state_23566;
(statearr_23652_23709[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23710 = state_23566;
state_23566 = G__23710;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22220__auto__ = function(state_23566){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22220__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22220__auto____1.call(this,state_23566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22220__auto____0;
cljs$core$async$mult_$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22220__auto____1;
return cljs$core$async$mult_$_state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto___23654,cs,m,dchan,dctr,done))
})();
var state__22333__auto__ = (function (){var statearr_23653 = f__22332__auto__.call(null);
(statearr_23653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto___23654);

return statearr_23653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto___23654,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23711 = [];
var len__21234__auto___23714 = arguments.length;
var i__21235__auto___23715 = (0);
while(true){
if((i__21235__auto___23715 < len__21234__auto___23714)){
args23711.push((arguments[i__21235__auto___23715]));

var G__23716 = (i__21235__auto___23715 + (1));
i__21235__auto___23715 = G__23716;
continue;
} else {
}
break;
}

var G__23713 = args23711.length;
switch (G__23713) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23711.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__20822__auto__ = (((m == null))?null:m);
var m__20823__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,m,ch);
} else {
var m__20823__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__20822__auto__ = (((m == null))?null:m);
var m__20823__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,m,ch);
} else {
var m__20823__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__20822__auto__ = (((m == null))?null:m);
var m__20823__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,m);
} else {
var m__20823__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__20822__auto__ = (((m == null))?null:m);
var m__20823__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,m,state_map);
} else {
var m__20823__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__20822__auto__ = (((m == null))?null:m);
var m__20823__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,m,mode);
} else {
var m__20823__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__21241__auto__ = [];
var len__21234__auto___23728 = arguments.length;
var i__21235__auto___23729 = (0);
while(true){
if((i__21235__auto___23729 < len__21234__auto___23728)){
args__21241__auto__.push((arguments[i__21235__auto___23729]));

var G__23730 = (i__21235__auto___23729 + (1));
i__21235__auto___23729 = G__23730;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((3) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21242__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23722){
var map__23723 = p__23722;
var map__23723__$1 = ((((!((map__23723 == null)))?((((map__23723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23723):map__23723);
var opts = map__23723__$1;
var statearr_23725_23731 = state;
(statearr_23725_23731[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23723,map__23723__$1,opts){
return (function (val){
var statearr_23726_23732 = state;
(statearr_23726_23732[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23723,map__23723__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23727_23733 = state;
(statearr_23727_23733[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23718){
var G__23719 = cljs.core.first.call(null,seq23718);
var seq23718__$1 = cljs.core.next.call(null,seq23718);
var G__23720 = cljs.core.first.call(null,seq23718__$1);
var seq23718__$2 = cljs.core.next.call(null,seq23718__$1);
var G__23721 = cljs.core.first.call(null,seq23718__$2);
var seq23718__$3 = cljs.core.next.call(null,seq23718__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23719,G__23720,G__23721,seq23718__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23899 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23899 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23900){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23900 = meta23900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23901,meta23900__$1){
var self__ = this;
var _23901__$1 = this;
return (new cljs.core.async.t_cljs$core$async23899(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23900__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23899.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23901){
var self__ = this;
var _23901__$1 = this;
return self__.meta23900;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23899.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23899.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23899.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23899.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23899.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23899.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23899.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23899.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23899.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23900","meta23900",1789257819,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23899.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23899";

cljs.core.async.t_cljs$core$async23899.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20765__auto__,writer__20766__auto__,opt__20767__auto__){
return cljs.core._write.call(null,writer__20766__auto__,"cljs.core.async/t_cljs$core$async23899");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23899 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23899(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23900){
return (new cljs.core.async.t_cljs$core$async23899(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23900));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23899(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22331__auto___24064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto___24064,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto___24064,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24001){
var state_val_24002 = (state_24001[(1)]);
if((state_val_24002 === (7))){
var inst_23917 = (state_24001[(2)]);
var state_24001__$1 = state_24001;
var statearr_24003_24065 = state_24001__$1;
(statearr_24003_24065[(2)] = inst_23917);

(statearr_24003_24065[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (20))){
var inst_23929 = (state_24001[(7)]);
var state_24001__$1 = state_24001;
var statearr_24004_24066 = state_24001__$1;
(statearr_24004_24066[(2)] = inst_23929);

(statearr_24004_24066[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (27))){
var state_24001__$1 = state_24001;
var statearr_24005_24067 = state_24001__$1;
(statearr_24005_24067[(2)] = null);

(statearr_24005_24067[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (1))){
var inst_23905 = (state_24001[(8)]);
var inst_23905__$1 = calc_state.call(null);
var inst_23907 = (inst_23905__$1 == null);
var inst_23908 = cljs.core.not.call(null,inst_23907);
var state_24001__$1 = (function (){var statearr_24006 = state_24001;
(statearr_24006[(8)] = inst_23905__$1);

return statearr_24006;
})();
if(inst_23908){
var statearr_24007_24068 = state_24001__$1;
(statearr_24007_24068[(1)] = (2));

} else {
var statearr_24008_24069 = state_24001__$1;
(statearr_24008_24069[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (24))){
var inst_23975 = (state_24001[(9)]);
var inst_23961 = (state_24001[(10)]);
var inst_23952 = (state_24001[(11)]);
var inst_23975__$1 = inst_23952.call(null,inst_23961);
var state_24001__$1 = (function (){var statearr_24009 = state_24001;
(statearr_24009[(9)] = inst_23975__$1);

return statearr_24009;
})();
if(cljs.core.truth_(inst_23975__$1)){
var statearr_24010_24070 = state_24001__$1;
(statearr_24010_24070[(1)] = (29));

} else {
var statearr_24011_24071 = state_24001__$1;
(statearr_24011_24071[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (4))){
var inst_23920 = (state_24001[(2)]);
var state_24001__$1 = state_24001;
if(cljs.core.truth_(inst_23920)){
var statearr_24012_24072 = state_24001__$1;
(statearr_24012_24072[(1)] = (8));

} else {
var statearr_24013_24073 = state_24001__$1;
(statearr_24013_24073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (15))){
var inst_23946 = (state_24001[(2)]);
var state_24001__$1 = state_24001;
if(cljs.core.truth_(inst_23946)){
var statearr_24014_24074 = state_24001__$1;
(statearr_24014_24074[(1)] = (19));

} else {
var statearr_24015_24075 = state_24001__$1;
(statearr_24015_24075[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (21))){
var inst_23951 = (state_24001[(12)]);
var inst_23951__$1 = (state_24001[(2)]);
var inst_23952 = cljs.core.get.call(null,inst_23951__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23953 = cljs.core.get.call(null,inst_23951__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23954 = cljs.core.get.call(null,inst_23951__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24001__$1 = (function (){var statearr_24016 = state_24001;
(statearr_24016[(13)] = inst_23953);

(statearr_24016[(11)] = inst_23952);

(statearr_24016[(12)] = inst_23951__$1);

return statearr_24016;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24001__$1,(22),inst_23954);
} else {
if((state_val_24002 === (31))){
var inst_23983 = (state_24001[(2)]);
var state_24001__$1 = state_24001;
if(cljs.core.truth_(inst_23983)){
var statearr_24017_24076 = state_24001__$1;
(statearr_24017_24076[(1)] = (32));

} else {
var statearr_24018_24077 = state_24001__$1;
(statearr_24018_24077[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (32))){
var inst_23960 = (state_24001[(14)]);
var state_24001__$1 = state_24001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24001__$1,(35),out,inst_23960);
} else {
if((state_val_24002 === (33))){
var inst_23951 = (state_24001[(12)]);
var inst_23929 = inst_23951;
var state_24001__$1 = (function (){var statearr_24019 = state_24001;
(statearr_24019[(7)] = inst_23929);

return statearr_24019;
})();
var statearr_24020_24078 = state_24001__$1;
(statearr_24020_24078[(2)] = null);

(statearr_24020_24078[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (13))){
var inst_23929 = (state_24001[(7)]);
var inst_23936 = inst_23929.cljs$lang$protocol_mask$partition0$;
var inst_23937 = (inst_23936 & (64));
var inst_23938 = inst_23929.cljs$core$ISeq$;
var inst_23939 = (inst_23937) || (inst_23938);
var state_24001__$1 = state_24001;
if(cljs.core.truth_(inst_23939)){
var statearr_24021_24079 = state_24001__$1;
(statearr_24021_24079[(1)] = (16));

} else {
var statearr_24022_24080 = state_24001__$1;
(statearr_24022_24080[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (22))){
var inst_23960 = (state_24001[(14)]);
var inst_23961 = (state_24001[(10)]);
var inst_23959 = (state_24001[(2)]);
var inst_23960__$1 = cljs.core.nth.call(null,inst_23959,(0),null);
var inst_23961__$1 = cljs.core.nth.call(null,inst_23959,(1),null);
var inst_23962 = (inst_23960__$1 == null);
var inst_23963 = cljs.core._EQ_.call(null,inst_23961__$1,change);
var inst_23964 = (inst_23962) || (inst_23963);
var state_24001__$1 = (function (){var statearr_24023 = state_24001;
(statearr_24023[(14)] = inst_23960__$1);

(statearr_24023[(10)] = inst_23961__$1);

return statearr_24023;
})();
if(cljs.core.truth_(inst_23964)){
var statearr_24024_24081 = state_24001__$1;
(statearr_24024_24081[(1)] = (23));

} else {
var statearr_24025_24082 = state_24001__$1;
(statearr_24025_24082[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (36))){
var inst_23951 = (state_24001[(12)]);
var inst_23929 = inst_23951;
var state_24001__$1 = (function (){var statearr_24026 = state_24001;
(statearr_24026[(7)] = inst_23929);

return statearr_24026;
})();
var statearr_24027_24083 = state_24001__$1;
(statearr_24027_24083[(2)] = null);

(statearr_24027_24083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (29))){
var inst_23975 = (state_24001[(9)]);
var state_24001__$1 = state_24001;
var statearr_24028_24084 = state_24001__$1;
(statearr_24028_24084[(2)] = inst_23975);

(statearr_24028_24084[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (6))){
var state_24001__$1 = state_24001;
var statearr_24029_24085 = state_24001__$1;
(statearr_24029_24085[(2)] = false);

(statearr_24029_24085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (28))){
var inst_23971 = (state_24001[(2)]);
var inst_23972 = calc_state.call(null);
var inst_23929 = inst_23972;
var state_24001__$1 = (function (){var statearr_24030 = state_24001;
(statearr_24030[(7)] = inst_23929);

(statearr_24030[(15)] = inst_23971);

return statearr_24030;
})();
var statearr_24031_24086 = state_24001__$1;
(statearr_24031_24086[(2)] = null);

(statearr_24031_24086[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (25))){
var inst_23997 = (state_24001[(2)]);
var state_24001__$1 = state_24001;
var statearr_24032_24087 = state_24001__$1;
(statearr_24032_24087[(2)] = inst_23997);

(statearr_24032_24087[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (34))){
var inst_23995 = (state_24001[(2)]);
var state_24001__$1 = state_24001;
var statearr_24033_24088 = state_24001__$1;
(statearr_24033_24088[(2)] = inst_23995);

(statearr_24033_24088[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (17))){
var state_24001__$1 = state_24001;
var statearr_24034_24089 = state_24001__$1;
(statearr_24034_24089[(2)] = false);

(statearr_24034_24089[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (3))){
var state_24001__$1 = state_24001;
var statearr_24035_24090 = state_24001__$1;
(statearr_24035_24090[(2)] = false);

(statearr_24035_24090[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (12))){
var inst_23999 = (state_24001[(2)]);
var state_24001__$1 = state_24001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24001__$1,inst_23999);
} else {
if((state_val_24002 === (2))){
var inst_23905 = (state_24001[(8)]);
var inst_23910 = inst_23905.cljs$lang$protocol_mask$partition0$;
var inst_23911 = (inst_23910 & (64));
var inst_23912 = inst_23905.cljs$core$ISeq$;
var inst_23913 = (inst_23911) || (inst_23912);
var state_24001__$1 = state_24001;
if(cljs.core.truth_(inst_23913)){
var statearr_24036_24091 = state_24001__$1;
(statearr_24036_24091[(1)] = (5));

} else {
var statearr_24037_24092 = state_24001__$1;
(statearr_24037_24092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (23))){
var inst_23960 = (state_24001[(14)]);
var inst_23966 = (inst_23960 == null);
var state_24001__$1 = state_24001;
if(cljs.core.truth_(inst_23966)){
var statearr_24038_24093 = state_24001__$1;
(statearr_24038_24093[(1)] = (26));

} else {
var statearr_24039_24094 = state_24001__$1;
(statearr_24039_24094[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (35))){
var inst_23986 = (state_24001[(2)]);
var state_24001__$1 = state_24001;
if(cljs.core.truth_(inst_23986)){
var statearr_24040_24095 = state_24001__$1;
(statearr_24040_24095[(1)] = (36));

} else {
var statearr_24041_24096 = state_24001__$1;
(statearr_24041_24096[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (19))){
var inst_23929 = (state_24001[(7)]);
var inst_23948 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23929);
var state_24001__$1 = state_24001;
var statearr_24042_24097 = state_24001__$1;
(statearr_24042_24097[(2)] = inst_23948);

(statearr_24042_24097[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (11))){
var inst_23929 = (state_24001[(7)]);
var inst_23933 = (inst_23929 == null);
var inst_23934 = cljs.core.not.call(null,inst_23933);
var state_24001__$1 = state_24001;
if(inst_23934){
var statearr_24043_24098 = state_24001__$1;
(statearr_24043_24098[(1)] = (13));

} else {
var statearr_24044_24099 = state_24001__$1;
(statearr_24044_24099[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (9))){
var inst_23905 = (state_24001[(8)]);
var state_24001__$1 = state_24001;
var statearr_24045_24100 = state_24001__$1;
(statearr_24045_24100[(2)] = inst_23905);

(statearr_24045_24100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (5))){
var state_24001__$1 = state_24001;
var statearr_24046_24101 = state_24001__$1;
(statearr_24046_24101[(2)] = true);

(statearr_24046_24101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (14))){
var state_24001__$1 = state_24001;
var statearr_24047_24102 = state_24001__$1;
(statearr_24047_24102[(2)] = false);

(statearr_24047_24102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (26))){
var inst_23961 = (state_24001[(10)]);
var inst_23968 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23961);
var state_24001__$1 = state_24001;
var statearr_24048_24103 = state_24001__$1;
(statearr_24048_24103[(2)] = inst_23968);

(statearr_24048_24103[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (16))){
var state_24001__$1 = state_24001;
var statearr_24049_24104 = state_24001__$1;
(statearr_24049_24104[(2)] = true);

(statearr_24049_24104[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (38))){
var inst_23991 = (state_24001[(2)]);
var state_24001__$1 = state_24001;
var statearr_24050_24105 = state_24001__$1;
(statearr_24050_24105[(2)] = inst_23991);

(statearr_24050_24105[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (30))){
var inst_23953 = (state_24001[(13)]);
var inst_23961 = (state_24001[(10)]);
var inst_23952 = (state_24001[(11)]);
var inst_23978 = cljs.core.empty_QMARK_.call(null,inst_23952);
var inst_23979 = inst_23953.call(null,inst_23961);
var inst_23980 = cljs.core.not.call(null,inst_23979);
var inst_23981 = (inst_23978) && (inst_23980);
var state_24001__$1 = state_24001;
var statearr_24051_24106 = state_24001__$1;
(statearr_24051_24106[(2)] = inst_23981);

(statearr_24051_24106[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (10))){
var inst_23905 = (state_24001[(8)]);
var inst_23925 = (state_24001[(2)]);
var inst_23926 = cljs.core.get.call(null,inst_23925,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23927 = cljs.core.get.call(null,inst_23925,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23928 = cljs.core.get.call(null,inst_23925,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23929 = inst_23905;
var state_24001__$1 = (function (){var statearr_24052 = state_24001;
(statearr_24052[(16)] = inst_23926);

(statearr_24052[(17)] = inst_23927);

(statearr_24052[(7)] = inst_23929);

(statearr_24052[(18)] = inst_23928);

return statearr_24052;
})();
var statearr_24053_24107 = state_24001__$1;
(statearr_24053_24107[(2)] = null);

(statearr_24053_24107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (18))){
var inst_23943 = (state_24001[(2)]);
var state_24001__$1 = state_24001;
var statearr_24054_24108 = state_24001__$1;
(statearr_24054_24108[(2)] = inst_23943);

(statearr_24054_24108[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (37))){
var state_24001__$1 = state_24001;
var statearr_24055_24109 = state_24001__$1;
(statearr_24055_24109[(2)] = null);

(statearr_24055_24109[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (8))){
var inst_23905 = (state_24001[(8)]);
var inst_23922 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23905);
var state_24001__$1 = state_24001;
var statearr_24056_24110 = state_24001__$1;
(statearr_24056_24110[(2)] = inst_23922);

(statearr_24056_24110[(1)] = (10));


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
});})(c__22331__auto___24064,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22219__auto__,c__22331__auto___24064,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22220__auto__ = null;
var cljs$core$async$mix_$_state_machine__22220__auto____0 = (function (){
var statearr_24060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24060[(0)] = cljs$core$async$mix_$_state_machine__22220__auto__);

(statearr_24060[(1)] = (1));

return statearr_24060;
});
var cljs$core$async$mix_$_state_machine__22220__auto____1 = (function (state_24001){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_24001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e24061){if((e24061 instanceof Object)){
var ex__22223__auto__ = e24061;
var statearr_24062_24111 = state_24001;
(statearr_24062_24111[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24112 = state_24001;
state_24001 = G__24112;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22220__auto__ = function(state_24001){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22220__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22220__auto____1.call(this,state_24001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22220__auto____0;
cljs$core$async$mix_$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22220__auto____1;
return cljs$core$async$mix_$_state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto___24064,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22333__auto__ = (function (){var statearr_24063 = f__22332__auto__.call(null);
(statearr_24063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto___24064);

return statearr_24063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto___24064,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__20822__auto__ = (((p == null))?null:p);
var m__20823__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20823__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__20822__auto__ = (((p == null))?null:p);
var m__20823__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,p,v,ch);
} else {
var m__20823__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24113 = [];
var len__21234__auto___24116 = arguments.length;
var i__21235__auto___24117 = (0);
while(true){
if((i__21235__auto___24117 < len__21234__auto___24116)){
args24113.push((arguments[i__21235__auto___24117]));

var G__24118 = (i__21235__auto___24117 + (1));
i__21235__auto___24117 = G__24118;
continue;
} else {
}
break;
}

var G__24115 = args24113.length;
switch (G__24115) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24113.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20822__auto__ = (((p == null))?null:p);
var m__20823__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,p);
} else {
var m__20823__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__20822__auto__ = (((p == null))?null:p);
var m__20823__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,p,v);
} else {
var m__20823__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args24121 = [];
var len__21234__auto___24246 = arguments.length;
var i__21235__auto___24247 = (0);
while(true){
if((i__21235__auto___24247 < len__21234__auto___24246)){
args24121.push((arguments[i__21235__auto___24247]));

var G__24248 = (i__21235__auto___24247 + (1));
i__21235__auto___24247 = G__24248;
continue;
} else {
}
break;
}

var G__24123 = args24121.length;
switch (G__24123) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24121.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20159__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20159__auto__)){
return or__20159__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20159__auto__,mults){
return (function (p1__24120_SHARP_){
if(cljs.core.truth_(p1__24120_SHARP_.call(null,topic))){
return p1__24120_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24120_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20159__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24124 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24124 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24125){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24125 = meta24125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24126,meta24125__$1){
var self__ = this;
var _24126__$1 = this;
return (new cljs.core.async.t_cljs$core$async24124(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24125__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24126){
var self__ = this;
var _24126__$1 = this;
return self__.meta24125;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24124.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24124.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24124.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24124.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24124.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24124.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24124.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24124.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24125","meta24125",-1476872793,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24124.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24124";

cljs.core.async.t_cljs$core$async24124.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20765__auto__,writer__20766__auto__,opt__20767__auto__){
return cljs.core._write.call(null,writer__20766__auto__,"cljs.core.async/t_cljs$core$async24124");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24124 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24124(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24125){
return (new cljs.core.async.t_cljs$core$async24124(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24125));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24124(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22331__auto___24250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto___24250,mults,ensure_mult,p){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto___24250,mults,ensure_mult,p){
return (function (state_24198){
var state_val_24199 = (state_24198[(1)]);
if((state_val_24199 === (7))){
var inst_24194 = (state_24198[(2)]);
var state_24198__$1 = state_24198;
var statearr_24200_24251 = state_24198__$1;
(statearr_24200_24251[(2)] = inst_24194);

(statearr_24200_24251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (20))){
var state_24198__$1 = state_24198;
var statearr_24201_24252 = state_24198__$1;
(statearr_24201_24252[(2)] = null);

(statearr_24201_24252[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (1))){
var state_24198__$1 = state_24198;
var statearr_24202_24253 = state_24198__$1;
(statearr_24202_24253[(2)] = null);

(statearr_24202_24253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (24))){
var inst_24177 = (state_24198[(7)]);
var inst_24186 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24177);
var state_24198__$1 = state_24198;
var statearr_24203_24254 = state_24198__$1;
(statearr_24203_24254[(2)] = inst_24186);

(statearr_24203_24254[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (4))){
var inst_24129 = (state_24198[(8)]);
var inst_24129__$1 = (state_24198[(2)]);
var inst_24130 = (inst_24129__$1 == null);
var state_24198__$1 = (function (){var statearr_24204 = state_24198;
(statearr_24204[(8)] = inst_24129__$1);

return statearr_24204;
})();
if(cljs.core.truth_(inst_24130)){
var statearr_24205_24255 = state_24198__$1;
(statearr_24205_24255[(1)] = (5));

} else {
var statearr_24206_24256 = state_24198__$1;
(statearr_24206_24256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (15))){
var inst_24171 = (state_24198[(2)]);
var state_24198__$1 = state_24198;
var statearr_24207_24257 = state_24198__$1;
(statearr_24207_24257[(2)] = inst_24171);

(statearr_24207_24257[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (21))){
var inst_24191 = (state_24198[(2)]);
var state_24198__$1 = (function (){var statearr_24208 = state_24198;
(statearr_24208[(9)] = inst_24191);

return statearr_24208;
})();
var statearr_24209_24258 = state_24198__$1;
(statearr_24209_24258[(2)] = null);

(statearr_24209_24258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (13))){
var inst_24153 = (state_24198[(10)]);
var inst_24155 = cljs.core.chunked_seq_QMARK_.call(null,inst_24153);
var state_24198__$1 = state_24198;
if(inst_24155){
var statearr_24210_24259 = state_24198__$1;
(statearr_24210_24259[(1)] = (16));

} else {
var statearr_24211_24260 = state_24198__$1;
(statearr_24211_24260[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (22))){
var inst_24183 = (state_24198[(2)]);
var state_24198__$1 = state_24198;
if(cljs.core.truth_(inst_24183)){
var statearr_24212_24261 = state_24198__$1;
(statearr_24212_24261[(1)] = (23));

} else {
var statearr_24213_24262 = state_24198__$1;
(statearr_24213_24262[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (6))){
var inst_24177 = (state_24198[(7)]);
var inst_24179 = (state_24198[(11)]);
var inst_24129 = (state_24198[(8)]);
var inst_24177__$1 = topic_fn.call(null,inst_24129);
var inst_24178 = cljs.core.deref.call(null,mults);
var inst_24179__$1 = cljs.core.get.call(null,inst_24178,inst_24177__$1);
var state_24198__$1 = (function (){var statearr_24214 = state_24198;
(statearr_24214[(7)] = inst_24177__$1);

(statearr_24214[(11)] = inst_24179__$1);

return statearr_24214;
})();
if(cljs.core.truth_(inst_24179__$1)){
var statearr_24215_24263 = state_24198__$1;
(statearr_24215_24263[(1)] = (19));

} else {
var statearr_24216_24264 = state_24198__$1;
(statearr_24216_24264[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (25))){
var inst_24188 = (state_24198[(2)]);
var state_24198__$1 = state_24198;
var statearr_24217_24265 = state_24198__$1;
(statearr_24217_24265[(2)] = inst_24188);

(statearr_24217_24265[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (17))){
var inst_24153 = (state_24198[(10)]);
var inst_24162 = cljs.core.first.call(null,inst_24153);
var inst_24163 = cljs.core.async.muxch_STAR_.call(null,inst_24162);
var inst_24164 = cljs.core.async.close_BANG_.call(null,inst_24163);
var inst_24165 = cljs.core.next.call(null,inst_24153);
var inst_24139 = inst_24165;
var inst_24140 = null;
var inst_24141 = (0);
var inst_24142 = (0);
var state_24198__$1 = (function (){var statearr_24218 = state_24198;
(statearr_24218[(12)] = inst_24142);

(statearr_24218[(13)] = inst_24164);

(statearr_24218[(14)] = inst_24139);

(statearr_24218[(15)] = inst_24141);

(statearr_24218[(16)] = inst_24140);

return statearr_24218;
})();
var statearr_24219_24266 = state_24198__$1;
(statearr_24219_24266[(2)] = null);

(statearr_24219_24266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (3))){
var inst_24196 = (state_24198[(2)]);
var state_24198__$1 = state_24198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24198__$1,inst_24196);
} else {
if((state_val_24199 === (12))){
var inst_24173 = (state_24198[(2)]);
var state_24198__$1 = state_24198;
var statearr_24220_24267 = state_24198__$1;
(statearr_24220_24267[(2)] = inst_24173);

(statearr_24220_24267[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (2))){
var state_24198__$1 = state_24198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24198__$1,(4),ch);
} else {
if((state_val_24199 === (23))){
var state_24198__$1 = state_24198;
var statearr_24221_24268 = state_24198__$1;
(statearr_24221_24268[(2)] = null);

(statearr_24221_24268[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (19))){
var inst_24179 = (state_24198[(11)]);
var inst_24129 = (state_24198[(8)]);
var inst_24181 = cljs.core.async.muxch_STAR_.call(null,inst_24179);
var state_24198__$1 = state_24198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24198__$1,(22),inst_24181,inst_24129);
} else {
if((state_val_24199 === (11))){
var inst_24139 = (state_24198[(14)]);
var inst_24153 = (state_24198[(10)]);
var inst_24153__$1 = cljs.core.seq.call(null,inst_24139);
var state_24198__$1 = (function (){var statearr_24222 = state_24198;
(statearr_24222[(10)] = inst_24153__$1);

return statearr_24222;
})();
if(inst_24153__$1){
var statearr_24223_24269 = state_24198__$1;
(statearr_24223_24269[(1)] = (13));

} else {
var statearr_24224_24270 = state_24198__$1;
(statearr_24224_24270[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (9))){
var inst_24175 = (state_24198[(2)]);
var state_24198__$1 = state_24198;
var statearr_24225_24271 = state_24198__$1;
(statearr_24225_24271[(2)] = inst_24175);

(statearr_24225_24271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (5))){
var inst_24136 = cljs.core.deref.call(null,mults);
var inst_24137 = cljs.core.vals.call(null,inst_24136);
var inst_24138 = cljs.core.seq.call(null,inst_24137);
var inst_24139 = inst_24138;
var inst_24140 = null;
var inst_24141 = (0);
var inst_24142 = (0);
var state_24198__$1 = (function (){var statearr_24226 = state_24198;
(statearr_24226[(12)] = inst_24142);

(statearr_24226[(14)] = inst_24139);

(statearr_24226[(15)] = inst_24141);

(statearr_24226[(16)] = inst_24140);

return statearr_24226;
})();
var statearr_24227_24272 = state_24198__$1;
(statearr_24227_24272[(2)] = null);

(statearr_24227_24272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (14))){
var state_24198__$1 = state_24198;
var statearr_24231_24273 = state_24198__$1;
(statearr_24231_24273[(2)] = null);

(statearr_24231_24273[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (16))){
var inst_24153 = (state_24198[(10)]);
var inst_24157 = cljs.core.chunk_first.call(null,inst_24153);
var inst_24158 = cljs.core.chunk_rest.call(null,inst_24153);
var inst_24159 = cljs.core.count.call(null,inst_24157);
var inst_24139 = inst_24158;
var inst_24140 = inst_24157;
var inst_24141 = inst_24159;
var inst_24142 = (0);
var state_24198__$1 = (function (){var statearr_24232 = state_24198;
(statearr_24232[(12)] = inst_24142);

(statearr_24232[(14)] = inst_24139);

(statearr_24232[(15)] = inst_24141);

(statearr_24232[(16)] = inst_24140);

return statearr_24232;
})();
var statearr_24233_24274 = state_24198__$1;
(statearr_24233_24274[(2)] = null);

(statearr_24233_24274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (10))){
var inst_24142 = (state_24198[(12)]);
var inst_24139 = (state_24198[(14)]);
var inst_24141 = (state_24198[(15)]);
var inst_24140 = (state_24198[(16)]);
var inst_24147 = cljs.core._nth.call(null,inst_24140,inst_24142);
var inst_24148 = cljs.core.async.muxch_STAR_.call(null,inst_24147);
var inst_24149 = cljs.core.async.close_BANG_.call(null,inst_24148);
var inst_24150 = (inst_24142 + (1));
var tmp24228 = inst_24139;
var tmp24229 = inst_24141;
var tmp24230 = inst_24140;
var inst_24139__$1 = tmp24228;
var inst_24140__$1 = tmp24230;
var inst_24141__$1 = tmp24229;
var inst_24142__$1 = inst_24150;
var state_24198__$1 = (function (){var statearr_24234 = state_24198;
(statearr_24234[(12)] = inst_24142__$1);

(statearr_24234[(14)] = inst_24139__$1);

(statearr_24234[(15)] = inst_24141__$1);

(statearr_24234[(16)] = inst_24140__$1);

(statearr_24234[(17)] = inst_24149);

return statearr_24234;
})();
var statearr_24235_24275 = state_24198__$1;
(statearr_24235_24275[(2)] = null);

(statearr_24235_24275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (18))){
var inst_24168 = (state_24198[(2)]);
var state_24198__$1 = state_24198;
var statearr_24236_24276 = state_24198__$1;
(statearr_24236_24276[(2)] = inst_24168);

(statearr_24236_24276[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (8))){
var inst_24142 = (state_24198[(12)]);
var inst_24141 = (state_24198[(15)]);
var inst_24144 = (inst_24142 < inst_24141);
var inst_24145 = inst_24144;
var state_24198__$1 = state_24198;
if(cljs.core.truth_(inst_24145)){
var statearr_24237_24277 = state_24198__$1;
(statearr_24237_24277[(1)] = (10));

} else {
var statearr_24238_24278 = state_24198__$1;
(statearr_24238_24278[(1)] = (11));

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
});})(c__22331__auto___24250,mults,ensure_mult,p))
;
return ((function (switch__22219__auto__,c__22331__auto___24250,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22220__auto__ = null;
var cljs$core$async$state_machine__22220__auto____0 = (function (){
var statearr_24242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24242[(0)] = cljs$core$async$state_machine__22220__auto__);

(statearr_24242[(1)] = (1));

return statearr_24242;
});
var cljs$core$async$state_machine__22220__auto____1 = (function (state_24198){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_24198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e24243){if((e24243 instanceof Object)){
var ex__22223__auto__ = e24243;
var statearr_24244_24279 = state_24198;
(statearr_24244_24279[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24280 = state_24198;
state_24198 = G__24280;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
cljs$core$async$state_machine__22220__auto__ = function(state_24198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22220__auto____1.call(this,state_24198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22220__auto____0;
cljs$core$async$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22220__auto____1;
return cljs$core$async$state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto___24250,mults,ensure_mult,p))
})();
var state__22333__auto__ = (function (){var statearr_24245 = f__22332__auto__.call(null);
(statearr_24245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto___24250);

return statearr_24245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto___24250,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args24281 = [];
var len__21234__auto___24284 = arguments.length;
var i__21235__auto___24285 = (0);
while(true){
if((i__21235__auto___24285 < len__21234__auto___24284)){
args24281.push((arguments[i__21235__auto___24285]));

var G__24286 = (i__21235__auto___24285 + (1));
i__21235__auto___24285 = G__24286;
continue;
} else {
}
break;
}

var G__24283 = args24281.length;
switch (G__24283) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24281.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args24288 = [];
var len__21234__auto___24291 = arguments.length;
var i__21235__auto___24292 = (0);
while(true){
if((i__21235__auto___24292 < len__21234__auto___24291)){
args24288.push((arguments[i__21235__auto___24292]));

var G__24293 = (i__21235__auto___24292 + (1));
i__21235__auto___24292 = G__24293;
continue;
} else {
}
break;
}

var G__24290 = args24288.length;
switch (G__24290) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24288.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args24295 = [];
var len__21234__auto___24366 = arguments.length;
var i__21235__auto___24367 = (0);
while(true){
if((i__21235__auto___24367 < len__21234__auto___24366)){
args24295.push((arguments[i__21235__auto___24367]));

var G__24368 = (i__21235__auto___24367 + (1));
i__21235__auto___24367 = G__24368;
continue;
} else {
}
break;
}

var G__24297 = args24295.length;
switch (G__24297) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24295.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22331__auto___24370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto___24370,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto___24370,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24336){
var state_val_24337 = (state_24336[(1)]);
if((state_val_24337 === (7))){
var state_24336__$1 = state_24336;
var statearr_24338_24371 = state_24336__$1;
(statearr_24338_24371[(2)] = null);

(statearr_24338_24371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (1))){
var state_24336__$1 = state_24336;
var statearr_24339_24372 = state_24336__$1;
(statearr_24339_24372[(2)] = null);

(statearr_24339_24372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (4))){
var inst_24300 = (state_24336[(7)]);
var inst_24302 = (inst_24300 < cnt);
var state_24336__$1 = state_24336;
if(cljs.core.truth_(inst_24302)){
var statearr_24340_24373 = state_24336__$1;
(statearr_24340_24373[(1)] = (6));

} else {
var statearr_24341_24374 = state_24336__$1;
(statearr_24341_24374[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (15))){
var inst_24332 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
var statearr_24342_24375 = state_24336__$1;
(statearr_24342_24375[(2)] = inst_24332);

(statearr_24342_24375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (13))){
var inst_24325 = cljs.core.async.close_BANG_.call(null,out);
var state_24336__$1 = state_24336;
var statearr_24343_24376 = state_24336__$1;
(statearr_24343_24376[(2)] = inst_24325);

(statearr_24343_24376[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (6))){
var state_24336__$1 = state_24336;
var statearr_24344_24377 = state_24336__$1;
(statearr_24344_24377[(2)] = null);

(statearr_24344_24377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (3))){
var inst_24334 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24336__$1,inst_24334);
} else {
if((state_val_24337 === (12))){
var inst_24322 = (state_24336[(8)]);
var inst_24322__$1 = (state_24336[(2)]);
var inst_24323 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24322__$1);
var state_24336__$1 = (function (){var statearr_24345 = state_24336;
(statearr_24345[(8)] = inst_24322__$1);

return statearr_24345;
})();
if(cljs.core.truth_(inst_24323)){
var statearr_24346_24378 = state_24336__$1;
(statearr_24346_24378[(1)] = (13));

} else {
var statearr_24347_24379 = state_24336__$1;
(statearr_24347_24379[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (2))){
var inst_24299 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24300 = (0);
var state_24336__$1 = (function (){var statearr_24348 = state_24336;
(statearr_24348[(7)] = inst_24300);

(statearr_24348[(9)] = inst_24299);

return statearr_24348;
})();
var statearr_24349_24380 = state_24336__$1;
(statearr_24349_24380[(2)] = null);

(statearr_24349_24380[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (11))){
var inst_24300 = (state_24336[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24336,(10),Object,null,(9));
var inst_24309 = chs__$1.call(null,inst_24300);
var inst_24310 = done.call(null,inst_24300);
var inst_24311 = cljs.core.async.take_BANG_.call(null,inst_24309,inst_24310);
var state_24336__$1 = state_24336;
var statearr_24350_24381 = state_24336__$1;
(statearr_24350_24381[(2)] = inst_24311);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24336__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (9))){
var inst_24300 = (state_24336[(7)]);
var inst_24313 = (state_24336[(2)]);
var inst_24314 = (inst_24300 + (1));
var inst_24300__$1 = inst_24314;
var state_24336__$1 = (function (){var statearr_24351 = state_24336;
(statearr_24351[(10)] = inst_24313);

(statearr_24351[(7)] = inst_24300__$1);

return statearr_24351;
})();
var statearr_24352_24382 = state_24336__$1;
(statearr_24352_24382[(2)] = null);

(statearr_24352_24382[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (5))){
var inst_24320 = (state_24336[(2)]);
var state_24336__$1 = (function (){var statearr_24353 = state_24336;
(statearr_24353[(11)] = inst_24320);

return statearr_24353;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24336__$1,(12),dchan);
} else {
if((state_val_24337 === (14))){
var inst_24322 = (state_24336[(8)]);
var inst_24327 = cljs.core.apply.call(null,f,inst_24322);
var state_24336__$1 = state_24336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24336__$1,(16),out,inst_24327);
} else {
if((state_val_24337 === (16))){
var inst_24329 = (state_24336[(2)]);
var state_24336__$1 = (function (){var statearr_24354 = state_24336;
(statearr_24354[(12)] = inst_24329);

return statearr_24354;
})();
var statearr_24355_24383 = state_24336__$1;
(statearr_24355_24383[(2)] = null);

(statearr_24355_24383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (10))){
var inst_24304 = (state_24336[(2)]);
var inst_24305 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24336__$1 = (function (){var statearr_24356 = state_24336;
(statearr_24356[(13)] = inst_24304);

return statearr_24356;
})();
var statearr_24357_24384 = state_24336__$1;
(statearr_24357_24384[(2)] = inst_24305);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24336__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (8))){
var inst_24318 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
var statearr_24358_24385 = state_24336__$1;
(statearr_24358_24385[(2)] = inst_24318);

(statearr_24358_24385[(1)] = (5));


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
});})(c__22331__auto___24370,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22219__auto__,c__22331__auto___24370,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22220__auto__ = null;
var cljs$core$async$state_machine__22220__auto____0 = (function (){
var statearr_24362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24362[(0)] = cljs$core$async$state_machine__22220__auto__);

(statearr_24362[(1)] = (1));

return statearr_24362;
});
var cljs$core$async$state_machine__22220__auto____1 = (function (state_24336){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_24336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e24363){if((e24363 instanceof Object)){
var ex__22223__auto__ = e24363;
var statearr_24364_24386 = state_24336;
(statearr_24364_24386[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24387 = state_24336;
state_24336 = G__24387;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
cljs$core$async$state_machine__22220__auto__ = function(state_24336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22220__auto____1.call(this,state_24336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22220__auto____0;
cljs$core$async$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22220__auto____1;
return cljs$core$async$state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto___24370,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22333__auto__ = (function (){var statearr_24365 = f__22332__auto__.call(null);
(statearr_24365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto___24370);

return statearr_24365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto___24370,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args24389 = [];
var len__21234__auto___24447 = arguments.length;
var i__21235__auto___24448 = (0);
while(true){
if((i__21235__auto___24448 < len__21234__auto___24447)){
args24389.push((arguments[i__21235__auto___24448]));

var G__24449 = (i__21235__auto___24448 + (1));
i__21235__auto___24448 = G__24449;
continue;
} else {
}
break;
}

var G__24391 = args24389.length;
switch (G__24391) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24389.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22331__auto___24451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto___24451,out){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto___24451,out){
return (function (state_24423){
var state_val_24424 = (state_24423[(1)]);
if((state_val_24424 === (7))){
var inst_24402 = (state_24423[(7)]);
var inst_24403 = (state_24423[(8)]);
var inst_24402__$1 = (state_24423[(2)]);
var inst_24403__$1 = cljs.core.nth.call(null,inst_24402__$1,(0),null);
var inst_24404 = cljs.core.nth.call(null,inst_24402__$1,(1),null);
var inst_24405 = (inst_24403__$1 == null);
var state_24423__$1 = (function (){var statearr_24425 = state_24423;
(statearr_24425[(7)] = inst_24402__$1);

(statearr_24425[(8)] = inst_24403__$1);

(statearr_24425[(9)] = inst_24404);

return statearr_24425;
})();
if(cljs.core.truth_(inst_24405)){
var statearr_24426_24452 = state_24423__$1;
(statearr_24426_24452[(1)] = (8));

} else {
var statearr_24427_24453 = state_24423__$1;
(statearr_24427_24453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24424 === (1))){
var inst_24392 = cljs.core.vec.call(null,chs);
var inst_24393 = inst_24392;
var state_24423__$1 = (function (){var statearr_24428 = state_24423;
(statearr_24428[(10)] = inst_24393);

return statearr_24428;
})();
var statearr_24429_24454 = state_24423__$1;
(statearr_24429_24454[(2)] = null);

(statearr_24429_24454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24424 === (4))){
var inst_24393 = (state_24423[(10)]);
var state_24423__$1 = state_24423;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24423__$1,(7),inst_24393);
} else {
if((state_val_24424 === (6))){
var inst_24419 = (state_24423[(2)]);
var state_24423__$1 = state_24423;
var statearr_24430_24455 = state_24423__$1;
(statearr_24430_24455[(2)] = inst_24419);

(statearr_24430_24455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24424 === (3))){
var inst_24421 = (state_24423[(2)]);
var state_24423__$1 = state_24423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24423__$1,inst_24421);
} else {
if((state_val_24424 === (2))){
var inst_24393 = (state_24423[(10)]);
var inst_24395 = cljs.core.count.call(null,inst_24393);
var inst_24396 = (inst_24395 > (0));
var state_24423__$1 = state_24423;
if(cljs.core.truth_(inst_24396)){
var statearr_24432_24456 = state_24423__$1;
(statearr_24432_24456[(1)] = (4));

} else {
var statearr_24433_24457 = state_24423__$1;
(statearr_24433_24457[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24424 === (11))){
var inst_24393 = (state_24423[(10)]);
var inst_24412 = (state_24423[(2)]);
var tmp24431 = inst_24393;
var inst_24393__$1 = tmp24431;
var state_24423__$1 = (function (){var statearr_24434 = state_24423;
(statearr_24434[(10)] = inst_24393__$1);

(statearr_24434[(11)] = inst_24412);

return statearr_24434;
})();
var statearr_24435_24458 = state_24423__$1;
(statearr_24435_24458[(2)] = null);

(statearr_24435_24458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24424 === (9))){
var inst_24403 = (state_24423[(8)]);
var state_24423__$1 = state_24423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24423__$1,(11),out,inst_24403);
} else {
if((state_val_24424 === (5))){
var inst_24417 = cljs.core.async.close_BANG_.call(null,out);
var state_24423__$1 = state_24423;
var statearr_24436_24459 = state_24423__$1;
(statearr_24436_24459[(2)] = inst_24417);

(statearr_24436_24459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24424 === (10))){
var inst_24415 = (state_24423[(2)]);
var state_24423__$1 = state_24423;
var statearr_24437_24460 = state_24423__$1;
(statearr_24437_24460[(2)] = inst_24415);

(statearr_24437_24460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24424 === (8))){
var inst_24393 = (state_24423[(10)]);
var inst_24402 = (state_24423[(7)]);
var inst_24403 = (state_24423[(8)]);
var inst_24404 = (state_24423[(9)]);
var inst_24407 = (function (){var cs = inst_24393;
var vec__24398 = inst_24402;
var v = inst_24403;
var c = inst_24404;
return ((function (cs,vec__24398,v,c,inst_24393,inst_24402,inst_24403,inst_24404,state_val_24424,c__22331__auto___24451,out){
return (function (p1__24388_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24388_SHARP_);
});
;})(cs,vec__24398,v,c,inst_24393,inst_24402,inst_24403,inst_24404,state_val_24424,c__22331__auto___24451,out))
})();
var inst_24408 = cljs.core.filterv.call(null,inst_24407,inst_24393);
var inst_24393__$1 = inst_24408;
var state_24423__$1 = (function (){var statearr_24438 = state_24423;
(statearr_24438[(10)] = inst_24393__$1);

return statearr_24438;
})();
var statearr_24439_24461 = state_24423__$1;
(statearr_24439_24461[(2)] = null);

(statearr_24439_24461[(1)] = (2));


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
});})(c__22331__auto___24451,out))
;
return ((function (switch__22219__auto__,c__22331__auto___24451,out){
return (function() {
var cljs$core$async$state_machine__22220__auto__ = null;
var cljs$core$async$state_machine__22220__auto____0 = (function (){
var statearr_24443 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24443[(0)] = cljs$core$async$state_machine__22220__auto__);

(statearr_24443[(1)] = (1));

return statearr_24443;
});
var cljs$core$async$state_machine__22220__auto____1 = (function (state_24423){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_24423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e24444){if((e24444 instanceof Object)){
var ex__22223__auto__ = e24444;
var statearr_24445_24462 = state_24423;
(statearr_24445_24462[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24463 = state_24423;
state_24423 = G__24463;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
cljs$core$async$state_machine__22220__auto__ = function(state_24423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22220__auto____1.call(this,state_24423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22220__auto____0;
cljs$core$async$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22220__auto____1;
return cljs$core$async$state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto___24451,out))
})();
var state__22333__auto__ = (function (){var statearr_24446 = f__22332__auto__.call(null);
(statearr_24446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto___24451);

return statearr_24446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto___24451,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24464 = [];
var len__21234__auto___24513 = arguments.length;
var i__21235__auto___24514 = (0);
while(true){
if((i__21235__auto___24514 < len__21234__auto___24513)){
args24464.push((arguments[i__21235__auto___24514]));

var G__24515 = (i__21235__auto___24514 + (1));
i__21235__auto___24514 = G__24515;
continue;
} else {
}
break;
}

var G__24466 = args24464.length;
switch (G__24466) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24464.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22331__auto___24517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto___24517,out){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto___24517,out){
return (function (state_24490){
var state_val_24491 = (state_24490[(1)]);
if((state_val_24491 === (7))){
var inst_24472 = (state_24490[(7)]);
var inst_24472__$1 = (state_24490[(2)]);
var inst_24473 = (inst_24472__$1 == null);
var inst_24474 = cljs.core.not.call(null,inst_24473);
var state_24490__$1 = (function (){var statearr_24492 = state_24490;
(statearr_24492[(7)] = inst_24472__$1);

return statearr_24492;
})();
if(inst_24474){
var statearr_24493_24518 = state_24490__$1;
(statearr_24493_24518[(1)] = (8));

} else {
var statearr_24494_24519 = state_24490__$1;
(statearr_24494_24519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (1))){
var inst_24467 = (0);
var state_24490__$1 = (function (){var statearr_24495 = state_24490;
(statearr_24495[(8)] = inst_24467);

return statearr_24495;
})();
var statearr_24496_24520 = state_24490__$1;
(statearr_24496_24520[(2)] = null);

(statearr_24496_24520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (4))){
var state_24490__$1 = state_24490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24490__$1,(7),ch);
} else {
if((state_val_24491 === (6))){
var inst_24485 = (state_24490[(2)]);
var state_24490__$1 = state_24490;
var statearr_24497_24521 = state_24490__$1;
(statearr_24497_24521[(2)] = inst_24485);

(statearr_24497_24521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (3))){
var inst_24487 = (state_24490[(2)]);
var inst_24488 = cljs.core.async.close_BANG_.call(null,out);
var state_24490__$1 = (function (){var statearr_24498 = state_24490;
(statearr_24498[(9)] = inst_24487);

return statearr_24498;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24490__$1,inst_24488);
} else {
if((state_val_24491 === (2))){
var inst_24467 = (state_24490[(8)]);
var inst_24469 = (inst_24467 < n);
var state_24490__$1 = state_24490;
if(cljs.core.truth_(inst_24469)){
var statearr_24499_24522 = state_24490__$1;
(statearr_24499_24522[(1)] = (4));

} else {
var statearr_24500_24523 = state_24490__$1;
(statearr_24500_24523[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (11))){
var inst_24467 = (state_24490[(8)]);
var inst_24477 = (state_24490[(2)]);
var inst_24478 = (inst_24467 + (1));
var inst_24467__$1 = inst_24478;
var state_24490__$1 = (function (){var statearr_24501 = state_24490;
(statearr_24501[(10)] = inst_24477);

(statearr_24501[(8)] = inst_24467__$1);

return statearr_24501;
})();
var statearr_24502_24524 = state_24490__$1;
(statearr_24502_24524[(2)] = null);

(statearr_24502_24524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (9))){
var state_24490__$1 = state_24490;
var statearr_24503_24525 = state_24490__$1;
(statearr_24503_24525[(2)] = null);

(statearr_24503_24525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (5))){
var state_24490__$1 = state_24490;
var statearr_24504_24526 = state_24490__$1;
(statearr_24504_24526[(2)] = null);

(statearr_24504_24526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (10))){
var inst_24482 = (state_24490[(2)]);
var state_24490__$1 = state_24490;
var statearr_24505_24527 = state_24490__$1;
(statearr_24505_24527[(2)] = inst_24482);

(statearr_24505_24527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (8))){
var inst_24472 = (state_24490[(7)]);
var state_24490__$1 = state_24490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24490__$1,(11),out,inst_24472);
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
});})(c__22331__auto___24517,out))
;
return ((function (switch__22219__auto__,c__22331__auto___24517,out){
return (function() {
var cljs$core$async$state_machine__22220__auto__ = null;
var cljs$core$async$state_machine__22220__auto____0 = (function (){
var statearr_24509 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24509[(0)] = cljs$core$async$state_machine__22220__auto__);

(statearr_24509[(1)] = (1));

return statearr_24509;
});
var cljs$core$async$state_machine__22220__auto____1 = (function (state_24490){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_24490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e24510){if((e24510 instanceof Object)){
var ex__22223__auto__ = e24510;
var statearr_24511_24528 = state_24490;
(statearr_24511_24528[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24529 = state_24490;
state_24490 = G__24529;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
cljs$core$async$state_machine__22220__auto__ = function(state_24490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22220__auto____1.call(this,state_24490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22220__auto____0;
cljs$core$async$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22220__auto____1;
return cljs$core$async$state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto___24517,out))
})();
var state__22333__auto__ = (function (){var statearr_24512 = f__22332__auto__.call(null);
(statearr_24512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto___24517);

return statearr_24512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto___24517,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24537 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24537 = (function (map_LT_,f,ch,meta24538){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24538 = meta24538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24539,meta24538__$1){
var self__ = this;
var _24539__$1 = this;
return (new cljs.core.async.t_cljs$core$async24537(self__.map_LT_,self__.f,self__.ch,meta24538__$1));
});

cljs.core.async.t_cljs$core$async24537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24539){
var self__ = this;
var _24539__$1 = this;
return self__.meta24538;
});

cljs.core.async.t_cljs$core$async24537.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24537.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24537.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24537.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24537.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24540 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24540 = (function (map_LT_,f,ch,meta24538,_,fn1,meta24541){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24538 = meta24538;
this._ = _;
this.fn1 = fn1;
this.meta24541 = meta24541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24542,meta24541__$1){
var self__ = this;
var _24542__$1 = this;
return (new cljs.core.async.t_cljs$core$async24540(self__.map_LT_,self__.f,self__.ch,self__.meta24538,self__._,self__.fn1,meta24541__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24540.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24542){
var self__ = this;
var _24542__$1 = this;
return self__.meta24541;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24540.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24540.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24540.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24540.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24530_SHARP_){
return f1.call(null,(((p1__24530_SHARP_ == null))?null:self__.f.call(null,p1__24530_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24540.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24538","meta24538",-2092730871,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24537","cljs.core.async/t_cljs$core$async24537",-205279712,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24541","meta24541",-152943255,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24540.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24540";

cljs.core.async.t_cljs$core$async24540.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20765__auto__,writer__20766__auto__,opt__20767__auto__){
return cljs.core._write.call(null,writer__20766__auto__,"cljs.core.async/t_cljs$core$async24540");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24540 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24540(map_LT___$1,f__$1,ch__$1,meta24538__$1,___$2,fn1__$1,meta24541){
return (new cljs.core.async.t_cljs$core$async24540(map_LT___$1,f__$1,ch__$1,meta24538__$1,___$2,fn1__$1,meta24541));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24540(self__.map_LT_,self__.f,self__.ch,self__.meta24538,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20147__auto__ = ret;
if(cljs.core.truth_(and__20147__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20147__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24537.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24537.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24538","meta24538",-2092730871,null)], null);
});

cljs.core.async.t_cljs$core$async24537.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24537";

cljs.core.async.t_cljs$core$async24537.cljs$lang$ctorPrWriter = (function (this__20765__auto__,writer__20766__auto__,opt__20767__auto__){
return cljs.core._write.call(null,writer__20766__auto__,"cljs.core.async/t_cljs$core$async24537");
});

cljs.core.async.__GT_t_cljs$core$async24537 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24537(map_LT___$1,f__$1,ch__$1,meta24538){
return (new cljs.core.async.t_cljs$core$async24537(map_LT___$1,f__$1,ch__$1,meta24538));
});

}

return (new cljs.core.async.t_cljs$core$async24537(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24546 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24546 = (function (map_GT_,f,ch,meta24547){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24547 = meta24547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24548,meta24547__$1){
var self__ = this;
var _24548__$1 = this;
return (new cljs.core.async.t_cljs$core$async24546(self__.map_GT_,self__.f,self__.ch,meta24547__$1));
});

cljs.core.async.t_cljs$core$async24546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24548){
var self__ = this;
var _24548__$1 = this;
return self__.meta24547;
});

cljs.core.async.t_cljs$core$async24546.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24546.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24546.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24546.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24546.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24546.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24546.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24547","meta24547",1564928624,null)], null);
});

cljs.core.async.t_cljs$core$async24546.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24546";

cljs.core.async.t_cljs$core$async24546.cljs$lang$ctorPrWriter = (function (this__20765__auto__,writer__20766__auto__,opt__20767__auto__){
return cljs.core._write.call(null,writer__20766__auto__,"cljs.core.async/t_cljs$core$async24546");
});

cljs.core.async.__GT_t_cljs$core$async24546 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24546(map_GT___$1,f__$1,ch__$1,meta24547){
return (new cljs.core.async.t_cljs$core$async24546(map_GT___$1,f__$1,ch__$1,meta24547));
});

}

return (new cljs.core.async.t_cljs$core$async24546(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24552 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24552 = (function (filter_GT_,p,ch,meta24553){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24553 = meta24553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24554,meta24553__$1){
var self__ = this;
var _24554__$1 = this;
return (new cljs.core.async.t_cljs$core$async24552(self__.filter_GT_,self__.p,self__.ch,meta24553__$1));
});

cljs.core.async.t_cljs$core$async24552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24554){
var self__ = this;
var _24554__$1 = this;
return self__.meta24553;
});

cljs.core.async.t_cljs$core$async24552.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24552.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24552.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24552.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24552.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24552.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24552.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24553","meta24553",1583555857,null)], null);
});

cljs.core.async.t_cljs$core$async24552.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24552";

cljs.core.async.t_cljs$core$async24552.cljs$lang$ctorPrWriter = (function (this__20765__auto__,writer__20766__auto__,opt__20767__auto__){
return cljs.core._write.call(null,writer__20766__auto__,"cljs.core.async/t_cljs$core$async24552");
});

cljs.core.async.__GT_t_cljs$core$async24552 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24552(filter_GT___$1,p__$1,ch__$1,meta24553){
return (new cljs.core.async.t_cljs$core$async24552(filter_GT___$1,p__$1,ch__$1,meta24553));
});

}

return (new cljs.core.async.t_cljs$core$async24552(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24555 = [];
var len__21234__auto___24599 = arguments.length;
var i__21235__auto___24600 = (0);
while(true){
if((i__21235__auto___24600 < len__21234__auto___24599)){
args24555.push((arguments[i__21235__auto___24600]));

var G__24601 = (i__21235__auto___24600 + (1));
i__21235__auto___24600 = G__24601;
continue;
} else {
}
break;
}

var G__24557 = args24555.length;
switch (G__24557) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24555.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22331__auto___24603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto___24603,out){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto___24603,out){
return (function (state_24578){
var state_val_24579 = (state_24578[(1)]);
if((state_val_24579 === (7))){
var inst_24574 = (state_24578[(2)]);
var state_24578__$1 = state_24578;
var statearr_24580_24604 = state_24578__$1;
(statearr_24580_24604[(2)] = inst_24574);

(statearr_24580_24604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24579 === (1))){
var state_24578__$1 = state_24578;
var statearr_24581_24605 = state_24578__$1;
(statearr_24581_24605[(2)] = null);

(statearr_24581_24605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24579 === (4))){
var inst_24560 = (state_24578[(7)]);
var inst_24560__$1 = (state_24578[(2)]);
var inst_24561 = (inst_24560__$1 == null);
var state_24578__$1 = (function (){var statearr_24582 = state_24578;
(statearr_24582[(7)] = inst_24560__$1);

return statearr_24582;
})();
if(cljs.core.truth_(inst_24561)){
var statearr_24583_24606 = state_24578__$1;
(statearr_24583_24606[(1)] = (5));

} else {
var statearr_24584_24607 = state_24578__$1;
(statearr_24584_24607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24579 === (6))){
var inst_24560 = (state_24578[(7)]);
var inst_24565 = p.call(null,inst_24560);
var state_24578__$1 = state_24578;
if(cljs.core.truth_(inst_24565)){
var statearr_24585_24608 = state_24578__$1;
(statearr_24585_24608[(1)] = (8));

} else {
var statearr_24586_24609 = state_24578__$1;
(statearr_24586_24609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24579 === (3))){
var inst_24576 = (state_24578[(2)]);
var state_24578__$1 = state_24578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24578__$1,inst_24576);
} else {
if((state_val_24579 === (2))){
var state_24578__$1 = state_24578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24578__$1,(4),ch);
} else {
if((state_val_24579 === (11))){
var inst_24568 = (state_24578[(2)]);
var state_24578__$1 = state_24578;
var statearr_24587_24610 = state_24578__$1;
(statearr_24587_24610[(2)] = inst_24568);

(statearr_24587_24610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24579 === (9))){
var state_24578__$1 = state_24578;
var statearr_24588_24611 = state_24578__$1;
(statearr_24588_24611[(2)] = null);

(statearr_24588_24611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24579 === (5))){
var inst_24563 = cljs.core.async.close_BANG_.call(null,out);
var state_24578__$1 = state_24578;
var statearr_24589_24612 = state_24578__$1;
(statearr_24589_24612[(2)] = inst_24563);

(statearr_24589_24612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24579 === (10))){
var inst_24571 = (state_24578[(2)]);
var state_24578__$1 = (function (){var statearr_24590 = state_24578;
(statearr_24590[(8)] = inst_24571);

return statearr_24590;
})();
var statearr_24591_24613 = state_24578__$1;
(statearr_24591_24613[(2)] = null);

(statearr_24591_24613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24579 === (8))){
var inst_24560 = (state_24578[(7)]);
var state_24578__$1 = state_24578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24578__$1,(11),out,inst_24560);
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
});})(c__22331__auto___24603,out))
;
return ((function (switch__22219__auto__,c__22331__auto___24603,out){
return (function() {
var cljs$core$async$state_machine__22220__auto__ = null;
var cljs$core$async$state_machine__22220__auto____0 = (function (){
var statearr_24595 = [null,null,null,null,null,null,null,null,null];
(statearr_24595[(0)] = cljs$core$async$state_machine__22220__auto__);

(statearr_24595[(1)] = (1));

return statearr_24595;
});
var cljs$core$async$state_machine__22220__auto____1 = (function (state_24578){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_24578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e24596){if((e24596 instanceof Object)){
var ex__22223__auto__ = e24596;
var statearr_24597_24614 = state_24578;
(statearr_24597_24614[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24615 = state_24578;
state_24578 = G__24615;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
cljs$core$async$state_machine__22220__auto__ = function(state_24578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22220__auto____1.call(this,state_24578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22220__auto____0;
cljs$core$async$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22220__auto____1;
return cljs$core$async$state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto___24603,out))
})();
var state__22333__auto__ = (function (){var statearr_24598 = f__22332__auto__.call(null);
(statearr_24598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto___24603);

return statearr_24598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto___24603,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24616 = [];
var len__21234__auto___24619 = arguments.length;
var i__21235__auto___24620 = (0);
while(true){
if((i__21235__auto___24620 < len__21234__auto___24619)){
args24616.push((arguments[i__21235__auto___24620]));

var G__24621 = (i__21235__auto___24620 + (1));
i__21235__auto___24620 = G__24621;
continue;
} else {
}
break;
}

var G__24618 = args24616.length;
switch (G__24618) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24616.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto__){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto__){
return (function (state_24788){
var state_val_24789 = (state_24788[(1)]);
if((state_val_24789 === (7))){
var inst_24784 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24790_24831 = state_24788__$1;
(statearr_24790_24831[(2)] = inst_24784);

(statearr_24790_24831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (20))){
var inst_24754 = (state_24788[(7)]);
var inst_24765 = (state_24788[(2)]);
var inst_24766 = cljs.core.next.call(null,inst_24754);
var inst_24740 = inst_24766;
var inst_24741 = null;
var inst_24742 = (0);
var inst_24743 = (0);
var state_24788__$1 = (function (){var statearr_24791 = state_24788;
(statearr_24791[(8)] = inst_24741);

(statearr_24791[(9)] = inst_24742);

(statearr_24791[(10)] = inst_24743);

(statearr_24791[(11)] = inst_24765);

(statearr_24791[(12)] = inst_24740);

return statearr_24791;
})();
var statearr_24792_24832 = state_24788__$1;
(statearr_24792_24832[(2)] = null);

(statearr_24792_24832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (1))){
var state_24788__$1 = state_24788;
var statearr_24793_24833 = state_24788__$1;
(statearr_24793_24833[(2)] = null);

(statearr_24793_24833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (4))){
var inst_24729 = (state_24788[(13)]);
var inst_24729__$1 = (state_24788[(2)]);
var inst_24730 = (inst_24729__$1 == null);
var state_24788__$1 = (function (){var statearr_24794 = state_24788;
(statearr_24794[(13)] = inst_24729__$1);

return statearr_24794;
})();
if(cljs.core.truth_(inst_24730)){
var statearr_24795_24834 = state_24788__$1;
(statearr_24795_24834[(1)] = (5));

} else {
var statearr_24796_24835 = state_24788__$1;
(statearr_24796_24835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (15))){
var state_24788__$1 = state_24788;
var statearr_24800_24836 = state_24788__$1;
(statearr_24800_24836[(2)] = null);

(statearr_24800_24836[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (21))){
var state_24788__$1 = state_24788;
var statearr_24801_24837 = state_24788__$1;
(statearr_24801_24837[(2)] = null);

(statearr_24801_24837[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (13))){
var inst_24741 = (state_24788[(8)]);
var inst_24742 = (state_24788[(9)]);
var inst_24743 = (state_24788[(10)]);
var inst_24740 = (state_24788[(12)]);
var inst_24750 = (state_24788[(2)]);
var inst_24751 = (inst_24743 + (1));
var tmp24797 = inst_24741;
var tmp24798 = inst_24742;
var tmp24799 = inst_24740;
var inst_24740__$1 = tmp24799;
var inst_24741__$1 = tmp24797;
var inst_24742__$1 = tmp24798;
var inst_24743__$1 = inst_24751;
var state_24788__$1 = (function (){var statearr_24802 = state_24788;
(statearr_24802[(8)] = inst_24741__$1);

(statearr_24802[(9)] = inst_24742__$1);

(statearr_24802[(14)] = inst_24750);

(statearr_24802[(10)] = inst_24743__$1);

(statearr_24802[(12)] = inst_24740__$1);

return statearr_24802;
})();
var statearr_24803_24838 = state_24788__$1;
(statearr_24803_24838[(2)] = null);

(statearr_24803_24838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (22))){
var state_24788__$1 = state_24788;
var statearr_24804_24839 = state_24788__$1;
(statearr_24804_24839[(2)] = null);

(statearr_24804_24839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (6))){
var inst_24729 = (state_24788[(13)]);
var inst_24738 = f.call(null,inst_24729);
var inst_24739 = cljs.core.seq.call(null,inst_24738);
var inst_24740 = inst_24739;
var inst_24741 = null;
var inst_24742 = (0);
var inst_24743 = (0);
var state_24788__$1 = (function (){var statearr_24805 = state_24788;
(statearr_24805[(8)] = inst_24741);

(statearr_24805[(9)] = inst_24742);

(statearr_24805[(10)] = inst_24743);

(statearr_24805[(12)] = inst_24740);

return statearr_24805;
})();
var statearr_24806_24840 = state_24788__$1;
(statearr_24806_24840[(2)] = null);

(statearr_24806_24840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (17))){
var inst_24754 = (state_24788[(7)]);
var inst_24758 = cljs.core.chunk_first.call(null,inst_24754);
var inst_24759 = cljs.core.chunk_rest.call(null,inst_24754);
var inst_24760 = cljs.core.count.call(null,inst_24758);
var inst_24740 = inst_24759;
var inst_24741 = inst_24758;
var inst_24742 = inst_24760;
var inst_24743 = (0);
var state_24788__$1 = (function (){var statearr_24807 = state_24788;
(statearr_24807[(8)] = inst_24741);

(statearr_24807[(9)] = inst_24742);

(statearr_24807[(10)] = inst_24743);

(statearr_24807[(12)] = inst_24740);

return statearr_24807;
})();
var statearr_24808_24841 = state_24788__$1;
(statearr_24808_24841[(2)] = null);

(statearr_24808_24841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (3))){
var inst_24786 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24788__$1,inst_24786);
} else {
if((state_val_24789 === (12))){
var inst_24774 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24809_24842 = state_24788__$1;
(statearr_24809_24842[(2)] = inst_24774);

(statearr_24809_24842[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (2))){
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24788__$1,(4),in$);
} else {
if((state_val_24789 === (23))){
var inst_24782 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24810_24843 = state_24788__$1;
(statearr_24810_24843[(2)] = inst_24782);

(statearr_24810_24843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (19))){
var inst_24769 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24811_24844 = state_24788__$1;
(statearr_24811_24844[(2)] = inst_24769);

(statearr_24811_24844[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (11))){
var inst_24754 = (state_24788[(7)]);
var inst_24740 = (state_24788[(12)]);
var inst_24754__$1 = cljs.core.seq.call(null,inst_24740);
var state_24788__$1 = (function (){var statearr_24812 = state_24788;
(statearr_24812[(7)] = inst_24754__$1);

return statearr_24812;
})();
if(inst_24754__$1){
var statearr_24813_24845 = state_24788__$1;
(statearr_24813_24845[(1)] = (14));

} else {
var statearr_24814_24846 = state_24788__$1;
(statearr_24814_24846[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (9))){
var inst_24776 = (state_24788[(2)]);
var inst_24777 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24788__$1 = (function (){var statearr_24815 = state_24788;
(statearr_24815[(15)] = inst_24776);

return statearr_24815;
})();
if(cljs.core.truth_(inst_24777)){
var statearr_24816_24847 = state_24788__$1;
(statearr_24816_24847[(1)] = (21));

} else {
var statearr_24817_24848 = state_24788__$1;
(statearr_24817_24848[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (5))){
var inst_24732 = cljs.core.async.close_BANG_.call(null,out);
var state_24788__$1 = state_24788;
var statearr_24818_24849 = state_24788__$1;
(statearr_24818_24849[(2)] = inst_24732);

(statearr_24818_24849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (14))){
var inst_24754 = (state_24788[(7)]);
var inst_24756 = cljs.core.chunked_seq_QMARK_.call(null,inst_24754);
var state_24788__$1 = state_24788;
if(inst_24756){
var statearr_24819_24850 = state_24788__$1;
(statearr_24819_24850[(1)] = (17));

} else {
var statearr_24820_24851 = state_24788__$1;
(statearr_24820_24851[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (16))){
var inst_24772 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24821_24852 = state_24788__$1;
(statearr_24821_24852[(2)] = inst_24772);

(statearr_24821_24852[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (10))){
var inst_24741 = (state_24788[(8)]);
var inst_24743 = (state_24788[(10)]);
var inst_24748 = cljs.core._nth.call(null,inst_24741,inst_24743);
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24788__$1,(13),out,inst_24748);
} else {
if((state_val_24789 === (18))){
var inst_24754 = (state_24788[(7)]);
var inst_24763 = cljs.core.first.call(null,inst_24754);
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24788__$1,(20),out,inst_24763);
} else {
if((state_val_24789 === (8))){
var inst_24742 = (state_24788[(9)]);
var inst_24743 = (state_24788[(10)]);
var inst_24745 = (inst_24743 < inst_24742);
var inst_24746 = inst_24745;
var state_24788__$1 = state_24788;
if(cljs.core.truth_(inst_24746)){
var statearr_24822_24853 = state_24788__$1;
(statearr_24822_24853[(1)] = (10));

} else {
var statearr_24823_24854 = state_24788__$1;
(statearr_24823_24854[(1)] = (11));

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
});})(c__22331__auto__))
;
return ((function (switch__22219__auto__,c__22331__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22220__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22220__auto____0 = (function (){
var statearr_24827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24827[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22220__auto__);

(statearr_24827[(1)] = (1));

return statearr_24827;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22220__auto____1 = (function (state_24788){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_24788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e24828){if((e24828 instanceof Object)){
var ex__22223__auto__ = e24828;
var statearr_24829_24855 = state_24788;
(statearr_24829_24855[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24856 = state_24788;
state_24788 = G__24856;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22220__auto__ = function(state_24788){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22220__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22220__auto____1.call(this,state_24788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22220__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22220__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto__))
})();
var state__22333__auto__ = (function (){var statearr_24830 = f__22332__auto__.call(null);
(statearr_24830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto__);

return statearr_24830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto__))
);

return c__22331__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24857 = [];
var len__21234__auto___24860 = arguments.length;
var i__21235__auto___24861 = (0);
while(true){
if((i__21235__auto___24861 < len__21234__auto___24860)){
args24857.push((arguments[i__21235__auto___24861]));

var G__24862 = (i__21235__auto___24861 + (1));
i__21235__auto___24861 = G__24862;
continue;
} else {
}
break;
}

var G__24859 = args24857.length;
switch (G__24859) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24857.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args24864 = [];
var len__21234__auto___24867 = arguments.length;
var i__21235__auto___24868 = (0);
while(true){
if((i__21235__auto___24868 < len__21234__auto___24867)){
args24864.push((arguments[i__21235__auto___24868]));

var G__24869 = (i__21235__auto___24868 + (1));
i__21235__auto___24868 = G__24869;
continue;
} else {
}
break;
}

var G__24866 = args24864.length;
switch (G__24866) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24864.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args24871 = [];
var len__21234__auto___24922 = arguments.length;
var i__21235__auto___24923 = (0);
while(true){
if((i__21235__auto___24923 < len__21234__auto___24922)){
args24871.push((arguments[i__21235__auto___24923]));

var G__24924 = (i__21235__auto___24923 + (1));
i__21235__auto___24923 = G__24924;
continue;
} else {
}
break;
}

var G__24873 = args24871.length;
switch (G__24873) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24871.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22331__auto___24926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto___24926,out){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto___24926,out){
return (function (state_24897){
var state_val_24898 = (state_24897[(1)]);
if((state_val_24898 === (7))){
var inst_24892 = (state_24897[(2)]);
var state_24897__$1 = state_24897;
var statearr_24899_24927 = state_24897__$1;
(statearr_24899_24927[(2)] = inst_24892);

(statearr_24899_24927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24898 === (1))){
var inst_24874 = null;
var state_24897__$1 = (function (){var statearr_24900 = state_24897;
(statearr_24900[(7)] = inst_24874);

return statearr_24900;
})();
var statearr_24901_24928 = state_24897__$1;
(statearr_24901_24928[(2)] = null);

(statearr_24901_24928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24898 === (4))){
var inst_24877 = (state_24897[(8)]);
var inst_24877__$1 = (state_24897[(2)]);
var inst_24878 = (inst_24877__$1 == null);
var inst_24879 = cljs.core.not.call(null,inst_24878);
var state_24897__$1 = (function (){var statearr_24902 = state_24897;
(statearr_24902[(8)] = inst_24877__$1);

return statearr_24902;
})();
if(inst_24879){
var statearr_24903_24929 = state_24897__$1;
(statearr_24903_24929[(1)] = (5));

} else {
var statearr_24904_24930 = state_24897__$1;
(statearr_24904_24930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24898 === (6))){
var state_24897__$1 = state_24897;
var statearr_24905_24931 = state_24897__$1;
(statearr_24905_24931[(2)] = null);

(statearr_24905_24931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24898 === (3))){
var inst_24894 = (state_24897[(2)]);
var inst_24895 = cljs.core.async.close_BANG_.call(null,out);
var state_24897__$1 = (function (){var statearr_24906 = state_24897;
(statearr_24906[(9)] = inst_24894);

return statearr_24906;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24897__$1,inst_24895);
} else {
if((state_val_24898 === (2))){
var state_24897__$1 = state_24897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24897__$1,(4),ch);
} else {
if((state_val_24898 === (11))){
var inst_24877 = (state_24897[(8)]);
var inst_24886 = (state_24897[(2)]);
var inst_24874 = inst_24877;
var state_24897__$1 = (function (){var statearr_24907 = state_24897;
(statearr_24907[(7)] = inst_24874);

(statearr_24907[(10)] = inst_24886);

return statearr_24907;
})();
var statearr_24908_24932 = state_24897__$1;
(statearr_24908_24932[(2)] = null);

(statearr_24908_24932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24898 === (9))){
var inst_24877 = (state_24897[(8)]);
var state_24897__$1 = state_24897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24897__$1,(11),out,inst_24877);
} else {
if((state_val_24898 === (5))){
var inst_24874 = (state_24897[(7)]);
var inst_24877 = (state_24897[(8)]);
var inst_24881 = cljs.core._EQ_.call(null,inst_24877,inst_24874);
var state_24897__$1 = state_24897;
if(inst_24881){
var statearr_24910_24933 = state_24897__$1;
(statearr_24910_24933[(1)] = (8));

} else {
var statearr_24911_24934 = state_24897__$1;
(statearr_24911_24934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24898 === (10))){
var inst_24889 = (state_24897[(2)]);
var state_24897__$1 = state_24897;
var statearr_24912_24935 = state_24897__$1;
(statearr_24912_24935[(2)] = inst_24889);

(statearr_24912_24935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24898 === (8))){
var inst_24874 = (state_24897[(7)]);
var tmp24909 = inst_24874;
var inst_24874__$1 = tmp24909;
var state_24897__$1 = (function (){var statearr_24913 = state_24897;
(statearr_24913[(7)] = inst_24874__$1);

return statearr_24913;
})();
var statearr_24914_24936 = state_24897__$1;
(statearr_24914_24936[(2)] = null);

(statearr_24914_24936[(1)] = (2));


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
});})(c__22331__auto___24926,out))
;
return ((function (switch__22219__auto__,c__22331__auto___24926,out){
return (function() {
var cljs$core$async$state_machine__22220__auto__ = null;
var cljs$core$async$state_machine__22220__auto____0 = (function (){
var statearr_24918 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24918[(0)] = cljs$core$async$state_machine__22220__auto__);

(statearr_24918[(1)] = (1));

return statearr_24918;
});
var cljs$core$async$state_machine__22220__auto____1 = (function (state_24897){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_24897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e24919){if((e24919 instanceof Object)){
var ex__22223__auto__ = e24919;
var statearr_24920_24937 = state_24897;
(statearr_24920_24937[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24938 = state_24897;
state_24897 = G__24938;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
cljs$core$async$state_machine__22220__auto__ = function(state_24897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22220__auto____1.call(this,state_24897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22220__auto____0;
cljs$core$async$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22220__auto____1;
return cljs$core$async$state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto___24926,out))
})();
var state__22333__auto__ = (function (){var statearr_24921 = f__22332__auto__.call(null);
(statearr_24921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto___24926);

return statearr_24921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto___24926,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24939 = [];
var len__21234__auto___25009 = arguments.length;
var i__21235__auto___25010 = (0);
while(true){
if((i__21235__auto___25010 < len__21234__auto___25009)){
args24939.push((arguments[i__21235__auto___25010]));

var G__25011 = (i__21235__auto___25010 + (1));
i__21235__auto___25010 = G__25011;
continue;
} else {
}
break;
}

var G__24941 = args24939.length;
switch (G__24941) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24939.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22331__auto___25013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto___25013,out){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto___25013,out){
return (function (state_24979){
var state_val_24980 = (state_24979[(1)]);
if((state_val_24980 === (7))){
var inst_24975 = (state_24979[(2)]);
var state_24979__$1 = state_24979;
var statearr_24981_25014 = state_24979__$1;
(statearr_24981_25014[(2)] = inst_24975);

(statearr_24981_25014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24980 === (1))){
var inst_24942 = (new Array(n));
var inst_24943 = inst_24942;
var inst_24944 = (0);
var state_24979__$1 = (function (){var statearr_24982 = state_24979;
(statearr_24982[(7)] = inst_24943);

(statearr_24982[(8)] = inst_24944);

return statearr_24982;
})();
var statearr_24983_25015 = state_24979__$1;
(statearr_24983_25015[(2)] = null);

(statearr_24983_25015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24980 === (4))){
var inst_24947 = (state_24979[(9)]);
var inst_24947__$1 = (state_24979[(2)]);
var inst_24948 = (inst_24947__$1 == null);
var inst_24949 = cljs.core.not.call(null,inst_24948);
var state_24979__$1 = (function (){var statearr_24984 = state_24979;
(statearr_24984[(9)] = inst_24947__$1);

return statearr_24984;
})();
if(inst_24949){
var statearr_24985_25016 = state_24979__$1;
(statearr_24985_25016[(1)] = (5));

} else {
var statearr_24986_25017 = state_24979__$1;
(statearr_24986_25017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24980 === (15))){
var inst_24969 = (state_24979[(2)]);
var state_24979__$1 = state_24979;
var statearr_24987_25018 = state_24979__$1;
(statearr_24987_25018[(2)] = inst_24969);

(statearr_24987_25018[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24980 === (13))){
var state_24979__$1 = state_24979;
var statearr_24988_25019 = state_24979__$1;
(statearr_24988_25019[(2)] = null);

(statearr_24988_25019[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24980 === (6))){
var inst_24944 = (state_24979[(8)]);
var inst_24965 = (inst_24944 > (0));
var state_24979__$1 = state_24979;
if(cljs.core.truth_(inst_24965)){
var statearr_24989_25020 = state_24979__$1;
(statearr_24989_25020[(1)] = (12));

} else {
var statearr_24990_25021 = state_24979__$1;
(statearr_24990_25021[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24980 === (3))){
var inst_24977 = (state_24979[(2)]);
var state_24979__$1 = state_24979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24979__$1,inst_24977);
} else {
if((state_val_24980 === (12))){
var inst_24943 = (state_24979[(7)]);
var inst_24967 = cljs.core.vec.call(null,inst_24943);
var state_24979__$1 = state_24979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24979__$1,(15),out,inst_24967);
} else {
if((state_val_24980 === (2))){
var state_24979__$1 = state_24979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24979__$1,(4),ch);
} else {
if((state_val_24980 === (11))){
var inst_24959 = (state_24979[(2)]);
var inst_24960 = (new Array(n));
var inst_24943 = inst_24960;
var inst_24944 = (0);
var state_24979__$1 = (function (){var statearr_24991 = state_24979;
(statearr_24991[(7)] = inst_24943);

(statearr_24991[(8)] = inst_24944);

(statearr_24991[(10)] = inst_24959);

return statearr_24991;
})();
var statearr_24992_25022 = state_24979__$1;
(statearr_24992_25022[(2)] = null);

(statearr_24992_25022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24980 === (9))){
var inst_24943 = (state_24979[(7)]);
var inst_24957 = cljs.core.vec.call(null,inst_24943);
var state_24979__$1 = state_24979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24979__$1,(11),out,inst_24957);
} else {
if((state_val_24980 === (5))){
var inst_24943 = (state_24979[(7)]);
var inst_24944 = (state_24979[(8)]);
var inst_24947 = (state_24979[(9)]);
var inst_24952 = (state_24979[(11)]);
var inst_24951 = (inst_24943[inst_24944] = inst_24947);
var inst_24952__$1 = (inst_24944 + (1));
var inst_24953 = (inst_24952__$1 < n);
var state_24979__$1 = (function (){var statearr_24993 = state_24979;
(statearr_24993[(12)] = inst_24951);

(statearr_24993[(11)] = inst_24952__$1);

return statearr_24993;
})();
if(cljs.core.truth_(inst_24953)){
var statearr_24994_25023 = state_24979__$1;
(statearr_24994_25023[(1)] = (8));

} else {
var statearr_24995_25024 = state_24979__$1;
(statearr_24995_25024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24980 === (14))){
var inst_24972 = (state_24979[(2)]);
var inst_24973 = cljs.core.async.close_BANG_.call(null,out);
var state_24979__$1 = (function (){var statearr_24997 = state_24979;
(statearr_24997[(13)] = inst_24972);

return statearr_24997;
})();
var statearr_24998_25025 = state_24979__$1;
(statearr_24998_25025[(2)] = inst_24973);

(statearr_24998_25025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24980 === (10))){
var inst_24963 = (state_24979[(2)]);
var state_24979__$1 = state_24979;
var statearr_24999_25026 = state_24979__$1;
(statearr_24999_25026[(2)] = inst_24963);

(statearr_24999_25026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24980 === (8))){
var inst_24943 = (state_24979[(7)]);
var inst_24952 = (state_24979[(11)]);
var tmp24996 = inst_24943;
var inst_24943__$1 = tmp24996;
var inst_24944 = inst_24952;
var state_24979__$1 = (function (){var statearr_25000 = state_24979;
(statearr_25000[(7)] = inst_24943__$1);

(statearr_25000[(8)] = inst_24944);

return statearr_25000;
})();
var statearr_25001_25027 = state_24979__$1;
(statearr_25001_25027[(2)] = null);

(statearr_25001_25027[(1)] = (2));


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
});})(c__22331__auto___25013,out))
;
return ((function (switch__22219__auto__,c__22331__auto___25013,out){
return (function() {
var cljs$core$async$state_machine__22220__auto__ = null;
var cljs$core$async$state_machine__22220__auto____0 = (function (){
var statearr_25005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25005[(0)] = cljs$core$async$state_machine__22220__auto__);

(statearr_25005[(1)] = (1));

return statearr_25005;
});
var cljs$core$async$state_machine__22220__auto____1 = (function (state_24979){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_24979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e25006){if((e25006 instanceof Object)){
var ex__22223__auto__ = e25006;
var statearr_25007_25028 = state_24979;
(statearr_25007_25028[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25029 = state_24979;
state_24979 = G__25029;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
cljs$core$async$state_machine__22220__auto__ = function(state_24979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22220__auto____1.call(this,state_24979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22220__auto____0;
cljs$core$async$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22220__auto____1;
return cljs$core$async$state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto___25013,out))
})();
var state__22333__auto__ = (function (){var statearr_25008 = f__22332__auto__.call(null);
(statearr_25008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto___25013);

return statearr_25008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto___25013,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25030 = [];
var len__21234__auto___25104 = arguments.length;
var i__21235__auto___25105 = (0);
while(true){
if((i__21235__auto___25105 < len__21234__auto___25104)){
args25030.push((arguments[i__21235__auto___25105]));

var G__25106 = (i__21235__auto___25105 + (1));
i__21235__auto___25105 = G__25106;
continue;
} else {
}
break;
}

var G__25032 = args25030.length;
switch (G__25032) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25030.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22331__auto___25108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22331__auto___25108,out){
return (function (){
var f__22332__auto__ = (function (){var switch__22219__auto__ = ((function (c__22331__auto___25108,out){
return (function (state_25074){
var state_val_25075 = (state_25074[(1)]);
if((state_val_25075 === (7))){
var inst_25070 = (state_25074[(2)]);
var state_25074__$1 = state_25074;
var statearr_25076_25109 = state_25074__$1;
(statearr_25076_25109[(2)] = inst_25070);

(statearr_25076_25109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25075 === (1))){
var inst_25033 = [];
var inst_25034 = inst_25033;
var inst_25035 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25074__$1 = (function (){var statearr_25077 = state_25074;
(statearr_25077[(7)] = inst_25035);

(statearr_25077[(8)] = inst_25034);

return statearr_25077;
})();
var statearr_25078_25110 = state_25074__$1;
(statearr_25078_25110[(2)] = null);

(statearr_25078_25110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25075 === (4))){
var inst_25038 = (state_25074[(9)]);
var inst_25038__$1 = (state_25074[(2)]);
var inst_25039 = (inst_25038__$1 == null);
var inst_25040 = cljs.core.not.call(null,inst_25039);
var state_25074__$1 = (function (){var statearr_25079 = state_25074;
(statearr_25079[(9)] = inst_25038__$1);

return statearr_25079;
})();
if(inst_25040){
var statearr_25080_25111 = state_25074__$1;
(statearr_25080_25111[(1)] = (5));

} else {
var statearr_25081_25112 = state_25074__$1;
(statearr_25081_25112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25075 === (15))){
var inst_25064 = (state_25074[(2)]);
var state_25074__$1 = state_25074;
var statearr_25082_25113 = state_25074__$1;
(statearr_25082_25113[(2)] = inst_25064);

(statearr_25082_25113[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25075 === (13))){
var state_25074__$1 = state_25074;
var statearr_25083_25114 = state_25074__$1;
(statearr_25083_25114[(2)] = null);

(statearr_25083_25114[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25075 === (6))){
var inst_25034 = (state_25074[(8)]);
var inst_25059 = inst_25034.length;
var inst_25060 = (inst_25059 > (0));
var state_25074__$1 = state_25074;
if(cljs.core.truth_(inst_25060)){
var statearr_25084_25115 = state_25074__$1;
(statearr_25084_25115[(1)] = (12));

} else {
var statearr_25085_25116 = state_25074__$1;
(statearr_25085_25116[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25075 === (3))){
var inst_25072 = (state_25074[(2)]);
var state_25074__$1 = state_25074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25074__$1,inst_25072);
} else {
if((state_val_25075 === (12))){
var inst_25034 = (state_25074[(8)]);
var inst_25062 = cljs.core.vec.call(null,inst_25034);
var state_25074__$1 = state_25074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25074__$1,(15),out,inst_25062);
} else {
if((state_val_25075 === (2))){
var state_25074__$1 = state_25074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25074__$1,(4),ch);
} else {
if((state_val_25075 === (11))){
var inst_25042 = (state_25074[(10)]);
var inst_25038 = (state_25074[(9)]);
var inst_25052 = (state_25074[(2)]);
var inst_25053 = [];
var inst_25054 = inst_25053.push(inst_25038);
var inst_25034 = inst_25053;
var inst_25035 = inst_25042;
var state_25074__$1 = (function (){var statearr_25086 = state_25074;
(statearr_25086[(11)] = inst_25054);

(statearr_25086[(12)] = inst_25052);

(statearr_25086[(7)] = inst_25035);

(statearr_25086[(8)] = inst_25034);

return statearr_25086;
})();
var statearr_25087_25117 = state_25074__$1;
(statearr_25087_25117[(2)] = null);

(statearr_25087_25117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25075 === (9))){
var inst_25034 = (state_25074[(8)]);
var inst_25050 = cljs.core.vec.call(null,inst_25034);
var state_25074__$1 = state_25074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25074__$1,(11),out,inst_25050);
} else {
if((state_val_25075 === (5))){
var inst_25042 = (state_25074[(10)]);
var inst_25035 = (state_25074[(7)]);
var inst_25038 = (state_25074[(9)]);
var inst_25042__$1 = f.call(null,inst_25038);
var inst_25043 = cljs.core._EQ_.call(null,inst_25042__$1,inst_25035);
var inst_25044 = cljs.core.keyword_identical_QMARK_.call(null,inst_25035,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25045 = (inst_25043) || (inst_25044);
var state_25074__$1 = (function (){var statearr_25088 = state_25074;
(statearr_25088[(10)] = inst_25042__$1);

return statearr_25088;
})();
if(cljs.core.truth_(inst_25045)){
var statearr_25089_25118 = state_25074__$1;
(statearr_25089_25118[(1)] = (8));

} else {
var statearr_25090_25119 = state_25074__$1;
(statearr_25090_25119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25075 === (14))){
var inst_25067 = (state_25074[(2)]);
var inst_25068 = cljs.core.async.close_BANG_.call(null,out);
var state_25074__$1 = (function (){var statearr_25092 = state_25074;
(statearr_25092[(13)] = inst_25067);

return statearr_25092;
})();
var statearr_25093_25120 = state_25074__$1;
(statearr_25093_25120[(2)] = inst_25068);

(statearr_25093_25120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25075 === (10))){
var inst_25057 = (state_25074[(2)]);
var state_25074__$1 = state_25074;
var statearr_25094_25121 = state_25074__$1;
(statearr_25094_25121[(2)] = inst_25057);

(statearr_25094_25121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25075 === (8))){
var inst_25042 = (state_25074[(10)]);
var inst_25034 = (state_25074[(8)]);
var inst_25038 = (state_25074[(9)]);
var inst_25047 = inst_25034.push(inst_25038);
var tmp25091 = inst_25034;
var inst_25034__$1 = tmp25091;
var inst_25035 = inst_25042;
var state_25074__$1 = (function (){var statearr_25095 = state_25074;
(statearr_25095[(14)] = inst_25047);

(statearr_25095[(7)] = inst_25035);

(statearr_25095[(8)] = inst_25034__$1);

return statearr_25095;
})();
var statearr_25096_25122 = state_25074__$1;
(statearr_25096_25122[(2)] = null);

(statearr_25096_25122[(1)] = (2));


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
});})(c__22331__auto___25108,out))
;
return ((function (switch__22219__auto__,c__22331__auto___25108,out){
return (function() {
var cljs$core$async$state_machine__22220__auto__ = null;
var cljs$core$async$state_machine__22220__auto____0 = (function (){
var statearr_25100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25100[(0)] = cljs$core$async$state_machine__22220__auto__);

(statearr_25100[(1)] = (1));

return statearr_25100;
});
var cljs$core$async$state_machine__22220__auto____1 = (function (state_25074){
while(true){
var ret_value__22221__auto__ = (function (){try{while(true){
var result__22222__auto__ = switch__22219__auto__.call(null,state_25074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22222__auto__;
}
break;
}
}catch (e25101){if((e25101 instanceof Object)){
var ex__22223__auto__ = e25101;
var statearr_25102_25123 = state_25074;
(statearr_25102_25123[(5)] = ex__22223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25124 = state_25074;
state_25074 = G__25124;
continue;
} else {
return ret_value__22221__auto__;
}
break;
}
});
cljs$core$async$state_machine__22220__auto__ = function(state_25074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22220__auto____1.call(this,state_25074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22220__auto____0;
cljs$core$async$state_machine__22220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22220__auto____1;
return cljs$core$async$state_machine__22220__auto__;
})()
;})(switch__22219__auto__,c__22331__auto___25108,out))
})();
var state__22333__auto__ = (function (){var statearr_25103 = f__22332__auto__.call(null);
(statearr_25103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22331__auto___25108);

return statearr_25103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22333__auto__);
});})(c__22331__auto___25108,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map