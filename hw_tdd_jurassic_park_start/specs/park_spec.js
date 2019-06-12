const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dino1;
  let dino2;
  let dino3;
  let dino4;
  let dino5;
  let park;


  beforeEach(function () {


       dino1 = new Dinosaur('Diplodok', 'herbivore', 150 );
       dino2 = new Dinosaur('Raptor', 'carnivore', 300 );
       dino3 = new Dinosaur('Mamut', 'herbivore', 200 );
       dino4 = new Dinosaur('Pterodaktus', 'omnivore', 250 );
       park = new Park('Jurasic Park', 50);
  });

  it('should have a name', function(){
    const expected = 'Jurasic Park';
    assert.strictEqual(park.name, expected);
  });

  it('should have a ticket price', function(){
    const expected = 50;
    assert.strictEqual(park.ticketPrice, expected);
  });

  it('should have a collection of dinosaurs', function(){
    const expected = [];
    assert.deepStrictEqual(park.collectionOfDinosaurs, expected)
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(dino1);
    const expected = [dino1];
    assert.deepStrictEqual(park.collectionOfDinosaurs, expected)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDino(dino3);
    park.addDino(dino4);
    park.removeDino(dino4);
    const expected = [dino3]
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDino(dino3);
    park.addDino(dino4);
    park.addDino(dino2);
    const expected = 'Raptor';
    const actual = park.mostPopularDino();
    assert.strictEqual(actual, expected);

  });

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to remove all dinosaurs of a particular species');

});
