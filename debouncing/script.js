var a = 10;
function outer(){
    var b = 20;
    console.log(b);
    function inner(){
        var c = 30;
        console.log(a, b, c);
        function innermost(){
            var d = 40;
            console.log(a++, --b , ++c , d--);
            function innermostFunc(){
                var e = 50;
                console.log(a, b,c,d, e);
            }
            innermostFunc()  
        }
        innermost()
    }
    inner()
}

outer()