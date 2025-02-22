module.exports = (client) => {
  client.readyCommand({
    channel: "",
    code: `
      $let[fontReg;$registerFont[/src/handler/fonts/HypatiaSansPro-Semibold.ttf;hypatiasanspro]]
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