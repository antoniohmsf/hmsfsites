   function sim(){
        alert("Se você clicou aqui é porque também está com saudade dos nossos momentos divertidos. Que tal fazermos um brownie e umas batatinhas para curtir um pouco? :)")
    }

    function desvia(t){
        var btn = t;
        btn.style.position="absolute";
        btn.style.bottom= geraPosição(10,90);
        btn.style.left= geraPosição(10,90);
        console.log(btn);
        console.log("Opa, desviei...");
    }

    function geraPosição(min, max) {
        return Math.random() * ((max - min) + min) + "%";
    }

