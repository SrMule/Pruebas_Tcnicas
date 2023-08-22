#Escribir un programa que imprima los números del 1 al 100.
#Pero, para los múltiplos de 3, debes imprimir "Fizz" en lugar del número,
#y para los múltiplos de 5, imprimir "Buzz". Para los números que son múltiplos de ambos, imprimir "FizzBuzz".

for i in range(1,101):
    if (i % 3 == 0 & i % 5 == 0):
        print("FizzBuzz")
    elif (i % 3 == 0):
        print("Fizz")
    elif (i % 5 == 0):
        print("Buzz")
    else:
        print(i)