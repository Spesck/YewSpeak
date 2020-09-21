var Text = []
var Id = []
var str = Text.join("")
var UnpackMessage = window.location.search.substring(1)
var LoadMessage = ""


Test()
function Test(){

  if(UnpackMessage.startsWith("1q")){
  LoadMessage = LoadMessage + "a"
  }
  if(UnpackMessage.startsWith("2q")){
    LoadMessage = LoadMessage + "b"
    }
  if(UnpackMessage.startsWith("3q")){
    LoadMessage = LoadMessage + "c"
  }
  if(UnpackMessage.startsWith("4m")){
    LoadMessage = LoadMessage + "d"
    }
    if(UnpackMessage.startsWith("5m")){
      LoadMessage = LoadMessage + "e"
      }
    if(UnpackMessage.startsWith("6m")){
      LoadMessage = LoadMessage + "f"
    }
    if(UnpackMessage.startsWith("7d")){
      LoadMessage = LoadMessage + "g"
      }
      if(UnpackMessage.startsWith("8d")){
        LoadMessage = LoadMessage + "h"
        }
      if(UnpackMessage.startsWith("9d")){
        LoadMessage = LoadMessage + "i"
      }
      if(UnpackMessage.startsWith("a%")){
        LoadMessage = LoadMessage + "j"
      }
      if(UnpackMessage.startsWith("b%")){
        LoadMessage = LoadMessage + "k"
      }
      if(UnpackMessage.startsWith("c%")){
        LoadMessage = LoadMessage + "l"
      }
      if(UnpackMessage.startsWith("d%")){
        LoadMessage = LoadMessage + "m"
      }
      if(UnpackMessage.startsWith("e%")){
        LoadMessage = LoadMessage + "n"
      }
      if(UnpackMessage.startsWith("f%")){
        LoadMessage = LoadMessage + "o"
      }
      if(UnpackMessage.startsWith("g%")){
        LoadMessage = LoadMessage + "p"
      }
      if(UnpackMessage.startsWith("h%")){
        LoadMessage = LoadMessage + "q"
      }
      if(UnpackMessage.startsWith("i%")){
        LoadMessage = LoadMessage + "r"
      }
      if(UnpackMessage.startsWith("j%")){
        LoadMessage = LoadMessage + "s"
      }
      if(UnpackMessage.startsWith("k%")){
        LoadMessage = LoadMessage + "t"
      }
      if(UnpackMessage.startsWith("l%")){
        LoadMessage = LoadMessage + "u"
      }
      if(UnpackMessage.startsWith("m%")){
        LoadMessage = LoadMessage + "v"
      }
      if(UnpackMessage.startsWith("n%")){
        LoadMessage = LoadMessage + "w"
      }
      if(UnpackMessage.startsWith("o%")){
        LoadMessage = LoadMessage + "x"
      }
      if(UnpackMessage.startsWith("p%")){
        LoadMessage = LoadMessage + "y"
      }
      if(UnpackMessage.startsWith("q%")){
        LoadMessage = LoadMessage + "z"
      }

      if(UnpackMessage.startsWith("1$")){
        LoadMessage = LoadMessage + "A"
      }
      if(UnpackMessage.startsWith("2$")){
        LoadMessage = LoadMessage + "B"
      }
      if(UnpackMessage.startsWith("3$")){
        LoadMessage = LoadMessage + "C"
      }
      if(UnpackMessage.startsWith("4$")){
        LoadMessage = LoadMessage + "D"
      }
      if(UnpackMessage.startsWith("5$")){
        LoadMessage = LoadMessage + "E"
      }
      if(UnpackMessage.startsWith("6$")){
        LoadMessage = LoadMessage + "F"
      }
      if(UnpackMessage.startsWith("7$")){
        LoadMessage = LoadMessage + "G"
      }
      if(UnpackMessage.startsWith("8$")){
        LoadMessage = LoadMessage + "H"
      }
      if(UnpackMessage.startsWith("9$")){
        LoadMessage = LoadMessage + "I"
      }
      if(UnpackMessage.startsWith("10&")){
        LoadMessage = LoadMessage + "J"
      }
      if(UnpackMessage.startsWith("11&")){
        LoadMessage = LoadMessage + "K"
      }
      if(UnpackMessage.startsWith("12&")){
        LoadMessage = LoadMessage + "L"
      }
      if(UnpackMessage.startsWith("13&")){
        LoadMessage = LoadMessage + "M"
      }
      if(UnpackMessage.startsWith("14&")){
        LoadMessage = LoadMessage + "N"
      }
      if(UnpackMessage.startsWith("15&")){
        LoadMessage = LoadMessage + "O"
      }
      if(UnpackMessage.startsWith("16&")){
        LoadMessage = LoadMessage + "P"
      }
      if(UnpackMessage.startsWith("17&")){
        LoadMessage = LoadMessage + "Q"
      }
      if(UnpackMessage.startsWith("18&")){
        LoadMessage = LoadMessage + "R"
      }
      if(UnpackMessage.startsWith("19&")){
        LoadMessage = LoadMessage + "S"
      }
      if(UnpackMessage.startsWith("20&")){
        LoadMessage = LoadMessage + "T"
      }
      if(UnpackMessage.startsWith("21&")){
        LoadMessage = LoadMessage + "U"
      }
      if(UnpackMessage.startsWith("22&")){
        LoadMessage = LoadMessage + "V"
      }
      if(UnpackMessage.startsWith("23&")){
        LoadMessage = LoadMessage + "W"
      }
      if(UnpackMessage.startsWith("24&")){
        LoadMessage = LoadMessage + "X"
      }
      if(UnpackMessage.startsWith("25&")){
        LoadMessage = LoadMessage + "Y"
      }
      if(UnpackMessage.startsWith("26&")){
        LoadMessage = LoadMessage + "Z"
      }

      if(UnpackMessage.startsWith("1A")){
        LoadMessage = LoadMessage + " "
      }
      if(UnpackMessage.startsWith("2B")){
        LoadMessage = LoadMessage + "@"
      }
      if(UnpackMessage.startsWith("3C")){
        LoadMessage = LoadMessage + "#"
      }
      if(UnpackMessage.startsWith("4D")){
        LoadMessage = LoadMessage + "$"
      }
      if(UnpackMessage.startsWith("5E")){
        LoadMessage = LoadMessage + "%"
      }
      if(UnpackMessage.startsWith("6F")){
        LoadMessage = LoadMessage + "^"
      }
      if(UnpackMessage.startsWith("7G")){
        LoadMessage = LoadMessage + "&"
      }
      if(UnpackMessage.startsWith("8H")){
        LoadMessage = LoadMessage + "*"
      }
      if(UnpackMessage.startsWith("9I")){
        LoadMessage = LoadMessage + "("
      }
      if(UnpackMessage.startsWith("10J")){
        LoadMessage = LoadMessage + ")"
      }
      if(UnpackMessage.startsWith("11K")){
        LoadMessage = LoadMessage + "_"
      }
      if(UnpackMessage.startsWith("12L")){
        LoadMessage = LoadMessage + "-"
      }
      if(UnpackMessage.startsWith("13M")){
        LoadMessage = LoadMessage + "+"
      }
      if(UnpackMessage.startsWith("14N")){
        LoadMessage = LoadMessage + "="
      }
      if(UnpackMessage.startsWith("15O")){
        LoadMessage = LoadMessage + ";"
      }
      if(UnpackMessage.startsWith("16P")){
        LoadMessage = LoadMessage + ":"
      }
      if(UnpackMessage.startsWith("17Q")){
        LoadMessage = LoadMessage + ","
      }
      if(UnpackMessage.startsWith("18R")){
        LoadMessage = LoadMessage + "/"
      }
      if(UnpackMessage.startsWith("19S")){
        LoadMessage = LoadMessage + "."
      }
      if(UnpackMessage.startsWith("20T")){
        LoadMessage = LoadMessage + "?"
      }
      if(UnpackMessage.startsWith("21U")){
        LoadMessage = LoadMessage + "!"
      }

      if(UnpackMessage.startsWith("z1")){
        LoadMessage = LoadMessage + "1"
      }
      if(UnpackMessage.startsWith("z2")){
        LoadMessage = LoadMessage + "2"
      }
      if(UnpackMessage.startsWith("z3")){
        LoadMessage = LoadMessage + "3"
      }
      if(UnpackMessage.startsWith("z4")){
        LoadMessage = LoadMessage + "4"
      }
      if(UnpackMessage.startsWith("z5")){
        LoadMessage = LoadMessage + "5"
      }
      if(UnpackMessage.startsWith("z6")){
        LoadMessage = LoadMessage + "6"
      }
      if(UnpackMessage.startsWith("z7")){
        LoadMessage = LoadMessage + "7"
      }
      if(UnpackMessage.startsWith("z8")){
        LoadMessage = LoadMessage + "8"
      }
      if(UnpackMessage.startsWith("z9")){
        LoadMessage = LoadMessage + "9"
      }
      if(UnpackMessage.startsWith("z0")){
        LoadMessage = LoadMessage + "0"
      }
  UnpackMessage = UnpackMessage.substring(1)
  document.getElementById('Load').innerHTML = LoadMessage
  setTimeout(Test,0)
}


