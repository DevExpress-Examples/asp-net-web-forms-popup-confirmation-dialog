<!-- default file list -->
*Files to look at*:

* [dxConfirm.js](./CS/T545638/Scripts/dxConfirm.js)
* **[Index.cshtml](./CS/T545638/Views/Home/Index.cshtml)**
* [_Layout.cshtml](./CS/T545638/Views/Shared/_Layout.cshtml)
* [ConfirmPopup.cshtml](./CS/T545638/Views/Shared/ConfirmPopup.cshtml)
<!-- default file list end -->
# PopupControl - How to implement a confirmation dialog
<!-- run online -->
**[[Run Online]](https://codecentral.devexpress.com/t546332)**
<!-- run online end -->


In this example, we consider the confirmation dialog as a simple popup with a message and Yes/No buttons.<br><br>For this task, you need to place a popup into Layout view and place the label and buttons there:<br>


```cs
@Html.DevExpress().PopupControl(settings => {
    settings.SetContent(() => {
       //label and buttons
    });
}).GetHtml()
```


And write a simple JS function that will show this popup and assign the handler to the Yes button:<br>


```js
(function() {
    'use strict';
    window.dxConfirm = function(text) {
        if (text && text.length)
            ConfirmLabel.SetText(text);

        ConfirmYes.Click.ClearHandlers();
        ConfirmYes.Click.AddHandler(Hide);

        ConfirmPopup.Show();
        return {
            success: function(onSuccess) {
                ConfirmYes.Click.AddHandler(onSuccess);
            }
        };
    };
    function Hide() {
        ConfirmPopup.Hide();
    }
})();


```


Then, you will be able to use the dialog as follows:<br>


```js
dxConfirm("Do you want to show an alert?")
    .success(function() {
        alert("success");
    });

```


Here, the string parameter is the message that will be shown in the popup and the function passed to <strong>success </strong>defines the action that will be performed after Yes is clicked.<br>If you pass an empty string, the default message will be shown. However, the success function is required as there is no point in using the dialog without it.

<br/>


