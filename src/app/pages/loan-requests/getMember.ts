import { AuthService } from "src/app/services/auth.service";

export class getMember {
   constructor(private authService: AuthService){}

   getFullName(memberId: any){
    return this.authService.fetchMember();
   }
}