using my.application as my from '../db/model';

service TestService {
  entity Users        as projection on my.Users;
  entity RawMaterials as projection on my.RawMaterials;
}
