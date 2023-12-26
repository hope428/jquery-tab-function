$(function(){
    const tab1 = $('#tab1')
    const tab2 = $('#tab2')
    const tab3 = $('#tab3')


    tab1.on('click', function(){
        tab1.addClass('active')
        tab2.removeClass('active')
        tab3.removeClass('active')
        $('#tab1Info').removeAttr("hidden")
        $('#tab2Info').attr("hidden", true)
        $('#tab3Info').attr("hidden", true)
    })

    tab2.on('click', function() {
        tab2.addClass('active')
        tab1.removeClass('active')
        tab3.removeClass('active')
        $('#tab1Info').attr("hidden", true)
        $('#tab2Info').removeAttr("hidden")
        $('#tab3Info').attr("hidden", true)
    })

    tab3.on('click', function() {
        tab3.addClass('active')
        tab2.removeClass('active')
        tab1.removeClass('active')
        $('#tab1Info').attr("hidden", true)
        $('#tab2Info').attr("hidden", true)
        $('#tab3Info').removeAttr("hidden")
    })


})