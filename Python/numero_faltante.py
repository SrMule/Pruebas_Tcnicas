def mmn(lista):
    if len(lista) == 1:
        return lista[0]
    else:
        lista.sort()
        for i in range(1,len(lista)):
            if lista[i-1] != lista[i] - 1:
                return lista[i] - 1

def mmn2(lista):
    if len(lista) == 1:
        return 0
    else:
        lista.sort()
        for i in range(min(lista)+1,max(lista)+1):
            if i not in lista:
                return i
        return min(lista) - 1

def mmn3(lista):
    if len(lista) == 1:
        return 0
    else:
        lista_set = set(lista)
        for i in range(min(lista) + 1, max(lista) + 1):
            if i not in lista_set:
                return i
        return min(lista) - 1

#Esta es la mejor version hasta el momento de como encontrar el mínimo numero faltante en una sucesión de números enteros
def mmn4(lista):
    lista_set = set(lista)
    for i in range(min(lista_set) + 1, max(lista_set) + 1):
        if i not in lista_set:
            return i
    return min(lista_set) - 1

print(mmn4([4,1,2,5,6]))
print(mmn4([4,1,2,5,6]))
print(mmn4([1,2]))
print(mmn4([1,2,3,4,5,6]))
print(mmn4([5]))
print(mmn4([5,7,9,2,5,4,3,1,2,89]))