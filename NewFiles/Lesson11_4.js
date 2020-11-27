 function intervalLogger(from, to) {
                from = +from;
                to = +to;

                if (to < from) {
                    console.log("Конечное число не может быть меньше начального");
                    return false;
                }

                let current = from;
                let interval = setInterval(function() {
                    if (current <= to) {
                        console.log(current);
                        current++;
                    }
                    else {
                        
                        clearInterval(interval);
                    }
                }, 1000);
            }

            let from = prompt("Введите первое число");
            let to = prompt("Введите второе число");
            intervalLogger(from, to);