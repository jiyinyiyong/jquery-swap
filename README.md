
jQuery swap text plugin
------

Swap text without changing the caret position if there is.

It's like `$el.val` and `$el.text` but only for editable elements,
like `<input> <textarea> <div contenteditable>`.

It mainly relies on `input.selectionStart document.createRange window.getSelection` API.
If APIs are not support(mainly IE), it fallbacks to `$el.val $.text`.

### Usage

See demo at: http://jiyinyiyong.github.io/jquery-swap/

```
$('input').swap('new text')
$('textarea').swap('new text')
$('.editable').swap('new text')
```

### License

MIT