var dataUrl = "data.json";
var data;

// Load Data
var loadDataFirst = function() {
    $.ajax({
        url: dataUrl,
    }).done(function(respone) {
        data = respone;
    });
};

// Show on Form filter
var formLoadData = function() {
    var selectJob = $('.jobSelect'),
        selectCity = $('.citySelect');

    // console.log(data.form);
    for (let item of data.form) {
        console.log(item);
        let cities = item.city,
            jobs = item.tagJob;

        for (let city of cities) {
            selectCity.append('<option value="' + city.cityKey + '">' + city.cityName + '</option>')
        }

        for (let job of jobs) {
            selectJob.append('<option value="' + job.jobKey + '">' + job.jobKey + '</option>')
        }
    }
};

// Show List Recruit
var listRecruitLoadData = function() {

};

// Run
$(window).resize(function() {

});

$(window).scroll(function() {

});

$(document).ready(function() {
    loadDataFirst();


    setTimeout(() => {
        // console.log(data);

        formLoadData();
        listRecruitLoadData();
    }, 1000);
});