using my.application as my from '../db/models/user.model';

service TestService {
  entity Users as projection on my.Users;
}
