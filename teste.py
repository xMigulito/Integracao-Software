def encontrar_usuario(id, usuarios):
        for usuario in usuarios: 
             if usuario['id'] == id:
                 return usuario
        return None  



usuarios = [
    {'id' : 1, 'nome' : 'Ana'},
    {'id' : 2, 'nome' : 'Bruno'},
    {'id' : 3, 'nome' : 'Carlos'}
]

print(encontrar_usuario(4, usuarios)['nome']) # {'id' : 2, 'nome' : 'Bruno'}