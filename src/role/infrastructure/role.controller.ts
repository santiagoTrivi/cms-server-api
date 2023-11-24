import { Controller, Get } from '@nestjs/common';
import { GetRole } from '@role/application/getRole.useCase';

@Controller('role')
export class RoleController {

    constructor(private readonly getRolesUseCase: GetRole){}


    @Get()
    async getroles() {
        return await this.getRolesUseCase.execute();
    }
}
