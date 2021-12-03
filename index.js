const Kahoot = require('kahoot.js-updated-fixed');
const input = require("m-readline-promise")

async function main() {
    console.log("Welcome to \033[1;38;40mKahoot Spammer\033[0;38;40m !")
    let nick = await input("Nick: ")
    let code = await input("Code: ")

    function createClient(i, name, gamePin) {
        try {
            var client = new Kahoot();
            client.join(gamePin, name + " " + i);
        } catch (e) {console.log(error)}
    }

    for (let i = 0; i < 600; i++) {
        createClient(i + 1, nick, code)
    }
}
main()