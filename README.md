# Rails Edit Credentials

This extension opens Rails' encrypted files.

## Usage

Go to the file.

When you see the encrypted text in the editor area, bring up the command palette and run `Rails Edit Credentials`.

A new VSCode window will pop up with the plain contents of the file. Make edits, save, and close the window.

The encrypted text will be updated automatically.

## Releasing a new version

```sh
npx vsce package
npx vsce publish
```
