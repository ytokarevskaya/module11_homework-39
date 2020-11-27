
            function adderGenerator(a) {
                return function (b) {
                    return a + b;
                }
            }

            let adder5 = adderGenerator(5);
            let result5_1 = adder5(5);
            let result5_2 = adder5(6);
            console.log(result5_1, result5_2);

            let adder10 = adderGenerator(10);
            let result10_1 = adder10(5);
            let result10_2 = adder10(6);
            console.log(result10_1, result10_2);
 