namespace SpriteKind {
    export const followers = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.followers, function (sprite, otherSprite) {
    mySprite.startEffect(effects.spray)
    pause(500)
    effects.clearParticles(mySprite)
})
let mySprite: Sprite = null
let ghost: Sprite = null
info.setLife(3)
for (let index = 0; index < 4; index++) {
    ghost = sprites.create(img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `, SpriteKind.followers)
    ghost.x += randint(-80, 80)
    ghost.y += randint(-60, 60)
}
mySprite = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.followers)) {
        if (mySprite.x < value.x) {
            value.vx = -0.001 * game.runtime()
        } else {
            value.vx = 0.001 * game.runtime()
        }
        if (mySprite.y < value.y) {
            value.vy = -0.001 * game.runtime()
        } else {
            value.vy = 0.001 * game.runtime()
        }
    }
})
