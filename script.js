        var num;
        function myFunction(){
        num = Math.floor(Math.random() * 6) + 1;
        var result = ['r', 'g', 'y', 'b'][Math.floor(Math.random() * 4)]
        var final = 'images/' + result + num +'.png';
        //console.log(final);
        document.getElementById("dice").src = final;
    }