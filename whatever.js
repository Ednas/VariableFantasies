$(document).ready (function(){


var storyPlace = 0;

var stories = [{
    title: "Rumpelstiltskin",
    storie: "There was once a miller who was poor" + 
    " but he had one beautiful daughter. It happened"+ 
    " one day that he came to speak with the king," +
    " and, to give himself consequence, he told him " +
    " that he had a daughter who could spin gold out "+
    " of straw. The king said to the miller:"+
    '+ "That is an art that pleases me well;" '+
    " if thy daughter is as clever as you say, b"+
    " ring her to my castle to-morrow, that I may put"+ 
    " her to the proof." +
   ' "Oh!" ' + "answered the girl," +' "I have got to spin gold out of straw, and I don ' + "'t understand the business." + "Then the little man said:" +
   ' "What will you give me if I spin it for you?" - "My necklace," said the girl. The little man took the necklace, seated himself before the wheel, and whirr, whirr, whirr! three times round and the bobbin was full; then he took up another, and whirr, whirr, whirr! three times round, and that was full; and so he went on till the morning, when all the straw had been spun, and all the bobbins were full of gold.'
},
{
    title: "The Red Shoes",
    storie: " Once upon a time there was little girl, pretty and dainty. But in summer time she was obliged to go barefooted because she was poor, and in winter she had to wear large wooden shoes, so that her little instep grew quite red " + "   In the middle of the village lived an old shoemaker's wife; she sat down and made, as well as she could, a pair of little shoes out of some old pieces of red cloth. They were clumsy, but she meant well, for they were intended for the little girl, whose name was Karen." + " Karen received the shoes and wore them for the first time on the day of her mother's funeral. They were certainly not suitable for mourning; but she had no others, and so she put her bare feet into them and walked behind the humble coffin." 
},
{
    title: "Thumbelina",
    storie: "There was once a woman who wished very much to have a little child, but she could not obtain her wish. At last she went to a fairy, and said,"+ ' "I should so very much like to have a little child; can you tell me where I can find one?" '+ '"Oh, that can be easily managed,"'+ " said the fairy. "+  ' "Here is a barleycorn of a different kind to those which grow in the farmer' +" 's fields, and which the chickens eat;" +' put it into a flower-pot, and see what will happen." '
},
{
    title: "Rumpelstiltskin",
    storie: "There was once a miller who was poor" + 
    " but he had one beautiful daughter. It happened"+ 
    " one day that he came to speak with the king," +
    " and, to give himself consequence, he told him " +
    " that he had a daughter who could spin gold out "+
    " of straw. The king said to the miller:"+
    '+ "That is an art that pleases me well;" '+
    " if thy daughter is as clever as you say, b"+
    " ring her to my castle to-morrow, that I may put"+ 
    "( her to the proof." +
   ' "Oh!" ' + "answered the girl," +' "I have got to spin gold out of straw, and I don ' + "'t understand the business." + "Then the little man said:" +
   ' "What will you give me if I spin it for you?" - "My necklace," said the girl. The little man took the necklace, seated himself before the wheel, and whirr, whirr, whirr! three times round and the bobbin was full; then he took up another, and whirr, whirr, whirr! three times round, and that was full; and so he went on till the morning, when all the straw had been spun, and all the bobbins were full of gold.'
},
{
    title: "The Red Shoes",
    storie: " Once upon a time there was little girl, pretty and dainty. But in summer time she was obliged to go barefooted because she was poor, and in winter she had to wear large wooden shoes, so that her little instep grew quite red " + "   In the middle of the village lived an old shoemaker's wife; she sat down and made, as well as she could, a pair of little shoes out of some old pieces of red cloth. They were clumsy, but she meant well, for they were intended for the little girl, whose name was Karen." + " Karen received the shoes and wore them for the first time on the day of her mother's funeral. They were certainly not suitable for mourning; but she had no others, and so she put her bare feet into them and walked behind the humble coffin." 
},
{
    title: "Thumbelina",
    storie: "There was once a woman who wished very much to have a little child, but she could not obtain her wish. At last she went to a fairy, and said,"+ ' "I should so very much like to have a little child; can you tell me where I can find one?" '+ '"Oh, that can be easily managed,"'+ " said the fairy. "+  ' "Here is a barleycorn of a different kind to those which grow in the farmer' +" 's fields, and which the chickens eat;" +' put it into a flower-pot, and see what will happen." '
},
{
    title: "Rumpelstiltskin",
    storie: "There was once a miller who was poor" + 
    " but he had one beautiful daughter. It happened"+ 
    " one day that he came to speak with the king," +
    " and, to give himself consequence, he told him " +
    " that he had a daughter who could spin gold out "+
    " of straw. The king said to the miller:"+
    '+ "That is an art that pleases me well;" '+
    " if thy daughter is as clever as you say, b"+
    " ring her to my castle to-morrow, that I may put"+ 
    " her to the proof." +
   ' "Oh!" ' + "answered the girl," +' "I have got to spin gold out of straw, and I don ' + "'t understand the business." + "Then the little man said:" +
   ' "What will you give me if I spin it for you?" - "My necklace," said the girl. The little man took the necklace, seated himself before the wheel, and whirr, whirr, whirr! three times round and the bobbin was full; then he took up another, and whirr, whirr, whirr! three times round, and that was full; and so he went on till the morning, when all the straw had been spun, and all the bobbins were full of gold.'
},
{
    title: "The Red Shoes",
    storie: " Once upon a time there was little girl, pretty and dainty. But in summer time she was obliged to go barefooted because she was poor, and in winter she had to wear large wooden shoes, so that her little instep grew quite red " + "   In the middle of the village lived an old shoemaker's wife; she sat down and made, as well as she could, a pair of little shoes out of some old pieces of red cloth. They were clumsy, but she meant well, for they were intended for the little girl, whose name was Karen." + " Karen received the shoes and wore them for the first time on the day of her mother's funeral. They were certainly not suitable for mourning; but she had no others, and so she put her bare feet into them and walked behind the humble coffin." 
},
{
    title: "Thumbelina",
    storie: "There was once a woman who wished very much to have a little child, but she could not obtain her wish. At last she went to a fairy, and said,"+ ' "I should so very much like to have a little child; can you tell me where I can find one?" '+ '"Oh, that can be easily managed,"'+ " said the fairy. "+  ' "Here is a barleycorn of a different kind to those which grow in the farmer' +" 's fields, and which the chickens eat;" +' put it into a flower-pot, and see what will happen." '
}];


var count = 1



$(".book").on("click", function(){
    count++;
    $(".story").append(stories[count].storie);
});

$(".prevBook").on("click", function(){
    count--;
    $(".story").empty();
    $(".story").append(stories[count].storie);
});

var userStories = [
{id: "textField-0"}    
]

$("#addMoreText").on("click", function(e){
    
    
    var userStorieCount = userStories.length;
    var newFieldId = "textField-" + (userStorieCount+1);
    var newField = {id: newFieldId};
    userStories.push(newField)
    var textArea = '<textarea id='+ '"'+ newFieldId + '"' +'row="4" columns="10"> Type Text Here</textarea>';
    $('#textFieldHolder').append(textArea);
    
    return false;
});


//if number is negative, then don't go further
});



