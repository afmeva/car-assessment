import { CarsService } from "./cars.service";
import { CarsAPIService } from "./cars-api.service";
import { Observable } from "rxjs/Observable";

fdescribe("CarsSerive", () => {
  let carsService: CarsService;
  let carsApi: CarsAPIService;
  const mockData = [
    {
      id: "38e87c73-1dfe-4f81-9dcc-cf54fc92dce5",
      images: {
        small: "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
        big: "http://dummyimage.com/500x500.jpg/cc0000/ffffff"
      },
      model: "626",
      year: 1985,
      brand: "Mazda",
      price: 72061,
      features: [
        {
          headline: "General Manager",
          text: "extend efficient relationships"
        },
        {
          headline: "Administrative Officer",
          text: "whiteboard 24/365 markets"
        }
      ]
    },
    {
      id: "38e87c73-1dfe-4f81-9dcc-cf54fc92dce5",
      images: {
        small: "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
        big: "http://dummyimage.com/500x500.jpg/cc0000/ffffff"
      },
      model: "626",
      year: 1985,
      brand: "Pontiac",
      price: 72061,
      features: [
        {
          headline: "General Manager",
          text: "extend efficient relationships"
        },
        {
          headline: "Administrative Officer",
          text: "whiteboard 24/365 markets"
        }
      ]
    },
  ];

  beforeEach(() => {
    carsApi = jasmine.createSpyObj({
      getAll: Observable.of(mockData),
      getById: Observable.of({})
    });
    carsService = new CarsService(carsApi);
  });

  it("should be created", () => {
    expect(carsService).toBeTruthy();
  });

  it("should call getAll method from carsApi when carService is created", () => {
    expect(carsApi.getAll).toHaveBeenCalled();
  });

  it("should store the cars data within the service", () => {
    carsService.carsData.subscribe(data => {
      expect(data).toEqual(mockData);
    })
  });

  it("should filter the data by the given brand (case insensitive) ", () => {
    carsService.setTerm("MAZDA");
    carsService.carsData.subscribe(data => {
      expect(data).toEqual([mockData[0]]);
    });
  });
});
