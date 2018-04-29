function numFormat() {
    function fmoney(s, n) {
        n = n > 0 && n <= 20 ? n : 2;
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var l = s.split(".")[0].split("").reverse(),
            r = s.split(".")[1];
        t = "";
        for (i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
        }
        return t.split("").reverse().join("") + "." + r;
    }

    function rmoney(s) {
        return parseFloat(s.replace(/[^\d\.-]/g, ""));
    }

    function g(id) {
        return document.getElementById(id);
    }



    var num, txt = g("checkpoint_a"),
        txt2 = g("checkpoint_b"),
        txt3 = g("checkpoint_c"),
        txt4 = g("all"),
        txt5 = g("balance"),
        txt6 = g("checkpoint_i"),
        // btn = g("btn");
        // , btn2 = g("btn2")
        // , span = g("span");  


        num = parseInt(g("num").value);
    // txt.value = fmoney(txt.value);
    // txt2.value = fmoney(txt2.value);
    // txt3.value = fmoney(txt3.value);
    // txt4.value = fmoney(txt4.value);
    txt5.value = fmoney(txt5.value);
    txt6.value = fmoney(txt6.value);


}

function numFormat_1() {
    function fmoney(s, n) {
        n = n > 0 && n <= 20 ? n : 2;
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var l = s.split(".")[0].split("").reverse(),
            r = s.split(".")[1];
        t = "";
        for (i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
        }
        return t.split("").reverse().join("") + "." + r;
    }

    function rmoney(s) {
        return parseFloat(s.replace(/[^\d\.-]/g, ""));
    }

    function g(id) {
        return document.getElementById(id);
    }



    var num, txt = g("checkpoint_a"),
        txt2 = g("checkpoint_b"),
        txt3 = g("checkpoint_c"),
        txt4 = g("all"),
        txt5 = g("balance"),
        btn = g("btn"),
        // , btn2 = g("btn2")
        // , span = g("span");  


        num = parseInt(g("num").value);
    txt.value = fmoney(txt.value);
    txt2.value = fmoney(txt2.value);
    txt3.value = fmoney(txt3.value);
    txt4.value = fmoney(txt4.value);
    txt5.value = fmoney(txt5.value);






}



function mcolor() {


    var col = checkpoint_h.valueAsNumber;

    if (col > 0) {
        $(".balance").css("color", "#4169e1");
    }
    else {
        if (col < 0) {
            $(".balance").css("color", "#ff0000");
        }

        else {
            if (col == 0) {
                $(".balance").css("color", "#000000");
            }
        }

    }

}

