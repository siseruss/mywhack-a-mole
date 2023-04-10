controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    simplified.moveToRandomHoleOnGrid(myHammer)
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    simplified.moveToRandomHoleOnGrid(myHammer)
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    simplified.moveToRandomHoleOnGrid(myHammer)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    simplified.moveToRandomHoleOnGrid(myMole)
    animation.runImageAnimation(
    myHammer,
    assets.animation`hammerAnimation`,
    50,
    false
    )
    animation.runImageAnimation(
    myMole,
    assets.animation`moleAnimation`,
    200,
    false
    )
    music.pewPew.play()
})
let myHammer: Sprite = null
let myMole: Sprite = null
game.showLongText("Player 1: Use the arrow keys to move the hammer. Players 2-4: Press A to move the hammer.", DialogLayout.Center)
scene.setBackgroundImage(assets.image`grid`)
myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)
myHammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
simplified.moveOnlyOnscreenWithArrows(myHammer, simplified.Speeds.Fast)
carnival.startCountdownGame(20, carnival.WinTypes.Multi)
carnival.addLabelTo("Whack-the-Mole", carnival.Areas.Bottom)
game.onUpdateInterval(2000, function () {
    simplified.checkMoleEscape(mp.playerSelector(mp.PlayerNumber.Four), 1)
    simplified.checkMoleEscape(mp.playerSelector(mp.PlayerNumber.Three), 1)
    simplified.checkMoleEscape(mp.playerSelector(mp.PlayerNumber.Two), 1)
    simplified.checkMoleEscape(mp.playerSelector(mp.PlayerNumber.One), 1)
})
