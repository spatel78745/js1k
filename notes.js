str = "(this is a token &another token)"

var Token = function(lexeme) {
  var op;

  if      (c == '&') token = { type: "AND"   , val: "&"    } ;
  else if (c == '|') token = { type: "OR"    , val: "|"    } ;
  else if (c == '(') token = { type: "OPEN"  , val: "("    } ;
  else if (c == ')') token = { type: "CLOSE" , val: ")"    } ;
  else               token = { type: "STR"   , val: lexeme } ;

  return token;
}


function get()
{
  var lexeme = "";
  var c      = getchar();

  if (c.match(/[ &|)]/)) {
    return new Token(c); 
  } else {
    while(index < str.length)
    {
      if ((c = getchar()) doesn't match an operator)
        lexeme += c;
    }
  }
}

  function getchar() {
    if (index < str.length) {
      var c = str.charAt(index);

      index++;
      return c;
    }

    return ""
  }

  function get()
  {
    var lexeme = "";
    var c      = getchar();
    var isOp   = function(c) { return c.match(/[ &|)]/) }


    if (isOp(c)) {
      return new Token(c); 
    } else {
      while(index < str.length) {
        if (isOp(c = getchar())) lexeme += c;
      }

      return new Token(lexeme);
    }
  }
