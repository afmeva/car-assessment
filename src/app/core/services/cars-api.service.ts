import "rxjs/add/observable/of";
import { Observable } from "rxjs/Observable";

import { Car } from "../models/car.model";
import { Injectable } from "@angular/core";

@Injectable()
export class CarsAPIService {
  getAll(): Observable<Car[]> {
    return Observable.of(carData);
  }

  getById(carId:string): Observable<Car> {
    const car = carData.find(({ id }) => id === carId)
    return Observable.of(car);
  };
}

const carData: Car[] = [
  {
    id: "38e87c73-1dfe-4f81-9dcc-cf54fc92dce5",
    images: {
      small: "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
      big: "http://dummyimage.com/500x200.jpg/cc0000/ffffff"
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
    id: "056b2864-b1da-48f2-a4bc-337d24483c98",
    images: {
      small: "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
      big: "http://dummyimage.com/500x200.jpg/ff4444/ffffff"
    },
    model: "Trans Sport",
    year: 1994,
    brand: "Pontiac",
    price: 16413,
    features: [
      {
        headline: "Nuclear Power Engineer",
        text: "deploy plug-and-play bandwidth"
      },
      {
        headline: "Director of Sales",
        text: "target synergistic communities"
      },
      {
        headline: "General Manager",
        text: "reintermediate synergistic deliverables"
      },
      {
        headline: "Marketing Assistant",
        text: "architect integrated supply-chains"
      },
      {
        headline: "Biostatistician IV",
        text: "grow killer vortals"
      },
      {
        headline: "Director of Sales",
        text: "brand dot-com e-markets"
      },
      {
        headline: "Engineer IV",
        text: "enhance best-of-breed deliverables"
      },
      {
        headline: "Librarian",
        text: "evolve user-centric partnerships"
      },
      {
        headline: "Senior Financial Analyst",
        text: "engineer virtual solutions"
      },
      {
        headline: "Tax Accountant",
        text: "strategize user-centric channels"
      }
    ]
  },
  {
    id: "98c43d28-59e2-4d81-865d-87a11924fcbe",
    images: {
      small: "http://dummyimage.com/200x200.jpg/dddddd/000000",
      big: "http://dummyimage.com/500x200.jpg/dddddd/000000"
    },
    model: "Cooper Clubman",
    year: 2010,
    brand: "MINI",
    price: 41895,
    features: [
      {
        headline: "Data Coordiator",
        text: "integrate sexy relationships"
      },
      {
        headline: "Administrative Officer",
        text: "reintermediate best-of-breed architectures"
      },
      {
        headline: "Community Outreach Specialist",
        text: "transition cross-media e-commerce"
      },
      {
        headline: "Account Representative III",
        text: "embrace robust infomediaries"
      },
      {
        headline: "Electrical Engineer",
        text: "expedite enterprise supply-chains"
      },
      {
        headline: "Sales Representative",
        text: "grow real-time e-tailers"
      }
    ]
  },
  {
    id: "6956c265-8a8a-4467-a77c-a4271ba248ee",
    images: {
      small: "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
      big: "http://dummyimage.com/500x200.jpg/ff4444/ffffff"
    },
    model: "Caprice",
    year: 1977,
    brand: "Chevrolet",
    price: 92104,
    features: [
      {
        headline: "Analog Circuit Design manager",
        text: "exploit magnetic action-items"
      },
      {
        headline: "Registered Nurse",
        text: "mesh global partnerships"
      },
      {
        headline: "Community Outreach Specialist",
        text: "orchestrate robust platforms"
      },
      {
        headline: "Tax Accountant",
        text: "deliver one-to-one supply-chains"
      },
      {
        headline: "Senior Sales Associate",
        text: "utilize customized communities"
      },
      {
        headline: "Staff Accountant II",
        text: "synthesize world-class e-commerce"
      },
      {
        headline: "Social Worker",
        text: "strategize killer infrastructures"
      },
      {
        headline: "Senior Quality Engineer",
        text: "enhance integrated systems"
      }
    ]
  },
  {
    id: "1baed889-8416-4765-aea6-ee3bf37c1b98",
    images: {
      small: "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
      big: "http://dummyimage.com/500x200.jpg/cc0000/ffffff"
    },
    model: "Wrangler",
    year: 2009,
    brand: "Jeep",
    price: 34536,
    features: [
      {
        headline: "Automation Specialist III",
        text: "extend efficient users"
      },
      {
        headline: "VP Accounting",
        text: "innovate cutting-edge e-business"
      }
    ]
  },
  {
    id: "d89c75d7-7dd5-4e2f-9799-ad27b2141b28",
    images: {
      small: "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
      big: "http://dummyimage.com/500x200.jpg/5fa2dd/ffffff"
    },
    model: "3000GT",
    year: 1996,
    brand: "Mitsubishi",
    price: 28777,
    features: [
      {
        headline: "Web Developer II",
        text: "unleash compelling e-services"
      },
      {
        headline: "Office Assistant IV",
        text: "morph best-of-breed synergies"
      },
      {
        headline: "Account Executive",
        text: "maximize 24/7 portals"
      },
      {
        headline: "Editor",
        text: "iterate end-to-end niches"
      },
      {
        headline: "Executive Secretary",
        text: "morph cross-platform infomediaries"
      }
    ]
  },
  {
    id: "d715e8d5-18b6-4550-b79f-899694eff07d",
    images: {
      small: "http://dummyimage.com/200x200.jpg/cc0000/ffffff",
      big: "http://dummyimage.com/500x200.jpg/cc0000/ffffff"
    },
    model: "Touareg",
    year: 2006,
    brand: "Volkswagen",
    price: 43137,
    features: [
      {
        headline: "Health Coach IV",
        text: "scale open-source bandwidth"
      },
      {
        headline: "Environmental Tech",
        text: "utilize impactful relationships"
      },
      {
        headline: "Computer Systems Analyst I",
        text: "streamline leading-edge channels"
      },
      {
        headline: "Quality Control Specialist",
        text: "enable strategic eyeballs"
      },
      {
        headline: "Help Desk Operator",
        text: "incentivize out-of-the-box portals"
      },
      {
        headline: "Dental Hygienist",
        text: "strategize e-business infomediaries"
      },
      {
        headline: "Structural Analysis Engineer",
        text: "harness back-end models"
      },
      {
        headline: "Safety Technician IV",
        text: "mesh value-added e-services"
      }
    ]
  },
  {
    id: "bd9d244f-793a-45e4-96f8-7dddc0ec62ef",
    images: {
      small: "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
      big: "http://dummyimage.com/500x200.jpg/dddddd/000000"
    },
    model: "E-Series",
    year: 1986,
    brand: "Ford",
    price: 31279,
    features: [
      {
        headline: "GIS Technical Architect",
        text: "exploit interactive ROI"
      },
      {
        headline: "Editor",
        text: "monetize global eyeballs"
      },
      {
        headline: "Speech Pathologist",
        text: "leverage bleeding-edge users"
      },
      {
        headline: "Account Representative IV",
        text: "engage killer bandwidth"
      },
      {
        headline: "Human Resources Manager",
        text: "synergize efficient synergies"
      }
    ]
  },
  {
    id: "0c8be33a-8111-4536-8ed3-015c1bd22e25",
    images: {
      small: "http://dummyimage.com/200x200.jpg/cc0000/ffffff",
      big: "http://dummyimage.com/500x200.jpg/5fa2dd/ffffff"
    },
    model: "Envoy XUV",
    year: 2005,
    brand: "GMC",
    price: 50867,
    features: [
      {
        headline: "Community Outreach Specialist",
        text: "engage efficient web services"
      },
      {
        headline: "General Manager",
        text: "deploy B2B communities"
      },
      {
        headline: "Staff Accountant IV",
        text: "target compelling interfaces"
      },
      {
        headline: "Administrative Officer",
        text: "aggregate mission-critical technologies"
      },
      {
        headline: "Electrical Engineer",
        text: "cultivate viral e-markets"
      }
    ]
  },
  {
    id: "5c40db04-004d-48d6-95a4-779801267407",
    images: {
      small: "http://dummyimage.com/200x200.jpg/dddddd/000000",
      big: "http://dummyimage.com/500x200.jpg/5fa2dd/ffffff"
    },
    model: "FX",
    year: 2003,
    brand: "Infiniti",
    price: 65512,
    features: [
      {
        headline: "Programmer II",
        text: "transform extensible convergence"
      },
      {
        headline: "VP Accounting",
        text: "drive collaborative schemas"
      },
      {
        headline: "Quality Engineer",
        text: "orchestrate global vortals"
      },
      {
        headline: "Software Engineer IV",
        text: "redefine clicks-and-mortar infrastructures"
      },
      {
        headline: "Programmer I",
        text: "incubate dynamic relationships"
      },
      {
        headline: "Web Designer II",
        text: "streamline compelling solutions"
      },
      {
        headline: "Administrative Officer",
        text: "orchestrate dot-com vortals"
      },
      {
        headline: "Programmer Analyst IV",
        text: "seize cross-platform paradigms"
      },
      {
        headline: "Account Coordinator",
        text: "transform ubiquitous architectures"
      },
      {
        headline: "Administrative Officer",
        text: "maximize global vortals"
      }
    ]
  }
];
