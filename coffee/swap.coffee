
jQuery.fn.extend
  swap: (text) ->
    smaller = (a, b) ->
      if a < b then a else b
    inputs = ["INPUT", "TEXTAREA"]
    if @is document.activeElement then switch
      when @prop('tagName') in inputs
        el = @get(0)
        if el.selectionStart?
          start = smaller el.selectionStart, text.length
          end = smaller el.selectionEnd, text.length
          @val text
          el.selectionStart = start
          el.selectionEnd = end
        else
          @val text
      when @prop('contenteditable') is "true"
        if document.createRange? and window.getSelection?
          sel = window.getSelection()
          if sel.rangeCount > 0
            ran = sel.getRangeAt(0)
            start = smaller ran.startOffset, text.length
            end = smaller ran.endOffset, text.length
            sel.removeAllRanges()
            @text text
            el = @get 0
            newRan = document.createRange()
            # use firstChild, or it breaks
            # http://stackoverflow.com/a/16146101/883571
            newRan.setStart el.firstChild, start
            newRan.setEnd el.firstChild, end
            sel.addRange newRan
          else @text text
        else @text text
      else @text text
    else
      if @prop('tagName') in inputs
        @val text
      else
        @text text
    @