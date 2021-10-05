// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode')

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.railsEditCredentials', function () {

		let fileName = vscode.window.activeTextEditor.document.fileName

		let match = /\/([^\/]+)\.yml\.enc/.exec(fileName)
		let env = match[1]
		if (!env) {
			vscode.window.showInformationMessage(`Error: Can only open files that end with .yml.enc`)
			return
		}

		vscode.window.showInformationMessage(`Launching editor for ${env} credentials ...`)

		let terminal = vscode.window.createTerminal('credentials-terminal')
		terminal.sendText(`env EDITOR="code --new-window --wait" rails credentials:edit --environment ${env}`)
	})

	context.subscriptions.push(disposable)
}
exports.activate = activate

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
