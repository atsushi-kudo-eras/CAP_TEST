namespace my.application;

using {
  Country,
  managed,
} from '@sap/cds/common';


entity Users : managed {
  key ID   : UUID;
      name : String;
}

entity RawMaterials : managed {
  key ID   : UUID;
      name : String;
}