$(document).ready(function() {
    function time_bottom() {

        setInterval(function() {
            var time = new Date();

            document.getElementById("copyright").innerHTML = time;
        }, 1000);
    }
    time_bottom();
    // --------------------------標題--------------------------

    $("#btn_title").click(function() {
            var top = document.getElementById("top_title");
            var topt = document.getElementById("top_text").value;
            top.innerText = topt;

            top_text.value = "";

            $("#income_item").focus();
        }

    );


    $("#top_text").not($(":button")).keypress(function(ic_event) {

        if (ic_event.keyCode == 13) {

            if ($(this).attr("type") !== 'submit') {

                var top = document.getElementById("top_title");
                var topt = document.getElementById("top_text").value;
                top.innerText = topt;

                top_text.value = "";

                $("#income_item").focus();
            }
        }
    });



    // --------------------------列印--------------------------


    $("#fnPrint").click(function() {

        window.print();
        hasMorePages = false;
    });


    // -------------------------日期--------------------------

    $("#btn_date").click(function() {
        if (bookdate.value.length >= 1) {
            $(".table2")
                .append(
                    "<tr><td class=innerData id=innerData_a><b>" + bookdate.value + "</b></td><td class=innerData id=innerData_b></td><td class=innerData id=innerData_c></td><td class=innerData id=innerData_d></td><td class=innerData id=innerData_e hidden><input type='number' id='dataSave" + i + "'value =''></td></tr>");
        }
        i++;

        // document.getElementById("debug").value = i;
        checkpoint_e.value = 2;
        bookdate.value = "";
        checkpoint_b.value = "";
        checkpoint_c.value = "";

        $("#income_item").focus();

    });



    // --------------------------收入.click--------------------------
    var i = 0;
    $("#btn_income").click(function() {

        if (income.value.length >= 1) {
            checkpoint_f.value = income.valueAsNumber;

            checkpoint_i.value = checkpoint_f.value;
            checkpoint_j.value = income.valueAsNumber;

            var bal = checkpoint_f.valueAsNumber;

            var bal_count = checkpoint_g.valueAsNumber;
            var allPrice = checkpoint_d.valueAsNumber;
            var y = bal + bal_count;
            checkpoint_g.value = y;
            var q = y - allPrice;
            checkpoint_h.value = q;
            var fin = checkpoint_h.value;

            balance.value = fin;




            $("#a").focus();

        }



        numFormat();



        if (income_note.value.length >= 1) {

            $(".table2")
                .append(
                    "<tr><td class=innerData id=innerData_a>&nbsp;<b>" + income_item.value + " (" + income_note.value + ")</b></td><td class=innerData id=innerData_b></td><td class=innerData id=innerData_c></td><td class=innerData id=innerData_d><b><font color='Royal Blue'>" + checkpoint_i.value + "</font></b></td><td class=innerData id=innerData_e hidden><input type='number' id='dataSave" + i + "'></td></tr>");

        }
        else {
            $(".table2")
                .append(
                    "<tr><td class=innerData id=innerData_a>&nbsp;<b>" + income_item.value + "</b></td><td class=innerData id=innerData_b></td><td class=innerData id=innerData_c></td><td class=innerData id=innerData_d><b><font color='Royal Blue'>" + checkpoint_i.value + "</font></b></td><td class=innerData id=innerData_e hidden><input type='number' id='dataSave" + i + "'></td></tr>");
        }

        i++;

        mcolor();



        // document.getElementById("debug").value = i;








        checkpoint_e.value = 1;
        income.value = 0;
        income_item.value = "";
        income_note.value = "";

        checkpoint_f.value = 0;
        // checkpoint_i.value = "";


    });




    $("#income_item, #income").not($(":button")).keypress(function(evt) {
        if (evt.keyCode == 13) {
            if ($(this).attr("type") !== 'submit') {
                var fields = $(this).parents('form:eq(0),body').find('button, input, textarea, select');
                var index = fields.index(this);
                if (index > -1 && (index + 1) < fields.length) {
                    fields.eq(index + 1).focus();
                }
                $(this).blur();
                return false;
            }
        }
    });


    // --------------------------收入.keypress--------------------------

    $("#income_note").not($(":button")).keypress(function(ic_event) {
        if (ic_event.keyCode == 13) {
            if ($(this).attr("type") !== 'submit') {

                if (income.value.length >= 1) {
                    checkpoint_f.value = income.valueAsNumber;

                    checkpoint_i.value = checkpoint_f.value;
                    checkpoint_j.value = income.valueAsNumber;

                    var bal = checkpoint_f.valueAsNumber;

                    var bal_count = checkpoint_g.valueAsNumber;
                    var allPrice = checkpoint_d.valueAsNumber;
                    var y = bal + bal_count;
                    checkpoint_g.value = y;
                    var q = y - allPrice;
                    checkpoint_h.value = q;
                    var fin = checkpoint_h.value;

                    balance.value = fin;




                    $("#a").focus();

                }



                numFormat();




                if (income_note.value.length >= 1) {

                    $(".table2")
                        .append(
                            "<tr><td class=innerData id=innerData_a>&nbsp;<b>" + income_item.value + " (" + income_note.value + ")</b></td><td class=innerData id=innerData_b></td><td class=innerData id=innerData_c></td><td class=innerData id=innerData_d><b><font color='Royal Blue'>" + checkpoint_i.value + "</font></b></td><td class=innerData id=innerData_e hidden><input type='number' id='dataSave" + i + "' value =" + income.valueAsNumber + "></td></tr>");

                }
                else {
                    $(".table2")
                        .append(
                            "<tr><td class=innerData id=innerData_a>&nbsp;<b>" + income_item.value + "</b></td><td class=innerData id=innerData_b></td><td class=innerData id=innerData_c></td><td class=innerData id=innerData_d><b><font color='Royal Blue'>" + checkpoint_i.value + "</font></b></td><td class=innerData id=innerData_e hidden><input type='number' id='dataSave" + i + "'value =" + income.valueAsNumber + "></td></tr>");
                }

                i++;

                mcolor();


                // document.getElementById("debug").value = i;








                checkpoint_e.value = 1;
                income.value = 0;
                income_item.value = "";
                income_note.value = "";

                checkpoint_f.value = 0;
                // checkpoint_i.value = "";

                // return;
            }
        }

    });



    // --------------------------增加資料--------------------------

    $("#add").click(function() {


        var quantity = b.valueAsNumber;
        var unitPrice = c.valueAsNumber;

        if (b.value.length >= 1 && c.value.length >= 1) {

            var x = quantity * unitPrice;
            d.value = x;

            checkpoint_a.value = b.value;
            checkpoint_b.value = c.value;
            checkpoint_c.value = d.value;


            var sus = d.valueAsNumber;
            var allPrice = checkpoint_d.valueAsNumber;
            checkpoint_d.value = allPrice + sus;

            all.value = checkpoint_d.value;

            var bal = checkpoint_f.valueAsNumber;
            var bal_count = checkpoint_g.valueAsNumber;

            checkpoint_h.value = bal + bal_count - checkpoint_d.valueAsNumber;

            balance.value = checkpoint_h.value;



            $("#a").focus();



        }
        else {
            quantity.value = 0,
                unitPrice.value = 0,

                checkpoint_a.value = 0,
                checkpoint_b.value = 0,
                checkpoint_c.value = 0,

                $("#a").focus();
        };











        // -----------------------數字格式化------------------------------
        numFormat_1();

        // -------------------------字串顯示------------------------------
        var chk2 = 0 - d.valueAsNumber;


        if (e.value.length >= 1) {

            $(".table2")
                .append(
                    "<tr><td class=innerData id=innerData_a>&nbsp;&nbsp;&nbsp;" + a.value + " (" + e.value + ")</td><td class=innerData id=innerData_b>" + checkpoint_a.value + "</td><td class=innerData id=innerData_c>" + checkpoint_b.value + "</td><td class=innerData id=innerData_d>&emsp;" + checkpoint_c.value + "</td><td class=innerData id=innerData_e hidden><input type='number' id='dataSave" + i + "'value =" + chk2 + "></td></tr>");
        }
        else {
            $(".table2").append(
                "<tr><td class=innerData id=innerData_a>&nbsp;&nbsp;&nbsp;" + a.value + "</td><td class=innerData id=innerData_b>" + checkpoint_a.value + "</td><td class=innerData id=innerData_c>" + checkpoint_b.value + "</td><td class=innerData id=innerData_d>&emsp;" + checkpoint_c.value + "</td><td class=innerData id=innerData_e hidden><input type='number' id='dataSave" + i + "'value =" + chk2 + "></td></tr>");
        }


        i++;

        mcolor();


        // document.getElementById("debug").value = i;


        // ----------------------------清空字串--------------------------------

        checkpoint_e.value = 0;
        a.value = "";
        b.value = 0;
        c.value = 0;
        // d.value = "";
        e.value = "";
    });



    //-------------------keypress-------------------



    $("#a, #b, #c").not($(":button")).keypress(function(evt) {
        if (evt.keyCode == 13) {
            if ($(this).attr("type") !== 'submit') {
                var fields = $(this).parents('form:eq(0),body').find('button, input, textarea, select');
                var index = fields.index(this);
                if (index > -1 && (index + 1) < fields.length) {
                    fields.eq(index + 1).focus();
                }
                $(this).blur();
                return false;
            }
        }
    });



    $("#e").keypress(function(event) {
        if (event.keyCode == 13) {



            var quantity = b.valueAsNumber;
            var unitPrice = c.valueAsNumber;

            if (b.value.length >= 1 && c.value.length >= 1) {

                var x = quantity * unitPrice;
                d.value = x;

                checkpoint_a.value = b.value;
                checkpoint_b.value = c.value;
                checkpoint_c.value = d.value;


                var sus = d.valueAsNumber;
                var allPrice = checkpoint_d.valueAsNumber;
                checkpoint_d.value = allPrice + sus;

                all.value = checkpoint_d.value;

                var bal = checkpoint_f.valueAsNumber;
                var bal_count = checkpoint_g.valueAsNumber;

                checkpoint_h.value = bal + bal_count - checkpoint_d.valueAsNumber;

                balance.value = checkpoint_h.value;



                $("#a").focus();



            }
            else {
                quantity.value = 0,
                    unitPrice.value = 0,

                    checkpoint_a.value = 0,
                    checkpoint_b.value = 0,
                    checkpoint_c.value = 0,

                    $("#a").focus();
            };











            // -----------------------數字格式化------------------------------
            numFormat_1();

            // -------------------------字串顯示------------------------------

            var chk2 = 0 - d.valueAsNumber;


            if (e.value.length >= 1) {

                $(".table2")
                    .append(
                        "<tr><td class=innerData id=innerData_a>&nbsp;&nbsp;&nbsp;" + a.value + " (" + e.value + ")</td><td class=innerData id=innerData_b>" + checkpoint_a.value + "</td><td class=innerData id=innerData_c>" + checkpoint_b.value + "</td><td class=innerData id=innerData_d>&emsp;" + checkpoint_c.value + "</td><td class=innerData id=innerData_e hidden><input type='number' id='dataSave" + i + "'value =" + chk2 + "></td></tr>");
            }
            else {
                $(".table2").append(
                    "<tr><td class=innerData id=innerData_a>&nbsp;&nbsp;&nbsp;" + a.value + "</td><td class=innerData id=innerData_b>" + checkpoint_a.value + "</td><td class=innerData id=innerData_c>" + checkpoint_b.value + "</td><td class=innerData id=innerData_d>&emsp;" + checkpoint_c.value + "</td><td class=innerData id=innerData_e hidden><input type='number' id='dataSave" + i + "'value =" + chk2 + "></td></tr>");
            }



            i++;



            mcolor();


            // document.getElementById("debug").value = i;


            // ----------------------------清空字串--------------------------------

            checkpoint_e.value = 0;
            a.value = "";
            b.value = 0;
            c.value = 0;
            // d.value = "";
            e.value = "";
        }

    });


    // ----------------------------清除資料--------------------------------



    $("#clear").click(function() {


        $(".innerData").remove();
        d.value = "";
        checkpoint_a.value = "";
        checkpoint_b.value = "";
        checkpoint_c.value = "";
        checkpoint_d.value = 0;
        checkpoint_f.value = 0;
        checkpoint_g.value = 0;
        checkpoint_h.value = 0;
        all.value = 0;
        balance.value = 0;
        var t_title = "account-book";
        document.getElementById("top_title").innerText = t_title;
        i = 0;

    });

    $("#clear_last").click(function() {
        
        if (i>0){
        i--;
    
        // var cl = $("#dataSave"+i+"").value;
         var cl = document.getElementById("dataSave"+i+"").valueAsNumber;
            // document.getElementById("debug1").value = cl;
            
            

        if (cl > 0) {


                var inc_chk1 = checkpoint_g.valueAsNumber;
                var fin = checkpoint_h.valueAsNumber;
                
                checkpoint_g.value = inc_chk1 - cl;
                checkpoint_h.value = fin - cl;

                balance.value = checkpoint_h.value;

                // checkpoint_j.value = 0;

                mcolor();
                numFormat();
                

        $(".table2 tr:last").remove();


        }
        else {
            if (
                cl < 0) {

            var allPrice = checkpoint_d.valueAsNumber;
            
            checkpoint_d.value = allPrice + cl;
            all.value = checkpoint_d.value;


            var fin = checkpoint_h.valueAsNumber;
            
            checkpoint_h.value = fin -cl ;

            balance.value = checkpoint_h.value;

            mcolor();
            numFormat_1();


                $(".table2 tr:last").remove();
            }
            else {
                $(".table2 tr:last").remove();
            }}

        
            
        }





    });




});
