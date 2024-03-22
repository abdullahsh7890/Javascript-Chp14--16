
// // Q1

// var studentNames = [];

// // Q2

// var Names = {

// };

// // Q3

// var string = ["Hello","World"];

// // Q4

// var numbers = [1,2,3,4];

// // Q5

// var boolean = [true,false]

// // Q6

// var mixedArrays = ["Abdullah","Bin","Shahbaz",1,2,3,true,false]

// // Q7

// var fields = ["1) SSC","2) HSC","3) BCS","4) BS","5) BCOM","6) MS","7) M.Phil.","8) PhD"]
// document.write("<br/>QUALIFICATION:")
// document.write( "<br/> <br/>" + fields[0] + "<br/>")
// document.write( "<br/>" + fields[1] + "<br/>")
// document.write( "<br/>" + fields[2] + "<br/>")
// document.write( "<br/>" + fields[3] + "<br/>")
// document.write( "<br/>" + fields[4] + "<br/>")
// document.write( "<br/>" + fields[5] + "<br/>")
// document.write( "<br/>" + fields[6] + "<br/>")
// document.write( "<br/>" + fields[7] + "<br/>")

// // Q8

// studentNames=["Michael","John","Tony"]

// var scored = [320,214,257]
// document.write("<br/><br/> Score of "+ studentNames[0] + " is " + scored[  0  ] + " Percentage: " + scored[0]/500*100 +"%" )
// document.write("<br/> Score of "+ studentNames[1] + " is " + scored[  1 ] + " Percentage: " + scored[1]/500*100 +"%" )
// document.write("<br/> Score of "+ studentNames[2] + " is " + scored[  2  ] + " Percentage: " + scored[2]/500*100 +"%" )

// // Q9


var colorNames = []
   var color = prompt("What color do you want to add in Array in the start ")
colorNames.splice(0, 0,color)
document.write("<br/> Color Names : " + colorNames)
var color2 = prompt("What color do you want to add in Array in the end")
colorNames.push(color2)
document.write(" <br/> Color Names : "  + colorNames)
colorNames.splice(0,0,"Orange","violet")
document.write(" <br/> Color Names : "  + colorNames)
colorNames.shift()
document.write(" <br/> Color Names : "  + colorNames)
colorNames.pop()
document.write(" <br/> Color Names : "  + colorNames)
var color3 = prompt("At which index What color do you want to add in Array ")
colorNames.splice(1,0,color3)
document.write(" <br/> Color Names : "  + colorNames)











































// // Q10
// var score = [320,230,480,120];
// document.write("<br/><br/> Score of students: " +score)
// var compare =(a,b)=>{
//     return a-b
// }
// document.write("<br/> Ordered score of student: " + score.sort(compare))

// // Q11

// var cityNames = ["Islamabad","Karachi","Faislabad","Lahore","Quetta","Multan"]
// document.write("<br/><br/> City Names: "+cityNames)
// var selectedCities = cityNames.slice(1,4)
// document.write("<br/> Selected Cities: "+selectedCities)

// // Q12

// var arr = ["This", "is" , "my" , "Cat"];
// document.write("<br/><br/> Array: "+ arr)
//  var string= arr.join(" ");
// document.write("<br/> String: " +string)

// // Q13

// var fifo = []
// fifo.push("Keyboard")
// fifo.push("Mouse")
// fifo.push("Printer")
// fifo.push("Monitor")
// document.write("<br/><br/> Devices: <br/>"+fifo);
// document.write("<br/>out: <br/>" + fifo.shift())
// document.write("<br/>out: <br/>" + fifo.shift())
// document.write("<br/>out: <br/>" + fifo.shift())
// document.write("<br/>out: <br/>" + fifo.shift())

// // Q14

// var lifo = []
// lifo.push("Keyboard")
// lifo.push("Mouse")
// lifo.push("Printer")
// lifo.push("Monitor")
// document.write("<br/><br/> Devices: <br/>"+lifo);
// document.write("<br/>out: <br/>" + lifo.pop())
// document.write("<br/>out: <br/>" + lifo.pop())
// document.write("<br/>out: <br/>" + lifo.pop())
// document.write("<br/>out: <br/>" + lifo.pop())

// // Q15


// let phoneManufactures = ["Apple" , "Nokia" , "Samsung" , "Motrola" , "Vivo" , "Oneplus"]

// document.write(" <br/><br/> <select> <option > ", phoneManufactures[0]   ,"</option>  <option> ", phoneManufactures[1]   ,"</option>  <option> ", phoneManufactures[2]   ,"</option>  <option> ", phoneManufactures[3]   ,"</option>  <option> ", phoneManufactures[4]   ,"</option>  <option> ", phoneManufactures[5]   ,"</option> </select>")















































