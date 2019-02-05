import { CarsAPIService } from "./cars-api.service";

describe("CarsAPIService", () => {
  let carsService: CarsAPIService;
  const dataKeys = [
    "id",
    "images",
    "model",
    "year",
    "brand",
    "price",
    "features"
  ];

  beforeEach(() => {
    carsService = new CarsAPIService();
  });
  it("should be created ", () => {
    expect(carsService).toBeTruthy();
  });

  it("should return an observable with the array", () => {
    carsService.getAll().subscribe(data => {
      expect(Array.isArray(data)).toBeTruthy();
    });
  });

  it("should have the right keys in the data response", () => {
    carsService.getAll().subscribe(data => {
      expect(Object.keys(data[0])).toEqual(dataKeys);
    });
  });

  it("should return the item with the id given", () => {
    carsService
      .getById("98c43d28-59e2-4d81-865d-87a11924fcbe")
      .subscribe(data => {
        expect(Object.keys(data)).toEqual(dataKeys);
      });
  });
});
