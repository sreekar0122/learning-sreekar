document.getElementById("clicker").addEventListener("click", function() {
        alert("you triggered " + this.id);
        });

        // Another way of doing same thing is 
        var proveIt = function() {
        alert("you triggered " + this.id);
        };
        document.getElementById("clicker").addEventListener("click", proveIt);


        var attitude = function(original, replacement, source) {
            return function(source) {
            return source.replace(original, replacement);
            };
            };
            var snakify = attitude(/millenials/ig, "Snake People");
            var hippify = attitude(/baby boomers/ig, "Aging Hippies");
            console.log(snakify("The Millenials are always up to something."));
            console.log(hippify("The Baby Boomers just look the other way."));