google.charts.load('current', {'packages':['gantt']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChartFinal);

function daysToMilliseconds(days) {
  return days * 24 * 60 * 60 * 1000;
}

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Task ID');
    data.addColumn('string', 'Task Name');
    data.addColumn('date', 'Start Date');
    data.addColumn('date', 'End Date');
    data.addColumn('number', 'Duration');
    data.addColumn('number', 'Difficulty');
    data.addColumn('string', 'Dependencies');

    data.addRows([
        ['writer', 'Writer Copy Deck',
        new Date(2024, 0, 18), new Date(2024, 0, 25), null,  100,  null],

        ['blankForm', 'Blank form Design',
        new Date(2024, 0, 21), new Date(2024, 0, 25), null, 50, null],

        ['filledForm', 'Filled form Design',
        null, new Date(2024, 1, 4), daysToMilliseconds(9), 50, 'writer,blankForm'],

        ['initialNextSetup', 'Initial NextJS setup',
        new Date(2024, 0, 31), new Date(2024, 1, 1), null, 100, null],

        ['componentCreation', 'Form Component Creation',
        null, new Date(2024, 1, 3), daysToMilliseconds(2), 100, 'filledForm,initialNextSetup'],

        ['validatorCreation', 'Validator Library Creation',
        new Date(2024, 0, 29), new Date(2024, 1, 1), null, 100, null],

        ['validatorTesting', 'Validator Testing',
        null, new Date(2024, 1, 4), daysToMilliseconds(4), 100, 'validatorCreation'],

        ['merge', 'Validator and form component merge',
        null, new Date(2024, 1, 8), daysToMilliseconds(5), 100, 'validatorTesting,componentCreation'],

        ['nextJsExport', 'Static Export of NextJS',
        null, new Date(2024, 1, 8), daysToMilliseconds(1), 100, 'merge'],

        ['pm', 'PM Check and Deployment',
        null, new Date(2024, 1, 9), daysToMilliseconds(1), 100, 'writer,filledForm,nextJsExport'],

    ]);

    var options = {
        height: 575
    };

    var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

    chart.draw(data, options);

}

function drawChartFinal() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Task ID');
    data.addColumn('string', 'Task Name');
    data.addColumn('date', 'Start Date');
    data.addColumn('date', 'End Date');
    data.addColumn('number', 'Duration');
    data.addColumn('number', 'Difficulty');
    data.addColumn('string', 'Dependencies');

    data.addRows([
        ['writer', 'Writer Copy Deck',
        new Date(2024, 1, 10), new Date(2024, 1, 13), null,  100, null],

        ['finalDesign', 'Final Design',
        null, new Date(2024, 1, 18), daysToMilliseconds(6), 50, 'writer'],

        ['Development', 'Final Development + Bugs and Testing',
        new Date(2024, 1, 15), new Date(2024, 1, 23), null, 100, 'finalDesign'],

    ]);

    var options = {
        height: 575
    };

    var chart = new google.visualization.Gantt(document.getElementById('chart_div_final'));

    chart.draw(data, options);

}