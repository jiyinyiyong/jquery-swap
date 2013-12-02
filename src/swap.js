// Generated by CoffeeScript 1.6.3
(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  jQuery.fn.extend({
    swap: function(text) {
      var el, end, inputs, newRan, ran, sel, smaller, start, _ref, _ref1;
      smaller = function(a, b) {
        if (a < b) {
          return a;
        } else {
          return b;
        }
      };
      inputs = ["INPUT", "TEXTAREA"];
      if (this.is(document.activeElement)) {
        switch (false) {
          case _ref = this.prop('tagName'), __indexOf.call(inputs, _ref) < 0:
            el = this.get(0);
            if (el.selectionStart != null) {
              start = smaller(el.selectionStart, text.length);
              end = smaller(el.selectionEnd, text.length);
              this.val(text);
              el.selectionStart = start;
              return el.selectionEnd = end;
            } else {
              return this.val(text);
            }
            break;
          case this.prop('contenteditable') !== "true":
            if ((document.createRange != null) && (window.getSelection != null)) {
              sel = window.getSelection();
              if (sel.rangeCount > 0) {
                ran = sel.getRangeAt(0);
                start = smaller(ran.startOffset, text.length);
                end = smaller(ran.endOffset, text.length);
                sel.removeAllRanges();
                this.text(text);
                el = this.get(0);
                newRan = document.createRange();
                newRan.setStart(el.firstChild, start);
                newRan.setEnd(el.firstChild, end);
                return sel.addRange(newRan);
              } else {
                return this.text(text);
              }
            } else {
              return this.text(text);
            }
            break;
          default:
            return this.text(text);
        }
      } else {
        if (_ref1 = this.prop('tagName'), __indexOf.call(inputs, _ref1) >= 0) {
          return this.val(text);
        } else {
          return this.text(text);
        }
      }
    }
  });

}).call(this);
