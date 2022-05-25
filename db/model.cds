namespace my.application;

using {
  Country,
  managed,
} from '@sap/cds/common';


entity Users : managed {
  key ID   : UUID;
      id   : String;
      name : String;
}
