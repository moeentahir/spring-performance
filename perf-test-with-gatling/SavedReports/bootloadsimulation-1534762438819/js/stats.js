var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "19722",
        "ko": "278"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "810",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "34747",
        "ok": "34747",
        "ko": "16917"
    },
    "meanResponseTime": {
        "total": "16885",
        "ok": "16993",
        "ko": "9264"
    },
    "standardDeviation": {
        "total": "5515",
        "ok": "5436",
        "ko": "5716"
    },
    "percentiles1": {
        "total": "18675",
        "ok": "18725",
        "ko": "11162"
    },
    "percentiles2": {
        "total": "20069",
        "ok": "20113",
        "ko": "13728"
    },
    "percentiles3": {
        "total": "20493",
        "ok": "20494",
        "ko": "16210"
    },
    "percentiles4": {
        "total": "29918",
        "ok": "29952",
        "ko": "16772"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 217,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 19505,
        "percentage": 98
    },
    "group4": {
        "name": "failed",
        "count": 278,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "229.885",
        "ok": "226.69",
        "ko": "3.195"
    }
},
contents: {
"req_add-person-test-ac713": {
        type: "REQUEST",
        name: "add-person-test",
path: "add-person-test",
pathFormatted: "req_add-person-test-ac713",
stats: {
    "name": "add-person-test",
    "numberOfRequests": {
        "total": "20000",
        "ok": "19722",
        "ko": "278"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "810",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "34747",
        "ok": "34747",
        "ko": "16917"
    },
    "meanResponseTime": {
        "total": "16885",
        "ok": "16993",
        "ko": "9264"
    },
    "standardDeviation": {
        "total": "5515",
        "ok": "5436",
        "ko": "5716"
    },
    "percentiles1": {
        "total": "18681",
        "ok": "18740",
        "ko": "11162"
    },
    "percentiles2": {
        "total": "20070",
        "ok": "20102",
        "ko": "13728"
    },
    "percentiles3": {
        "total": "20491",
        "ok": "20493",
        "ko": "16210"
    },
    "percentiles4": {
        "total": "29918",
        "ok": "29941",
        "ko": "16772"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 217,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 19505,
        "percentage": 98
    },
    "group4": {
        "name": "failed",
        "count": 278,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "229.885",
        "ok": "226.69",
        "ko": "3.195"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
