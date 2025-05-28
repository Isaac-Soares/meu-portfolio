import random
lista = []
aleatorio = random.randint(0, 20)
aleatorio2 = random.randint(0, 20)
aleatorio3 = random.randint(0, 20)
aleatorio4 = random.randint(0, 20)

estoque = {
    "maça": aleatorio,
    "banana": aleatorio2,
    "abacaxi": aleatorio3
}
print("estoque atual:")
for produto, quantidade in estoque.items():
    print(f"{produto}: {quantidade}")
print()

produto = input("digite um novo produto: ")
quantidade = aleatorio4 
if produto in estoque:
    print(f"o produto '{produto}' ja existe no estoque")
else:
    estoque[produto] = quantidade
    print(f"produto '{produto}'adicionado com quantidade: {aleatorio4}")
print(estoque)


lista ["maça", "banana", "limao"]
lista.append(produto) 
lista.remove("maça") 
lista.insert(1, "manga")
