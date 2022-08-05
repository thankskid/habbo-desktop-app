const {
	Menu: e
} = require("electron"), u = [{
	label: "Schließen",
	submenu: [{
		role: "quit"
	}]
}];
module.exports = e.buildFromTemplate(u);