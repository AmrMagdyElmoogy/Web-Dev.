var level = 0;
$(".but").click(function () {
    $(".Message").animate({
        top: '150px',
    }, 1000, function () {
        $(".b").click(function () {
            $(".Message").animate({
                top: '-350px',
            }, 1000)
        });
    });
});
$(".Paper").click(function () {
    $(this).fadeOut(50).fadeIn(50);
    $(".Pap").attr("src", "images/icon1.svg");
    var randomNumber = Math.floor(Math.random() * 3 + 1);
    $(".Pap2").attr("src", "images/icon" + randomNumber + ".svg");
    $(".Game").hide();
    $(".Result").show();
    Rule();
    $(".Degree").text(level);
});
$(".Scissors").click(function () {
    $(this).fadeOut(50).fadeIn(50);
    $(".Pap").attr("src", "images/icon3.svg");
    var randomNumber = Math.floor(Math.random() * 3 + 1);
    $(".Pap2").attr("src", "images/icon" + randomNumber + ".svg");
    $(".Game").hide();
    $(".Result").show();
    Rule();
    $(".Degree").text(level);
});
$(".Rock").click(function () {
    $(this).fadeOut(50).fadeIn(50);
    $(".Pap").attr("src", "images/icon2.svg");
    var randomNumber = Math.floor(Math.random() * 3 + 1);
    $(".Pap2").attr("src", "images/icon" + randomNumber + ".svg");
    $(".Game").hide();
    $(".Result").show();
    Rule();
    $(".Degree").text(level);
});

$(".u").click(function () {
    $(".Result").hide();
    $(".Game").show();
});

function Rule() {
    if ($(".Pap").attr("src") === "images/icon1.svg" && $(".Pap2").attr("src") === "images/icon3.svg") {
        $(".R").text("COMPUTER WINS");
        $(".House").css("border", "15px solid #158467");
        $(".You").css("border", "15px solid #fa1616");
    } else if ($(".Pap").attr("src") === "images/icon2.svg" && $(".Pap2").attr("src") === "images/icon1.svg") {
        $(".R").text("COMPUTER WINS");
        $(".House").css("border", "15px solid #158467");
        $(".You").css("border", "15px solid #fa1616");
    } else if ($(".Pap").attr("src") === "images/icon2.svg" && $(".Pap2").attr("src") === "images/icon1.svg") {
        level = level + 1;
        $(".R").text("YOU WIN");
        $(".House").css("border", "15px solid #fa1616");
        $(".You").css("border", "15px solid  #158467");
    } else if ($(".Pap").attr("src") === "images/icon3.svg" && $(".Pap2").attr("src") === "images/icon1.svg") {
        level = level + 1;
        $(".R").text("YOU WIN");
        $(".House").css("border", "15px solid #fa1616");
        $(".You").css("border", "15px solid  #158467");
    } else if ($(".Pap").attr("src") === "images/icon1.svg" && $(".Pap2").attr("src") === "images/icon2.svg") {
        level = level + 1;
        $(".R").text("YOU WIN");
        $(".House").css("border", "15px solid #fa1616");
        $(".You").css("border", "15px solid  #158467");
    } else if ($(".Pap").attr("src") === "images/icon2.svg" && $(".Pap2").attr("src") === "images/icon3.svg") {
        level = level + 1;
        $(".R").text("YOU WIN");
        $(".House").css("border", "15px solid #fa1616");
        $(".You").css("border", "15px solid  #158467");
    } else if ($(".Pap").attr("src") === "images/icon3.svg" && $(".Pap2").attr("src") === "images/icon2.svg") {
        $(".R").text("COMPUTER WINS");
        $(".House").css("border", "15px solid #158467");
        $(".You").css("border", "15px solid #fa1616");
    } else if ($(".Pap").attr("src") === "images/icon2.svg" && $(".Pap2").attr("src") === "images/icon2.svg") {
        $(".R").text("DRAW");
        $(".House").css("border", "15px solid #00bcd4");
        $(".You").css("border", "15px solid #00bcd4");
    } else if ($(".Pap").attr("src") === "images/icon1.svg" && $(".Pap2").attr("src") === "images/icon1.svg") {
        $(".R").text("DRAW");
        $(".House").css("border", "15px solid #00bcd4");
        $(".You").css("border", "15px solid #00bcd4");
    } else if ($(".Pap").attr("src") === "images/icon3.svg" && $(".Pap2").attr("src") === "images/icon3.svg") {
        $(".R").text("DRAW");
        $(".House").css("border", "15px solid #00bcd4");
        $(".You").css("border", "15px solid #00bcd4");
    }
}