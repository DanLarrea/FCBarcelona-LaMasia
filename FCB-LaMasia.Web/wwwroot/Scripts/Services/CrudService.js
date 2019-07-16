class CrudService extends GenericService
{
    constructor($http, $window, model) {
        super($http, $window, model)
        this.Http = $http;
 
    }
    GetAll(model) {
        return this.GetAllAsync(model);
    }
    GetByIdAsync(model) {
        return this.GetByIdAsync(model);
    }
    GetByMultipleIds(ids) {
        let multipleIds = ids;

        let promises = multipleIds.map((v) => {
            return this.Http.get(this.Url + v)
        });
    }
    AddAsync(model) {
        return this.PostAsync(model);
    }
    UpdateAsync(model) {
        return this.PutAsync(model);
    }
    Delete(model) {
        return this.DeleteAsync(model);
    }
}