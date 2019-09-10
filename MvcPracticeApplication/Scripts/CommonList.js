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


$(function () {
    $("#dataGrid").dxList({
        // ...
        useNativeScrolling: false,
        showScrollbar: 'onHover'
    });
});



$(function () {
    $("#dataGrid").dxList({
        // ...
        useNativeScrolling: false,
        showScrollbar: 'onHover'
    });
});

// for dropdown
function GetAllClasses() {
    var ResoponseData;
    var url = "/User/GetAllClasses";
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
            response = response.ClassesList;
            ResoponseData = response;
        },
        error: function (response) {
            AlertToast('warning', response.Message)
        }
    });
    return ResoponseData;
}

function FrontEndErrorLogs(view, message) {
    debugger;
    $.ajax({
        type: 'Get',
        url: '/user/FrontEndErrorLogs?view=' + view + '&message=' + message,
        data: FormData,
        success: function (response) {
            debugger
            response = JSON.parse(response.response)

        },
        failure: function (response) {
            alert("Fail");
        },
        error: function (response) {
            alert("Error");
        },
        complete: function () {
            $('#SaveData').removeAttr('disabled');
        }

    });
}