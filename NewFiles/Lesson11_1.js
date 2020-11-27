//объявили все переменные
let arrItem = [1, 4, 6, "b", 9, 12, "null", 17, 23, null, 0, "0"];
let numberCount = 0; //счетчик любых чисел и того, что можно привести к числу
let evenCount = 0; //счетчик четных чисел
let oddCount = 0; //счетчик нечетных чисел
let zeroCount = 0; //счетчик нулей

//определили функцию
function analiseArray()
{
    for (let i = 0; i < arrItem.length; i++)
    {
        if (arrItem[i] === null || isNaN(arrItem[i]))
        {
            console.log(arrItem[i] + " is not a number");
            continue;
        }

        //раз прошли первую проверку, перед нами точно число
        numberCount++

        if (arrItem[i] === 0)
        {
            zeroCount++;
            continue;
        }

        if (arrItem[i] % 2 === 0)
        {
            evenCount++
        }
        else
        {
            oddCount++
        }
    }
}

//вызываем функцию
analiseArray(arrItem);

console.log("Всего чисел" + " " + numberCount);
console.log("Всего четных чисел" + " " + evenCount);
console.log("Всего нечетных чисел" + " " + oddCount);
console.log("Всего нулевых чисел" + " " + zeroCount);