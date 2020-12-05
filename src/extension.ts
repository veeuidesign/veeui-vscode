import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const showText = vscode.commands.registerCommand('veeui-theme.helloWorld', ()=> {
		vscode.window.showInformationMessage('Hello Vee UI');
	})

	context.subscriptions.push(showText);
}

// this method is called when your extension is deactivated
export function deactivate() {}
