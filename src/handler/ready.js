module.exports = (client) => {
  client.readyCommand({
    channel: "",
    code: `
      $registerFont[/src/handler/fonts/HypatiaSansPro-Semibold.ttf;hypatiasanspro]
      $registerFont[/src/handler/fonts/ProductSans-Bold.ttf;productsansbold]
      $registerFont[/src/handler/fonts/ProductSans-Regular.ttf;productsansregular]

      $log[
  ██████  ██▓    ▒██   ██▒▒██   ██▒▒██   ██▒▒██   ██▒
▒██    ▒ ▓██▒    ▒▒ █ █ ▒░▒▒ █ █ ▒░▒▒ █ █ ▒░▒▒ █ █ ▒░
░ ▓██▄   ▒██░    ░░  █   ░░░  █   ░░░  █   ░░░  █   ░
  ▒   ██▒▒██░     ░ █ █ ▒  ░ █ █ ▒  ░ █ █ ▒  ░ █ █ ▒ 
▒██████▒▒░██████▒▒██▒ ▒██▒▒██▒ ▒██▒▒██▒ ▒██▒▒██▒ ▒██▒
▒ ▒▓▒ ▒ ░░ ▒░▓  ░▒▒ ░ ░▓ ░▒▒ ░ ░▓ ░▒▒ ░ ░▓ ░▒▒ ░ ░▓ ░
░ ░▒  ░ ░░ ░ ▒  ░░░   ░▒ ░░░   ░▒ ░░░   ░▒ ░░░   ░▒ ░
░  ░  ░    ░ ░    ░    ░   ░    ░   ░    ░   ░    ░  
      ░      ░  ░ ░    ░   ░    ░   ░    ░   ░    ░  
      ]
    `
  });
}