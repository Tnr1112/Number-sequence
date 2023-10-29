# Generate number sequence from selections

Sometimes we want to generate a sequence number from the cursors that we have. For example:
We have this text:
```
a1aaa
bbbb
cccc
dddd
```
We put the cursor on the first line then in the other ones, the extension will take the number 1 and add to the cursors the next number. Today the extension works with the order that you selected.
```
aCURSOR_HERE1aaa
bbbCURSOR_HEREb
CURSOR_HEREcccc
dddCURSOR_HEREd
```
We get:
```
a1aaa
bbb2b
3cccc
ddd4d
```
![extension-demo](https://raw.githubusercontent.com/Tnr1112/Number-sequence/master/images/OrdenOriginal.gif)

But if we select it in another order it respects it.

![extension-demo2](https://raw.githubusercontent.com/Tnr1112/Number-sequence/master/images/OrdenCambiado.gif)

**Enjoy!**
