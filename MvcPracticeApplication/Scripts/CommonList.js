//ModalDissmiss
function ModalClose() {
    $("#myModal").modal('toggle')
}
function ModalCloseConfirm() {
    $("#myModalConfirm").modal('toggle')
}
function ModalCloseQuantity() {
    $("#myModalQuantity").modal('toggle')
}
function ModalCloseChangePassword() {
    $("#myModalChangePassword").modal('toggle')
}
function ModalCloseDispatch() {
    $("#myModalDispatch").modal('toggle')
}

//RegionList
function GetRegions() {
    var ResoponseData;
    var url = "/User/GetRegions";
    $.ajax({
        type: "Get",
        url: url,
        async: false,
        cache: false,
        contentType: "application/json; charset=utf-8",
        data: {},
        datatype: "json",
        success: function (response) {
            response = JSON.parse(response.response)
            response = response.RegionList;
            ResoponseData = response;
        },
        error: function (response) {
            AlertToast('warning', response.Message)
        }
    });
    return ResoponseData;
}

//CityList
function GetCities() {
    var ResoponseData;
    var url = "/User/GetCities";
    $.ajax({
        type: "Get",
        url: url,
        async: false,
        cache: false,
        contentType: "application/json; charset=utf-8",
        data: {},
        datatype: "json",
        success: function (response) {
            response = JSON.parse(response.response)
            response = response.CityList;
            ResoponseData = response;
        },
        error: function (response) {
            AlertToast('warning', response.Message)
        }
    });
    return ResoponseData;
}

//RegionManagers
function GetRegMan() {
    var ResoponseDataRegManager;
    var url = "/User/GetRegManagres";
    $.ajax({
        type: "Get",
        url: url,
        async: false,
        cache: false,
        contentType: "application/json; charset=utf-8",
        data: {},
        datatype: "json",
        success: function (response) {
            response = JSON.parse(response.response)
            response = response.RegManagers;
            ResoponseDataRegManager = response;
        },
        error: function (response) {
            AlertToast('warning', response.Message)
        }
    });
    return ResoponseDataRegManager;
}

//GetAreasAgainstRegion
//function Areas(RegionID) {

//    var Areas;
//    var url = "/User/GetAreaByRegionID?RegionID="+RegionID;
//    $.ajax({
//        type: "Get",
//        url: url,
//        async: false,
//        cache: false,
//        contentType: "application/json; charset=utf-8",
//        data: {},
//        datatype: "json",
//        success: function (response) {
//            response = JSON.parse(response.response)
//            response = response.Areas;
//            Areas = response;
//        },
//        error: function (response) {
//            AlertToast('warning', response.Message)
//        }
//    });
//    return Areas;
//}

////GetCityAgainstRegion
//function Cities(RegionID) {

//    var Cities;
//    var url = "/User/GetCitiesByRegionID?RegionID=" + RegionID;
//    $.ajax({
//        type: "Get",
//        url: url,
//        async: false,
//        cache: false,
//        contentType: "application/json; charset=utf-8",
//        data: {},
//        datatype: "json",
//        success: function (response) {
//            response = JSON.parse(response.response)
//            response = response.Cities;
//            Cities = response;
//        },
//        error: function (response) {
//            AlertToast('warning', response.Message)
//        }
//    });
//    return Cities;
//}


//GetRegionManagersByRegion
function GetRegionManagerByRegionID(RegionID) {
    var RegionManagers;
    var url = "/User/GetRegionManagerByRegionID?RegionID=" + RegionID;
    $.ajax({
        type: "Get",
        url: url,
        async: false,
        cache: false,
        contentType: "application/json; charset=utf-8",
        data: {},
        datatype: "json",
        success: function (response) {
            response = JSON.parse(response.response)
            response = response.RegManagers;
            RegionManagers = response;
        },
        error: function (response) {
            AlertToast('warning', response.Message)
        }
    });
    return RegionManagers;
}



//GetEngineersByRegionManager
function EngineersbyRegionManager(RegionManagerId) {
    var Engineers;
    var url = "/User/EngineersbyRegionManager?RegionManagerId=" + RegionManagerId;
    $.ajax({
        type: "Get",
        url: url,
        async: false,
        cache: false,
        contentType: "application/json; charset=utf-8",
        data: {},
        datatype: "json",
        success: function (response) {
            response = JSON.parse(response.response)
            response = response.Engineers;
            Engineers = response;
        },
        error: function (response) {
            AlertToast('warning', response.Message)
        }
    });
    return Engineers;
}



//GetParentTasksList
function GetParentTasks() {
    var Engineers;
    var url = "/User/GetParentTasks";
    $.ajax({
        type: "Get",
        url: url,
        async: false,
        cache: false,
        contentType: "application/json; charset=utf-8",
        data: {},
        datatype: "json",
        success: function (response) {
            response = JSON.parse(response.response)
            response = response.ParentTasks;
            Engineers = response;
        },
        error: function (response) {
            AlertToast('warning', response.Message)
        }
    });
    return Engineers;
}

//GetParentTasksList
function GetChildTaskByParentID(id) {
    var val;
    var url = "/User/GetChildTaskByParentID?id=" + id;
    $.ajax({
        type: "Get",
        url: url,
        async: false,
        cache: false,
        contentType: "application/json; charset=utf-8",
        data: {},
        datatype: "json",
        success: function (response) {
            response = JSON.parse(response.response)
            response = response.ChildTasks;
            val = response;
        },
        error: function (response) {
            AlertToast('warning', response.Message)
        }
    });
    return val;
}

//GetProjects
function GetProjects() {
    var Projects;
    var url = "/User/GetProjects";
    $.ajax({
        type: "Get",
        url: url,
        async: false,
        cache: false,
        contentType: "application/json; charset=utf-8",
        data: {},
        datatype: "json",
        success: function (response) {
            response = JSON.parse(response.response)
            response = response.Projects;
            Projects = response;
        },
        error: function (response) {
            AlertToast('warning', response.Message)
        }
    });
    return Projects;
}

$(function () {
    $("#dataGrid").dxList({
        // ...
        useNativeScrolling: false,
        showScrollbar: 'onHover'
    });
});



//GetContractor
function GetContractors() {
    var Projects;
    var url = "/User/ContractorsList";
    $.ajax({
        type: "Get",
        url: url,
        async: false,
        cache: false,
        contentType: "application/json; charset=utf-8",
        data: {},
        datatype: "json",
        success: function (response) {
            response = JSON.parse(response.response)
            response = response.Users;
            Projects = response;
        },
        error: function (response) {
            AlertToast('warning', response.Message)
        }
    });
    return Projects;
}

//GetPumpsByAreas
function GetPumpsByAreas(Areaid) {
    var Pumps;
    var url = "/User/GetPumpsByAreas?Areaid=" + Areaid;
    $.ajax({
        type: "Get",
        url: url,
        async: false,
        cache: false,
        contentType: "application/json; charset=utf-8",
        data: {},
        datatype: "json",
        success: function (response) {
            response = JSON.parse(response.response)
            response = response.PumpList;
            Pumps = response;
        },
        error: function (response) {
            AlertToast('warning', response.Message)
        }
    });
    return Pumps;
}

$(function () {
    $("#dataGrid").dxList({
        // ...
        useNativeScrolling: false,
        showScrollbar: 'onHover'
    });
});