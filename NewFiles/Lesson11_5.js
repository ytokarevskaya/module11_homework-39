
            pow = (base, exponent) => Math.pow(base, exponent);

            
            let result1 = pow(2, 3);
            console.log(result1);

            
            powCycle = (base, exponent) => {
                let result = base;
                for (let i = 1; i < exponent; i++) {
                    result = result * base;
                }
                return result;
            }
            let result2 = powCycle(2, 3)
            console.log(result2);
       