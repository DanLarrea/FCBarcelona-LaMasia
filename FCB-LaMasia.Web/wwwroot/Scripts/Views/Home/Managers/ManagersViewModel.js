class ManagersViewModel
{
    constructor($ManagersService, $window)
    {
        this.Managers = [];
        this.ManagersSvc = $ManagersService;
        this.Window = $window;
        this.GetAllManagers();
        this.SelectedManager = null;

        this.GridOptions =
            {
                enableFiltering: false,
                data: 'vm.Managers',
                appScopeProvider: this,
                columnDefs: [
                    { name: 'Name', field: 'Name' },
                    { name: 'Lastname', field: 'Lastname' },
                    { name: 'Age', field: 'Age' },
                    { name: 'Nationality', field: 'Nationality' },
                    { name: 'Email', field: 'Email' },
                    { name: '', field: 'Id', cellTemplate: '<div class="ui-grid-cell-contents" title="TOOLTIP"><input type="button" style="width: 80px; background-color: #28a745;" value="Select" ng-click="grid.appScope.SelectManager(row.entity)"><input type="button" style="margin-left:10px; width: 80px; background-color: #dc3545;" value="Delete" ng-click="grid.appScope.DeleteManager(row.entity)"></div>' }
                ]
            };
        this.IsEditing = true;
    }

    GetAllManagers() {
        this.ManagersSvc.GetAllManagersAsync()
            .then((response) => {
                this.OnGetData(response);
            });
    }

    OnGetData(response) {
        for (let i in response.data) {
            let jsonManager = response.data[i];
            this.Managers.push(new Manager(jsonManager));
        }
    };

    OnManagerAdded(response) {
        let manager = new Manager(response.data);
        this.Managers.push(manager);
    }

    AddNewManager() {
        let manager = new Manager();
        manager.Name = this.Name;
        manager.Lastname = this.Lastname;
        manager.Age = this.Age;
        manager.Nationality = this.Nationality;
        manager.Email = this.Email;
        manager.Password = this.Password;

        this.ManagersSvc.AddManagerAsync(manager)
            .then((response) => {
                this.OnManagerAdded(response),
                    alert("Success for " + response.data.name)
            });
    }

    SelectManager(manager) {
        this.SelectedManager = manager;

        this.Name = manager.Name;
        this.Lastname = manager.Lastname;
        this.Age = manager.Age;
        this.Nationality = manager.Nationality;
        this.Email = manager.Email;
        this.Password = manager.Password;

        this.IsEditing = false;
    }

    UpdateManager() {
        let uptmanager = this.SelectedManager;
        uptmanager.Name = this.Name;
        uptmanager.Lastname = this.Lastname;
        uptmanager.Age = this.Age;
        uptmanager.Nationality = this.Nationality;
        uptmanager.Email = this.Email;
        uptmanager.Password = this.Password;

        //$http PUT function
        this.ManagersSvc.UpdateManagerAsync(uptmanager)
            .then((response) =>

                alert("Manager updated successfully")

            ), ((response) =>

                alert("Error while updating manager try again!")

            );
        this.ClearForm();
    }

    CancelUpdate() {
        this.IsEditing = true;
    }

    DeleteManager(manager) {
        var r = this.Window.confirm("Do you want to delete this manager?");
        if (r == true) {
            this.ManagersSvc.DeleteManagerAsync(manager)
                .then((response) => {
                    var index = this.Managers.indexOf(manager);
                    this.Managers.splice(index, 1);
                    alert("Manager deleted successfully");

                }), ((response) => {

                    alert("Error while deleting manager try again!");
                });
        }
    }
    ClearForm() {
        this.Name = "";
        this.Lastname = "";
        this.Age = "";
        this.Nationality = "";
        this.Email = "";
        this.Password = "";

        this.IsEditing = true;
    }
}

app.component('managers',
    {
        templateUrl: './Scripts/Views/Home/Managers/ManagersView.html',
        controller: ManagersViewModel,
        controllerAs: "vm"
    });