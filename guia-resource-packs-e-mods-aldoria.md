# Guia de mods e resource packs — Aldoria

## Resource pack: estrutura da pasta
Crie uma pasta e coloque nela `codigo.js` e suas imagens PNG:

```text
meu-pack/
|-- codigo.js
|-- textura.png
|-- player.png
```

No jogo: aperte I, abra Mods e clique em CARREGAR PASTA RESOURCE PACK. Escolha a pasta. Em navegadores que não permitem escolher pasta, carregue `codigo.js` pelo botão CARREGAR MOD .JS; as imagens precisam ser escolhidas pela pasta suportada pelo navegador.

## Texturas automáticas
Use PNG com transparência se precisar. Os nomes são ignorados em maiúsculas/minúsculas. Cada imagem é ajustada ao tamanho do tile ou sprite.
- Tiles: `grass.png`, `tree.png`, `wall.png`/`stone.png`, `water.png`, `floor.png`.
- Personagem: `player.png` ou `player_down.png`, `player_up.png`, `player_left.png`, `player_right.png`.
- Outros sprites: `slime.png`, `skeleton.png`, `bat.png`, `golem.png`, `boss_vorn.png`, `npc.png`, `elder.png`, `heart.png`.

## Arquivo codigo.js
```js
Aldoria.register({
  name: 'Meu resource pack',
  version: '1.0',
  init(api) {
    api.texture.set('grass', 'textura.png');
  }
});
```
A pasta pode aplicar automaticamente `grass.png`; `api.texture.set(alvo, arquivo)` escolhe outra imagem PNG da pasta. Alvos: grass, tree, wall, stone, water, floor, player, player_down, player_up, player_left, player_right, npc, elder, slime, skeleton, bat, golem, boss_vorn e heart. `api.texture.reset(alvo)` restaura a textura original. `api.texture.list()` lista as imagens do pack.

## Adicionar um produto à loja
As lojas aceitam até dois produtos de mod cada. IDs de loja: `weapons` (forja), `grimoire` (grimório), `armor` (armaria), `motos` (oficina). Exemplo de poção na forja:
```js
Aldoria.register({
  name: 'Loja de poções',
  init(api) {
    api.shop.add('weapons', {
      id: 'pocao-pequena',
      name: 'Poção pequena',
      price: 25,
      description: 'Recupera vida',
      onBuy(api, item) { api.heal(2); }
    });
  }
});
```
`onBuy(api,item)` roda após cobrar o preço. Se der erro, o ouro é devolvido. Os itens de mod podem ser repetidos; use `api.giveItem(item.name)` para guardar o nome no personagem ou aplique o efeito diretamente.

## Comandos disponíveis
- `api.toast(texto)`: mostra mensagem.
- `api.addGold(n)`: ajusta ouro.
- `api.addXP(n)`: concede experiência e processa níveis/pontos.
- `api.heal(n)`: recupera vida até o máximo.
- `api.giveItem(nome)`: registra um item de mod no save do personagem.
- `api.setSpeed(multiplicador)`: ajusta velocidade entre 0.25x e 5x.
- `api.damageNearby(dano, raio)`: causa dano aos inimigos próximos; raio padrão 48.
- `api.player`: leitura de nome, nível, vida, ouro, mapa e itens de mod.
- `api.on('start', fn)`: executa ao carregar o mod.
- `api.on('tick', fn)`: executa a cada atualização; mantenha o código leve.

Mods são JavaScript executável. Carregue somente código e packs em que confia.