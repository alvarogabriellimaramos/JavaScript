class Pessoa:
    def __init__(self,nome,idade):
        self.nome = nome
        self.idade = idade 

pessoa = Pessoa('Alvaro',18)
print(pessoa.nome)