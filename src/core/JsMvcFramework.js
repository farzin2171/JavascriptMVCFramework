let routeList=[];

export default class JsMvcFramework{
    constructor(routes)
    {
        routeList=routes;
        window['JsMvcFramework']=this;
        return  window['JsMvcFramework'];
    }

    matchRoute(route1,route2){
        if(route1==route2){
            return true;
        }
        return false;
    }

    navigate(event,url){
        if(event !=null) event.preventDefault();
        routeList.forEach(route=>{
            if(this.matchRoute(route.path,url)){
                 //Load DOM
                 document.getElementById('application').innerHTML=route.controller().view();
            }
        })
    }

    init(){
        window.onpopstate=function(event){
            window['JsMvcFramework'].navigate(null,window.location.pathname);
        }
        window.onload=()=>{
            this.navigate(null,window.location.pathname);
        }
    }
}