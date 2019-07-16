class GenericService
{
    get Config() {
        var config =
        {
            headers:
            {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.Token
            }
        };
        return config;
    }

    constructor($http, $window, model) {
        this.Http = $http;
        this.Token = $window.Token;
        this.ApiUrl = "api/" + model;
    }

    GetAllAsync() {
        return this.Http.get(this.ApiUrl, this.Config);
    }
    GetByIdAsync(model) {
        return this.Http.get(this.ApiUrl + "/"+ model.Id);
    }
    GetByMultipleIds(ids) {
        let multipleIds = ids;

        let promises = multipleIds.map((v) => {
            return this.Http.get(this.ApiUrl + v)
        });
    }
    PostAsync(model) {
        return this.Http.post(this.ApiUrl, model, this.Config);
    }
    PutAsync(model) {
        return this.Http.put(this.ApiUrl + "/" + model.Id , model);
    }
    DeleteAsync(model) {
        return this.Http.delete(this.ApiUrl + "/" + model.Id);
    }
}