export default class myLoadsh{
    static debounce (fn, delay, context) {
        let timeId;
        return function (){
            let context = context;
            let arg = arguments;
            timeId&&clearTimeout(timeId);
            timeId = setTimeout(()=>{fn.apply(context, arg)}, delay)
        }
    }
}