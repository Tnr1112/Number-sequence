import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('generate-number-sequence.sameOrderAsSelected', () => {
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            const selections = editor.selections;
	
				editor.edit(editBuilder => {
					const startLine = editor.selection.start.line;
					const text = editor.document.lineAt(startLine).text;
					const match = text.match(/\d+/);
					let startNumber = 1;
	
					if (match) {
						startNumber = parseInt(match[0]);
					}
					const newLine = startLine;
					selections.forEach((selection, index) => {
						if (index != 0) {
							const newNumber = startNumber + index;
							const selectedText = editor.document.getText(selection);
							const newText = `${newNumber.toString()}${selectedText}`;
							editBuilder.replace(selection, newText);
						}
					});
                });
        }
    });

	context.subscriptions.push(disposable);
}
