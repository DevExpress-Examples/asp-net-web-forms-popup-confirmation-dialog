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