//TextTransmissionService
function TextTransmissionService(){
  str = Text.join("")
//LowerCase Letters
if(document.getElementById('Workspace').value.startsWith("a")){
 Text.push("a")
 Id.push("1q")
}
if(document.getElementById('Workspace').value.startsWith("b")){
  Text.push("b")
  Id.push("2q")
 }
 if(document.getElementById('Workspace').value.startsWith("c")){
  Text.push("c")
  Id.push("3q")
 }
 if(document.getElementById('Workspace').value.startsWith("d")){
  Text.push("d")
  Id.push("4m")
 }
 if(document.getElementById('Workspace').value.startsWith("e")){
  Text.push("e")
  Id.push("5m")
 }
 if(document.getElementById('Workspace').value.startsWith("f")){
  Text.push("f")
  Id.push("6m")
 }
 if(document.getElementById('Workspace').value.startsWith("g")){
  Text.push("g")
  Id.push("7d")
 }
 if(document.getElementById('Workspace').value.startsWith("h")){
  Text.push("h")
  Id.push("8d")
 }
 if(document.getElementById('Workspace').value.startsWith("i")){
  Text.push("i")
  Id.push("9d")
 }
 if(document.getElementById('Workspace').value.startsWith("j")){
  Text.push("j")
  Id.push("a%")
 } 
 if(document.getElementById('Workspace').value.startsWith("k")){
  Text.push("k")
  Id.push("b%")
 }
 if(document.getElementById('Workspace').value.startsWith("l")){
  Text.push("l")
  Id.push("c%")
 }
 if(document.getElementById('Workspace').value.startsWith("m")){
  Text.push("m")
  Id.push("d%")
 }
 if(document.getElementById('Workspace').value.startsWith("n")){
  Text.push("n")
  Id.push("e%")
 }
 if(document.getElementById('Workspace').value.startsWith("o")){
  Text.push("o")
  Id.push("f%")
 }
 if(document.getElementById('Workspace').value.startsWith("p")){
  Text.push("p")
  Id.push("g%")
 }
 if(document.getElementById('Workspace').value.startsWith("q")){
  Text.push("q")
  Id.push("h%")
 }
 if(document.getElementById('Workspace').value.startsWith("r")){
  Text.push("r")
  Id.push("i%")
 }
 if(document.getElementById('Workspace').value.startsWith("s")){
  Text.push("s")
  Id.push("j%")
 }
 if(document.getElementById('Workspace').value.startsWith("t")){
  Text.push("t")
  Id.push("k%")
 }
 if(document.getElementById('Workspace').value.startsWith("u")){
  Text.push("u")
  Id.push("l%")
 }
 if(document.getElementById('Workspace').value.startsWith("v")){
  Text.push("v")
  Id.push("m%")
 }
 if(document.getElementById('Workspace').value.startsWith("w")){
  Text.push("w")
  Id.push("n%")
 }
 if(document.getElementById('Workspace').value.startsWith("x")){
  Text.push("x")
  Id.push("o%")
 }
 if(document.getElementById('Workspace').value.startsWith("y")){
  Text.push("y")
  Id.push("p%")
 }
 if(document.getElementById('Workspace').value.startsWith("z")){
  Text.push("z")
  Id.push("q%")
 }

//UpperCase Letters
 if(document.getElementById('Workspace').value.startsWith("A")){
  Text.push("A")
  Id.push("1$")
 }
 if(document.getElementById('Workspace').value.startsWith("B")){
   Text.push("B")
   Id.push("2$")

  }
  if(document.getElementById('Workspace').value.startsWith("C")){
   Text.push("C")
   Id.push("3$")

  }
  if(document.getElementById('Workspace').value.startsWith("D")){
   Text.push("D")
   Id.push("4$")

  }
  if(document.getElementById('Workspace').value.startsWith("E")){
   Text.push("E")
   Id.push("5$")

  }
  if(document.getElementById('Workspace').value.startsWith("F")){
   Text.push("F")
   Id.push("6$")

  }
  if(document.getElementById('Workspace').value.startsWith("G")){
   Text.push("G")
   Id.push("7$")

  }
  if(document.getElementById('Workspace').value.startsWith("H")){
   Text.push("H")
   Id.push("8$")

  }
  if(document.getElementById('Workspace').value.startsWith("I")){
   Text.push("I")
   Id.push("9$")

  }
  if(document.getElementById('Workspace').value.startsWith("J")){
   Text.push("J")
   Id.push("10&")

  } 
  if(document.getElementById('Workspace').value.startsWith("K")){
   Text.push("K")
   Id.push("11&")

  }
  if(document.getElementById('Workspace').value.startsWith("L")){
   Text.push("L")
   Id.push("12&")

  }
  if(document.getElementById('Workspace').value.startsWith("M")){
   Text.push("M")
   Id.push("13&")

  }
  if(document.getElementById('Workspace').value.startsWith("N")){
   Text.push("N")
   Id.push("14&")

  }
  if(document.getElementById('Workspace').value.startsWith("O")){
   Text.push("O")
   Id.push("15&")

  }
  if(document.getElementById('Workspace').value.startsWith("P")){
   Text.push("P")
   Id.push("16&")

  }
  if(document.getElementById('Workspace').value.startsWith("Q")){
   Text.push("Q")
   Id.push("17&")

  }
  if(document.getElementById('Workspace').value.startsWith("R")){
   Text.push("R")
   Id.push("18&")

  }
  if(document.getElementById('Workspace').value.startsWith("S")){
   Text.push("S")
   Id.push("19&")

  }
  if(document.getElementById('Workspace').value.startsWith("T")){
   Text.push("T")
   Id.push("20&")

  }
  if(document.getElementById('Workspace').value.startsWith("U")){
   Text.push("U")
   Id.push("21&")

  }
  if(document.getElementById('Workspace').value.startsWith("V")){
   Text.push("V")
   Id.push("22&")

  }
  if(document.getElementById('Workspace').value.startsWith("W")){
   Text.push("W")
   Id.push("23&")

  }
  if(document.getElementById('Workspace').value.startsWith("X")){
   Text.push("X")
   Id.push("24&")

  }
  if(document.getElementById('Workspace').value.startsWith("Y")){
   Text.push("Y")
   Id.push("25&")

  }
  if(document.getElementById('Workspace').value.startsWith("Z")){
   Text.push("Z")
   Id.push("26&")

  }
 
//Special Characters
 if(document.getElementById('Workspace').value.startsWith(" ")){
  Text.push(" ")
  Id.push("1A")
 }
 if(document.getElementById('Workspace').value.startsWith("@")){
  Text.push("@")
  Id.push("2B")
 }
 if(document.getElementById('Workspace').value.startsWith("#")){
  Text.push("#")
  Id.push("3C")
 }
 if(document.getElementById('Workspace').value.startsWith("$")){
  Text.push("$")
  Id.push("4D")
 }
 if(document.getElementById('Workspace').value.startsWith("%")){
  Text.push("%")
  Id.push("5E")
 }
 if(document.getElementById('Workspace').value.startsWith("^")){
  Text.push("^")
  Id.push("6F")
 }
 if(document.getElementById('Workspace').value.startsWith("&")){
  Text.push("&")
  Id.push("7G")
 }
 if(document.getElementById('Workspace').value.startsWith("*")){
  Text.push("*")
  Id.push("8H")
 }
 if(document.getElementById('Workspace').value.startsWith("(")){
  Text.push("(")
  Id.push("9I")
 }
 if(document.getElementById('Workspace').value.startsWith(")")){
  Text.push(")")
  Id.push("10J")
 }
 if(document.getElementById('Workspace').value.startsWith("_")){
  Text.push("_")
  Id.push("11K")
 }
 if(document.getElementById('Workspace').value.startsWith("-")){
  Text.push("-")
  Id.push("12L")
 }
 if(document.getElementById('Workspace').value.startsWith("+")){
  Text.push("+")
  Id.push("13M")
 }
 if(document.getElementById('Workspace').value.startsWith("=")){
  Text.push("=")
  Id.push("14N")
 }
 if(document.getElementById('Workspace').value.startsWith(";")){
  Text.push(";")
  Id.push("15O")
 }
 if(document.getElementById('Workspace').value.startsWith(":")){
  Text.push(":")
  Id.push("16P")
 }
 if(document.getElementById('Workspace').value.startsWith(",")){
  Text.push(",")
  Id.push("17Q")
 }
 if(document.getElementById('Workspace').value.startsWith("/")){
  Text.push("/")
  Id.push("18R")
 }
 if(document.getElementById('Workspace').value.startsWith(".")){
  Text.push(".")
  Id.push("19S")
 }
 if(document.getElementById('Workspace').value.startsWith("?")){
  Text.push("?")
  Id.push("20T")
 }
 if(document.getElementById('Workspace').value.startsWith("!")){
  Text.push("!")
  Id.push("21U")
 }


 //Numbers
 if(document.getElementById('Workspace').value.startsWith("1")){
  Text.push("1")
  Id.push("z1")
 }
 if(document.getElementById('Workspace').value.startsWith("2")){
  Text.push("2")
  Id.push("z2")
 }
 if(document.getElementById('Workspace').value.startsWith("3")){
  Text.push("3")
  Id.push("z3")
 }
 if(document.getElementById('Workspace').value.startsWith("4")){
  Text.push("4")
  Id.push("z4")
 }
 if(document.getElementById('Workspace').value.startsWith("5")){
  Text.push("5")
  Id.push("z5")
 }
 if(document.getElementById('Workspace').value.startsWith("6")){
  Text.push("6")
  Id.push("z6")
 }
 if(document.getElementById('Workspace').value.startsWith("7")){
  Text.push("7")
  Id.push("z7")
 }
 if(document.getElementById('Workspace').value.startsWith("8")){
  Text.push("8")
  Id.push("z8")
 }
 if(document.getElementById('Workspace').value.startsWith("9")){
  Text.push("9")
  Id.push("z9")
 }
 if(document.getElementById('Workspace').value.startsWith("0")){
  Text.push("0")
  Id.push("z0")
 }
document.getElementById('Url').innerHTML = "https://yewspeak.github.io/YewSpeak/?" + Id.join("")
document.getElementById('Msg').innerHTML = str
document.getElementById('Workspace').value = document.getElementById('Workspace').value.substring(1)

if (document.getElementById('Workspace').value == ("")){
  TextTransmissionService()
}
else{

setTimeout(TextTransmissionService,0)
}
}
