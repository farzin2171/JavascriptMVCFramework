export default function Home(){
    return{
        view:()=>{
            return "<h1>Home page</h1><p><a href='/contact' onclick='JsMvcFramework.navigate(event,'/contact')' </p>"
        }
    }
}