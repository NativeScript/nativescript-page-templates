var Observable = require("data/observable").Observable;

function LoginViewModel() {
    var viewModel = new Observable();

    viewModel.email = "";
    viewModel.password = "";

    viewModel.onSignIn = function () {
    };

    return viewModel;
}

module.exports = LoginViewModel;