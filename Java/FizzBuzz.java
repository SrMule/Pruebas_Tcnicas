/*
Escribir un programa que imprima los números del 1 al 100.
Pero, para los múltiplos de 3, debes imprimir "Fizz" en lugar del número,
y para los múltiplos de 5, imprimir "Buzz". Para los números que son múltiplos de ambos, imprimir "FizzBuzz".
*/

public class FizzBuzz {
    public static void main(String[] args) {
        for (int i = 1; i < 101; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.println("FizzBuzz");
            } else if (i % 3 == 0) {
                System.out.println("Fizz");
            } else if (i % 5 == 0) {
                System.out.println("Buzz");
            } else {
                System.out.println(i);
            }
        }
    }
}