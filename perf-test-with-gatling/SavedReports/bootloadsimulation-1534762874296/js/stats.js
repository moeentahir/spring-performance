var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "19975",
        "ko": "25"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "402",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "17556",
        "ok": "17556",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "820",
        "ok": "821",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1306",
        "ok": "1306",
        "ko": "0"
    },
    "percentiles1": {
        "total": "511",
        "ok": "511",
        "ko": "0"
    },
    "percentiles2": {
        "total": "608",
        "ok": "608",
        "ko": "0"
    },
    "percentiles3": {
        "total": "2129",
        "ok": "2129",
        "ko": "0"
    },
    "percentiles4": {
        "total": "8376",
        "ok": "8378",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 17659,
        "percentage": 88
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 579,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1737,
        "percentage": 9
    },
    "group4": {
        "name": "failed",
        "count": 25,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "500",
        "ok": "499.375",
        "ko": "0.625"
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
        "ok": "19975",
        "ko": "25"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "402",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "17556",
        "ok": "17556",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "820",
        "ok": "821",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1306",
        "ok": "1306",
        "ko": "0"
    },
    "percentiles1": {
        "total": "511",
        "ok": "511",
        "ko": "0"
    },
    "percentiles2": {
        "total": "608",
        "ok": "608",
        "ko": "0"
    },
    "percentiles3": {
        "total": "2129",
        "ok": "2129",
        "ko": "0"
    },
    "percentiles4": {
        "total": "8376",
        "ok": "8378",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 17659,
        "percentage": 88
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 579,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1737,
        "percentage": 9
    },
    "group4": {
        "name": "failed",
        "count": 25,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "500",
        "ok": "499.375",
        "ko": "0.625"
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
