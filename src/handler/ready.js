module.exports = (client) => {
  client.readyCommand({
    channel: "",
    code: `
      $log[mupp is ready!;#86f0a4]
      $log[ ]

      $registerFont[/src/handler/fonts/platforms.otf;platforms]
      $registerFont[/src/handler/fonts/ProductSans-Bold.ttf;productsansbold]
      $registerFont[/src/handler/fonts/HypatiaSansPro-Semibold.ttf;hypatiasanspro]
      $registerFont[/src/handler/fonts/ProductSans-Regular.ttf;productsansregular]
    `
  });
}