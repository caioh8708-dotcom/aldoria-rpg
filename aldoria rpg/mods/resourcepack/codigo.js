Aldoria.register({
  name: 'Minha textura',
  init(api) {
    api.texture.set('heart', 'heart2.png');
    api.shop.add('weapons', {
  id: 'pocao',
  name: 'Poção',
  price: 30,
  icon: 'heart2.png',
  onBuy(api) {
    api.heal(2);
    api.shop.add('weapons'), 
    api.equipment.add('weapons', {
  id: 'espada-longa',
  name: 'Espada longa',
  slot: 'weapon',
  price: 120,
  damage: 10,
  icon: 'espada.png',
  hitbox: { width: 50, depth: 20, reach: 60 }
});
  }
});
  }
});